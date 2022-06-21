import { render, screen, fireEvent } from '@testing-library/react'
import { GifExpertApp } from '../GifExpertApp'

describe('Prueba <GifExpertApp', () => {
  test('debe de mostrar el componente igual al snapshot', () => {
    const { container } = render(<GifExpertApp />)
    expect(container).toMatchSnapshot()
  })

  test('El estado debe de tener una categoría por defecto', () => {
    render(<GifExpertApp />)
    expect(screen.getByText('One Punch')).toBeTruthy()
  })

  test('Debe de agregar una nueva categoría', () => {
    render(<GifExpertApp />)
    screen.debug()
    const input = screen.getByRole('textbox')
    fireEvent.change(input, { target: { value: 'Dragon Ball' } })
    fireEvent.keyDown(input, { key: 'Enter', keyCode: 13 })
  })
})
