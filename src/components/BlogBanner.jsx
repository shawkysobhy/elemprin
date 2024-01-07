import { Box, Typography, Button, Stack } from '@mui/material';
import Blog from '../assets/blog.svg';
import theme from '../theme';
function BlogBanner() {
	return (
		<Box sx={{ backgroundColor: 'white', textAlign: 'center' }}>
			<Stack
				sx={{
					backgroundColor: 'black',
					padding: '200px 0px 170px',
					borderRadius: '0px 0px 0px 120px',
					alignItems: 'center',
					justifyContent: 'center',
				}}>
				<Box sx={{ maxWidth: '1000px', margin: 'auto' }}>
					<Typography
						sx={{
							margin: '0px auto 40px',
							maxWidth: '600px',
							textAlign: 'center',
							fontSize: '48px',
							color: 'white',
							lineHeight: '1.3em',
              fontWeight:'600',
						}}>
						Navigate Through{' '}
						<span style={{ color: theme.palette.text.secondary }}>
							TheBlogs & Resources
						</span>
						.
					</Typography>
					<Typography
						sx={{
							lineHeight: '1.7em',
							margin: '0px 0px 20px',
              fontWeight:'300'
						}}>
						Checkout our blog for the latest updates, industry insights, and
						expert opinions on cybersecurity, networking, and the digital realm.
						Stay informed and ahead in the ever-evolving tech landscape.
					</Typography>
					<Button
						sx={{
							padding: '16px 28px',
							borderRadius: '10px',
							marginTop: '30px',
							backgroundImage:
								'linear-gradient(170deg, #FFFFFF 0%, #FFB71F 100%)',
							justifySelf: 'end',
							transition: 'transform 0.3s ease-in-out',

							'&:hover': {
								backgroundColor: '#ffd988',
								transform: 'translateX(10px)',
							},
						}}>
						<img src={Blog} width={'18px'} />
						<Typography
							sx={{
								marginLeft: '10px',
								color: 'textPrimary',
								fontSize: '16px',
								fontWeight: 600,
							}}>
							Blog & Resouces
						</Typography>
					</Button>
				</Box>
			</Stack>
		</Box>
	);
}

export default BlogBanner;
