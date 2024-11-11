import { TToggleGroupItemProps } from '@/components/ui/toggleGroup'

import { Item } from '@radix-ui/react-toggle-group'
import { twMerge } from 'tailwind-merge'

export function ToggleGroupItem({ className, ...rest }: TToggleGroupItemProps) {
  return (
    <Item
      {...rest}
      className={twMerge(
        'flex w-fit items-center justify-center bg-white px-2 leading-4 text-zinc-600 first:rounded-l last:rounded-r hover:bg-white focus:z-10 focus:outline-none data-[state=on]:bg-blue-500 data-[state=on]:text-white',
        className,
      )}
    />
  )
}
