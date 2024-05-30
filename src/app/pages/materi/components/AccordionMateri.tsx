/* eslint-disable jsx-a11y/anchor-is-valid */
import clsx from 'clsx'
import React, { useEffect, useState } from 'react'
import { toAbsoluteUrl } from '../../../../_molekul/helpers'
import { DataMateri, DetailMateriTypeResponse, HasilSoalType, PertanyaanType, materiCase, materiIfElse, materiIfThen, materiNestedIf, materiOperator } from '../../../interface/materi/materi.interface'
import { usePagination } from '../context/materiProvider'
import { useLocation } from 'react-router-dom'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { getDetailMateriSiswaByID, updateRangkuman, updateStep } from '../../../api/Request/materi.siswa.api'
import { useIsMateri } from '../context/isMateriProvider'
import Swal from 'sweetalert2'

type Props = {
  className: string,
  setIsLoading: (isLoading: boolean) => void,
  isLoading: boolean
  rangkuman: string
  setResRangkuman: (resRangkuman: string) => void,
  resRangkuman: string,
  hasilSoal: HasilSoalType[]
  setPertanyaan: (pertanyaan: PertanyaanType[]) => void,
  pertanyaan: PertanyaanType[]
}

const AccordionMateri: React.FC<Props> = ({
  className,
  setIsLoading,
  isLoading,
  rangkuman,
  setResRangkuman,
  resRangkuman,
  hasilSoal,
  setPertanyaan,
  pertanyaan
}) => {
  const [materi, setMateri] = useState<DataMateri[]>(materiOperator)
  const { currentPage, setPage } = usePagination()
  const [materiParent, setMateriParent] = useState<string>("")
  const [idMateri, setIdMateri] = useState<string>("")
  const [detailMateri, setDetailMateri] = useState<DetailMateriTypeResponse>()
  // @ts-ignore
  const location = useLocation<data>()
  const auth = getAuth()
  const [uuid, setUuid] = useState<string | undefined>("")
  const [steps, setSteps] = useState<number>(0)
  const { setIsMateri } = useIsMateri()

  useEffect(() => {
    //@ts-ignore
    setIdMateri(location.state.idMateri)
    if (idMateri) {
      onAuthStateChanged(auth, e => {
        handleGetDetailMateri(e?.uid, idMateri)
        setUuid(e?.uid)
        setIsMateri(true)
      })
    }
  }, [uuid, idMateri, currentPage])

  useEffect(() => {
    // @ts-ignore
    setMateriParent(location.state.materiParent)
    if (materiParent) {
      if (materiParent === "m-k-a") {
        setMateri(materiOperator)
      } else if (materiParent === "m-k-b") {
        setMateri(materiIfThen)
      } else if (materiParent === "m-k-c") {
        setMateri(materiIfElse)
      } else if (materiParent === "m-k-d") {
        setMateri(materiCase)
      } else if (materiParent === "m-k-e") {
        setMateri(materiNestedIf)
      }
    }
  }, [materiParent, materi])

  const handleUpdateRangkuman = (rangkuman: string, pages: number) => {
    setResRangkuman(rangkuman)
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
      title: `Selamat rangkuman kamu telah terkirim 🎉`,
      icon: 'success',
      showCancelButton: true,
      cancelButtonText: 'Mau baca materinya dulu',
      confirmButtonText: 'Lanjut buat latihan?',
      reverseButtons: true,
    }).then(async (result) => {
      if (result.isConfirmed) {
        const title = `Ada yang mau lewat dulu nih, kalau kalian masuk ke sesi latihan maka kalian tidak akan bisa kembali ke modul materi, apakah sudah siap?`
        swalWithBootstrapButtons.fire({
          title: `Perhatian🫵`,
          icon: 'warning',
          showCancelButton: true,
          html: `<p style="text-align:center'; color:'gray-900'">${title}</p>`,
          cancelButtonText: 'Belum siap 😵',
          confirmButtonText: 'Siap dong! 💪',
          reverseButtons: true,
        }).then(async (result) => {
          if (result.isConfirmed && uuid) {
            const resUpdateStep = await updateStep(uuid, idMateri, pages)
            if (resUpdateStep) {
              setPage(pages)
            }
          }
        })
      }
    })
  }

  const updatePage = async (page: number) => {
    if (!page || currentPage === page) {
      return
    }
    try {
      setIsLoading(true)
      if (uuid && idMateri) {
        const res = await getDetailMateriSiswaByID(uuid, idMateri)
        if (res) {
          if (materi[0].materi.isiMateri[currentPage - 1].type !== "rangkuman") {
            if (page - res.step === 1 && materi[0].materi.isiMateri[currentPage - 1].type !== "soal") {
              const resUpdateStep = await updateStep(uuid, idMateri, page)
              if (resUpdateStep) {
                setDetailMateri(res)
                setPage(page)
              }
            } else if (page - res.step > 1) {
              const swalSuccess = Swal.mixin({
                customClass: {
                  confirmButton: 'btn btn-danger',
                },
                buttonsStyling: false,
              })
              swalSuccess
                .fire({
                  icon: 'warning',
                  confirmButtonText: 'Dismiss',
                  html: `<h3 style="text-align:center; font-weight:bold; color:gray;'">Eits gaboleh loncat ya🤪</h3>`,
                  reverseButtons: true,
                })
            } else if (page - res.step < 1 && materi[0].materi.isiMateri[currentPage - 1].type !== "soal") {
              setPage(page)
              setSteps(res.step)
            } else if (materi[0].materi.isiMateri[currentPage - 1].type === "soal" && materi[0].materi.isiMateri[page - 1].type !== "materi" && materi[0].materi.isiMateri[page - 1].type !== "rangkuman") {
              if (page - res.step === 1) {
                if ((materi[0].materi.isiMateri[currentPage - 1].judulMateri.toLowerCase() === "latihan 1" && hasilSoal[0] !== undefined) ||
                  (materi[0].materi.isiMateri[currentPage - 1].judulMateri.toLowerCase() === "latihan 2" && hasilSoal[1] !== undefined) ||
                  (materi[0].materi.isiMateri[currentPage - 1].judulMateri.toLowerCase() === "latihan 3" && hasilSoal[2] !== undefined)
                ) {
                  const resUpdateStep = await updateStep(uuid, idMateri, page)
                  if (resUpdateStep) {
                    setDetailMateri(res)
                    setPage(page)
                  }
                } else {
                  const swalSuccess = Swal.mixin({
                    customClass: {
                      confirmButton: 'btn btn-danger',
                    },
                    buttonsStyling: false,
                  })
                  swalSuccess
                    .fire({
                      icon: 'warning',
                      confirmButtonText: 'Dismiss',
                      html: `<h3 style="text-align:center; font-weight:bold; color:gray;'">Latihannya jangan lupa diisi dulu ya 🤗</h3>`,
                      reverseButtons: true,
                    })
                }
              } else if (page - res.step < 1) {
                setPage(page)
                setSteps(res.step)
              }

            } else if (res.status.toLowerCase() === "selesai") {
              setPage(page)
            } else {
              const swalSuccess = Swal.mixin({
                customClass: {
                  confirmButton: 'btn btn-danger',
                },
                buttonsStyling: false,
              })
              swalSuccess
                .fire({
                  icon: 'warning',
                  confirmButtonText: 'Dismiss',
                  html: `<h3 style="text-align:center; font-weight:bold; color:gray;'">Mohon maaf modul materi sementara di tutup dulu ya 🤗</h3>`,
                  reverseButtons: true,
                })
            }
          } else if (materi[0].materi.isiMateri[currentPage - 1].type === "rangkuman" && page - res.step < 1) {
            setPage(page)
            setSteps(res.step)
          } else if (materi[0].materi.isiMateri[currentPage - 1].type === "rangkuman" && page - res.step === 1 && rangkuman !== "" && resRangkuman === "") {
            try {
              const resUpdateRangkuman = await updateRangkuman(uuid, idMateri, rangkuman)
              if (resUpdateRangkuman) {
                handleUpdateRangkuman(resUpdateRangkuman.rangkuman, page)
              }
            } catch (error) {
              console.error(error);
            }

          } else if (materi[0].materi.isiMateri[currentPage - 1].type === "rangkuman" && page - res.step === 1 && rangkuman !== "" || resRangkuman !== "") {
            try {
              if (materi[0].materi.isiMateri[page - 1].type === "soal") {
                const swalWithBootstrapButtons = Swal.mixin({
                  customClass: {
                    confirmButton: 'btn btn-success',
                    cancelButton: 'btn btn-white'
                  },
                  buttonsStyling: false
                })
                const title = `Ada yang mau lewat dulu nih, kalau kalian masuk ke sesi latihan maka kalian tidak akan bisa kembali ke modul materi, apakah sudah siap?`
                swalWithBootstrapButtons.fire({
                  title: `Perhatian🫵`,
                  icon: 'warning',
                  showCancelButton: true,
                  html: `<p style="text-align:center'; color:'gray-900'">${title}</p>`,
                  cancelButtonText: 'Belum siap 😵',
                  confirmButtonText: 'Siap dong! 💪',
                  reverseButtons: true,
                }).then(async (result) => {
                  if (result.isConfirmed && uuid) {
                    const resUpdateStep = await updateStep(uuid, idMateri, page)
                    if (resUpdateStep) {
                      setPage(page)
                    }
                  }
                })
              }
            } catch (error) {
              console.error(error);
            }

          } else if (materi[0].materi.isiMateri[currentPage - 1].type === "rangkuman" && page - res.step > 1) {
            const swalSuccess = Swal.mixin({
              customClass: {
                confirmButton: 'btn btn-danger',
              },
              buttonsStyling: false,
            })
            swalSuccess
              .fire({
                icon: 'warning',
                confirmButtonText: 'Dismiss',
                html: `<h3 style="text-align:center; font-weight:bold; color:gray;'">Eits gaboleh loncat ya🤪</h3>`,
                reverseButtons: true,
              })
          } else {
            const swalSuccess = Swal.mixin({
              customClass: {
                confirmButton: 'btn btn-danger',
              },
              buttonsStyling: false,
            })
            swalSuccess
              .fire({
                icon: 'warning',
                confirmButtonText: 'Dismiss',
                html: `<h3 style="text-align:center; font-weight:bold; color:gray;'">Silahkan masukan rangkumannya dulu yaa!🫣</h3>`,
                reverseButtons: true,
              })
          }
        }
        setIsLoading(false)
      }
    } catch (error) {
      console.error(error);
      setIsLoading(false)
    }

  }

  const handleGetDetailMateri = async (uid: string | undefined, id: string | undefined) => {
    setIsLoading(true)
    try {
      if (uid && id) {
        const res = await getDetailMateriSiswaByID(uid, id)
        if (res) {
          setDetailMateri(res)
          setSteps(res.step)
        }
        setIsLoading(false)
      }
    } catch (error) {
      console.error(error);
      setIsLoading(false)
    }
  }


  return (
    <div className={clsx('', className)}>
      {/* begin::Body */}
      <div className='card-body'>
        <div className="accordion border-0" style={{ marginTop: '-50px' }} id="accordionPanelsStayOpenExample">
          {
            materi.map((e, i) => {
              return (
                <div key={i} className="accordion-item">
                  <h2 className="accordion-header" id={`panelsStayOpen-heading${i}`}>
                    <button className="accordion-button collapsed fw-bold fs-4" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse1" aria-expanded="true" aria-controls="panelsStayOpen-collapse1">
                      {e.materi.titleModul}
                    </button>
                  </h2>

                  {
                    e.materi.isiMateri.map((_listMareri, i) => {
                      return (
                        <>
                          {
                            < div key={i} id="panelsStayOpen-collapse1" className="accordion-collapse collapse ms-7 show" aria-labelledby="panelsStayOpen-heading1">
                              {
                                steps - 1 > i || currentPage - 1 > i || detailMateri && detailMateri.status.toLocaleLowerCase() === "selesai" ?
                                  <div className="ms-2 mb-3" style={{ cursor: 'pointer' }}
                                    onClick={() => updatePage(i + 1)}
                                  >
                                    <img
                                      alt='Logo'
                                      src={toAbsoluteUrl('/media/icons/duotune/general/ic_check_done.svg')}
                                      className='logo-default h-25px me-2 mb-1'
                                    />
                                    <span className={`text-hover-primary ${currentPage - 1 === i ? "text-primary" : "text-gray-900"} fw-bold`}>{_listMareri.judulMateri}</span>
                                  </div>
                                  :
                                  <div className="ms-2 mb-3" style={{ cursor: 'pointer' }}
                                    onClick={() => updatePage(i + 1)}
                                  >
                                    <img
                                      alt='Logo'
                                      src={toAbsoluteUrl('/media/icons/duotune/general/ic_check.svg')}
                                      className='logo-default h-25px me-2 mb-1'
                                    />
                                    <span className={`text-hover-primary ${currentPage - 1 === i ? "text-primary fw-bold" : ""}`}>{_listMareri.judulMateri}</span>
                                  </div>

                              }
                            </div >
                          }
                        </>
                      )
                    })
                  }
                </div>
              )
            })
          }
        </div>
      </div>
      {/* end::Body */}
    </div >
  )
}

export { AccordionMateri }
