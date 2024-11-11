import { TListRootProps } from '@/components/list'

import { twMerge } from 'tailwind-merge'

import { ListProvider } from './ListProvider'

export function ListRoot({ id, className, ...rest }: TListRootProps) {
  return (
    <ListProvider id={id}>
      <div {...rest} className={twMerge('w-full', className)} />
    </ListProvider>
  )
}
