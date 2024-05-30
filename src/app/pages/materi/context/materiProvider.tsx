import { FC, createContext, useContext, useState } from 'react'
import { WithChildren } from '../../../../_molekul/helpers'

interface PaginationContextType {
  currentPage: number
  setPage: (page: number) => void
}

const PaginationContext = createContext<PaginationContextType | undefined>(undefined)

const PaginationProvider: FC<WithChildren> = ({ children }) => {

  const [currentPage, setCurrentPage] = useState<number>(1)

  const setPage = (page: number) => {
    setCurrentPage(page)
  }

  const contextValue: PaginationContextType = {
    currentPage,
    setPage,
  }

  return <PaginationContext.Provider value={contextValue}>{children}</PaginationContext.Provider>
}

const usePagination = (): PaginationContextType => {
  const context = useContext(PaginationContext)
  if (!context) {
    throw new Error('usePagination must be used within a PaginationProvider')
  }
  return context
}

export { PaginationProvider, usePagination }
