// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
	typography: {
		fontSize: 18,
		fontFamily: ['Plus Jakarta Sans', 'sans-serif', 'Open Sans', 'Roboto'].join(','),
	},
	palette: {
		text: {
			primary: '#353435',
			secondary: '#ed2d23',
			hint: '#585858',
		},
		primary: {
			main: '#353435',
		},
		secondary: {
			main: '#ff4081', // Custom secondary color
		},
		error: {
			main: '#f44336', // Custom error color
		},
		// Add more custom colors or override existing ones as needed
	},
	// Add other theme options as needed
});

export default theme;
