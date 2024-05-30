import { FC, createContext, useContext, useState } from 'react'
import { WithChildren } from '../../../../_molekul/helpers'

interface TitleModulContextType {
  currentPageTitleModul: number
  setPageTitleModul: (page: number) => void
}

const TitleModulContext = createContext<TitleModulContextType | undefined>(undefined)

const TitleModulProvider: FC<WithChildren> = ({ children }) => {
  const [currentPageTitleModul, setCurrentPage] = useState<number>(1)

  const setPageTitleModul = (page: number) => {
    setCurrentPage(page)
  }

  const contextValue: TitleModulContextType = {
    currentPageTitleModul,
    setPageTitleModul,
  }

  return <TitleModulContext.Provider value={contextValue}>{children}</TitleModulContext.Provider>
}

const useTitleModul = (): TitleModulContextType => {
  const context = useContext(TitleModulContext)
  if (!context) {
    throw new Error('useTitleModul must be used within a TitleModulProvider')
  }
  return context
}

export { TitleModulProvider, useTitleModul }
