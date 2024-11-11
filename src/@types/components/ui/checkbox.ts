import type { ComponentPropsWithRef } from 'react'

import { Root } from '@radix-ui/react-checkbox'
import { z } from 'zod'

export const ZCheckboxCheckedStatus = z.union([
  z.boolean(),
  z.literal('indeterminate'),
])

export const ZStoreCheckboxData = z.object({
  checkbox: z.record(z.string(), ZCheckboxCheckedStatus),
})

export const ZStoreCheckboxActions = z.object({
  register: z.function(z.tuple([z.string(), ZCheckboxCheckedStatus])),
  changeStatus: z.function(z.tuple([z.string(), ZCheckboxCheckedStatus])),
})

export const ZStoreCheckbox = z.object({
  data: ZStoreCheckboxData,
  actions: ZStoreCheckboxActions,
})

export const ZCheckboxRootProps = z.intersection(
  z.object({
    id: z.string(),
    disabled: z.boolean().optional(),
    defaultChecked: ZCheckboxCheckedStatus.optional(),
    checked: ZCheckboxCheckedStatus.optional(),
    onChange: z
      .function(z.tuple([ZCheckboxCheckedStatus]))
      .returns(z.void())
      .optional(),
  }),
  z.custom<Omit<ComponentPropsWithRef<typeof Root>, 'onChange'>>(),
)

//
//
//
//

export type TStoreCheckboxData = z.infer<typeof ZStoreCheckboxData>
export type TStoreCheckboxActions = z.infer<typeof ZStoreCheckboxActions>
export type TStoreCheckbox = z.infer<typeof ZStoreCheckbox>
//
export type TCheckboxCheckedStatus = z.infer<typeof ZCheckboxCheckedStatus>
export type TCheckboxRootProps = z.infer<typeof ZCheckboxRootProps>
