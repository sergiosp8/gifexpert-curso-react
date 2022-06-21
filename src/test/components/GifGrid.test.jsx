import { render, screen } from '@testing-library/react'
import { GifGrid } from '../../components/GifGrid'
import { useFetchGifs } from '../../Hooks/useFetchGifs'

jest.mock('../../Hooks/useFetchGifs')

describe('Pruebas <GifGrid/>', () => {
  useFetchGifs.mockReturnValue({
    images: [],
    isLoading: true
  })
  const category = 'One Punch'
  test('Debe de mostrar el componente correctamente', () => {
    const { container } = render(<GifGrid category={category} />)
    expect(container).toMatchSnapshot()
  })

  test('debe de mostrar el loading inicialmente', () => {
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true
    })

    render(<GifGrid category={category} />)

    expect(screen.getByText('Loading...')).toBeTruthy()
  })

  test('debe de mostrar items cuando se cargan las imagenes useFetchGifs', () => {
    const gifs = [
      { id: 'ABC', title: 'Titulo 1', url: 'https://url.com' },
      { id: 'DEF', title: 'Titulo 2', url: 'https://url.com' },
      { id: 'GHI', title: 'Titulo 3', url: 'https://url.com' }
    ]

    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false
    })

    render(<GifGrid category={category} />)

    const imgs = screen.getAllByRole('img')

    expect(imgs.length).toBe(3)
  })
})
