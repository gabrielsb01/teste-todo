import type { TTaskRootProps } from '@/components/ui/task'

import { twMerge } from 'tailwind-merge'

import { TaskProvider } from './TaskProvider'
import { useTask } from './useTask'

const taskActions = useTask.getState().actions

export function TaskRoot({ task, className, ...rest }: TTaskRootProps) {
  taskActions.register(task)

  const taskInstace = useTask((st) => st.data.tasks[task.id].task)
  const taskStatus = useTask((st) => st.data.tasks[task.id].status)

  return (
    <TaskProvider task={taskInstace}>
      <div
        {...rest}
        data-status={taskStatus}
        data-testid={`task-item-${task.id}`}
        className={twMerge('group flex w-full flex-col gap-1', className)}
      />
    </TaskProvider>
  )
}
