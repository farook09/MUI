import React from 'react'
import { Box,Card,CardContent,Typography,CardActions,Button,CardMedia } from '@mui/material'

export const MUICard = () => {
  return (
	<Box width='300px' >
		<Card>
			<CardMedia 
			component='img'
			height='140'
			image='https://source.unsplash.com/random'
			alt='unsplash image'
			>

			</CardMedia>
			<CardContent>
				<Typography gutterBottom variant='h5' component='div' >React</Typography>
				<Typography variant='body2' color='text.secondary' >
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero optio rerum tempora unde nobis atque totam, nesciunt neque facere, recusandae voluptatem sapiente illum harum provident?
				</Typography>
			</CardContent>
			<CardActions>
				<Button size='small' >Share</Button>
				<Button size='small' >Learn More</Button>
			</CardActions>
		</Card>
	</Box>
  )
}
