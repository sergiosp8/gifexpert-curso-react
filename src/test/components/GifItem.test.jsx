import { render, screen } from '@testing-library/react'
import { GifItem } from '../../components/GifItem'

describe('Prubeas en <GifItem/>', () => {
  const title = 'title'
  const url = 'https://onepush.gif/'

  test('Debe corresponder con el snapshot', () => {
    const { container } = render(<GifItem title={title} url={url} />)

    expect(container).toMatchSnapshot()
  })

  test('debe de mostrar a imagen con el URL y ALT indicado', () => {
    render(<GifItem title={title} url={url} />)

    // expect(screen.getByRole('img').src).toBe(url)
    // expect(screen.getByRole('img').alt).toBe(title)
    const { src, alt } = screen.getByRole('img')
    expect(src).toBe(url)
    expect(alt).toBe(title)
  })

  test('el titulo debe mostrarse en el componente', () => {
    render(<GifItem title={title} url={url} />)

    expect(screen.getByText(title)).toBeTruthy()
  })
})
