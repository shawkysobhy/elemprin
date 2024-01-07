/* eslint-disable react/prop-types */
import { Box, Stack, Typography } from '@mui/material';
import theme from '../theme';
function SoluationCard({ icon, title, desc ,hover=true}) {
	return (
		<Stack
			color={theme.palette.primary.main}
			direction={'column'}
			justifyContent={'center'}
			alignItems={'center'}
			sx={{
				padding: '45px 40px',
				transition: 'transform 0.3s ease-in-out',
				borderRadius: '20px',
				'&:hover': {
					backgroundColor: hover ? '#f9f9f9ee' : 'transparent',
					transform: 'translateY(-10px)',
				},
			}}>
			<Box
				sx={{
					backgroundColor: '#ed2d23',
					width: '65px',
					height: '65px',
					marginBottom: '19px',
					borderRadius: '13px 13px 13px 13px',
					padding: '19px',
				}}>
				<img style={{ maxWidth: '100%' }} src={icon}></img>
			</Box>
			<Typography
				sx={{
					margin: '20px 0px 14px',
					fontWeight: '600',
					fontSize: '24px',
					lineHeight: '1.2em',
				}}>
				{title}
			</Typography>
			<Typography sx={{ lineHeight: '1.9em' ,fontWeight:'300'}}>{desc}</Typography>
		</Stack>
	);
}

export default SoluationCard;
