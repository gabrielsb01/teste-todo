import type { ReactNode } from 'react'

import { z } from 'zod'

export const ZToggleGroupItemProps = z.object({
  value: z.string(),
  className: z.string().optional(),
  children: z.custom<ReactNode>(),
})

export const ZToggleGroupProps = z.object({
  defaultValue: z.string().optional(),
  className: z.string().optional(),
  children: z.custom<ReactNode>(),
  onChange: z.function(z.tuple([z.string()])).optional(),
})

//
//
//
//

export type TToggleGroupItemProps = z.infer<typeof ZToggleGroupItemProps>
export type TToggleGroupProps = z.infer<typeof ZToggleGroupProps>
