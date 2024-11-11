import { cloneElement, useEffect } from 'react'
import { useOutlet } from 'react-router-dom'

import { useList } from '_STR/useList'

const listActions = useList.getState().actions
export function BaseLayout() {
  const element = useOutlet()

  useEffect(() => {
    listActions.register('todo', {
      title: 'Lista de tarefas',
      active: true,
      tasks: [],
    })
  }, [])

  return (
    <div className="relative flex min-h-screen flex-col antialiased">
      {element && cloneElement(element)}
    </div>
  )
}
