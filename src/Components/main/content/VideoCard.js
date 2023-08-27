import {Card, CardContent, CardMedia,Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import React from 'react'
import { Scale } from '@mui/icons-material'

const VideoCard = ({ videos }) => {
    return (
        <Card
            component={Link}
            to={"/"}
            sx={{
                width: { xs: '356px', ssm: '275px', sm: '290px', md: '320px' },
                backgroundColor: '#1e1e1e',
                height: '320px',
                '&:hover': {
                    transform: 'Scale(1.05,1.05)',
                    transition: 'transform 0.7s'
                }
            }}>
            <CardMedia
                sx={{ height: '60%', width: '100%' }}
                image={videos.snippet.thumbnails.medium.url}
                title=""
            />
            <CardContent>
                <Typography variant="subtitle1" fontWeight={700} sx={{ color: 'white', height: '50px', overflowY: 'hidden' }}>
                    {/* {videos.snippet.title.slice(0,40)} */}
                    {videos.snippet.title}
                </Typography>
                <Typography variant="body2" color="grey" textTransform={'capitalize'} sx={{ marginTop: '10px' }}>
                    {videos.snippet.channelTitle}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default VideoCard