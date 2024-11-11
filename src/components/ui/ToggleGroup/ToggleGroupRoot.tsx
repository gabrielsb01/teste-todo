import type { TToggleGroupProps } from '@/components/ui/toggleGroup'

import { Root } from '@radix-ui/react-toggle-group'
import { twMerge } from 'tailwind-merge'

export function ToggleGroupRoot({
  className,
  onChange,
  ...rest
}: TToggleGroupProps) {
  return (
    <Root
      {...rest}
      type="single"
      className={twMerge(
        'inline-flex space-x-px rounded border border-zinc-200/40 bg-white shadow-md',
        className,
      )}
      onValueChange={(value) => onChange?.(value)}
    />
  )
}
