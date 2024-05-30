import { FC, lazy, Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { MasterLayout } from '../../_molekul/layout/MasterLayout'
import TopBarProgress from 'react-topbar-progress-indicator'
import { DashboardWrapper } from '../pages/dashboard/DashboardWrapper'
import { getCSSVariableValue } from '../../_molekul/assets/ts/_utils'
import { WithChildren } from '../../_molekul/helpers'
import Evaluasi from '../pages/evaluasi/EvaluasiPage'
import ForumPage from '../pages/forum/ForumPage'
import ChatGroup from '../pages/forum/ChatGroup'
import MateriPage from '../pages/materi/MateriPage'
import DetailMateri from '../pages/materi/DetailMateri'
import DetailEvaluasi from '../pages/evaluasi/DetailEvaluasi'
import { PaginationProvider } from '../pages/materi/context/materiProvider'
import { IsMateriProvider } from '../pages/materi/context/isMateriProvider'
import Lkpd from '../pages/evaluasi/Lkpd'
import EvaluasiFile from '../pages/evaluasi/EvaluasiFile'
import { AbsensiSiswa } from '../pages/absensi/AbsensiSiswa'
import EvaluasiFileSiswa from '../pages/evaluasi/EvaluasiFileSiswa'
import HasilSiswa from '../pages/evaluasi/listHasilSiswa/hasilSiswa'

const PrivateRoutes = () => {
  const UsersPage = lazy(() => import('../modules/apps/user-management/UsersPage'))

  return (
    <Routes>
      <Route element={<MasterLayout />}>
        {/* Redirect to Dashboard after success login/registartion */}
        <Route path='auth/*' element={<Navigate to='/dashboard' />} />
        {/* Pages */}
        <Route path='dashboard' element={<DashboardWrapper />} />
        <Route path='/evaluasi' element={<Evaluasi />} />

        <Route path='/evaluasi/soal' element={
          <PaginationProvider>
            <DetailEvaluasi />
          </PaginationProvider>
        } />
        
        <Route path='/evaluasi/lkpd' element={<Lkpd />} />
        <Route path='/evaluasi/file' element={<EvaluasiFile />} />
        <Route path='/evaluasi/siswa/:id' element={<EvaluasiFileSiswa />} />
        <Route path='/forum' element={<ForumPage />} />
        <Route path='/group' element={<ChatGroup />} />
        <Route path='/absensi/siswa' element={<AbsensiSiswa className={''} />} />
        <Route path='/hasil/evaluasi' element={<HasilSiswa />} />

        <Route path='/materi' element={
          <IsMateriProvider>
            <MateriPage />
          </IsMateriProvider>
        } />
        <Route path='/materi/details' element={
          <PaginationProvider>
            <IsMateriProvider>
              <DetailMateri />
            </IsMateriProvider>
          </PaginationProvider>
        } />

        <Route
          path='apps/user-management/*'
          element={
            <SuspensedView>
              <UsersPage />
            </SuspensedView>
          }
        />
        {/* Page Not Found */}
        <Route path='*' element={<Navigate to='/error/404' />} />
      </Route>
    </Routes>
  )
}

const SuspensedView: FC<WithChildren> = ({ children }) => {
  const baseColor = getCSSVariableValue('--bs-primary')
  TopBarProgress.config({
    barColors: {
      '0': baseColor,
    },
    barThickness: 1,
    shadowBlur: 5,
  })
  return <Suspense fallback={<TopBarProgress />}>{children}</Suspense>
}

export { PrivateRoutes }
