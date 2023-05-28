export const getRandomMovie = (movies) => {
  const randomIndex = Math.floor(Math.random() * movies.length)
  const randomMovie = movies[randomIndex]
  return randomMovie
}
// Function to search among all the videos of a movie and return the one that contains in its name the word Official
export const getOfficialTrailer = (videos) => {
  const officialTrailer = videos.find(video => video.name.includes('Official'))
  return officialTrailer
}
