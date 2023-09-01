import axios from 'axios';
import React, { useEffect, useState } from 'react'
import VideoCard from './main/content/VideoCard';
import { Stack, Typography } from '@mui/material';

const RelatedVideo = ({ videoId }) => {
    const [relatedVideos, setRelatedVideos] = useState([])

    const options = {
        method: 'GET',
        url: 'https://youtube-v3-alternative.p.rapidapi.com/related',
        params: {
            id: videoId,
            geo: 'US',
            lang: 'en'
        },
        headers: {
            'X-RapidAPI-Key': '47995eb5e1msh8081f490d2b2f89p1dced0jsn976653c1514a',
            'X-RapidAPI-Host': 'youtube-v3-alternative.p.rapidapi.com'
        }
    };

    const fetchRelatedVideos = async () => {
        try {
            const response = await axios.request(options);
            setRelatedVideos(response.data.data)
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchRelatedVideos()
    }, [])

    return (
        <Stack
            sx={{
                display: 'flex',
                flexDirection: { xs: 'row', sm: 'column' },
                flexWrap: 'wrap',
                justifyContent: 'space-around',
                backgroundColor: 'black'
            }}
            rowGap={2}>
            <Typography variant='h5'
                sx={{
                    width: '100%',
                    borderTop: '1px solid #3d3d3d',
                    marginTop: {xs: '15px', sm:'none'},
                    paddingTop: {xs: '5px'}
                }} fontWeight={700}>
                <span style={{ color: 'red' }}>Related</span> Videos...
            </Typography>
            {relatedVideos.map((video) => (
                <VideoCard video={video} />
            ))
            }
        </Stack>
    )
}

export default RelatedVideo