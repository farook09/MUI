import React,{useState} from 'react'
import {Stack,Button,
IconButton,
ButtonGroup,
ToggleButtonGroup,
ToggleButton,
} from '@mui/material'
import SendIcon from '@mui/icons-material/Send';
import FormatBoldIcon from '@mui/icons-material/FormatBold'
import FormatItalicIon from '@mui/icons-material/FormatItalic'
// import FromatUnderLinedIcon from '@mui/icons-material/FormatUnderlined'
import { FormatUnderlined } from '@mui/icons-material';

export const MuiButton = () => {
const[formats,setFormats]=useState<string|null>(null);
console.log(formats);
const handleFormatChange=(_event:React.MouseEvent<HTMLElement>,updatedFormats:string|null)=>{
	setFormats(updatedFormats)
}
  return (
	<Stack spacing={4} >
		<Stack spacing={2} direction='row' >
		<Button variant='text' >Text</Button>
		<Button variant='contained'>Contained</Button>
		<Button variant="outlined" >Outlined</Button>
	</Stack>
	<Stack spacing={2} direction='row' >
		<Button variant='contained' color='primary' >Primary</Button>
		<Button variant='text' color='secondary' >secondary</Button>
		<Button variant='outlined' color='error' >Error</Button>
		<Button variant='contained' color='warning' >Warning</Button>
		<Button variant='contained' color='info' >Info</Button>
		<Button variant='contained' color='success' >Success</Button>
	</Stack>
	<Stack display='block' spacing={2} direction='row' >
		<Button variant='contained' size='small' >
		Small
		</Button>
		<Button variant='contained' size='medium' >
		Medium
		</Button>
		<Button variant='contained' size='large' >
		Large
		</Button>
	</Stack>
	<Stack spacing={2} direction='row'>
		<Button variant='contained' startIcon={<SendIcon></SendIcon>} disableRipple onClick={()=>alert('Clicked')} >Send</Button>
		<Button variant='contained' endIcon={<SendIcon></SendIcon>} disableElevation  >Send</Button>
		<IconButton aria-label='send' color='success' size='small' >
			<SendIcon></SendIcon>
		</IconButton>
	</Stack>
	<Stack direction='row' >
		<ButtonGroup variant='outlined' orientation='vertical' size='small'  >
		<Button>Left </Button>
		<Button>Center </Button>
		<Button>Right </Button>
		</ButtonGroup>
	</Stack>
	<Stack direction='row' >
	<ToggleButtonGroup aria-label='text formatting' 
	value={formats} onChange={handleFormatChange} 
	size='small'
	color='success'
	orientation='vertical'
	exclusive
	>

	<ToggleButton value='bold' aria-label='bold' ><FormatBoldIcon></FormatBoldIcon></ToggleButton>
	<ToggleButton value='italic' aria-label='italic' ><FormatItalicIon></FormatItalicIon></ToggleButton>
	<ToggleButton value='underlined' aria-label='underlined' ><FormatUnderlined></FormatUnderlined></ToggleButton>
	<ToggleButton value='underlined' aria-label='underlined' ><FormatUnderlined></FormatUnderlined></ToggleButton>
	</ToggleButtonGroup>
	</Stack>
	</Stack>
	
  )
}
