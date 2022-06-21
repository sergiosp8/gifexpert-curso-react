import { useFetchGifs } from '../Hooks/useFetchGifs'
import { GifItem } from './GifItem'

export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category)

  return (
    <>
      <h3>{category}</h3>
      {isLoading && <p>Loading...</p>}
      <div className="card-grid">
        {images.map((image) => (
          <GifItem key={image.id} {...image} />
        ))}
      </div>
    </>
  )
}
