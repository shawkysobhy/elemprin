import { Box, Stack, Typography } from '@mui/material';
import BackgroundHero from '../assets/introbackground.jpg';
import GlobeIcon from '../assets/globeIcon.svg';
import theme from '../theme';
function HeroSection() {
	return (
		<Box sx={{ backgroundColor: 'white' }}>
			<Box
				sx={{
					borderRadius: '0px 0px 0px 120px',
					backgroundSize: 'cover',
					backgroundRepeat: 'no-repeat',
					backgroundImage: `url(${BackgroundHero})`,
				}}>
				<Stack
					direction='row'
					sx={{
						padding: '100px 35px 55px 35px',
						maxWidth: '1200px',
						marginInline: 'auto',
					}}>
					<Box
						sx={{
							flex: '0 0 50%',
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'flex-start',
							flexWrap: 'wrap',
							justifyContent: 'center',
						}}>
						<Typography
							sx={{
								color: theme.palette.text.hint,
								marginBottom: '20px',
								fontSize: '1.2rem',
							}}>
							Where Technology Meets Elemental Wisdom
						</Typography>
						<Typography
							sx={{
								lineHeight: '1.1em',
								fontWeight: '500',
								fontSize: '84px',
								textTransform: 'capitalize',
							}}>
							<span style={{ color: theme.palette.text.secondary }}>
								Making
							</span>{' '}
							Products For, Your{' '}
							<span style={{ color: theme.palette.text.secondary }}>
								Network
							</span>{' '}
							& Your{' '}
							<span style={{ color: theme.palette.text.secondary }}>Rules</span>
						</Typography>
					</Box>
					<Box
						sx={{
							flex: '0 0 50%',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
						}}>
						<img src={GlobeIcon} width={'500px'} style={{ maxWidth: '100%' }} />
					</Box>
				</Stack>
			</Box>
		</Box>
	);
}

export default HeroSection;
