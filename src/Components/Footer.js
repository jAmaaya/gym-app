import { Typography } from '@mui/material'
import { Box, Stack } from '@mui/system'
import React from 'react'

const Footer = () => {
  return (
    <Stack position="row">
    
    <Typography sx={{ fontSize: { lg: '44px', xs: '25px' }, ml: '20px', mt: { lg: '100px', xs: '60px' } }} fontWeight={700} color="#000" mb="10px">Amaaya page</Typography>
    <Typography sx={{ ml: '20px', opacity: '0.5' }} mb="33px">Copyright 2023</Typography>
    </Stack>
  )
}

export default Footer