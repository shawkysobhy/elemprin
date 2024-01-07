import { Box } from '@mui/material';
import CustomBullets from './CustomBullets';
import theme from '../theme';
function InnovationFlexibilityIntegration() {
	return (
		<Box sx={{ backgroundColor: 'black' }}>
			<Box
				sx={{
					backgroundColor: 'white',
					padding: '80px 100px',
          borderRadius:'0px 0px 0px 120px',
					color: theme.palette.primary.main,
					borderWidth: '0px 0px 3px 0px',
					borderStyle: 'solid',
					borderColor: '#1E1E2F3D',
				}}>
				<Box
					sx={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'space-evenly',
						gap: '10px',
					}}>
					<CustomBullets color='red' title='Eco-Conscious Innovation' />
					<CustomBullets color='#f1c48d' title='User-Centric Flexibility' />
					<CustomBullets color='#bfdb77' title='Seamless Integration' />
				</Box>
			</Box>
		</Box>
	);
}
export default InnovationFlexibilityIntegration;
