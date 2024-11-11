import type { TStoreTask, TStoreTaskData } from '@/components/ui/task'

import { produce } from 'immer'
import _ from 'lodash'
import { create } from 'zustand'

const defaultData = {
  tasks: {},
} satisfies TStoreTaskData

export const useTask = create<TStoreTask>((set) => ({
  data: defaultData,
  actions: {
    clear: () =>
      set((state) =>
        produce(state, (draft) => {
          draft.data = defaultData
        }),
      ),
    register: (task) =>
      set((state) =>
        produce(state, (draft) => {
          if (state.data.tasks[task.id]) return

          draft.data.tasks[task.id] = {
            id: task.id,
            status: task.status,
            description: task.description,
            task,
          }
        }),
      ),
    changeStatus: (task, status) =>
      set((state) =>
        produce(state, (draft) => {
          if (_.isUndefined(state.data.tasks[task.id])) return
          draft.data.tasks[task.id].status = status
        }),
      ),
    changeDescription: (id, description) =>
      set((state) =>
        produce(state, (draft) => {
          if (_.isUndefined(state.data.tasks[id])) return
          draft.data.tasks[id].description = description
        }),
      ),
  },
}))
