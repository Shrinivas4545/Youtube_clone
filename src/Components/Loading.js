import { Skeleton, Stack } from '@mui/material'
import React from 'react'

const Loading = () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
    return (
        <Stack sx={{ width: '100%', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around', marginTop: '15px' }} rowGap={2}>
            {
                arr.map(() => (
                    <Skeleton variant="rounded"
                        sx={{
                            bgcolor: 'grey.900',
                            width: { xs: '356px', ssm: '275px', sm: '290px', md: '320px' }
                        }}
                        height={300} />
                ))
            }

        </Stack>
    )
}

export default Loading