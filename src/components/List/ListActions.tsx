import { TCTaskFilterStatus } from '@/enums/task'

import { Check, List, Pause, Plus } from 'lucide-react'

import { useList } from '_STR/useList'

import { ToggleGroup } from '../ui/ToggleGroup'

import { useListContext } from './ListProvider'

const listAction = useList.getState().actions

export function ListActions() {
  const { id } = useListContext()

  return (
    <div className="items-cente flex justify-center gap-1">
      <ToggleGroup.Root
        onChange={(value) =>
          listAction.filterTasks(id, value as TCTaskFilterStatus)
        }
        defaultValue="tasks"
      >
        <ToggleGroup.Item value="tasks" className="data-[state=on]:bg-blue-500">
          <List />
        </ToggleGroup.Item>
        <ToggleGroup.Item value="done" className="data-[state=on]:bg-green-500">
          <Check />
        </ToggleGroup.Item>
        <ToggleGroup.Item
          value="inProgress"
          className="data-[state=on]:bg-amber-400"
        >
          <Pause />
        </ToggleGroup.Item>
      </ToggleGroup.Root>
      <button
        data-testid="add-empty-task"
        className="mr-3 flex items-center justify-center rounded-md p-[clamp(0.375rem,_4vw,_0.625rem)] text-blue-500 transition-all hover:scale-105 hover:bg-blue-500 hover:text-white"
        onClick={() => listAction.addEmptyTask(id)}
      >
        <Plus className="h-[clamp(1.2rem,_4vw,_1.5rem)] w-[clamp(1.2rem,_4vw,_1.5rem)]" />
      </button>
    </div>
  )
}
