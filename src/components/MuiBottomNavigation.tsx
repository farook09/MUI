import React,{useState} from 'react'
import { BottomNavigation,BottomNavigationAction } from '@mui/material'
import { Home } from '@mui/icons-material'
import Favorite from '@mui/icons-material/Favorite'
import { Person } from '@mui/icons-material'

export const MuiBottomNavigation = () => {
	const [value,setValue]=useState(0)
  return (
	<BottomNavigation sx={{width:'100%',position:'absolute', bottom:0}}
	value={value} 
	onChange={(event,newValue)=>{setValue(newValue)}} 
	showLabels
	>
		<BottomNavigationAction label='Home' icon={<Home/>} />
		<BottomNavigationAction label='Favorites' icon={<Favorite/>} />
		<BottomNavigationAction label='Person' icon={<Person/>} />
	</BottomNavigation>
  )
}
