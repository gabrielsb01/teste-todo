import { useEffect, useRef } from 'react'
import { useTaskContext } from './TaskProvider'
import { useTask } from './useTask'

const taskActions = useTask.getState().actions

export function TaskDescription() {
  const { task } = useTaskContext()
  const descriptionRef = useRef<HTMLDivElement | null>(null)
  const cursorPosition = useRef<number | null>(null)

  const hasDescription = useTask((st) => st.data.tasks[task.id]?.description)
  const status = useTask((st) => st.data.tasks[task.id]?.status)
  const showPlaceholder = !hasDescription && status !== 'done'

  useEffect(() => {
    if (descriptionRef.current && task.description) {
      descriptionRef.current.textContent = task.description
    }
  }, [])

  const handleInput = (e: React.FormEvent<HTMLDivElement>) => { 
    const newValue = e.currentTarget.textContent
    task.description = newValue || ''
    taskActions.changeDescription(task.id, newValue || '')

    const selection = window.getSelection()
    if (selection && descriptionRef.current && cursorPosition.current !== null) {
      selection.collapse(descriptionRef.current.firstChild, cursorPosition.current)
    }
  }

  const handleKeyUp = () => {
    const selection = window.getSelection()
    if (selection && selection.rangeCount > 0) {
      cursorPosition.current = selection.getRangeAt(0).startOffset
    }
  }

  return (
    <div className="relative w-full group-data-[status=done]:opacity-50">
      {showPlaceholder && (
        <span className="pointer-events-none absolute left-0 top-0 min-h-4 w-full pl-8 text-zinc-500">
          Descrição
        </span>
      )}
      <div
        ref={descriptionRef}
        role="textbox"
        data-testid="task-description"
        aria-label="Notas"
        contentEditable="true"
        aria-multiline="true"
        className="min-h-4 w-full pl-8 text-zinc-700 outline-none group-data-[status=done]:pointer-events-none group-data-[status=done]:line-through"
        onInput={handleInput}
        onKeyUp={handleKeyUp}
        suppressContentEditableWarning={true}
      />
    </div>
  )
}
