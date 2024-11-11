import { useList } from '_STR/useList'

import { ListActions } from './ListActions'
import { useListContext } from './ListProvider'

export function ListHeader() {
  const { id } = useListContext()
  const listTitle = useList((st) => st.data.lists[id]?.title)

  return (
    <header className="w-full px-2" data-testid="list-header">
      <div className="flex items-center gap-2 border-b border-zinc-500 p-2">
        <input
          className="pointer-events-none w-full px-2 py-2 text-left text-[clamp(1.25rem,_4vw,_3rem)] font-bold leading-[clamp(1.75rem,_4vw,_1)] text-blue-500"
          defaultValue={listTitle}
        />
        <ListActions />
      </div>
    </header>
  )
}
