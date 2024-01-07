import { Box } from '@mui/material';
import Plant from '../assets/greenplanet.png';
import Grid from '../assets/grid.png'
const overlayContainerStyle = {
	position: 'relative',
	width: '100%', 
	margin:'0 auto',
	height: '100%', 
	display:'flex',
	alignItems:'center',
	justifyContent:'center',
};

const overlayImageStyle = {
	position: 'absolute',
	width: '500px', 
	height: '500px',
	objectFit: 'cover',
	zIndex: 50, 
};

function OverlayImages() {
	return (
		<Box sx={overlayContainerStyle}>
			<img
				src={Grid} // Replace with the actual image source
				alt='Image 1'
				style={{ ...overlayImageStyle, zIndex: 2 }} // Adjust zIndex for the second image
			/>
			<img
				src={Plant} // Replace with the actual image source
				alt='Image 2'
				style={overlayImageStyle}
			/>
		</Box>
	);
}

export default OverlayImages;
