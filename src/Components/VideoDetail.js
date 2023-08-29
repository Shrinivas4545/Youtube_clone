import { Stack } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player/youtube';
import { useParams } from 'react-router-dom'

const VideoDetail = () => {
  const videoId = useParams().id;
  const [videoToPlay, setVideoToPlay] = useState(null)

  const options = {
    method: 'GET',
    url: 'https://youtube-v3-alternative.p.rapidapi.com/video',
    params: {id: videoId},
    headers: {
      'X-RapidAPI-Key': '47995eb5e1msh8081f490d2b2f89p1dced0jsn976653c1514a',
      'X-RapidAPI-Host': 'youtube-v3-alternative.p.rapidapi.com'
    }
  };

  const fetchVideoDetails = async () => {
    try {
      const response = await axios.request(options);
      console.log(response.data);
      setVideoToPlay(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchVideoDetails()
  }, [])

  return (
    <Stack sx={{height: '96vh'}}>
      <ReactPlayer 
        url={`https://www.youtube.com/watch?v=${videoId}`} 
        controls
        
        />
    </Stack>
  )
}

export default VideoDetail