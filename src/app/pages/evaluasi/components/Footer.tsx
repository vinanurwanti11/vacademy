/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC, useEffect, useState } from 'react';
import { toAbsoluteUrl } from '../../../../_molekul/helpers';
import { useLayout } from '../../../../_molekul/layout/core';
import { usePagination } from '../../materi/context/materiProvider';
import { DataMateri, soalPretest } from '../../../interface/evaluasi/pretest.interface';
import { soalPosttest } from '../../../interface/evaluasi/posttest.interface';
import { soalLogic } from '../../../interface/evaluasi/logical.interface';
import { penilaianMedia } from '../../../interface/evaluasi/media.interface';
import { useLocation, useNavigate } from 'react-router-dom';
import { BodySendEvaluasi, HasilSoalType } from '../../../interface/materi/materi.interface';
import Swal from 'sweetalert2';
import { sendEvaluasi } from '../../../api/Request/evaluasi.siswa.api';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

type Props = {
  hasilSoal: HasilSoalType[]
  setHasilSoal: (hasilSoal: HasilSoalType[]) => void,
  finalHasilSoal: HasilSoalType[]
  setFinalHasilSoal: (setFinalHasilSoal: HasilSoalType[]) => void,
}

const Footer: FC<Props> = ({
  hasilSoal,
  finalHasilSoal
}) => {
  const { classes } = useLayout();
  const page = usePagination()
  const navigate = useNavigate()
  const [materi, setMateri] = useState<DataMateri[]>(soalPretest)
  const [materiParent, setMateriParent] = useState<string>("")
  // @ts-ignore
  const location = useLocation<data>()
  const [uuid, setUuid] = useState<string | undefined>("")
  const auth = getAuth()

  useEffect(() => {
    onAuthStateChanged(auth, e => {
      setUuid(e?.uid)
    })
  }, [uuid])

  useEffect(() => {
    // @ts-ignore
    setMateriParent(location.state.materiParent)
    if (materiParent) {
      if (materiParent === "pretest") {
        setMateri(soalPretest)
      } else if (materiParent === "posttest") {
        setMateri(soalPosttest)
      } else if (materiParent === "preLogic") {
        setMateri(soalLogic)
      } else if (materiParent === "postLogic") {
        setMateri(soalLogic)
      } else if (materiParent === "penilaianMedia") {
        setMateri(penilaianMedia)
      }
    }
  }, [materiParent, materi])

  const updatePage = (pages: number) => {
    // if (pages > page.currentPage && finalHasilSoal.length === 0) {
    //   if (hasilSoal.length >= page.currentPage && page.currentPage !== materi[0].materi.isiMateri.length) {
    page.setPage(pages)
    //   } else if (hasilSoal.length === materi[0].materi.isiMateri.length) {
    //     const swalWithBootstrapButtons = Swal.mixin({
    //       customClass: {
    //         confirmButton: 'btn btn-success',
    //         cancelButton: 'btn btn-white'
    //       },
    //       buttonsStyling: false
    //     })
    //     const swalSuccess = Swal.mixin({
    //       customClass: {
    //         confirmButton: 'btn btn-success',
    //       },
    //       buttonsStyling: false
    //     })
    //     swalWithBootstrapButtons.fire({
    //       title: `Kirimkan Jawaban?`,
    //       icon: 'info',
    //       showCancelButton: true,
    //       cancelButtonText: 'Batalkan',
    //       confirmButtonText: 'Kirim!',
    //       reverseButtons: true,
    //     }).then(async (result) => {
    //       if (result.isConfirmed) {
    //         try {
    //           if (uuid) {
    //             let point = 0
    //             hasilSoal.map(e => {
    //               if (e.hasil) {
    //                 point++
    //               }
    //             })
    //             const body: BodySendEvaluasi = {
    //               hasilSoal: hasilSoal,
    //               poin: point
    //             }
    //             const resSendEvaluasi = await sendEvaluasi(materiParent, uuid, body)
    //             if (resSendEvaluasi) {
    //               swalSuccess.fire({
    //                 title: `Jawaban Berhasil Dikirim`,
    //                 icon: 'success',
    //                 confirmButtonText: 'Dismiss',
    //               }).then(async (result) => {
    //                 if (result.isConfirmed || result.dismiss) {
    //                   navigate('/evaluasi')
    //                 }
    //               })
    //             }
    //           }
    //         } catch (error) {
    //           console.error(error);
    //         }
    //       }
    //     })
    //   } else {
    //     const swalSuccess = Swal.mixin({
    //       customClass: {
    //         confirmButton: 'btn btn-danger',
    //       },
    //       buttonsStyling: false,
    //     })
    //     swalSuccess
    //       .fire({
    //         icon: 'warning',
    //         confirmButtonText: 'Dismiss',
    //         html: `<h3 style="text-align:center; font-weight:bold; color:gray;'">Latihannya jangan lupa diisi dulu ya 🤗</h3>`,
    //         reverseButtons: true,
    //       })
    //   }
    // } else {
    //   if (pages <= materi[0].materi.isiMateri.length) {
    //     page.setPage(pages)
    //   } else if (pages > materi[0].materi.isiMateri.length && finalHasilSoal.length !== 0) {
    //     navigate('/evaluasi')
    //   }
    // }
  }


  return (
    <div className='footer py-4 d-flex shadow-sm pt-7 pb-7 position-fixed rounded'
      style={{ position: 'sticky', bottom: 0, backgroundColor: 'white', right: '0', left: '0' }}
    >
      {/* begin::Container */}
      <div className={`${classes.footerContainer} d-flex flex-column flex-md-row align-items-center ${page.currentPage === 1 ? "justify-content-end" : "justify-content-between"}`}>
        {
          page.currentPage !== 1 ?
            <div className='hover-overlay' style={{ cursor: 'pointer' }} onClick={() => updatePage(page.currentPage - 1)}>
              <img
                alt='Logo'
                src={toAbsoluteUrl('/media/icons/duotune/general/ic_prev.svg')}
                className='logo-default h-25px mb-2'
              />
              <span className='text-gray-500' style={{ fontSize: '16px', fontWeight: 'bold' }}>Sebelumnya</span>
            </div>
            :
            <></>
        }
        {/* <div>
          <span style={{ fontSize: '16px', fontWeight: 'bold' }}>Konsep Algoritma & Pemrograman Dasar</span>
        </div> */}
        {
          page.currentPage !== materi[0].materi.isiMateri.length ?
            <div className='hover-overlay' style={{ cursor: 'pointer' }} onClick={() => updatePage(page.currentPage + 1)}>
              <span className='text-primary' style={{ fontSize: '16px', fontWeight: 'bold' }}>Selanjutnya</span>
              <img
                alt='Logo'
                src={toAbsoluteUrl('/media/icons/duotune/general/ic_next.svg')}
                className='logo-default h-25px mb-2'
              />
            </div> :
            <div className='hover-overlay' style={{ cursor: 'pointer' }} onClick={() => updatePage(page.currentPage + 1)}>
              <span className='text-primary' style={{ fontSize: '16px', fontWeight: 'bold' }}>{finalHasilSoal.length !== 0 ? "Ke Halaman Evaluasi" : "Kirim Jawaban"}</span>
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

