/* eslint-env jest */
import { render, screen } from '@testing-library/react'
import { Billboard } from '../../src/components/Billboard'
import { BrowserRouter } from 'react-router-dom'

describe('Billboard component tests', () => {
  const testMovie = {
    genres: ['Action', 'Thriller', 'Crime'],
    id: 603692,
    image: '/h8gHn0OzBoaefsYseUByqsmEDMY.jpg',
    name: 'John Wick: Chapter 4',
    overview: 'With the price on his head ever increasing, John Wick uncovers a path to defeating The High Table. But before he can earn'
  }
  const finalImgUrl = 'https://image.tmdb.org/t/p/original/h8gHn0OzBoaefsYseUByqsmEDMY.jpg'

  test('should show the image of the movie provided', () => {
    render(
      <BrowserRouter>
        <Billboard movie={testMovie} />
      </BrowserRouter>
    )
    expect(screen.getByRole('img').src).toBe(finalImgUrl)
  })
  test('should show the title and description of the movie provided', () => {
    render(
      <BrowserRouter>
        <Billboard movie={testMovie} />
      </BrowserRouter>
    )
    expect(screen.getByText(testMovie.name)).toBeTruthy()
    expect(screen.getByText(testMovie.overview)).toBeTruthy()
  })
})
