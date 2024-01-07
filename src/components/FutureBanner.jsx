import { Box, Stack, Typography } from '@mui/material';
import NoteIcon from '../assets/noteIcon.svg';
import PlantIcon from '../assets/plantIcon.svg';
import OverlayImages from './OverlayImages';
import theme from '../theme';
import SoluationCard from './SoluationCard';
function FutureBanner() {
	return (
		<Box sx={{ backgroundColor: 'white' }}>
			<Box
				sx={{
					borderWidth: '0px 0px 3px 0px',
          borderStyle:'solid',
					borderColor: '#1E1E2F3D',
					backgroundColor: 'white',
					padding: '140px  0px 150px',
					textAlign: 'center',
					borderRadius: '0px 0px 0px 120px',
				}}>
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
						alignItems: 'center',
						marginBottom: '80px',
					}}>
					<Typography
						sx={{ fontSize: '18px', fontWeight: 600 }}
						color='textPrimary'>
						Future-Proofing Through Sustainability and Customization .
					</Typography>
					<Box sx={{ maxWidth: '850px', marginTop: '30px' }}>
						<Typography
							color='textPrimary'
							sx={{
								fontSize: '48px',
								textAlign: 'center',
								margin: '0px auto 40px',
								fontWeight:600,
								lineHeight: '1.3em',
							}}>
							Transforming Ideas Into Exceptional{' '}
							<span style={{ color: theme.palette.text.secondary }}>
								Experiences
							</span>
						</Typography>
					</Box>
				</Box>
				<Stack
					direction={'row'}
					justifyContent={'center'}
					alignItems={'center'}
					sx={{ maxWidth: '1200px', margin: '0 auto' }}>
					<Box sx={{ flex: '0 0 25%' }}>
						<SoluationCard
							title={'Sustainable'}
							hover={false}
							desc={
								"Embark on a sustainable journey with Elemprin's solutions, where innovation meets eco-conscious practices for enduring excellence."
							}
							icon={PlantIcon}
						/>
					</Box>
					<Box sx={{ flex: '0 0 50%' }}>
						<OverlayImages />
					</Box>
					<Box sx={{ flex: '0 0 25%' }}>
						{' '}
						<SoluationCard
							hover={false}
							title={'Customizable'}
							desc={
								"Tailor your experience with Elemprin's customizable solutions, ensuring every touchpoint reflects the unique essence of your vision."
							}
							icon={NoteIcon}
						/>
					</Box>
				</Stack>
			</Box>
		</Box>
	);
}

export default FutureBanner;
