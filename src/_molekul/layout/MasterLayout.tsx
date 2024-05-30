import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { AsideDefault } from './components/aside/AsideDefault'
import { Footer } from './components/Footer'
import { HeaderWrapper } from './components/header/HeaderWrapper'
import { RightToolbar } from '../partials/layout/RightToolbar'
import { ScrollTop } from './components/ScrollTop'
import { Content } from './components/Content'
import { PageDataProvider } from './core'
import { ActivityDrawer, DrawerMessenger, InviteUsers, ThemeModeProvider, UpgradePlan, } from '../partials'
import { MenuComponent } from '../assets/ts/components'
import { IsMateriProvider } from '../../app/pages/materi/context/isMateriProvider'

const MasterLayout = () => {
  const location = useLocation()

  useEffect(() => {
    setTimeout(() => {
      MenuComponent.reinitialization()
    }, 500)
  }, [])

  useEffect(() => {
    setTimeout(() => {
      MenuComponent.reinitialization()
    }, 500)
  }, [location.key])

  return (
    <IsMateriProvider>
      <PageDataProvider>
        <ThemeModeProvider>
          <div className='page d-flex flex-row flex-column-fluid' style={{ backgroundColor: 'white' }}>
            {/* <AsideDefault /> */}
            <div className='d-flex flex-column flex-row-fluid' id='kt_wrapper'>
              <HeaderWrapper />

              <div id='kt_content' className='content d-flex flex-column flex-column-fluid mt-10'>
                <div className='post d-flex flex-column-fluid mt-10' id='kt_post' >
                  <Content>
                    <Outlet />
                  </Content>
                </div>
              </div>
              <Footer />
            </div>
          </div>
        </ThemeModeProvider>
      </PageDataProvider>
    </IsMateriProvider>
  )
}

export { MasterLayout }
