/* eslint-disable react/prop-types */
import { Box, Typography } from '@mui/material';
function CustomBullets({ title, color }) {
	return (
		<Box
			sx={{
				display: 'flex',
				alignItems: 'center',
				gap: '10px',
			}}>
			<Box
				sx={{
					width: '15px',
					height: '15px',
					backgroundColor: color,
					borderRadius: '50%',
				}}>
				<span style={{ color: 'transparent' }}>R</span>
			</Box>
			<Typography sx={{ fontWeight: '600' }}>{title}</Typography>
		</Box>
	);
}

export default CustomBullets;
