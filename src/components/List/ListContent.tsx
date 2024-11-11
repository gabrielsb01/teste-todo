import _ from 'lodash'

import { useList } from '_STR/useList'

import { Task } from '../ui/Task'

import { useListContext } from './ListProvider'

export function ListContent() {
  const { id } = useListContext()
  const filter = useList((st) => st.data.filter)
  const listTasks = useList((st) => st.data.lists[id])

  if (_.isEmpty(listTasks) || !listTasks[filter].length) return null

  return (
    <section
      className="flex w-full flex-col px-6 py-4"
      data-testid="list-content"
    >
      {_.map(listTasks[filter], (task) => (
        <Task.Root key={task.id} task={task}>
          <Task.Title />
          <Task.Description />
        </Task.Root>
      ))}
    </section>
  )
}
