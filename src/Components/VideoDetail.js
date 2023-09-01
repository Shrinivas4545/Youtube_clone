import { Stack, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player/youtube';
import { useParams } from 'react-router-dom'
import RelatedVideo from './RelatedVideo';

const VideoDetail = () => {
  const videoId = useParams().id;
  const [videoDetails, setVideoDetails] = useState({})

  const options = {
    method: 'GET',
    url: 'https://youtube-v3-alternative.p.rapidapi.com/video',
    params: { id: videoId },
    headers: {
      'X-RapidAPI-Key': '47995eb5e1msh8081f490d2b2f89p1dced0jsn976653c1514a',
      'X-RapidAPI-Host': 'youtube-v3-alternative.p.rapidapi.com'
    }
  };

  const fetchVideoDetails = async () => {
    try {
      const response = await axios.request(options);
      setVideoDetails(response.data);
      console.log(response.data)
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchVideoDetails()
  }, [videoId])

  return (
    <Stack
      mt={3}
      sx={{
        padding: "5px",
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-around'
      }}>
      <Stack direction={'column'}>
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${videoId}`}
          controls
          width={
            window.innerWidth >= 764 && window.innerWidth < 900 ?
              window.innerWidth - 320
              :
              window.innerWidth >= 900 ?
                window.innerWidth - 400
                :
                '100%'}
          height={window.innerWidth >= 900 ? '550px' : '350px'}
        />
        {videoDetails &&
          <Typography
            variant='h6'
            fontWeight={600}
            gutterBottom
            sx={{
              width:
                window.innerWidth >= 764 && window.innerWidth < 900 ?
                  window.innerWidth - 320
                  :
                  window.innerWidth >= 900 ?
                    window.innerWidth - 400
                    :
                    '100%',
              overflow: 'hidden',

            }}
            mt={{ xs: '5px', sm: '10px', md: '15px' }}
          >
            {videoDetails.title}
          </Typography>
        }
        <Typography variant="body2" color="grey" textTransform={'capitalize'}>
          {videoDetails.channelTitle}
        </Typography>
      </Stack>
      <Stack>
        <RelatedVideo videoId={videoId} />
      </Stack>
    </Stack>
  )
}

export default VideoDetail