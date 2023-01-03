import React,{useState} from 'react'
import { Stack,Chip,Avatar } from '@mui/material'
import { Face } from '@mui/icons-material'

export const MuiChip = () => {
	const[chips,setChips]=useState(['Chip 1','Chip 2','Chip 3'])
	const handleDelete=(chipToDelete:string)=>{
		setChips(chips=>chips.filter((chip)=>chip!==chipToDelete))
	}
  return (
	<Stack direction='row' spacing={1} >
		<Chip label='Chip' color='primary' size='small' icon={<Face></Face>} ></Chip>
		<Chip label='Chip Outlined' color='secondary' size='small' variant='outlined' avatar={<Avatar>V</Avatar>} ></Chip>
		<Chip label="Click" color='success' onClick={()=>alert("CLicked")} ></Chip>
		<Chip label="Delete" color='error' onDelete={()=>alert('Delete handler called')} ></Chip>
		{
			chips.map(chip=>(
				<Chip key={chip} label={chip} onDelete={()=>handleDelete(chip)} ></Chip>
			))
		}
	</Stack>
  )
}
