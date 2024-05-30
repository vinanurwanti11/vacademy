import { FC, createContext, useContext, useState } from 'react'
import { WithChildren } from '../../../../_molekul/helpers'

interface IsMateriContextType {
  currentIsMateri: boolean
  setIsMateri: (isMateri: boolean) => void
}

const IsMateriContext = createContext<IsMateriContextType | undefined>(undefined)

const IsMateriProvider: FC<WithChildren> = ({ children }) => {
  const [currentIsMateri, setCurrentPage] = useState<boolean>(false)

  const setIsMateri = (page: boolean) => {
    setCurrentPage(page)
  }

  const contextValue: IsMateriContextType = {
    currentIsMateri,
    setIsMateri,
  }

  return <IsMateriContext.Provider value={contextValue}>{children}</IsMateriContext.Provider>
}

const useIsMateri = (): IsMateriContextType => {
  const context = useContext(IsMateriContext)
  if (!context) {
    throw new Error('useIsMateri must be used within a IsMateriProvider')
  }
  return context
}

export { IsMateriProvider, useIsMateri }
