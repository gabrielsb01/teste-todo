import { ZCTaskStatus } from '@/enums/task'

import { z } from 'zod'

export const ZETaskProps = z.object({
  id: z.string(),
  title: z.string(),
  status: ZCTaskStatus,
  description: z.string().optional(),
})

export const ZETask = ZETaskProps.extend({})

//
//
//
//

export type TETaskProps = z.infer<typeof ZETaskProps>

export interface ITask extends z.infer<typeof ZETask> {}
