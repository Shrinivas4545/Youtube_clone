import { Stack, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player/youtube';
import { Link, useParams } from 'react-router-dom'
import RelatedVideo from './RelatedVideo';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

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
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: "center"
      }}>
      <Stack direction={'column'} width={{ lg: "70%" }} height={{ sm: "350px", lg: "600px" }}>
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${videoId}`}
          controls
          width={"100%"}
          height={"100%"}
        />
        {videoDetails &&
          <Typography
            variant='h6'
            fontWeight={600}
            gutterBottom
            sx={{
              // overflow: 'hidden',
            }}
            mt={{ xs: '5px', sm: '10px', md: '15px' }}
          >
            {videoDetails.title}
          </Typography>
        }
        <Link to={`/channel/${videoDetails.channelId}`} style={{ textTransform: 'none', textDecoration: 'none' }} >
          <Stack direction={"row"}>
            <AccountCircleIcon />
            <Typography variant="body2" color="grey" textTransform={'capitalize'} ml={1} mt={0.25}>
              {videoDetails.channelTitle}
            </Typography>
          </Stack>
        </Link>
      </Stack>
      <Stack>
        <RelatedVideo videoId={videoId} />
      </Stack>
    </Stack>
  )
}

export default VideoDetail