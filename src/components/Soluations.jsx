import { Box, Stack, Typography } from '@mui/material';
import SoluationCard from './SoluationCard';
import WifiIcon from '../assets/wifiIcon.svg';
import Armor from '../assets/armor.svg';
import GpsIcon from '../assets/gpsIcon.svg';
import theme from '../theme';
import HalfArmor from '../assets/halfArmor.svg';
function Soluations() {
	return (
		<Box sx={{ backgroundColor: 'black' }}>
			<Box
				sx={{
					color: 'black',
					backgroundColor: 'white',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
					padding: '140px  0px 150px',
					textAlign: 'center',
          borderRadius:'0px 0px 0px 120px'
				}}>
				<Box sx={{marginBottom:'2rem'}}>
					<Typography
						sx={{ fontSize: '18px',fontWeight:'300' }}
						color='textPrimary'>
						Elevate <span style={{ fontWeight: 600 }}>Security</span> and{' '}
						<span style={{ fontWeight: 'bold' }}>Performance</span> to
						Unprecedented Heights.
					</Typography>
				</Box>
				<Box sx={{ maxWidth: '1000px',marginBottom:'4rem' }}>
					<Typography
						color='textPrimary'
						sx={{ fontSize: '48px', textAlign: 'center' }}>
						Personalizing Your Network&apos;s s DNA{' '}
						<span style={{ color: theme.palette.text.secondary }}>
							WithCustomized Solutions
						</span>
					</Typography>
				</Box>
				<Stack direction={'row'} maxWidth={'1200px'}>
					<SoluationCard
						title={'Next-Gen Firewall Development'}
						desc={
							'Secure your network with adaptive firewalls, ensuring cutting-edge protection against evolving digital threats.'
						}
						icon={Armor}
					/>
					<SoluationCard
						title={'Next-Gen Firewall Development'}
						desc={
							'Secure your network with adaptive firewalls, ensuring cutting-edge protection against evolving digital threats.'
						}
						icon={HalfArmor}
					/>
					<SoluationCard
						title={'Next-Gen Firewall Development'}
						desc={
							'Secure your network with adaptive firewalls, ensuring cutting-edge protection against evolving digital threats.'
						}
						icon={WifiIcon}
					/>
					<SoluationCard
						title={'Next-Gen Firewall Development'}
						desc={
							'Secure your network with adaptive firewalls, ensuring cutting-edge protection against evolving digital threats.'
						}
						icon={GpsIcon}
					/>
				</Stack>
			</Box>
		</Box>
	);
}

export default Soluations;
