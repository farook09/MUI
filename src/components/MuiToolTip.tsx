import React from 'react'
import { Tooltip,IconButton } from '@mui/material'
import { Delete } from '@mui/icons-material'

export const MuiToolTip = () => {
  return (
	<Tooltip title='Delete' placement='right' arrow enterDelay={500} leaveDelay={500} >
		<IconButton>
		<Delete></Delete>
	</IconButton>
	</Tooltip>
	
  )
}
