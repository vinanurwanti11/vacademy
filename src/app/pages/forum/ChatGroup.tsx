/* eslint-disable jsx-a11y/anchor-is-valid */
import { getAuth, onAuthStateChanged, reload } from 'firebase/auth'
import React, { FC, useEffect, useState } from 'react'
import { deletePertanyaan, getPertanyaan, isEvaluasi, sendPertanyaanToRoom } from '../../api/Request/materi.siswa.api'
import { PertanyaanResponse, PertanyaanType, PertanyaanTypeResponse } from '../../interface/materi/materi.interface'
import { useLocation, useNavigate } from 'react-router-dom'
import Lottie from 'lottie-react'
import animLoading from '../../../_molekul/assets/loading/animLoading.json'
import { toAbsoluteUrl } from '../../../_molekul/helpers'
import Swal from 'sweetalert2'
import { getProfileSiswa } from '../../api/Request/profile.siswa.api'
import { CreateProfileSiswaType } from '../../interface/profile.siswa.interface'

const ChatGroup: FC = () => {
  const auth = getAuth()
  const navigate = useNavigate()
  const [uuid, setUuid] = useState<string>()
  const [profile, setProfile] = useState<CreateProfileSiswaType>()
  const [pertanyaan, setPertanyaan] = useState<PertanyaanResponse[]>([])
  // @ts-ignore
  const location = useLocation<data>()
  const [page, setPage] = useState<string>("")
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    setLoading(true)
    // @ts-ignore
    setPage(location.state.page)
    handleGetPertanyaan(page)
    onAuthStateChanged(auth, e => {
      setUuid(e?.uid)
      handleGetProfile(e?.uid)
    })
  }, [pertanyaan, page])


  const handleGetPertanyaan = async (pages: string, reload?: boolean) => {
    setLoading(true)
    try {
      if (pages) {
        const resGetPertanyaan = await getPertanyaan(page)
        const output = Object.entries(resGetPertanyaan)
        output.map((e, i) => {
          const body: PertanyaanResponse = {
            id: e[0],
            pertanyaan: e[1].pertanyaan
          }
          handleAddPertanyaan(body)
          if (i + 1 === output.length) {
            setLoading(false)
          } else if (i + 1 === output.length && reload) {
            setLoading(false)
            window.location.reload();
            return true
          }
        });
      }
    } catch (error) {
      console.error(error);
      setLoading(false)
    }
  }

  const handleAddPertanyaan = (key: PertanyaanResponse) => {
    if (key) {
      const found = pertanyaan.find((obj) => {
        return obj.pertanyaan.pertanyaan === key.pertanyaan.pertanyaan
      })
      if (!found) {
        pertanyaan.push(key)
      }
    }
  }

  const handleGetProfile = async (uid: string | undefined) => {
    if (uid) {
      const getIdPoin = await getProfileSiswa(uid)
      const la = Object.entries(getIdPoin)
      setProfile(la[0][1])
    }
  }

  const handleDeletePertanyaan = (id: string) => {
    if (id) {
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-white'
        },
        buttonsStyling: false
      })
      const swalSuccess = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
        },
        buttonsStyling: false
      })
      swalWithBootstrapButtons.fire({
        title: `Yakin untuk hapus catatan?`,
        icon: 'warning',
        showCancelButton: true,
        cancelButtonText: 'Belum deh',
        confirmButtonText: 'Yakin dong!',
        reverseButtons: true,
      }).then(async (result) => {
        if (result.isConfirmed && page) {
          const resDelete = await deletePertanyaan(page, id)
          const resGetPertanyaan = await getPertanyaan(page)
          if (resGetPertanyaan !== null) {
            const output = Object.entries(resGetPertanyaan)
            output.map((e, i) => {
              const body: PertanyaanResponse = {
                id: e[0],
                pertanyaan: e[1].pertanyaan
              }
              handleAddPertanyaan(body)
              if (i + 1 === output.length && resDelete === null) {
                swalSuccess.fire({
                  title: `Catatan Berhasil Dihapus`,
                  icon: 'success',
                  confirmButtonText: 'Dismiss',
                }).then(async (result) => {
                  if (result.dismiss || result.isConfirmed) {
                    window.location.reload()
                  }
                })
              }
            });
          } else {
            swalSuccess.fire({
              title: `Pertanyaan Berhasil Terjawab, Kalian Keren 🏆`,
              icon: 'success',
              confirmButtonText: 'Dismiss',
            }).then(async (result) => {
              if (result.dismiss || result.isConfirmed) {
                window.location.reload()
              }
            })
          }
        }
      })
    }
  }


  const handleSendToRoomPertanyaan = async (pertanyaan: PertanyaanType, id: string) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-white'
      },
      buttonsStyling: false
    })
    const swalSuccess = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
      },
      buttonsStyling: false
    })
    swalWithBootstrapButtons.fire({
      title: `Kirimkan Pertanyaan Ke Room Utama?`,
      icon: 'info',
      showCancelButton: true,
      cancelButtonText: 'Batalkan',
      confirmButtonText: 'Kirim!',
      reverseButtons: true,
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          if (pertanyaan) {
            const resSendPertanyaan = await sendPertanyaanToRoom("ajarkoding", pertanyaan)
            if (resSendPertanyaan) {
              const resDelete = await deletePertanyaan(page, id)
              const resGetPertanyaan = await getPertanyaan(page)
              if (resGetPertanyaan !== null) {
                const output = Object.entries(resGetPertanyaan)
                output.map((e, i) => {
                  const body: PertanyaanResponse = {
                    id: e[0],
                    pertanyaan: e[1].pertanyaan
                  }
                  handleAddPertanyaan(body)
                  if (i + 1 === output.length && resDelete === null) {
                    swalSuccess.fire({
                      title: `Pertanyaan Berhasil Dikirim`,
                      icon: 'success',
                      confirmButtonText: 'Dismiss',
                    }).then(async (result) => {
                      if (result.dismiss || result.isConfirmed) {
                        window.location.reload()
                      }
                    })
                  }
                });
              } else {
                swalSuccess.fire({
                  title: `Pertanyaan Berhasil Dikirim`,
                  icon: 'success',
                  confirmButtonText: 'Dismiss',
                }).then(async (result) => {
                  if (result.dismiss || result.isConfirmed) {
                    window.location.reload()
                  }
                })
              }
            }
          }
        } catch (error) {
          console.error(error);
        }
      }
    })
  }

  return (
    <>
      {
        loading ? (
          <div className='d-flex'
            style={{ width: '100%', height: '100%', justifyContent: 'center', justifyItems: 'center' }}
          >
            <Lottie style={{ width: '55%', height: '55%' }} animationData={animLoading} />
          </div>
        ) : (
          <div className='d-flex flex-column flex-lg-row rounded pt-2' style={{ justifyContent: 'center', alignContent: 'center' }}>
            {
              page !== "ajarkoding" ?
                <div className="card col-xl-4 rounded shadow-sm mb-1 me-5"
                // style={{ width: '25%', height: '100%', cursor: 'pointer' }}
                >
                  <span className='fw-bold ms-7 mt-2' style={{ fontSize: '20px' }}> Selamat Datang di Room {page === "ajarkoding" ? "Utama" : "Kelompok"} :</span>
                  <div className="d-flex flex-column card-body ms-1 mt-1 overflow-auto" style={{ maxHeight: '580px', maxWidth: '100%', justifyContent: 'space-between', alignItems: 'center' }}>
                    {
                      pertanyaan.length !== 0 ? pertanyaan.map((e, i) => {
                        return (
                          <div className='border border-secondary border-1 rounded p-2 mb-3' key={i} style={{ width: "100%" }}>
                            <div className='d-flex flex-lg-row' style={{ justifyContent: 'space-between', marginBottom: '-20px' }}>
                              <div>
                                <span className='text-gray-800 fw-bold' style={{ fontSize: '18px' }}>Catatan ({page === "ajarkoding" ? `Kelompok ${e.pertanyaan.fullname}` : e.pertanyaan.fullname})</span>
                              </div>
                              {
                                page !== "ajarkoding" ?
                                  <div>
                                    {/* <img
                                  alt='Logo'
                                  src={toAbsoluteUrl('/media/icons/duotune/general/ic_checklist.svg')}
                                  className='logo-default h-15px mb-2 me-3 cursor-pointer'
                                  onClick={() => handleDeletePertanyaan(e.id)}
                                /> */}
                                    <img
                                      alt='Logo'
                                      src={toAbsoluteUrl('/media/icons/duotune/general/icon_x.svg')}
                                      className='logo-default h-15px mb-2 cursor-pointer'
                                      onClick={() => {
                                        const body: PertanyaanType = {
                                          fullname: page,
                                          pertanyaan: e.pertanyaan.pertanyaan
                                        }
                                        // handleSendToRoomPertanyaan(body, e.id)
                                        handleDeletePertanyaan(e.id)
                                      }}
                                    />
                                  </div>
                                  :
                                  <></>
                              }

                            </div>
                            <br />
                            <br />
                            <div style={{ maxHeight: "150px", overflowY: 'auto' }}>
                              <span style={{ fontSize: '16px', fontFamily: 'monospace' }} className='text-dark'>{e.pertanyaan.pertanyaan}</span>
                            </div>
                          </div>
                        )
                      }) :
                        <div className='border border-secondary border-1 rounded p-5 mb-3' style={{ width: "100%" }}>
                          <span style={{ fontSize: '20px' }} className='text-dark'>Tidak ada catatan!</span>
                        </div>
                    }
                    {
                      page !== "ajarkoding" ?
                        <>
                          {
                            profile?.type.toLowerCase() === "siswa" ?
                              <div
                                className='d-flex border border-secondary border-1 rounded p-2'
                                style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: '#4584AD', cursor: 'pointer', width: 250, marginBottom: -20 }}
                                onClick={() => navigate('/evaluasi/lkpd', { state: { page: "r.0e7760b9b82d6338a9bf3c774f56384f", ke: '2' } })}
                              >
                                <span style={{ fontSize: '16px', alignSelf: 'center' }} className='text-white fw-bold'>Masukkan Catatan</span>
                              </div>
                              :
                              <div
                                className='d-flex border border-secondary border-1 rounded p-2'
                                style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: '#4584AD', cursor: 'pointer', width: 250, marginBottom: -20 }}
                                onClick={() => navigate("/hasil/evaluasi", { state: { ke: "1", type: "lkpd" } })}
                              >
                                <span style={{ fontSize: '16px', alignSelf: 'center' }} className='text-white fw-bold'>Lihat Catatan Siswa</span>
                              </div>
                          }
                        </>
                        :
                        null
                    }

                  </div>
                </div>
                :
                null
            }

            <div className={`card ${page === "ajarkoding" ? "col-xl-12" : "col-xl-8"} rounded shadow-sm p-2`}
            // style={{ width: '25%', height: '180px', cursor: 'pointer' }}
            >
              <iframe width="100%" height="620" src={`https://dzik.my.id:9001/p/${page === "ajarkoding" ? `${page}` : `kel${page}`}`} title="Forum Diskusi" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; camera https://dzik.my.id:9001; microphone https://dzik.my.id:9001" allowFullScreen></iframe>
            </div>
          </div >

        )
      }
    </>

  )
}

export default ChatGroup
