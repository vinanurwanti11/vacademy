import {
  FC,
  useState,
  useEffect,
  createContext,
  useContext,
  useRef,
  Dispatch,
  SetStateAction,
} from 'react'
import { AuthModel } from '../../../interface/auth.interface'
import * as authHelper from '../../../helpers/AuthHelpers'
import { removeProfile } from '../../../helpers/ProfileHelpers'
import { removeAuth } from '../../../helpers/AuthHelpers'
import { WithChildren } from '../../../../_molekul/helpers'
import { LayoutSplashScreen } from '../../../../_molekul/layout/core'
import { getAuth } from 'firebase/auth'

type AuthContextProps = {
  auth: AuthModel | undefined
  saveAuth: (auth: AuthModel | undefined) => void
  currentUser: AuthModel | undefined
  setCurrentUser: Dispatch<SetStateAction<AuthModel | undefined>>
  logout: () => void
}

const initAuthContextPropsState = {
  auth: authHelper.getAuth(),
  saveAuth: () => { },
  currentUser: undefined,
  setCurrentUser: () => { },
  logout: () => { },
}

const AuthContext = createContext<AuthContextProps>(initAuthContextPropsState)

const useAuth = () => {
  return useContext(AuthContext)
}

const AuthProvider: FC<WithChildren> = ({ children }) => {
  const [auth, setAuth] = useState<AuthModel | undefined>(authHelper.getAuth())
  const [currentUser, setCurrentUser] = useState<AuthModel | undefined>()
  const authFirebase = getAuth()

  const saveAuth = (auth: AuthModel | undefined) => {
    setAuth(auth)
    if (auth) {
      authHelper.setAuth(auth)
    }
  }

  const logout = () => {
    saveAuth(undefined)
    setCurrentUser(undefined)
    removeAuth()
    removeProfile()
    authFirebase.signOut()
    window.location.reload()
  }

  return (
    <AuthContext.Provider value={{ auth, saveAuth, currentUser, setCurrentUser, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

const AuthInit: FC<WithChildren> = ({ children }) => {
  const { auth, logout, setCurrentUser } = useAuth()
  const didRequest = useRef(false)
  const [showSplashScreen, setShowSplashScreen] = useState(true)
  // We should request user by authToken (IN OUR EXAMPLE IT'S API_TOKEN) before rendering the application
  useEffect(() => {


    const requestUser = async () => {
      try {
        if (!didRequest.current) {
          setCurrentUser(auth)
        }
      } catch (error) {
        console.error(error)
        if (!didRequest.current) {
          logout()
        }
      } finally {
        setShowSplashScreen(false)
      }

      return () => (didRequest.current = true)
    }


    if (auth) {
      requestUser()
    } else {
      // logout()
      // removeAuth()
      setShowSplashScreen(false)
    }

    // eslint-disable-next-line
  }, [])

  return showSplashScreen ? <LayoutSplashScreen /> : <>{children}</>
}

export { AuthProvider, AuthInit, useAuth }
