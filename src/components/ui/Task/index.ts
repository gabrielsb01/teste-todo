import { TaskDescription } from './TaskDescription'
import { TaskRoot } from './TaskRoot'
import { TaskTitle } from './TaskTitle'
import { useTask } from './useTask'

export const Task = {
  Root: TaskRoot,
  Title: TaskTitle,
  Description: TaskDescription,
  store: useTask,
}
