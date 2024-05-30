/* eslint-disable react-hooks/exhaustive-deps */
import clsx from 'clsx'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { KTIcon, toAbsoluteUrl } from '../../../helpers'
import { useLayout } from '../../core'
import { HeaderToolbar } from './HeaderToolbar'
import { Topbar } from './Topbar'
import { useIsMateri } from '../../../../app/pages/materi/context/isMateriProvider'
import { useEffect, useState } from 'react'

export function HeaderWrapper() {
  const { config, classes, attributes } = useLayout()
  const { aside } = config
  const location = useLocation()
  const navigation = useNavigate()
  const { currentIsMateri } = useIsMateri()
  const [isLocation, setIsLocation] = useState<boolean>(false)
  const [titleMateri, setTitleMateri] = useState<string | null>("")

  useEffect(() => {
    if (location.pathname === '/materi/details' && 'active') {
      setIsLocation(true)
      const titleMateri = localStorage.getItem('titleMateri');
      setTitleMateri(titleMateri)
    } else {
      setIsLocation(false)
    }
  }, [])



  return (
    <div
      id='kt_header'
      className='d-flex header align-items-stretch shadow-sm ps-20 pe-20'
      style={{ alignItems: 'center' }}
    >
      {
        isLocation ?
          <div className='d-flex header-logo flex-grow-1 flex-lg-grow-0' style={{ alignItems: 'center', width: "10%" }}
            onClick={() => navigation('/materi')}
          >
            <div className='hover-overlay' style={{ cursor: 'pointer' }}>
              <img
                alt='Logo'
                src={toAbsoluteUrl('/media/icons/duotune/general/ic_prev_black.svg')}
                className='logo-default h-25px mb-2'
              />
              <span className='text-gray-900 text-hover-primary' style={{ fontSize: '16px', fontWeight: 'bold' }}>Kembali</span>
            </div>
          </div>
          :
          <div className='d-flex header-logo me-5 me-md-10 flex-grow-1 flex-lg-grow-0' style={{ alignItems: 'center', maxWidth: "10%" }}>
            <Link to='/'>
              <img
                alt='Logo'
                src={toAbsoluteUrl('/media/logos/ic_logo.png')}
                className='logo-default h-40px'
              />
            </Link>
          </div>
      }


      {
        isLocation ?
          <div className={clsx(`d-flex`)} style={{ justifyItems: 'center', alignItems: 'center', width: "80%" }}>
            {/* <span
              className={`${location.pathname === '/dashboard' || `${location.pathname === '/evaluasi/soal'}` ? "text-primary" : ""}`}
              style={{ textAlign: 'center', fontSize: '16px', fontWeight: 'bold', alignSelf: 'center' }}>
              Materi
            </span> */}
          </div>
          :
          <div className='d-flex' style={{ justifyContent: 'center', alignItems: 'center', width: "80%" }}>
            <div className={clsx(`d-flex`)}>
              <div className='d-flex me-10' style={{ height: '45px' }}>
                <ul className={`${location.pathname === '/dashboard' ? "border rounded-pill border-primary border-2 h-10" : ""} nav nav-stretch fs-5 fw-bolder w-110px`} style={{ bottom: '0', backgroundColor: location.pathname === '/dashboard' ? '#4584AD' : '' }}>
                  <li className='d-flex nav-item ms-5'>
                    <span
                      className={`d-flex me-6`}
                      style={{ alignItems: 'center', cursor: 'pointer' }}
                      onClick={() => { navigation('/dashboard') }}
                    >
                      <img
                        alt='Logo'
                        src={`${location.pathname === '/dashboard' ? toAbsoluteUrl("/media/icons/duotune/general/ic_beranda_active.svg") : toAbsoluteUrl("/media/icons/duotune/general/ic_beranda.svg")}`}
                        className='logo-default h-25px mb-2 me-2'
                      />
                      <span
                        className={`${location.pathname === '/dashboard' ? "text-white" : ""}`}
                        style={{ textAlign: 'center', fontSize: '16px', fontWeight: 'bold' }}>Beranda</span>
                    </span>
                  </li>
                </ul>
              </div>

              <div className='d-flex' style={{ height: '45px' }}>
                <ul className={`${location.pathname === '/materi' ? "border rounded-pill border-primary border-2 h-10" : ""} nav nav-stretch fs-5 fw-bolder w-110px`} style={{ bottom: '0', backgroundColor: location.pathname === '/materi' ? '#4584AD' : '' }}>
                  <li className='nav-item ps-5'>
                    <span
                      className={`d-flex me-6`}
                      style={{ alignItems: 'center', cursor: 'pointer' }}
                      onClick={() => {
                        navigation('/materi')
                      }}
                    >
                      <img
                        alt='Logo'
                        src={`${location.pathname === '/materi' ? toAbsoluteUrl("/media/icons/duotune/general/ic_forum_active.svg") : toAbsoluteUrl("/media/icons/duotune/general/ic_forum.svg")}`}
                        className='logo-default h-25px mb-2 me-2'
                      />
                      <span
                        className={`${location.pathname === '/materi' ? "text-white" : ""}`}
                        style={{ textAlign: 'center', fontSize: '16px', fontWeight: 'bold' }}>Materi</span>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
      }


      <div className={clsx(`d-flex`)} style={{ justifyItems: 'center', alignItems: 'center', width: "10%" }}>
        <Topbar />
      </div>
      {/* end::Brand */}
      {/* <HeaderToolbar /> */}
    </div >
  )
}
