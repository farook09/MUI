import React from 'react'
import { Stack } from '@mui/system'
import { Alert,AlertTitle,Button } from '@mui/material'
import { Check } from '@mui/icons-material'
export const MuiAlert = () => {
  return (
	<Stack spacing={2} >
		<Alert severity="error" >This is an error Alert</Alert>
		<Alert severity="warning" >This is an warning Alert</Alert>
		<Alert severity="info" >This is an info Alert</Alert>
		<Alert severity="success" >This is an success Alert</Alert>

		<Alert variant='outlined' severity="error" >This is an error Alert</Alert>
		<Alert variant='outlined' severity="warning" >This is an warning Alert</Alert>
		<Alert variant='outlined' severity="info" >This is an info Alert</Alert>
		<Alert variant='outlined' severity="success" >This is an success Alert</Alert>

		<Alert variant='filled' severity="error" onClose={()=>alert('Close alert')} >
			<AlertTitle>Error</AlertTitle>
			This is an error Alert</Alert>
		<Alert variant='filled' severity="warning" >
			<AlertTitle>warning</AlertTitle>
			This is an warning Alert</Alert>
		<Alert variant='filled' severity="info" >
			<AlertTitle>info</AlertTitle>
			This is an info Alert</Alert>
		<Alert variant='filled' severity="success" icon={<Check fontSize='inherit' ></Check>}
		action={
			<Button color="inherit" size="small" >undo</Button>
		}
		>
			<AlertTitle>success</AlertTitle>
			This is an success Alert</Alert>
	</Stack>
  )
}
