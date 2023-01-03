import React from 'react'
import { TableContainer,Table,TableHead,TableBody,TableRow,TableCell,Paper } from '@mui/material'

export const MuiTable = () => {
  return (
	<TableContainer component={Paper} sx={{maxHeight:'300px'}} >
		<Table aria-label='simple table' stickyHeader >
			<TableHead>
				<TableRow>
					<TableCell>Id</TableCell>
					<TableCell>First name</TableCell>
					<TableCell>Last name</TableCell>
					<TableCell align='center' >Email</TableCell>
				</TableRow>
			</TableHead>
			<TableBody>
				{
					tableData.map(row=>(
						<TableRow 
						key={row.id} 
						sx={{'&:last-child td,&:last-child th':{border:0}}} >
							<TableCell>{row.id}</TableCell>
							<TableCell>{row.first_name}</TableCell>
							<TableCell>{row.last_name}</TableCell>
							<TableCell align='center' >{row.email}</TableCell>
						</TableRow>
					))
				}
			</TableBody>
		</Table>
	</TableContainer>
  )
}

const tableData=[{
  "id": 1,
  "first_name": "Nefen",
  "last_name": "Strathearn",
  "email": "nstrathearn0@bizjournals.com",
  "gender": "Agender",
  "ip_address": "67.86.216.201"
}, {
  "id": 2,
  "first_name": "Arlan",
  "last_name": "McLise",
  "email": "amclise1@t-online.de",
  "gender": "Male",
  "ip_address": "42.196.176.242"
}, {
  "id": 3,
  "first_name": "Corissa",
  "last_name": "Carvil",
  "email": "ccarvil2@ow.ly",
  "gender": "Female",
  "ip_address": "14.117.46.154"
}, {
  "id": 4,
  "first_name": "Kai",
  "last_name": "Eayrs",
  "email": "keayrs3@mozilla.org",
  "gender": "Female",
  "ip_address": "130.63.3.229"
}, {
  "id": 5,
  "first_name": "Lindy",
  "last_name": "Dashkov",
  "email": "ldashkov4@liveinternet.ru",
  "gender": "Female",
  "ip_address": "226.16.118.31"
}, {
  "id": 6,
  "first_name": "Michale",
  "last_name": "Van de Velde",
  "email": "mvandevelde5@disqus.com",
  "gender": "Male",
  "ip_address": "105.205.137.239"
}, {
  "id": 7,
  "first_name": "Tawnya",
  "last_name": "Warbrick",
  "email": "twarbrick6@elpais.com",
  "gender": "Female",
  "ip_address": "93.209.142.145"
}, {
  "id": 8,
  "first_name": "Egon",
  "last_name": "Rorke",
  "email": "erorke7@marriott.com",
  "gender": "Male",
  "ip_address": "28.114.192.92"
}, {
  "id": 9,
  "first_name": "Melly",
  "last_name": "Mercer",
  "email": "mmercer8@bing.com",
  "gender": "Female",
  "ip_address": "85.180.10.225"
}, {
  "id": 10,
  "first_name": "Halley",
  "last_name": "Burril",
  "email": "hburril9@friendfeed.com",
  "gender": "Female",
  "ip_address": "173.112.123.44"
}]