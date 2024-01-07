import { Box, Link, Stack } from '@mui/material';
import Logo from '../assets/logo.png';
import MailIcon from '../assets/mailIcon.svg';
function Header() {
	return (
		<Stack
			component='header'
			direction={'row'}
			justifyContent={'space-between'}
			sx={{
				padding: '35px 20px 35px 20px',
				zIndex: 20,
				marginBottom: '-120px',
				maxWidth: '1200px',
				marginInline: 'auto',
			}}>
			<Link href='https://elemprin.com/' sx={{ maxWidth: '190px' }}>
				<img src={Logo} width={'100%'} />
			</Link>
			<Box
				sx={{
					maxWidth: '50px',
					borderRadius: '50%',
					backgroundColor: 'white',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
				}}>
				<img src={MailIcon} width={'50%'} />
			</Box>
		</Stack>
	);
}

export default Header;
