import { useList } from '_STR/useList'

import { Task } from '~/entities/Task'

describe('ações de useList', () => {
  beforeEach(() => {
    useList.getState().actions.clear()
  })

  it('deve registrar uma nova lista', () => {
    const listActions = useList.getState().actions
    listActions.register('test-list', {
      title: 'lista de teste',
      active: true,
      tasks: [],
    })

    const listData = useList.getState().data
    expect(listData.lists['test-list']).toBeDefined()
  })

  it('deve adicionar uma tarefa vazia à lista', () => {
    const listActions = useList.getState().actions
    listActions.register('test-list', {
      title: 'lista de teste',
      active: true,
      tasks: [],
    })
    listActions.addEmptyTask('test-list')

    const listData = useList.getState().data
    expect(listData.lists['test-list'].tasks).toHaveLength(1)
  })

  it('deve mudar o status de uma tarefa', () => {
    const listActions = useList.getState().actions
    const task = Task.create({ id: 'task-1' })

    listActions.register('test-list', {
      title: 'lista de teste',
      active: true,
      tasks: [task],
    })
    listActions.changeTaskStatus(task, 'done')

    const listData = useList.getState().data
    expect(listData.lists['test-list'].done).toContainEqual(task)
    expect(listData.lists['test-list'].pending).not.toContainEqual(task)
  })

  it('deve adicionar uma tarefa à lista', () => {
    const listActions = useList.getState().actions
    const task = Task.create({ id: 'task-1' })
    listActions.register('test-list', {
      title: 'lista de teste',
      active: true,
      tasks: [],
    })
    listActions.addTask('test-list', task)

    const listData = useList.getState().data
    expect(listData.lists['test-list'].tasks).toContainEqual(task)
  })

  it('deve filtrar as tarefas na lista', () => {
    const listActions = useList.getState().actions
    listActions.register('test-list', {
      title: 'lista de teste',
      active: true,
      tasks: [],
    })
    listActions.filterTasks('test-list', 'done')

    const listData = useList.getState().data
    expect(listData.filter).toBe('done')
  })

  it('deve excluir uma tarefa da lista', () => {
    const listActions = useList.getState().actions
    const task = Task.create({ id: 'task-1' })

    listActions.register('test-list', {
      title: 'lista de teste',
      active: true,
      tasks: [task],
    })
    listActions.deleteTask(task)

    const listData = useList.getState().data
    expect(listData.lists['test-list'].tasks).not.toContainEqual(task)
  })
})
