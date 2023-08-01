// import defaultVideo from '../assets/netflix-intro.mp4'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Loader } from '../components/Loader'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ReactPlayer from 'react-player/youtube'
import { getOfficialTrailer } from '../utils/functions'
import { AngleLeftIcon } from '../components/icons/AngleLeftIcon'

export const Player = () => {
  const currentMedia = useSelector(state => state.netflix.currentPlaying)
  const navigate = useNavigate()
  const [video, setVideo] = useState(null)
  const BASE_URL = import.meta.env.VITE_TMDB_URL
  const KEY = import.meta.env.VITE_API_KEY
  const youtube = 'https://www.youtube.com/watch?v='

  useEffect(() => {
    const getMediaVideo = async () => {
      const { type, id } = currentMedia
      const { data } = await axios(`${BASE_URL}/${type}/${id}/videos?api_key=${KEY}`)
      const officialTrailer = getOfficialTrailer(data.results)
      if (!officialTrailer) {
        setVideo('/netflix-intro.mp4')
        return
      }
      const videoLink = `${youtube}${officialTrailer.key}`
      setVideo(videoLink)
    }
    getMediaVideo()
  }, [currentMedia])

  if (!video) {
    return (
      <div className='flex justify-center items-center h-screen'>
        <Loader />
      </div>
    )
  }
  return (
    <div className=''>
      <div className='w-screen h-screen'>
        <button
          className='absolute p-8 z-10 text-[3rem]'
          onClick={() => navigate(-1)}
        >
          <AngleLeftIcon />
        </button>
        {
          video !== '/netflix-intro.mp4'
            ? (
              <ReactPlayer width='100%' height='100%' url={video} playing loop muted />
              )
            : (
              <video className='h-full w-full object-cover' src={video} autoPlay loop controls muted />
              )
        }
      </div>
    </div>
  )
}
