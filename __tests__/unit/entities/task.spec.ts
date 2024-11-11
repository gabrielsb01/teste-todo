import { Task } from '~/entities/Task'

describe('Entidade', () => {
  describe('Tarefa', () => {
    it('deve criar uma tarefa com valores padrão', () => {
      const task = Task.create({})

      expect(task.id).toBeDefined()
      expect(task.status).toBe('pending')
      expect(task.title).toBe('Nova task')
      expect(task.description).toBeUndefined()
    })

    it('deve criar uma tarefa com valores fornecidos', () => {
      const task = Task.create({
        id: '123',
        status: 'done',
        title: 'Tarefa de Teste',
        description: 'Esta é uma tarefa de teste',
      })

      expect(task.id).toBe('123')
      expect(task.status).toBe('done')
      expect(task.title).toBe('Tarefa de Teste')
      expect(task.description).toBe('Esta é uma tarefa de teste')
    })

    it('deve atualizar o título da tarefa', () => {
      const task = Task.create({})
      task.title = 'Título da Tarefa Atualizado'

      expect(task.title).toBe('Título da Tarefa Atualizado')
    })

    it('deve atualizar o status da tarefa', () => {
      const task = Task.create({})
      task.status = 'pending'

      expect(task.status).toBe('pending')
    })

    it('deve atualizar a descrição da tarefa', () => {
      const task = Task.create({})
      task.description = 'Descrição Atualizada'

      expect(task.description).toBe('Descrição Atualizada')
    })
  })
})
