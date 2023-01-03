import React from 'react'
import { Avatar,Stack,AvatarGroup } from '@mui/material'

export const MuiAvatar = () => {
  return (
	<Stack spacing={4} >
    <Stack direction='row' spacing={1} >
    <Avatar sx={{bgcolor:'primary.light'}} >BW</Avatar>
    <Avatar sx={{bgcolor:'success.light'}} >CK</Avatar>
    </Stack>
    <Stack direction='row' spacing={1} >
      <AvatarGroup max={3} >
    <Avatar sx={{bgcolor:'primary.light'}} >BW</Avatar>
    <Avatar sx={{bgcolor:'success.light'}} >CK</Avatar>
    <Avatar src='https://randomuser.me/api/portraits/men/86.jpg' ></Avatar>
    <Avatar src="https://randomuser.me/api/portraits/men/22.jpg" ></Avatar>
    </AvatarGroup>
    </Stack>
    <Stack direction='row' spacing={1} >
    <Avatar sx={{bgcolor:'primary.light',width:48, height:48}} >BW</Avatar>
    <Avatar sx={{bgcolor:'success.light',width:48, height:48}} >CK</Avatar>
    </Stack>
  </Stack>
  )
}
