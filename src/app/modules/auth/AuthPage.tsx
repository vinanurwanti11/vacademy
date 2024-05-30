/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect } from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import { Login } from './components/Login'
import { Registration } from './components/Registration'

const AuthLayout = () => {
  useEffect(() => {
    document.body.style.backgroundImage = ''
    return () => { }
  }, [])

  return (
    <div className='d-flex flex-column flex-root'>
      <Outlet />
    </div>
  )
}

const AuthPage = () => (
  <Routes>
    <Route element={<AuthLayout />}>
      <Route path='login' element={<Login />} />
      <Route path='register' element={<Registration />} />
      <Route index element={<Login />} />
    </Route>
  </Routes>
)

export { AuthPage }
