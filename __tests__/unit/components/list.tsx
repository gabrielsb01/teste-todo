import { act, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { useList } from '_STR/useList'

import { List } from '~/components/List'
import { Task } from '~/entities/Task'

describe('Componente', () => {
  beforeEach(() => {
    const listActions = useList.getState().actions

    listActions.clear()
    listActions.register('test-list-render', {
      title: 'Lista de tarefas de teste',
      active: true,
      tasks: [],
    })
  })

  describe('Lista Raiz', () => {
    it('deve renderizar sem falhas', () => {
      const wrapper = render(<List.Root id="test-list-render" />)

      expect(wrapper.container).toBeInTheDocument()
    })

    it('deve renderizar Raiz com os componentes Header e Content', () => {
      const listActions = useList.getState().actions
      listActions.addEmptyTask('test-list-render')

      const wrapper = render(
        <List.Root id="test-list-render">
          <List.Header />
          <List.Content />
        </List.Root>,
      )

      expect(wrapper.getByTestId('list-header')).toBeInTheDocument()
      expect(wrapper.queryByTestId('list-content')).toBeInTheDocument()
    })

    it('deve renderizar Raiz com o componente Header mas não renderizar Content se não houver tarefas', () => {
      const wrapper = render(
        <List.Root id="test-list-render">
          <List.Header />
          <List.Content />
        </List.Root>,
      )

      expect(wrapper.getByTestId('list-header')).toBeInTheDocument()
      expect(wrapper.queryByTestId('list-content')).toBeNull()
    })
  })

  describe('Cabeçalho da Lista', () => {
    it('deve renderizar sem falhas', () => {
      const wrapper = render(<List.Header />, {
        wrapper: ({ children }) => (
          <List.Root id="test-list-render">{children}</List.Root>
        ),
      })

      expect(wrapper.container).toBeInTheDocument()
    })

    it('deve chamar addEmptyTask ao clicar no botão', async () => {
      const user = userEvent.setup()

      const wrapper = render(<List.Header />, {
        wrapper: ({ children }) => (
          <List.Root id="test-list-render">{children}</List.Root>
        ),
      })

      const addTaskButton = wrapper.getByTestId('add-empty-task')
      await user.click(addTaskButton)
      const listData = useList.getState().data.lists['test-list-render']

      expect(listData.tasks).toHaveLength(1)
    })
  })

  describe('Conteúdo da Lista', () => {
    it('deve renderizar sem falhas', () => {
      const wrapper = render(<List.Content />, {
        wrapper: ({ children }) => (
          <List.Root id="test-list-render">{children}</List.Root>
        ),
      })

      expect(wrapper.container).toBeInTheDocument()
    })

    it('deve renderizar as tarefas corretamente', () => {
      const task = Task.create({
        id: 'task-1',
        title: 'Tarefa 1',
        description: 'Descrição 1',
      })
      useList.getState().actions.addTask('test-list-render', task)

      const wrapper = render(<List.Content />, {
        wrapper: ({ children }) => (
          <List.Root id="test-list-render">{children}</List.Root>
        ),
      })

      const taskElements = wrapper.queryAllByTestId(/task-item-/)
      expect(taskElements).toHaveLength(1)
    })

    it('não deve renderizar nada se não houver tarefas', () => {
      const wrapper = render(<List.Content />, {
        wrapper: ({ children }) => (
          <List.Root id="test-list-render">{children}</List.Root>
        ),
      })

      expect(wrapper.queryAllByTestId(/task-item-/)).toHaveLength(0)
    })

    it('deve renderizar a tarefa quando uma nova tarefa é adicionada', async () => {
      const task = Task.create({
        id: 'task-1',
        title: 'Tarefa 1',
        description: 'Descrição 1',
      })

      const wrapper = render(<List.Content />, {
        wrapper: ({ children }) => (
          <List.Root id="test-list-render">{children}</List.Root>
        ),
      })

      expect(wrapper.queryByTestId('task-item-task-1')).not.toBeInTheDocument()

      await act(() =>
        useList.getState().actions.addTask('test-list-render', task),
      )

      expect(wrapper.getByTestId('task-item-task-1')).toBeInTheDocument()
    })
  })
})
