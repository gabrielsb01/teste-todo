import type { TListContextData, TListProviderProps } from '@/components/list'

import { createContext, useContext } from 'react'

const ListContext = createContext<TListContextData>({} as TListContextData)

const ListProvider: React.FC<TListProviderProps> = ({ id, ...rest }) => {
  return <ListContext.Provider {...rest} value={{ id }} />
}

function useListContext() {
  const context = useContext(ListContext)
  if (!context) {
    throw new Error('useListContext must be used within an ListProvider')
  }
  return context
}

export { useListContext, ListProvider }
