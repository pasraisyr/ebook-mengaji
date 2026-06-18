import { AppBar, Toolbar, Typography, Button, Container, Box } from '@mui/material';
import logoImg from '../assets/logo-heading.png'

interface HeaderProps {
  isMobile: boolean;
  scrollToSection: (id: string) => void;
}

export function Header({ isMobile, scrollToSection }: HeaderProps) {
  return (
    <AppBar 
      position="sticky" 
      elevation={1} 
      sx={{ 
        bgcolor: 'rgba(255, 255, 255, 0.9)', 
        backdropFilter: 'blur(8px)',
        borderBottom: '1px solid #d5e3c8',
        zIndex: 1100
      }}
    >
      <Container maxWidth="lg">
        <Toolbar sx={{ justifyContent: 'space-between', py: 1, px: { xs: 0 } }}>
          {/* Logo and title */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
            <Box 
              component="img" 
              src={logoImg} 
              alt="QuranicGen Logo" 
              sx={{ height: 48, width: 48, objectFit: 'contain' }} 
            />
            <Box>
              <Typography variant="h6" sx={{ color: 'primary.main', fontWeight: 800, lineHeight: 1.1 }}>
                QURANICGEN
              </Typography>
              <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 600, display: { xs: 'none', sm: 'block' } }}>
                Didikan Al-Quran Dari Rumah
              </Typography>
            </Box>
          </Box>

          {/* Menu Links for Desktop */}
          {!isMobile && (
            <Box sx={{ display: 'flex', gap: 3 }}>
              <Button onClick={() => scrollToSection('kepentingan')} sx={{ color: 'text.primary', fontWeight: 600 }}>Kepentingan</Button>
              <Button onClick={() => scrollToSection('audio-demo')} sx={{ color: 'text.primary', fontWeight: 600 }}>Audio Interaktif</Button>
              <Button onClick={() => scrollToSection('previu')} sx={{ color: 'text.primary', fontWeight: 600 }}>Halaman Ebook</Button>
              <Button onClick={() => scrollToSection('bonus')} sx={{ color: 'text.primary', fontWeight: 600 }}>Bonus</Button>
              <Button onClick={() => scrollToSection('faq')} sx={{ color: 'text.primary', fontWeight: 600 }}>FAQ</Button>
            </Box>
          )}

          {/* CTA Button */}
          <Button 
            variant="contained" 
            color="secondary" 
            onClick={() => scrollToSection('tempah')}
            sx={{ fontWeight: 'bold', px: 3 }}
          >
            Beli Sekarang
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
