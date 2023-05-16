/* eslint-env jest */
import { BrowserRouter } from 'react-router-dom'
import { Card } from '../../src/components/Card'
import { render, screen } from '@testing-library/react'

describe('Card component tests', () => {
  const testMovie = {
    genres: ['Action', 'Thriller', 'Crime'],
    id: 603692,
    image: '/h8gHn0OzBoaefsYseUByqsmEDMY.jpg',
    name: 'John Wick: Chapter 4',
    overview: 'With the price on his head ever increasing, John Wick uncovers a path to defeating The High Table. But before he can earn'
  }
  const finalImgUrl = 'https://image.tmdb.org/t/p/w500/h8gHn0OzBoaefsYseUByqsmEDMY.jpg'

  test('should show the image from the movie provided', () => {
    render(
      <BrowserRouter>
        <Card movie={testMovie} />
      </BrowserRouter>
    )
    const imgCard = screen.getByTestId('img-card')
    expect(imgCard.src).toBe(finalImgUrl)
  })
  test('should show the genres of the movie', () => {
    const { getAllByRole } = render(
      <BrowserRouter>
        <Card movie={testMovie} />
      </BrowserRouter>
    )
    const genresList = getAllByRole('listitem')
    // Check that the 3 genres are displayed
    expect(genresList).toHaveLength(testMovie.genres.length)
    // Check that the genres have the correct text
    genresList.forEach((genre, index) => {
      expect(genre.textContent).toBe(testMovie.genres[index])
    })
  })
})
