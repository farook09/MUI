import React from 'react'
import { SpeedDial,SpeedDialAction,SpeedDialIcon } from '@mui/material'
import { CopyAll } from '@mui/icons-material'
import { Print } from '@mui/icons-material'
import { Share } from '@mui/icons-material'
import { Edit } from '@mui/icons-material'
export const MuiSpeedDail = () => {
  return (
	<SpeedDial ariaLabel='Navigation speed dial' sx={{position:'absolute',bottom:16,right:16}} icon={<SpeedDialIcon openIcon={<Edit/>} />} >
		<SpeedDialAction icon={<CopyAll/>} tooltipTitle='CopyAll' tooltipOpen/>
		<SpeedDialAction icon={<Print/>} tooltipTitle='Print' tooltipOpen/>
		<SpeedDialAction icon={<Share/>} tooltipTitle='Share' tooltipOpen/>
	</SpeedDial>
  )
}
