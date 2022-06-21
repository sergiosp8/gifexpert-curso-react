import { renderHook, waitFor } from '@testing-library/react'
import { useFetchGifs } from '../../Hooks/useFetchGifs'

describe('Pruebas useFetchGifs', () => {
  test('debe de regresar el estado inicial', () => {
    const { result } = renderHook(() => useFetchGifs('One Punch'))
    const { images, isLoading } = result.current

    expect(images).toEqual([])
    expect(isLoading).toBe(true)
  })

  test('debe de regresar un arreglo de imagenes y un booleano', async () => {
    const { result } = renderHook(() => useFetchGifs('One Punch'))
    await waitFor(() => expect(result.current.images.length).toBeGreaterThan(0))
    const { images, isLoading } = result.current

    expect(images.length).toBeGreaterThan(0)
    expect(isLoading).toBeFalsy()
  })
})
