import { Button, Stack, Typography } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { setChannelDetails } from '../../../Redux/Category/actionCategory';

const ChannelCard = ({ video }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
     
    const handleClk = () => {
    dispatch(setChannelDetails(video));
    navigate(`/channel/${video.channelId}`)
    }

    return (
        <Stack
            component={Button}
            onClick={() => handleClk()}
            sx={{
                width: { xs: '356px', ssm: '275px', sm: '290px', md: '320px' },
                backgroundColor: '#1e1e1e',
                height: '270px',
                paddingTop: '10px',
                textDecoration: 'none',
                '&:hover': {
                    transform: 'Scale(1.05,1.05)',
                    transition: 'transform 0.7s'
                }
            }}
        >
            <img src={video.thumbnail[1].url} alt='channel profile'
                style={{
                    width: '180px',
                    height: '180px',
                    marginLeft: 'auto', // Center horizontally by pushing to the right
                    marginRight: 'auto',
                    borderRadius: '50%',
                }}
            />

            <Typography sx={{
                marginLeft: 'auto', // Center horizontally by pushing to the right
                marginRight: 'auto',
                marginTop: '15px',
                color: 'white'
            }}>{video.title}</Typography>
            <Typography sx={{
                marginLeft: 'auto', // Center horizontally by pushing to the right
                marginRight: 'auto',
                marginTop: '10px',
                opacity: 0.8,
                color: 'grey'
            }}>{video.subscriberCount}</Typography>


        </Stack>
    )
}

export default ChannelCard