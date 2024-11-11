import type { HTMLAttributes, ReactNode } from 'react'

import { ZCTaskStatus } from '@/enums/task'

import { z } from 'zod'

import { Task } from '~/entities/Task'

export const ZStoreTaskData = z.object({
  tasks: z.record(
    z.string(),
    z.object({
      id: z.string(),
      status: ZCTaskStatus,
      description: z.string().optional(),
      task: z.custom<Task>(),
    }),
  ),
})

export const ZStoreTaskActions = z.object({
  clear: z.function(),
  register: z.function(z.tuple([z.custom<Task>()])),
  changeStatus: z.function(z.tuple([z.custom<Task>(), ZCTaskStatus])),
  changeDescription: z.function(z.tuple([z.string(), z.string().optional()])),
})

export const ZStoreTask = z.object({
  data: ZStoreTaskData,
  actions: ZStoreTaskActions,
})

export const ZTaskContextData = z.object({
  task: z.custom<Task>(),
})

export const ZTaskProviderProps = ZTaskContextData.extend({
  children: z.custom<ReactNode>(),
})

export const ZTaskRootProps = z.intersection(
  z.object({ task: z.custom<Task>() }),
  z.custom<HTMLAttributes<HTMLDivElement>>(),
)

//
//
//
//

export type TStoreTaskData = z.infer<typeof ZStoreTaskData>
export type TStoreTaskActions = z.infer<typeof ZStoreTaskActions>
export type TStoreTask = z.infer<typeof ZStoreTask>
//
export type TTaskContextData = z.infer<typeof ZTaskContextData>
export type TTaskProviderProps = z.infer<typeof ZTaskProviderProps>
export type TTaskRootProps = z.infer<typeof ZTaskRootProps>
