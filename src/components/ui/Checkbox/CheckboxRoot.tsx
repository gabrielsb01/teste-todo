import type {
  TCheckboxCheckedStatus,
  TCheckboxRootProps,
} from '@/components/ui/checkbox'

import { Indicator, Root } from '@radix-ui/react-checkbox'
import { twMerge } from 'tailwind-merge'

import { useCheckbox } from './useCheckbox'

const checkboxActions = useCheckbox.getState().actions
export function CheckboxRoot({
  id,
  className,
  defaultChecked = false,
  onChange,
  ...rest
}: Omit<
  TCheckboxRootProps,
  'children' | 'asChild' | 'defaultValue' | 'value' | 'onCheckedChange'
>) {
  checkboxActions.register(id, defaultChecked)
  const checkedStatus = useCheckbox((st) => st.data.checkbox[id])

  const handleChange = (status: TCheckboxCheckedStatus) => {
    checkboxActions.changeStatus(id, status)
    onChange?.(status)
  }

  return (
    <Root
      {...rest}
      checked={checkedStatus}
      onCheckedChange={handleChange}
      className={twMerge(
        'group relative flex size-[clamp(1.25rem,_4vw,_1.75rem)] appearance-none items-center justify-center rounded-full border-2 border-blue-500 bg-white outline-none',
        className,
      )}
    >
      <Indicator className="flex h-full w-full rounded-full border-2 border-white bg-blue-500" />
    </Root>
  )
}
