/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react'
import { KTIcon, toAbsoluteUrl } from '../../../_molekul/helpers'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { getAllPeringkatSiswa } from '../../api/Request/peringkat.siswa.api'
import { CreatePeringkatType } from '../../interface/peringkat.interface'
import { getAllSiswa, getProfileSiswa } from '../../api/Request/profile.siswa.api'
import clsx from 'clsx'
import { CreateProfileSiswaType, ProfileSiswaTypeResponse } from '../../interface/profile.siswa.interface'
import { getAbsenSiswaForGuru } from '../../api/Request/absen.siswa.api'
import { AbsenType } from '../../interface/absen.interface'

type Props = {
  className: string,
  title?: string
}

const AbsensiSiswa: React.FC<Props> = ({ className, title }) => {
  const [uuid, setUuid] = useState<string | undefined>("")
  const auth = getAuth()
  const [listPeringkat, setListPeringkat] = useState<CreateProfileSiswaType[]>([])
  const [imageProfile, setImageProfile] = useState<string>("")
  const [listSiswa, setListSiswa] = useState<any[]>([])
  const [listAbsenSiswa, setListAbsenSiswa] = useState<AbsenType>()

  useEffect(() => {
    onAuthStateChanged(auth, e => {
      handleGetPeringkat()
      handleGetProfile(e?.uid)
      setUuid(e?.uid)
      handleGetAbsenSiswa()
    })
  }, [uuid])

  const handleGetProfile = async (uid: string | undefined) => {
    if (uid) {
      const getIdPoin = await getProfileSiswa(uid)
      const la = Object.entries(getIdPoin)
      setImageProfile(la[0][1].imageProfile)
    }
  }

  const handleGetAbsenSiswa = async () => {
    const resListAbsenSiswa = await getAbsenSiswaForGuru()
    
  }

  const handleGetPeringkat = async () => {
    try {
      const res = await getAllSiswa()
      const la = Object.entries(res)

      setListSiswa(la)

      la.map((e) => {
        const ha = Object.entries(e[1])
        const body: CreateProfileSiswaType = {
          name: ha[0][1].name,
          nomor_absen: ha[0][1].nomor_absen,
          type: ha[0][1].type,
          kelompok: ha[0][1].kelompok,
          email: ha[0][1].email,
          imageProfile: ha[0][1].imageProfile
        }
        setListMateri(body)
      })
    } catch (error) {
      console.error(error);
    }
  }

  const setListMateri = (list: CreateProfileSiswaType) => {
    const found = listPeringkat.find((obj) => {
      return obj.name === list.name
    })
    if (!found) {
      listPeringkat.push(list)
    }
  }

  const handleAbsen = (uid: string, absen: string) => {
    console.log('====================================');
    console.log(uid, absen);
    console.log('====================================');

    console.log('====================================');
    console.log(listSiswa);
    console.log('====================================');
  }

  return (
    <>
      <h1 className='mb-10' style={{ fontSize: '30px' }}>Absensi Siswa</h1>
      <div className={`card card-xxl-stretch mb-5 mb-xl-8 shadow-sm ${className}`}>
        {/* begin::Body */}
        <div className='card-body'>
          {/* begin::Table container */}
          <div className='table-responsive'>
            {/* begin::Table */}
            <table className='table table-row-dashed table-row-gray-300 align-middle gs-0'>
              {/* begin::Table head */}
              <thead>
                <tr className='fw-bold text-muted'>
                  <th className='min-w-150px'>Nama</th>
                  <th className='min-w-140px'>Nomor Absen</th>
                  <th className='min-w-120px'>Hadir</th>
                  <th className='min-w-120px'>Alfa</th>
                  <th className='min-w-120px'>Izin</th>
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
                          e.type.toLowerCase() === "siswa" ?
                            <tr key={i}>
                              <td>
                                <div className='d-flex align-items-center'>
                                  <div className='symbol symbol-45px me-5'>
                                    <img src={e.imageProfile} alt='profile' />
                                  </div>
                                  <div className='d-flex justify-content-start flex-column'>
                                    <a href='#' className='text-dark fw-bold text-hover-primary fs-4'>
                                      {e.name}
                                    </a>
                                    <span className='text-muted fw-semibold text-muted d-block fs-5'>
                                      {e.email}
                                    </span>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <span className='text-dark fw-bold text-hover-primary d-block fs-4'>
                                  {e.nomor_absen}
                                </span>
                              </td>
                              <td>
                                <span className='text-dark fw-bold text-hover-primary d-block fs-4'>
                                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"></input>
                                </span>
                              </td>
                              <td>
                                <span className='text-dark fw-bold text-hover-primary d-block fs-4'>
                                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"></input>
                                </span>
                              </td>
                              <td>
                                <span className='text-dark fw-bold text-hover-primary d-block fs-4'>
                                  <input onChange={() => handleAbsen(e.name, "izin")} className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"></input>
                                </span>
                              </td>
                            </tr>
                            :
                            <></>
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
        <div className='d-flex' style={{ justifyContent: 'end' }}>
          <button
            className={clsx(
              `btn btn-primary w-200px m-4`
            )}
            type={`button`}
            data-bs-toggle='modal'
            data-bs-target='#kt_modal_add_featuring'
          >
            Kirim Absen
          </button>
        </div>
        {/* begin::Body */}
      </div>
    </>
  )
}

export { AbsensiSiswa }
