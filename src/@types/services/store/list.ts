import { ZCTaskFilterStatus, ZCTaskStatus } from '@/enums/task'

import { z } from 'zod'

import { Task } from '~/entities/Task'

export const ZStoreListProps = z.object({
  title: z.string(),
  active: z.boolean(),
  tasks: z.array(z.custom<Task>()),
  done: z.array(z.custom<Task>()),
  pending: z.array(z.custom<Task>()),
  inProgress: z.array(z.custom<Task>()),
})

export const ZStoreListData = z.object({
  filter: z.union([
    z.literal('done'),
    z.literal('pending'),
    z.literal('inProgress'),
    z.literal('tasks'),
  ]),
  lists: z.record(z.string(), ZStoreListProps),
})

export const ZStoreListActions = z.object({
  clear: z.function(),
  register: z.function(
    z.tuple([
      z.string(),
      ZStoreListProps.omit({
        done: true,
        pending: true,
        inProgress: true,
      }),
    ]),
  ),
  filterTasks: z.function(z.tuple([z.string(), ZCTaskFilterStatus.optional()])),
  addEmptyTask: z.function(z.tuple([z.string()])),
  deleteTask: z.function(z.tuple([z.custom<Task>()])),
  changeTaskStatus: z.function(z.tuple([z.custom<Task>(), ZCTaskStatus])),
  addTask: z.function(z.tuple([z.string(), z.custom<Task>()])),
})

export const ZStoreList = z.object({
  data: ZStoreListData,
  actions: ZStoreListActions,
})

//
//
//
//

export type TStoreListData = z.infer<typeof ZStoreListData>
export type TStoreListActions = z.infer<typeof ZStoreListActions>
export type TStoreList = z.infer<typeof ZStoreList>
