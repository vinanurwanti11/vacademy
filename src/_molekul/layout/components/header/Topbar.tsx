/* eslint-disable jsx-a11y/anchor-is-valid */
import { FC, useEffect, useState } from 'react'
import clsx from 'clsx'
import { KTIcon, toAbsoluteUrl } from '../../../helpers'
import { HeaderNotificationsMenu, HeaderUserMenu, QuickLinks, Search, ThemeModeSwitcher, } from '../../../partials'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { getProfileSiswa } from '../../../../app/api/Request/profile.siswa.api'

const toolbarButtonMarginClass = 'ms-1 ms-lg-3',
  toolbarButtonHeightClass = 'btn-active-light-primary btn-custom w-30px h-30px w-md-40px h-md-40p',
  toolbarUserAvatarHeightClass = 'symbol-30px symbol-md-40px',
  toolbarButtonIconSizeClass = 'fs-1'

const Topbar: FC = () => {
  const [imageProfile, setImageProfile] = useState<string>("")
  const [uuid, setUuid] = useState<string | undefined>("")
  const auth = getAuth()

  useEffect(() => {
    // @ts-ignore
    onAuthStateChanged(auth, e => {
      handleGetProfile(e?.uid)
      setUuid(e?.uid)
    })
  }, [uuid])

  const handleGetProfile = async (uid: string | undefined) => {
    if (uid) {
      const getIdPoin = await getProfileSiswa(uid)
      const la = Object.entries(getIdPoin)
      setImageProfile(la[0][1].imageProfile)
    }
  }

  return (
    <div className='d-flex align-items-stretch flex-shrink-0'>
      <div
        className={clsx('d-flex align-items-center', toolbarButtonMarginClass)}
        id='kt_header_user_menu_toggle'
      >
        {/* begin::Toggle */}
        <div
          className={clsx('cursor-pointer symbol', toolbarUserAvatarHeightClass)}
          data-kt-menu-trigger='click'
          data-kt-menu-attach='parent'
          data-kt-menu-placement='bottom-end'
          data-kt-menu-flip='bottom'
        >
          <img
            className='h-42px w-42px rounded bg-primary p-1'
            src={imageProfile}
            alt='img-profile'
          />
        </div>
        <HeaderUserMenu />
        {/* end::Toggle */}
      </div>
      {/* end::User */}
    </div>
  )
}

export { Topbar }
