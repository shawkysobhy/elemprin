import Header from './components/Header';
import { Box } from '@mui/material';
import HeroSection from './components/HeroSection';
import Soluations from './components/Soluations';
import BlogBanner from './components/BlogBanner';
import FutureBanner from './components/FutureBanner';
import InnovationFlexibilityIntegration from './components/InnovationFlexibilityIntegration';
function App() {
	return (
		<Box  sx={{ margin: 'auto' }}>
			<Header />
			<HeroSection />
			<Soluations />
      <BlogBanner/>
      <FutureBanner/>
      <InnovationFlexibilityIntegration/>
      <p>huihiuhui</p>
		</Box>
	);
}

export default App;
