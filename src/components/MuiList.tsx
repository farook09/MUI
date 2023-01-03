import React from 'react'
import {Box,List,ListItem,ListItemText,ListItemIcon,ListItemAvatar,Avatar,ListItemButton,Divider} from "@mui/material"
import { Mail } from '@mui/icons-material'

export const MuiList = () => {
  return (
	<Box sx={{width:'400px',bgcolor:'#efefef'}} >
		<List>
			<ListItem>
				<ListItemButton>
					<ListItemIcon>
						<ListItemAvatar>
							<Avatar><Mail></Mail></Avatar>
						</ListItemAvatar>
					</ListItemIcon>
				</ListItemButton>
				<ListItemText primary="List item 1" secondary="secondary text"  />
			</ListItem>
			<Divider></Divider>
			<ListItem>
				<ListItemButton>
					<ListItemIcon>
					<ListItemAvatar>
						<Avatar><Mail></Mail></Avatar>
					</ListItemAvatar>
				</ListItemIcon>
				</ListItemButton>
				<ListItemText primary="List item 2" secondary="secondary text" />
			</ListItem>
			<Divider></Divider>
			<ListItem>
				<ListItemButton>
					<ListItemIcon>
					<ListItemAvatar>
						<Avatar><Mail></Mail></Avatar>
					</ListItemAvatar>
				</ListItemIcon>
				</ListItemButton>
				<ListItemText primary="List item 3" 
				secondary="secondary text" />
			</ListItem>
		</List>
	</Box>
  )
}
