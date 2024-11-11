import { useList } from '_STR/useList'

import { Checkbox } from '../Checkbox'

import { TaskActions } from './TaskActions'
import { useTaskContext } from './TaskProvider'
import { useTask } from './useTask'

const taskActions = useTask.getState().actions
const listAction = useList.getState().actions

export function TaskTitle() {
  const { task } = useTaskContext()

  return (
    <div className="flex flex-1 items-center justify-center gap-2">
      <Checkbox.Root
        id={task.id}
        onChange={(status) => {
          listAction.changeTaskStatus(task, status ? 'done' : 'pending')
          taskActions.changeStatus(task, status ? 'done' : 'pending')
        }}
      />
      <input
        className="w-full flex-1 p-0 text-lg font-semibold text-blue-800 outline-none transition-all group-focus-within:text-xl group-data-[status=done]:pointer-events-none group-data-[status=done]:!text-lg group-data-[status=done]:line-through group-data-[status=done]:opacity-50"
        placeholder="Nova task"
        data-testid="task-title"
        defaultValue={task.title}
        onChange={(e) => {
          task.title = e.target.value
        }}
      />
      <TaskActions />
    </div>
  )
}
