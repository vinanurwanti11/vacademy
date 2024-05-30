import { Suspense, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { I18nProvider } from '../_molekul/i18n/i18nProvider'
import { LayoutProvider, LayoutSplashScreen } from '../_molekul/layout/core'
import { MasterInit } from '../_molekul/layout/MasterInit'
import { AuthInit } from './modules/auth'
import { authFirebase } from '../firebase'
import '../prism.css'

const App = () => {
  useEffect(() => {
    const firebase = authFirebase
  }, [])
  return (
    <Suspense fallback={<LayoutSplashScreen />}>
      <I18nProvider>
        <LayoutProvider>
          <AuthInit>
            <Outlet />
            <MasterInit />
          </AuthInit>
        </LayoutProvider>
      </I18nProvider>
    </Suspense>
  )
}

export { App }
