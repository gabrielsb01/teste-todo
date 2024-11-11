import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Task } from '~/components/ui/Task'
import { Task as ETask } from '~/entities/Task'

describe('Componente ui', () => {
  beforeEach(() => {
    Task.store.getState().actions.clear()
  })

  describe('Tarefa Raiz', () => {
    it('deve renderizar sem falhas', () => {
      const task = ETask.create({})
      const wrapper = render(<Task.Root task={task} />)

      expect(wrapper.container).toBeInTheDocument()
    })

    it('deve renderizar Raiz com os componentes Título e Descrição', () => {
      const task = ETask.create({})
      const wrapper = render(
        <Task.Root task={task}>
          <Task.Title />
          <Task.Description />
        </Task.Root>,
      )

      expect(wrapper.getByTestId('task-title')).toBeInTheDocument()
      expect(wrapper.getByTestId('task-description')).toBeInTheDocument()
    })
  })

  describe('Título da Tarefa', () => {
    it('deve renderizar sem falhas', () => {
      const task = ETask.create({})
      const wrapper = render(<Task.Title />, {
        wrapper: ({ children }) => (
          <Task.Root task={task}>{children}</Task.Root>
        ),
      })

      expect(wrapper.getByTestId('task-title')).toBeInTheDocument()
    })

    it('deve alterar o título da tarefa ao mudar o input', async () => {
      const user = userEvent.setup()
      const task = ETask.create({})

      const wrapper = render(<Task.Title />, {
        wrapper: ({ children }) => (
          <Task.Root task={task}>{children}</Task.Root>
        ),
      })

      const titleInput = wrapper.getByTestId('task-title') as HTMLInputElement
      await user.type(titleInput, 'Título da Tarefa Atualizado')

      expect(titleInput.value).toEqual('Título da Tarefa Atualizado')
      expect(titleInput.value).toBe('Título da Tarefa Atualizado')
    })
  })

  describe('Descrição da Tarefa', () => {
    it('deve renderizar sem falhas', () => {
      const task = ETask.create({})
      const wrapper = render(<Task.Description />, {
        wrapper: ({ children }) => (
          <Task.Root task={task}>{children}</Task.Root>
        ),
      })

      expect(wrapper.getByTestId('task-description')).toBeInTheDocument()
    })

    it('deve alterar a descrição da tarefa ao mudar o input', async () => {
      const user = userEvent.setup()
      const task = ETask.create({})

      const wrapper = render(<Task.Description />, {
        wrapper: ({ children }) => (
          <Task.Root task={task}>{children}</Task.Root>
        ),
      })

      const descriptionInput = wrapper.getByTestId(
        'task-description',
      ) as HTMLDivElement
      await user.type(descriptionInput, 'Descrição da Tarefa Atualizada')

      const taskData = Task.store.getState().data.tasks[task.id]

      expect(descriptionInput.innerHTML).toEqual('Descrição da Tarefa Atualizada')
      expect(taskData.description).toBe('Descrição da Tarefa Atualizada')
    })
  })
})
