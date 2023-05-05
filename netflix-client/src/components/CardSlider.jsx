import { Card } from './Card'

export const CardSlider = ({ data, title }) => {
  return (
    <div>
      {
        data.map((movie, index) => (
          <Card key={`${movie}_${index}`} movie={movie} />
        ))
      }
    </div>
  )
}
