/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react'
import { KTIcon, toAbsoluteUrl } from '../../../../_molekul/helpers'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { getAllPeringkatSiswa } from '../../../api/Request/peringkat.siswa.api'
import { CreatePeringkatType } from '../../../interface/peringkat.interface'
import { getProfileSiswa } from '../../../api/Request/profile.siswa.api'
import { CreateProfileSiswaType } from '../../../interface/profile.siswa.interface'
import { getListAllMateri, getMateriSiswaByUID } from '../../../api/Request/materi.siswa.api'

type Props = {
  className: string,
  title?: string
}

const TablesWidget10: React.FC<Props> = ({ className, title }) => {
  const [uuid, setUuid] = useState<string | undefined>("")
  const auth = getAuth()
  const [listPeringkat, setListPeringkat] = useState<CreatePeringkatType[]>([])
  const [profile, setProfile] = useState<CreateProfileSiswaType>()

  useEffect(() => {
    onAuthStateChanged(auth, e => {
      handleGetProfile(e?.uid)
      setUuid(e?.uid)
    })
  }, [uuid])



  const handleGetProfile = async (uid: string | undefined) => {
    if (uid) {
      const getIdPoin = await getProfileSiswa(uid)
      const la = Object.entries(getIdPoin)
      setProfile(la[0][1])

      // const resProgresMateri = await getListAllMateri()
      // const ha = Object.entries(resProgresMateri)
      // console.log(resProgresMateri);

      if (la[0][1].type.toLowerCase() === "siswa") {
        const res = await getAllPeringkatSiswa();
        const ha = Object.entries(res);
        const sortedData = ha
          .map((e, i) => {
            const ha = Object.entries(e[1]);
            const body: CreatePeringkatType = {
              fullname: ha[0][1].fullname,
              email: ha[0][1].email,
              nomorAbsen: ha[0][1].nomorAbsen,
              poin: ha[0][1].poin,
              image_profile: ha[0][1].image_profile,
              type: ha[0][1].type,
              progressMateri: ha[0][1].progressMateri
            };
            return body;
          })
          .sort((a, b) => b.poin - a.poin) // Mengurutkan secara descending berdasarkan nilai poin
          .slice(0, 6); // Mengambil hanya 5 data dengan nilai poin tertinggi

        setListPeringkat(sortedData);
      } else {
        const res = await getAllPeringkatSiswa();
        const ha = Object.entries(res);
        const sortedData = ha
          .map((e, i) => {
            const ga = Object.entries(e[1]);
            // console.log(ha[i][0]);
            const body: CreatePeringkatType = {
              fullname: ga[0][1].fullname,
              email: ga[0][1].email,
              nomorAbsen: ga[0][1].nomorAbsen,
              poin: ga[0][1].poin,
              image_profile: ga[0][1].image_profile,
              type: ga[0][1].type,
              progressMateri: ga[0][1].progressMateri

            };
            return body;
          })
          .sort((a, b) => b.poin - a.poin) // Mengurutkan secara descending berdasarkan nilai poin

        setListPeringkat(sortedData);
      }
    }
  }

  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bold fs-3 mb-1'>{title}</span>
        </h3>
      </div>
      {/* end::Header */}
      {/* begin::Body */}
      <div className='card-body py-3'>
        {/* begin::Table container */}
        <div className='table-responsive'>
          {/* begin::Table */}
          <table className='table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4'>
            {/* begin::Table head */}

            <thead>
              <tr className='fw-bold text-muted'>
                <th className='min-w-150px'>Nama</th>
                <th className='min-w-140px'>Nomor Absen</th>
                <th className='min-w-120px'>Poin</th>
              </tr>
            </thead>
            {/* end::Table head */}
            {/* begin::Table body */}
            <tbody>
              {
                listPeringkat && listPeringkat.map((e, i) => {
                  return (
                    <>
                      {
                        e.type === "guru" ?
                          <></>
                          :
                          <tr key={i}>
                            {
                              e.type !== "guru" && (
                                <>
                                  <td>
                                    <div className='d-flex align-items-center'>
                                      <div className='symbol symbol-45px me-5'>
                                        <img src={e.image_profile} alt='' />
                                      </div>
                                      <div className='d-flex justify-content-start flex-column'>
                                        <span className='text-dark fw-bold fs-4'>
                                          {e.fullname} <span className='text-primary fw-bold fs-4'>{profile?.email === e.email && profile.type.toLowerCase() === "siswa" ? "(kamu)" : ""}</span>
                                        </span>
                                        <span className='text-muted fw-semibold text-muted d-block fs-5'>
                                          {e.email}
                                        </span>
                                      </div>
                                    </div>
                                  </td>
                                  <td>
                                    <span className='text-dark fw-bold d-block fs-4'>
                                      {e.nomorAbsen}
                                    </span>
                                  </td>
                                  <td className='text-end'>
                                    <div className='d-flex flex-column w-100 me-2'>
                                      <div className='d-flex flex-stack mb-2'>
                                        <span className='text-muted me-2 fs-4 fw-semibold'>{e.poin / 10}</span>
                                      </div>
                                      <div className='progress h-6px w-100'>
                                        <div
                                          className='progress-bar bg-danger'
                                          role='progressbar'
                                          style={{ width: '100%' }}
                                        ></div>
                                      </div>
                                    </div>
                                  </td>
                                </>
                              )
                            }
                          </tr>
                      }
                    </>
                  )
                })
              }

            </tbody>
            {/* end::Table body */}
          </table>
          {/* end::Table */}
        </div>
        {/* end::Table container */}
      </div>
      {/* begin::Body */}
    </div>
  )
}

export { TablesWidget10 }
