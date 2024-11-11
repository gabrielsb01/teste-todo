import type { TTaskContextData, TTaskProviderProps } from '@/components/ui/task'

import { createContext, useContext } from 'react'

const TaskContext = createContext<TTaskContextData>({} as TTaskContextData)

const TaskProvider: React.FC<TTaskProviderProps> = ({ task, ...rest }) => {
  return <TaskContext.Provider {...rest} value={{ task }} />
}

function useTaskContext() {
  const context = useContext(TaskContext)
  if (!context) {
    throw new Error('useTaskContext must be used within an TaskProvider')
  }
  return context
}

export { useTaskContext, TaskProvider }
