import React from 'react'
import { Stack} from '@mui/system'
import { Mail } from '@mui/icons-material'
import { Badge } from '@mui/material'
import { Notifications } from '@mui/icons-material'

export const MuiBadge = () => {
  return (
	<Stack spacing={2} direction='row' >
		<Badge badgeContent={5} color='primary' >
			<Mail></Mail>
		</Badge>
		<Badge badgeContent={0} color='secondary' showZero >
			<Notifications></Notifications>
		</Badge>
		<Badge badgeContent={100} color='secondary' max={999} showZero >
			<Mail></Mail>
		</Badge>
		<Badge badgeContent={5} variant='dot' color='primary' invisible={false} >
			<Mail></Mail>
		</Badge>
	</Stack>
  )
}
