import React from 'react'
import { Stack,Link,Typography,Breadcrumbs } from '@mui/material'

export const MUILink = () => {
  return (
	<Stack spacing={2} direction='row' m={4}>
		<Link href='#' variant='body2' >Link</Link>
	<Typography  variant='h6' >
	<Link href='#' color='secondary' underline='none'  >Secondary</Link>
	</Typography>
	<Typography variant='h3' >
		<Link href='#' color='error' underline='none' >Error</Link>
	</Typography>
	</Stack>
  )
}
