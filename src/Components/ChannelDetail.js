import { Stack, Typography } from '@mui/material'
import Skeleton from '@mui/material/Skeleton';
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import VideoCard from './main/content/VideoCard'
import Loading from './Loading';

const ChannelDetail = () => {
  const channelId = useParams();
  const [channelVideo, setChannelVideo] = useState([])
  const channelDetailsStore = useSelector(state => state.selectedCategory.channelDetails)
  const options = {
    method: 'GET',
    url: 'https://youtube-v3-alternative.p.rapidapi.com/channel',
    params: {
      id: channelId.id
    },
    headers: {
      'X-RapidAPI-Key': '47995eb5e1msh8081f490d2b2f89p1dced0jsn976653c1514a',
      'X-RapidAPI-Host': 'youtube-v3-alternative.p.rapidapi.com'
    }
  };

  const fetchChannelDetails = async () => {
    debugger
    try {
      const response = await axios.request(options);
      setChannelVideo(response.data.data)
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchChannelDetails()
  }, [channelId])

  return (
    <Stack direction={'column'} sx={{ backgroundColor: 'black' }} mt={2}>
      <img src={channelDetailsStore.thumbnail[1].url} alt='channel profile'
        style={{
          width: '180px',
          height: '180px',
          marginLeft: 'auto',
          marginRight: 'auto',
          borderRadius: '50%',
        }}
      />
      <Typography sx={{
        marginLeft: 'auto', // Center horizontally by pushing to the right
        marginRight: 'auto',
        marginTop: '15px',
        color: 'white'
      }}>{channelDetailsStore.title}</Typography>
      <Typography sx={{
        marginLeft: 'auto', // Center horizontally by pushing to the right
        marginRight: 'auto',
        marginTop: '5px',
        opacity: 0.8,
        color: 'grey'
      }}>{channelDetailsStore.subscriberCount}</Typography>

      <Stack sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around', marginTop: '15px' }} rowGap={2}>
        {
          channelVideo.length !== 0 ?
            channelVideo.map((video) => (
              <VideoCard video={video} />
              
            ))
            :
            <Loading />
        }
      </Stack>

    </Stack>
  )
}

export default ChannelDetail