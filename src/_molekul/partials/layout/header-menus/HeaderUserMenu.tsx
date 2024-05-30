/* eslint-disable jsx-a11y/anchor-is-valid */
import { FC, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../../../app/modules/auth'
import { Languages } from './Languages'
import { toAbsoluteUrl } from '../../../helpers'
import { CreateProfileSiswaType, ProfileSiswaTypeResponse } from '../../../../app/interface/profile.siswa.interface'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { getProfileSiswa } from '../../../../app/api/Request/profile.siswa.api'

const HeaderUserMenu: FC = () => {
  const { currentUser, logout } = useAuth()
  const [profileSiswa, setProfileSiswa] = useState<CreateProfileSiswaType>()
  const auth = getAuth()

  useEffect(() => {
    onAuthStateChanged(auth, e => {
      handleGetProfile(e?.uid)
    })
  }, [])

  const handleGetProfile = async (uid: string | undefined) => {
    try {
      if (uid) {
        const ress = await getProfileSiswa(uid)
        const output = Object.entries(ress)
        output.map(e => {
          //@ts-ignore
          setProfileSiswa(e[1])
        });
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div
      className='menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg menu-state-primary fw-semibold py-4 fs-6 w-275px'
      data-kt-menu='true'
    >
      <div className='menu-item px-3'>
        <div className='menu-content d-flex align-items-center px-3'>
          <div className='symbol symbol-50px me-5'>
            <img
              className='bg-primary p-1'
              alt='Logo' src={profileSiswa?.imageProfile}
            />
          </div>

          <div className='d-flex flex-column'>
            <div className='fw-bold d-flex align-items-center fs-5'>
              {profileSiswa?.name}
            </div>
            <span className='fw-semibold text-muted fs-7'>
              No. Absen: {profileSiswa?.nomor_absen}
            </span>
          </div>
        </div>
      </div>

      <div className='separator my-2'></div>

      <div className='menu-item px-5'>
        <a onClick={logout} className='menu-link px-5 text-primary fw-bold'>
          Sign Out
        </a>
      </div>
    </div>
  )
}

export { HeaderUserMenu }
