import type { HTMLAttributes, ReactNode } from 'react'

import { z } from 'zod'

export const ZListContextData = z.object({
  id: z.string(),
})

export const ZListProviderProps = ZListContextData.extend({
  children: z.custom<ReactNode>(),
})

export const ZListRootProps = z.intersection(
  ZListContextData,
  z.custom<HTMLAttributes<HTMLDivElement>>(),
)

//
//
//
//

export type TListContextData = z.infer<typeof ZListContextData>
export type TListProviderProps = z.infer<typeof ZListProviderProps>
export type TListRootProps = z.infer<typeof ZListRootProps>
