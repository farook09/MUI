import { Stack,TextField,InputAdornment } from "@mui/material"
import {useState} from 'react'

export const MuiTextField = () => {
	const [value,setValue]=useState('')
  return (
	<Stack spacing={4}>
		<Stack direction='row' spacing={2} >
			<TextField label='Name' variant='outlined' ></TextField>
			<TextField label='Name' variant="filled" ></TextField>
			<TextField label='Name' variant="standard" ></TextField>
		</Stack>
		<Stack direction='row' spacing={2} >
			<TextField label='Small secondary'  
			size='small' color='secondary'
			variant="outlined" ></TextField>
		</Stack>
		<Stack direction='row' spacing={2} >
			<TextField label='Form Input' 
			value={value}
			onChange={e=>setValue(e.target.value)}
			error={!value}
			helperText={!value?'Required':'Dont share password'}
			></TextField>
			<TextField label='Password'
			type='password'  
			helperText='Do not show your password'></TextField>
			<TextField label='ReadOnly'  
			InputProps={{readOnly:true}}></TextField>
			<TextField label='number'  
			type='number'></TextField>
		</Stack>
		<Stack direction='row' spacing={2}>
		<TextField label='Amount' InputProps={{
			startAdornment:<InputAdornment position='start' >$</InputAdornment>,
		}} ></TextField>
		<TextField label='Weight' 
		InputProps={{
			endAdornment:<InputAdornment position='end'>Kg</InputAdornment>
		}}
		></TextField>
		</Stack>
	</Stack>
  )
}
