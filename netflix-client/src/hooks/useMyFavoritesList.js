import { useDispatch, useSelector } from 'react-redux'
import { addToFavorites, removeFromFavorites } from '../store'
import { useEffect, useState } from 'react'

export const useMyFavoritesList = ({ movie }) => {
  const [isOnFavorites, setIsOnFavorites] = useState(false)
  const myList = useSelector(state => state.netflix.myList)
  const dispatch = useDispatch()

  useEffect(() => {
    const isFavorite = myList.some(item => item.name === movie.name)
    setIsOnFavorites(isFavorite)
  }, [])

  const changeListStatus = () => {
    console.log(isOnFavorites)
    if (!isOnFavorites) {
      dispatch(addToFavorites(movie))
      setIsOnFavorites(true)
    } else {
      dispatch(removeFromFavorites(movie))
      setIsOnFavorites(false)
    }
  }

  return { isOnFavorites, changeListStatus }
}
