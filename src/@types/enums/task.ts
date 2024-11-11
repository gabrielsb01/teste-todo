import { z } from 'zod'

import { TASK_FILTER_STATUS, TASK_STATUS } from '~/constants/task'

export const ZCTaskStatus = z.enum(TASK_STATUS)
export const ZCTaskFilterStatus = z.enum(TASK_FILTER_STATUS)

//
//
//
//

export type TCTaskStatus = z.infer<typeof ZCTaskStatus>
export type TCTaskFilterStatus = z.infer<typeof ZCTaskFilterStatus>
