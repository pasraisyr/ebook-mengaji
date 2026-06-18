import { Box, useTheme, useMediaQuery } from '@mui/material';
import { Header } from '../components/Header';
import { Hero } from '../sections/Hero';
import { PainPoints } from '../sections/PainPoints';
import { Kepentingan } from '../sections/Kepentingan';
import { InteractiveAudio } from '../sections/InteractiveAudio';
import { PreviewGallery } from '../sections/PreviewGallery';
import { Bonus } from '../sections/Bonus';
import { Guarantee } from '../sections/Guarantee';
import { CheckoutSection } from '../sections/CheckoutSection';
import { Faq } from '../sections/Faq';
import { Footer } from '../components/Footer';

export function Home() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', bgcolor: 'background.default' }}>
      <Header isMobile={isMobile} scrollToSection={scrollToSection} />
      <Hero scrollToSection={scrollToSection} />
      <PainPoints />
      <Kepentingan />
      <InteractiveAudio />
      <PreviewGallery />
      <Bonus />
      <Guarantee />
      <CheckoutSection />
      <Faq />
      <Footer />
    </Box>
  );
}

export default Home;
