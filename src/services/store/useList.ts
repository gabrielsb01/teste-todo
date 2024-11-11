import type { TStoreList, TStoreListData } from '@/services/store/list'

import { produce } from 'immer'
import _ from 'lodash'
import { create } from 'zustand'

import { TASK_FILTER_STATUS, TASK_STATUS } from '~/constants/task'
import { Task } from '~/entities/Task'

const defaultData = {
  filter: 'tasks',
  lists: {},
} satisfies TStoreListData

export const useList = create<TStoreList>((set) => ({
  data: defaultData,
  actions: {
    clear: () =>
      set((state) =>
        produce(state, (draft) => {
          draft.data = defaultData
        }),
      ),
    register: (id, props) =>
      set((state) =>
        produce(state, (draft) => {
          if (state.data.lists[id]) return

          draft.data.lists[id] = {
            ...props,
            done: [],
            inProgress: [],
            pending: props.tasks,
          }
        }),
      ),
    addEmptyTask: (id) =>
      set((state) =>
        produce(state, (draft) => {
          if (_.isUndefined(state.data.lists[id])) return
          const newTask = Task.create({})

          draft.data.lists[id].tasks.push(newTask)
          draft.data.lists[id].pending.push(newTask)
        }),
      ),

    addTask: (id, task) =>
      set((state) =>
        produce(state, (draft) => {
          if (_.isUndefined(state.data.lists[id])) return
          draft.data.lists[id].tasks.push(task)
          draft.data.lists[id][task.status].push(task)
        }),
      ),

    filterTasks: (id, filter) =>
      set((state) =>
        produce(state, (draft) => {
          if (_.isUndefined(state.data.lists[id])) return
          draft.data.filter = filter ?? 'tasks'
        }),
      ),

    changeTaskStatus: (task, status) =>
      set((state) =>
        produce(state, (draft) => {
          const listId = _.findKey(
            state.data.lists,
            (value) => value.active === true,
          )
          if (!listId) return

          TASK_STATUS.forEach((taskStatus) => {
            if (taskStatus === status) {
              draft.data.lists[listId][taskStatus].push(task)
              return
            }

            draft.data.lists[listId][taskStatus] = _.filter(
              state.data.lists[listId][taskStatus],
              (item) => item !== task,
            )
          })
        }),
      ),

    deleteTask: (task) =>
      set((state) =>
        produce(state, (draft) => {
          const listId = _.findKey(
            state.data.lists,
            (value) => value.active === true,
          )
          if (!listId) return

          TASK_FILTER_STATUS.forEach((taskStatus) => {
            if (!state.data.lists[listId][taskStatus].length) return

            draft.data.lists[listId][taskStatus] = _.filter(
              state.data.lists[listId][taskStatus],
              (item) => item.id !== task.id,
            )
          })
        }),
      ),
  },
}))
