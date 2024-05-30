import { FC, createContext, useContext, useState } from 'react'
import { WithChildren } from '../../../../_molekul/helpers'

interface ExampleContextType {
  currentPageExample: string
  setPageExample: (page: string) => void
}

const ExampleContext = createContext<ExampleContextType | undefined>(undefined)

const ExampleProvider: FC<WithChildren> = ({ children }) => {
  const [currentPageExample, setCurrentPage] = useState<string>("")

  const setPageExample = (page: string) => {
    setCurrentPage(page)
  }

  const contextValue: ExampleContextType = {
    currentPageExample,
    setPageExample,
  }

  return <ExampleContext.Provider value={contextValue}>{children}</ExampleContext.Provider>
}

const useExample = (): ExampleContextType => {
  const context = useContext(ExampleContext)
  if (!context) {
    throw new Error('useExample must be used within a ExampleProvider')
  }
  return context
}

export { ExampleProvider, useExample }
