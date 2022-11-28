import React,{useState} from 'react'
import { Box,FormControlLabel,Checkbox,FormControl,FormGroup,FormLabel,FormHelperText } from '@mui/material'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'
import BookmarkIcon from '@mui/icons-material/Bookmark'

export const MuiCheckbox = () => {
	const[acceptInC,setAcceptInC]=useState(false)
	const[skills,setSkills]=useState<string[]>([])
	console.log({skills})
	const handleChange=(event:React.ChangeEvent<HTMLInputElement>)=>{
		setAcceptInC(event.target.checked)
	}
	const handleSkillChange=(event:React.ChangeEvent<HTMLInputElement>)=>{
		const index=skills.indexOf(event.target.value)
		if(index===-1){
			setSkills([...skills,event.target.value])
		}else{
			setSkills(skills.filter((skill)=>skill !== event.target.value))
		}
	}
  return (
	<Box>
		<Box>
			<FormControlLabel label='I accept terms and condition' 
			control={<Checkbox size='small'
			color='secondary' checked={acceptInC} onChange={handleChange}/>} />
		</Box>
		<Box>
			<Checkbox 
			icon={<BookmarkBorderIcon></BookmarkBorderIcon>} 
			checkedIcon={<BookmarkIcon />}
			checked={acceptInC}
			onChange={handleChange}
			/>
		</Box>
		<Box>
		<FormControl error >
			<FormLabel>Skills</FormLabel>
			<FormGroup row>
				<FormControlLabel 
				label='HTML' 
				control={<Checkbox value='html' 
				checked={skills.includes('html')} onChange={handleSkillChange}/>} />
				<FormControlLabel 
				label='Css'
				value='css'
				control={<Checkbox checked={skills.includes('css')} onChange={handleSkillChange}/>} />
				<FormControlLabel 
				label='Javascript'
				value='javascript' 
				control={<Checkbox checked={skills.includes('javascript')} onChange={handleSkillChange}/>} />
			</FormGroup>
			<FormHelperText>Invalid Selection</FormHelperText>
		</FormControl>
		</Box>
	</Box>
  )
}
