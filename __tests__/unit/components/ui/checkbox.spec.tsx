import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { CheckboxRoot } from '~/components/ui/Checkbox/CheckboxRoot'

const onCheckboxChangeCallback = vi.fn()

describe('Componente ui', () => {
  beforeEach(() => {
    onCheckboxChangeCallback.mockClear()
  })

  describe('Checkbox', () => {
    it('deve renderizar sem falhas', () => {
      const wrapper = render(<CheckboxRoot id="test-checkbox-render" />)
      const checkbox = wrapper.getByRole('checkbox')

      expect(checkbox).toBeInTheDocument()
    })

    it('deve chamar onChange ao ser clicado', async () => {
      const user = userEvent.setup()

      const wrapper = render(
        <CheckboxRoot
          id="test-checkbox-onChange"
          onChange={onCheckboxChangeCallback}
        />,
      )
      const checkbox = wrapper.getByRole('checkbox')
      await user.click(checkbox)

      expect(onCheckboxChangeCallback).toHaveBeenCalledWith(true)
    })

    it('deve estar marcado por padrão', () => {
      const wrapper = render(
        <CheckboxRoot
          id="test-checkbox-defaultChecked"
          defaultChecked={true}
        />,
      )
      const checkbox = wrapper.getByRole('checkbox')
      expect(checkbox).toBeChecked()
    })

    it('deve mudar o status ao ser clicado', async () => {
      const user = userEvent.setup()

      const wrapper = render(<CheckboxRoot id="test-checkbox-change-status" />)
      const checkbox = wrapper.getByRole('checkbox')

      await user.click(checkbox)
      expect(checkbox).toBeChecked()

      await user.click(checkbox)
      expect(checkbox).not.toBeChecked()
    })
  })
})
