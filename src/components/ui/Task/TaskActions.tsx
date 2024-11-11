import { Check, Pause, Play, Trash2 } from 'lucide-react'

import { useList } from '_STR/useList'

import { useTaskContext } from './TaskProvider'
import { useTask } from './useTask'

const listAction = useList.getState().actions
const taskActions = useTask.getState().actions

export function TaskActions() {
  const { task } = useTaskContext()

  const status = useTask((st) => st.data.tasks[task.id]?.status)

  return (
    <div className="items-cente flex justify-center gap-1">
      <button
        disabled={status === 'inProgress'}
        className="flex items-center justify-center rounded-md p-3 text-rose-500 transition-all hover:scale-105 hover:bg-rose-500 hover:text-white disabled:pointer-events-none disabled:opacity-50"
        onClick={() => listAction.deleteTask(task)}
      >
        <Trash2 className="h-[clamp(1.2rem,_4vw,_1.5rem)] w-[clamp(1.2rem,_4vw,_1.5rem)]" />
      </button>

      {status === 'inProgress' && (
        <button
          className="flex items-center justify-center rounded-md p-3 text-amber-400 transition-all hover:scale-105 hover:bg-amber-400 hover:text-white group-data-[status=done]:pointer-events-none"
          onClick={() => {
            listAction.changeTaskStatus(task, 'pending')
            taskActions.changeStatus(task, 'pending')
          }}
        >
          <Pause className="h-[clamp(1.2rem,_4vw,_1.5rem)] w-[clamp(1.2rem,_4vw,_1.5rem)]" />
        </button>
      )}
      {status === 'pending' && (
        <button
          className="flex items-center justify-center rounded-md p-3 text-green-500 transition-all hover:scale-105 hover:bg-green-500 hover:text-white group-data-[status=done]:pointer-events-none"
          onClick={() => {
            listAction.changeTaskStatus(task, 'inProgress')
            taskActions.changeStatus(task, 'inProgress')
          }}
        >
          <Play className="h-[clamp(1.2rem,_4vw,_1.5rem)] w-[clamp(1.2rem,_4vw,_1.5rem)]" />
        </button>
      )}

      {status === 'done' && (
        <span className="flex items-center justify-center rounded-md p-3 text-green-500">
          <Check className="h-[clamp(1.2rem,_4vw,_1.5rem)] w-[clamp(1.2rem,_4vw,_1.5rem)]" />
        </span>
      )}
    </div>
  )
}
