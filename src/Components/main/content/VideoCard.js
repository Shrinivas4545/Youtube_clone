import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import React from 'react'

const VideoCard = ({ video }) => {
    // console.log(video);
    return (
        <Card
            component={Link}
            to={`/video/${video.videoId}`}
            onClick={window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
            })
            }
            sx={{
                width: { xs: '356px', ssm: '275px', sm: '290px', md: '320px' },
                backgroundColor: '#1e1e1e',
                height: '280px',
                '&:hover': {
                    transform: 'Scale(1.05,1.05)',
                    transition: 'transform 0.7s'
                }
            }}>
            <CardMedia
                sx={{ height: '62%', width: '100%' }}
                // image={video.snippet.thumbnails.medium.url}
                image={video.thumbnail[0].url}
                title=""
            />
            <CardContent>
                <Typography variant="subtitle1" fontWeight={700} sx={{ color: 'white', height: '50px', overflowY: 'hidden' }}>
                    {/* {video.snippet.title} */}
                    {video.title}
                </Typography>
                <Typography variant="body2" color="grey" textTransform={'capitalize'} sx={{ marginTop: '10px' }}>
                    {/* {video.snippet.channelTitle} */}
                    {video.channelTitle}
                </Typography>
            </CardContent>
        </Card >
    )
}

export default VideoCard