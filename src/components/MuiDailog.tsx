import React,{useState} from 'react'
import { Button,Dialog,DialogTitle,DialogContent,DialogContentText,DialogActions } from '@mui/material'

export const MuiDailog = () => {
	const [open,setOpen]=useState(false)
  return (
	<>
	<Button onClick={()=>setOpen(true)} >Open dialog</Button>
	<Dialog  
	open={open}
	onClose={()=>setOpen(false)}
	aria-labelledby='dialog-title' aria-describedby='dialog-description' >
		<DialogTitle id="dialog-title" sx={{backgroundColor:'black',color:'white',borderRadius:'10px'}} >Submit the test?</DialogTitle>
		<DialogContent>
			<DialogContentText id='dialog-description'>
				Are you able to submit the test ?You will not be able to edit after submitting.
			</DialogContentText>
		</DialogContent>
		<DialogActions>
			<Button onClick={()=>setOpen(false)} >Cancle</Button>
			<Button onClick={()=>setOpen(false)} autoFocus >Submit</Button>
		</DialogActions>
	</Dialog>
	</>
  )
}
