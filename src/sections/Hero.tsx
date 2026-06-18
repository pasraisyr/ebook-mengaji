import { Box, Container, Grid, Typography, Button } from '@mui/material';
import { CheckCircle as CheckCircleIcon } from '@mui/icons-material';
import mockupImg from '../assets/Iklan Ebook Home Tajwid/Paparan visual ebook (Utama)/eBook Home Tajwid.png';

interface HeroProps {
  scrollToSection: (id: string) => void;
}

export function Hero({ scrollToSection }: HeroProps) {
  return (
    <Box 
      sx={{ 
        bgcolor: 'background.default', 
        pt: { xs: 6, md: 10 }, 
        pb: { xs: 8, md: 12 },
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Decorative background shapes */}
      <Box sx={{ position: 'absolute', top: -100, right: -100, width: 400, height: 400, borderRadius: '50%', bgcolor: 'rgba(7, 56, 53, 0.05)', filter: 'blur(80px)', zIndex: 0 }} />
      <Box sx={{ position: 'absolute', bottom: -50, left: -50, width: 300, height: 300, borderRadius: '50%', bgcolor: 'rgba(102, 212, 126, 0.05)', filter: 'blur(80px)', zIndex: 0 }} />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={6} sx={{ alignItems: 'center' }}>
          
          {/* Hero Left Content */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Box>
              <Typography 
                variant="overline" 
                sx={{ 
                  color: 'primary.light', 
                  fontWeight: 800, 
                  letterSpacing: 2, 
                  bgcolor: 'rgba(7, 56, 53, 0.08)',
                  px: 2,
                  py: 0.8,
                  borderRadius: 5,
                  display: 'inline-block',
                  mb: 3
                }}
              >
                PANDUAN TAJWID TERBARU 2026
              </Typography>
              
              <Typography variant="h1" sx={{ color: 'primary.dark', mb: 2, lineHeight: 1.15 }}>
                Bantu Anak Kuasai Tajwid Dari Rumah 
              </Typography>
              
              <Typography variant="body1" sx={{ color: 'text.secondary', fontSize: '1.15rem', mb: 4, lineHeight: 1.7 }}>
                Ramai ibu bapa hantar anak mengaji bertahun-tahun, tapi masih tersangkut pada kesalahan tajwid yang sama. 😔 
                Panduan mudah untuk ibu bapa dan anak belajar tajwid di rumah dengan penerangan yang ringkas dan mudah difahami.
              </Typography>
              
              <Grid container spacing={2} sx={{ mb: 4 }}>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                    <CheckCircleIcon sx={{ color: 'success.main' }} />
                    <Typography sx={{ fontWeight: 600, color: 'text.primary' }}>Sesuai untuk ibu bapa mendidik anak-anak</Typography>
                  </Box>
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                    <CheckCircleIcon sx={{ color: 'success.main' }} />
                    <Typography sx={{ fontWeight: 600, color: 'text.primary' }}>Boleh belajar ikut masa sendiri</Typography>
                  </Box>
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                    <CheckCircleIcon sx={{ color: 'success.main' }} />
                    <Typography sx={{ fontWeight: 600, color: 'text.primary' }}>Fokus kesalahan tajwid lazim</Typography>
                  </Box>
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                    <CheckCircleIcon sx={{ color: 'success.main' }} />
                    <Typography sx={{ fontWeight: 600, color: 'text.primary' }}>🎁 Ada BONUS Menarik 🫢</Typography>
                  </Box>
                </Grid>
              </Grid>

              <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2 }}>
                <Button 
                  variant="contained" 
                  color="secondary" 
                  size="large"
                  onClick={() => scrollToSection('tempah')}
                  className="pulse-glow"
                  sx={{ 
                    py: 1.8, 
                    px: 4, 
                    fontSize: '1.1rem', 
                    boxShadow: '0 8px 25px rgba(102, 212, 126, 0.4)'
                  }}
                >
                  Dapatkan eBook Sekarang
                </Button>
                <Button 
                  variant="outlined" 
                  color="primary" 
                  size="large"
                  onClick={() => scrollToSection('audio-demo')}
                  sx={{ py: 1.8, px: 4, borderWidth: 2, '&:hover': { borderWidth: 2 } }}
                >
                  Uji Audio Halaman
                </Button>
              </Box>
            </Box>
          </Grid>

          {/* Hero Right Media (Mockup Image) */}
          <Grid size={{ xs: 12, md: 5 }} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box 
              className="float-animation"
              sx={{ 
                position: 'relative', 
                maxWidth: { xs: 280, sm: 380, md: '100%' },
                filter: 'drop-shadow(0 25px 35px rgba(6, 78, 59, 0.15))'
              }}
            >
              <Box 
                component="img" 
                src={mockupImg} 
                alt="eBook Home Tajwid Mockup" 
                sx={{ 
                  width: '100%', 
                  height: 'auto',
                  objectFit: 'contain',
                  borderRadius: 4
                }} 
              />
            </Box>
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
}
