import type {
  TStoreCheckbox,
  TStoreCheckboxData,
} from '@/components/ui/checkbox'

import { produce } from 'immer'
import _ from 'lodash'
import { create } from 'zustand'

const defaultData = {
  checkbox: {},
} satisfies TStoreCheckboxData

export const useCheckbox = create<TStoreCheckbox>((set) => ({
  data: defaultData,
  actions: {
    register: (id, status = false) =>
      set((state) =>
        produce(state, (draft) => {
          if (state.data.checkbox[id]) return

          draft.data.checkbox[id] = status
        }),
      ),
    changeStatus: (id, status) =>
      set((state) =>
        produce(state, (draft) => {
          if (_.isUndefined(state.data.checkbox[id])) return
          draft.data.checkbox[id] = status
        }),
      ),
  },
}))
