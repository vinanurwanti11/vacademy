/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC, useEffect, useState } from 'react';
import { toAbsoluteUrl } from '../../../../_molekul/helpers';
import { useLayout } from '../../../../_molekul/layout/core';
import { usePagination } from '../context/materiProvider';
import { DataMateri, DetailMateriTypeResponse, HasilSoalType, PertanyaanType, materiCase, materiIfElse, materiIfThen, materiNestedIf, materiOperator } from '../../../interface/materi/materi.interface';
import { useLocation, useNavigate } from 'react-router-dom';
import { getDetailMateriSiswaByID, updateFinishModul, updateRangkuman, updateSoal, updateStep } from '../../../api/Request/materi.siswa.api';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useIsMateri } from '../context/isMateriProvider';
import Swal from 'sweetalert2';
import { getDetailPeringkatSiswaByUID, updatePoinByUD } from '../../../api/Request/peringkat.siswa.api';

type Props = {
  setIsLoading: (isLoading: boolean) => void
  rangkuman: string
  setResRangkuman: (resRangkuman: string) => void,
  resRangkuman: string
  hasilSoal: HasilSoalType[]
  setPertanyaan: (pertanyaan: PertanyaanType[]) => void,
  pertanyaan: PertanyaanType[]
}

const Footer: FC<Props> = ({
  setIsLoading,
  rangkuman,
  setResRangkuman,
  resRangkuman,
  hasilSoal,
  pertanyaan,
  setPertanyaan }) => {
  const { classes } = useLayout();
  const [materi, setMateri] = useState<DataMateri[]>(materiOperator)
  const page = usePagination()
  const navigate = useNavigate()
  const [materiParent, setMateriParent] = useState<string>("")
  const [idMateri, setIdMateri] = useState<string>("")
  // @ts-ignore
  const location = useLocation<data>()
  const auth = getAuth()
  const [uuid, setUuid] = useState<string | undefined>("")
  const { setIsMateri } = useIsMateri()
  const [detailMateri, setDataMateri] = useState<DetailMateriTypeResponse>()

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
  }, [uuid, idMateri])

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

  const handleGetDetailMateri = async (uid: string | undefined, id: string | undefined) => {
    setIsLoading(true)
    try {
      if (uid && id) {
        const res = await getDetailMateriSiswaByID(uid, id)
        if (res.status.toLowerCase() !== "selesai") {
          setDataMateri(res)
          page.setPage(res.step)
        } else {
          setDataMateri(res)
          page.setPage(1)
        }
        setIsLoading(false)
      }
    } catch (error) {
      console.error(error);
      setIsLoading(false)
    }
  }

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
              page.setPage(pages)
            }
          }
        })
      }
    })
  }

  const handleWarningRangkuman = () => {
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

  const updatePage = async (pages: number) => {
    if (uuid && idMateri && detailMateri) {
      if (page.currentPage === materi[0].materi.isiMateri.length && pages - page.currentPage === 1) {
        if (detailMateri.status.toLowerCase() === "selesai" && page.currentPage === materi[0].materi.isiMateri.length) {
          navigate('/materi')
        } else {
          setIsLoading(true)
          try {
            const getIdPoin = await getDetailPeringkatSiswaByUID(uuid)
            const la = Object.entries(getIdPoin)
            let point = la[0][1].poin
            hasilSoal.map(e => {
              if (e.hasil) {
                point += 100
              }
            })
            const resUpdatepoin = await updatePoinByUD(uuid, la[0][0], point)
            const resUpdateSoal = await updateSoal(uuid, idMateri, hasilSoal)
            if (resUpdateSoal) {
              const res = await updateFinishModul(uuid, idMateri, "Selesai")
              if (res) {
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
                  title: `Selamat latihan kamu telah terkirim 🎉`,
                  icon: 'success',
                  showCancelButton: true,
                  cancelButtonText: 'Lihat hasil latihan?',
                  confirmButtonText: 'Selesai',
                  reverseButtons: true,
                }).then(async (result) => {
                  if (result.isConfirmed) {
                    navigate('/materi')
                  } else if (result.isDismissed) {
                    handleGetDetailMateri(uuid, idMateri)
                    window.location.reload();
                  }
                })
              }
            }
            setIsLoading(false)
          } catch (error) {
            console.error(error);
            setIsLoading(false)
          }
        }
      } else {
        setIsLoading(true)
        try {
          const res = await getDetailMateriSiswaByID(uuid, idMateri)
          if (res) {
            if (materi[0].materi.isiMateri[page.currentPage - 1].type !== "rangkuman") {
              if (pages - res.step === 1 && materi[0].materi.isiMateri[page.currentPage - 1].type !== "soal") {
                const resUpdateStep = await updateStep(uuid, idMateri, pages)
                if (resUpdateStep) {
                  page.setPage(pages)
                }
              } else if (materi[0].materi.isiMateri[page.currentPage - 1].type !== "soal" && materi[0].materi.isiMateri[pages - 1].type === "rangkuman" || materi[0].materi.isiMateri[pages - 1].type === "materi") {
                page.setPage(pages)
              } else if (materi[0].materi.isiMateri[page.currentPage - 1].type === "soal" && materi[0].materi.isiMateri[pages - 1].type !== "rangkuman" && materi[0].materi.isiMateri[pages - 1].type !== "materi" && res.status.toLowerCase() !== "selesai") {
                if ((materi[0].materi.isiMateri[page.currentPage - 1].judulMateri.toLowerCase() === "latihan 1" && hasilSoal[0] !== undefined) ||
                  (materi[0].materi.isiMateri[page.currentPage - 1].judulMateri.toLowerCase() === "latihan 2" && hasilSoal[1] !== undefined) ||
                  (materi[0].materi.isiMateri[page.currentPage - 1].judulMateri.toLowerCase() === "latihan 3" && hasilSoal[2] !== undefined)
                ) {
                  page.setPage(pages)
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
              } else if (res.status.toLowerCase() === "selesai") {
                page.setPage(pages)
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
            } else if (materi[0].materi.isiMateri[page.currentPage - 1].type === "rangkuman" && pages - res.step < 1) {
              page.setPage(pages)
            } else if (materi[0].materi.isiMateri[page.currentPage - 1].type === "rangkuman" && pages - res.step === 1 && rangkuman !== "" && resRangkuman === "") {
              const resUpdateRangkuman = await updateRangkuman(uuid, idMateri, rangkuman)
              if (rangkuman) {
                handleUpdateRangkuman(resUpdateRangkuman.rangkuman, pages)
              }
            } else if (materi[0].materi.isiMateri[page.currentPage - 1].type === "rangkuman" && pages - res.step === 1 && rangkuman !== "" || resRangkuman !== "") {
              if (materi[0].materi.isiMateri[pages - 1].type === "soal") {
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
                    const resUpdateStep = await updateStep(uuid, idMateri, pages)
                    if (resUpdateStep) {
                      page.setPage(pages)
                    }
                  }
                })
              }
            } else {
              handleWarningRangkuman()
            }
          }
          setIsLoading(false)
        } catch (error) {
          console.error(error);
          setIsLoading(false)
        }
      }
    }
  }

  return (
    <div className='footer py-4 d-flex shadow-sm pt-7 pb-7 position-fixed rounded'
      style={{ position: 'sticky', bottom: 0, backgroundColor: 'white', right: '0', left: '0' }}
    >
      {/* begin::Container */}
      <div className={`${classes.footerContainer} d-flex flex-column flex-md-row align-items-center justify-content-between`}>
        {
          page.currentPage !== 1 ?

            <div className='hover-overlay' style={{ cursor: 'pointer' }} onClick={() => updatePage(page.currentPage - 1)}>
              <img
                alt='Logo'
                src={toAbsoluteUrl('/media/icons/duotune/general/ic_prev.svg')}
                className='logo-default h-25px mb-2'
              />
              <span className='text-gray-500' style={{ fontSize: '16px', fontWeight: 'bold' }}>{materi[0].materi.isiMateri[page.currentPage - 2].judulMateri}</span>
            </div> : <div className='hover-overlay' style={{ cursor: 'pointer' }}>
            </div>
        }

        {/* <div>
          <span style={{ fontSize: '16px', fontWeight: 'bold' }}>{materi[0].materi.titleModul}</span>
        </div> */}

        {
          page.currentPage !== materi[0].materi.isiMateri.length ?
            <div className='hover-overlay' style={{ cursor: 'pointer' }} onClick={() => updatePage(page.currentPage + 1)}>
              <span className='text-primary' style={{ fontSize: '16px', fontWeight: 'bold' }}>{materi[0].materi.isiMateri[page.currentPage].judulMateri}</span>
              <img
                alt='Logo'
                src={toAbsoluteUrl('/media/icons/duotune/general/ic_next.svg')}
                className='logo-default h-25px mb-2'
              />
            </div> :
            <div className='hover-overlay' style={{ cursor: 'pointer' }} onClick={() => updatePage(page.currentPage + 1)}>
              <span className='text-primary' style={{ fontSize: '16px', fontWeight: 'bold' }}>Selesai</span>
              <img
                alt='Logo'
                src={toAbsoluteUrl('/media/icons/duotune/general/ic_next.svg')}
                className='logo-default h-25px mb-2'
              />
            </div>
        }
      </div>
      {/* end::Container */}
    </div>
  );
};

export { Footer };
