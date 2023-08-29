import { Box, Stack, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import VideoCard from './VideoCard';

const Content = () => {
  const selectedCategory = useSelector(state => state.selectedCategory.selectedCategory);
  const [videos, setVideos] = useState([]);

  // const options = {
  //   method: 'GET',
  //   url: 'https://youtube-v31.p.rapidapi.com/search',
  //   params: {
  //     q: selectedCategory,
  //     part: 'snippet,id',
  //     maxResults: '50',
  //     order: 'date'
  //   },
  //   headers: {
  //     'X-RapidAPI-Key': '47995eb5e1msh8081f490d2b2f89p1dced0jsn976653c1514a',
  //     'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  //   }
  // }

  const options = {
    method: 'GET',
    url: 'https://youtube-v3-alternative.p.rapidapi.com/search',
    params: {
      query: selectedCategory,
      geo: 'US',
      lang: 'en'
    },
    headers: {
      'X-RapidAPI-Key': '47995eb5e1msh8081f490d2b2f89p1dced0jsn976653c1514a',
      'X-RapidAPI-Host': 'youtube-v3-alternative.p.rapidapi.com'
    }
  };

  const fetchVideos = async () => {
    try {
      const response = await axios.request(options);
      console.log(response.data.data);
      // setVideos(response.data.items);
      setVideos(response.data.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    setVideos([]);
    fetchVideos();
  }, [selectedCategory])


  return (
    <Box /*sx={{ height: '92vh' }}*/>
      <Typography variant='h5' fontWeight={700} mb={2} ml={2}>
        <span style={{ color: 'red' }}>{selectedCategory}</span> Videos...
      </Typography>
      <Stack sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around' }} rowGap={2}>
        {videos.length !== 0 ?
          videos.map((video) => (
            <VideoCard videos={video} />
          ))
            :
            <h1>loading...</h1>
        }
      </Stack>
    </Box>
  )
}

export default Content