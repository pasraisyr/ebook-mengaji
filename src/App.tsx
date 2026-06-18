import { useState, useEffect } from 'react';
import { 
  AppBar, Toolbar, Typography, Button, Container, Box, Grid, 
  Card, CardContent, Avatar, useTheme, useMediaQuery, Paper,
  Divider, Alert
} from '@mui/material';
import {
  CheckCircle as CheckCircleIcon,
  AutoStories as AutoStoriesIcon,
  School as SchoolIcon,
  AccessTime as AccessTimeIcon,
  ErrorOutlined as ErrorOutlineIcon,
  VerifiedUser as VerifiedUserIcon,
  WarningAmber as WarningAmberIcon
} from '@mui/icons-material';

// Components
import { AudioDemo } from './components/AudioDemo';
import { EbookGallery } from './components/EbookGallery';
import { CheckoutForm } from './components/CheckoutForm';
import { FaqSection } from './components/FaqSection';

// Assets
import logoImg from './assets/Iklan Ebook Home Tajwid/Paparan visual ebook (Utama)/logo QURANICGEN.png';
import mockupImg from './assets/Iklan Ebook Home Tajwid/Paparan visual ebook (Utama)/eBook Home Tajwid.png';
import bonus1Img from './assets/Iklan Ebook Home Tajwid/BONUS PEMBELIAN/BONUS pembelian.png';
import bonus2Img from './assets/Iklan Ebook Home Tajwid/BONUS PEMBELIAN/BONUS PEMBELIAN 2.png';

function App() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [isMockPayment, setIsMockPayment] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('mock_payment') === 'true') {
      setIsMockPayment(true);
    }
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSimulatePayment = (success: boolean) => {
    const randomBillCode = 'TP-' + Math.floor(100000 + Math.random() * 900000);
    const statusId = success ? '1' : '3';
    window.location.href = window.location.origin + window.location.pathname + `?status_id=${statusId}&billcode=${randomBillCode}`;
  };

  if (isMockPayment) {
    return (
      <Box 
        sx={{ 
          minHeight: '100vh', 
          bgcolor: '#f1f5f9', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          p: 3,
          fontFamily: '"Inter", sans-serif'
        }}
      >
        <Paper 
          elevation={6} 
          sx={{ 
            maxWidth: 450, 
            width: '100%', 
            borderRadius: 4, 
            overflow: 'hidden',
            borderTop: '8px solid #0056b3'
          }}
        >
          {/* ToyyibPay Header */}
          <Box sx={{ bgcolor: '#fff', p: 3, borderBottom: '1px solid #e2e8f0', textAlign: 'center' }}>
            <Typography variant="h4" sx={{ fontWeight: 900, color: '#0056b3', letterSpacing: -0.5 }}>
              toyyib<span style={{ color: '#00c3ff' }}>Pay</span>
            </Typography>
            <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: 1.5 }}>
              Simulasi Gerbang Pembayaran / Sandbox Portal
            </Typography>
          </Box>

          <CardContent sx={{ p: 4 }}>
            {/* Merchant Details */}
            <Box sx={{ mb: 4 }}>
              <Typography variant="subtitle2" color="text.secondary">Merchant</Typography>
              <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'text.primary', mb: 2 }}>QURANICGEN ENTERPRISE</Typography>
              
              <Typography variant="subtitle2" color="text.secondary">Item Pembelian</Typography>
              <Typography variant="body1" sx={{ fontWeight: 600, color: 'text.primary', mb: 2 }}>eBook Home Tajwid (Edisi Penuh)</Typography>
              
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', bgcolor: '#f8fafc', p: 2, borderRadius: 2, border: '1px solid #e2e8f0' }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>Jumlah Bayaran</Typography>
                <Typography variant="h5" sx={{ fontWeight: 900, color: '#0056b3' }}>RM 19.90</Typography>
              </Box>
            </Box>

            <Alert severity="warning" sx={{ mb: 4, borderRadius: 2 }}>
              Ini adalah mod simulasi. Tiada wang sebenar akan ditolak daripada akaun anda.
            </Alert>

            {/* Actions */}
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Button
                fullWidth
                variant="contained"
                onClick={() => handleSimulatePayment(true)}
                sx={{ 
                  py: 1.8, 
                  bgcolor: '#28a745', 
                  fontSize: '1rem',
                  fontWeight: 'bold', 
                  '&:hover': { bgcolor: '#218838' } 
                }}
              >
                TERUSKAN PEMBAYARAN (SUCCESS)
              </Button>
              <Button
                fullWidth
                variant="outlined"
                onClick={() => handleSimulatePayment(false)}
                sx={{ 
                  py: 1.8, 
                  color: '#dc3545', 
                  borderColor: '#dc3545', 
                  fontSize: '1rem',
                  fontWeight: 'bold',
                  '&:hover': { borderColor: '#bd2130', bgcolor: 'rgba(220,53,69,0.05)' } 
                }}
              >
                BATALKAN PEMBAYARAN (FAIL)
              </Button>
            </Box>
          </CardContent>
          
          <Box sx={{ bgcolor: '#f8fafc', py: 2, textAlign: 'center', borderTop: '1px solid #e2e8f0' }}>
            <Typography variant="caption" color="text.secondary">
              Mempunyai masalah? Sila hubungi sokongan ToyyibPay.
            </Typography>
          </Box>
        </Paper>
      </Box>
    );
  }

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', bgcolor: 'background.default' }}>
      
      {/* 1. Header / Navbar */}
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

      {/* 2. Hero Section */}
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

      {/* 3. Pain Points Section */}
      <Box sx={{ py: 8, bgcolor: 'background.paper', borderTop: '1px solid #d5e3c8', borderBottom: '1px solid #d5e3c8' }}>
        <Container maxWidth="md">
          <Typography variant="h3" align="center" sx={{ fontWeight: 800, color: 'primary.dark', mb: 2 }}>
            Masalah Yang Sering Melanda Ibu Bapa...
          </Typography>
          <Typography variant="body1" align="center" color="text.secondary" sx={{ mb: 6, maxWidth: 650, mx: 'auto' }}>
            Adakah anda pernah berhadapan dengan situasi di bawah? Rata-rata ibu bapa mempunyai kebimbangan yang sama.
          </Typography>

          <Grid container spacing={3}>
            <Grid size={{ xs: 12, sm: 4 }}>
              <Paper variant="outlined" sx={{ p: 3, height: '100%', textAlign: 'center', borderRadius: 4, borderColor: '#d5e3c8', bgcolor: '#fdfbfb' }}>
                <Avatar sx={{ bgcolor: 'rgba(239, 68, 68, 0.1)', color: 'error.main', mx: 'auto', mb: 2, width: 56, height: 56 }}>
                  <ErrorOutlineIcon fontSize="large" />
                </Avatar>
                <Typography variant="h5" sx={{ fontWeight: 700, mb: 1, color: 'primary.dark' }}>
                  Anak Tersangkut
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Dah hantar kelas mengaji bertahun-tahun, tapi sebutan tajwid masih tersangkut pada kesalahan yang sama.
                </Typography>
              </Paper>
            </Grid>
            <Grid size={{ xs: 12, sm: 4 }}>
              <Paper variant="outlined" sx={{ p: 3, height: '100%', textAlign: 'center', borderRadius: 4, borderColor: '#d5e3c8', bgcolor: '#fdfbfb' }}>
                <Avatar sx={{ bgcolor: 'rgba(239, 68, 68, 0.1)', color: 'error.main', mx: 'auto', mb: 2, width: 56, height: 56 }}>
                  <ErrorOutlineIcon fontSize="large" />
                </Avatar>
                <Typography variant="h5" sx={{ fontWeight: 700, mb: 1, color: 'primary.dark' }}>
                  Ibu Bapa
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Mahu ajar sendiri di rumah tapi rasa segan dan tak yakin kerana bukan guru yang mahir teori hukum tajwid.
                </Typography>
              </Paper>
            </Grid>
            <Grid size={{ xs: 12, sm: 4 }}>
              <Paper variant="outlined" sx={{ p: 3, height: '100%', textAlign: 'center', borderRadius: 4, borderColor: '#d5e3c8', bgcolor: '#fdfbfb' }}>
                <Avatar sx={{ bgcolor: 'rgba(239, 68, 68, 0.1)', color: 'error.main', mx: 'auto', mb: 2, width: 56, height: 56 }}>
                  <ErrorOutlineIcon fontSize="large" />
                </Avatar>
                <Typography variant="h5" sx={{ fontWeight: 700, mb: 1, color: 'primary.dark' }}>
                  Buku Mengelirukan
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Buku tajwid di pasaran terlalu banyak istilah akademik yang padat, membuatkan anak rasa bosan dan pening.
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* 4. Kenapa Wajib Ada eBook Home Tajwid? (Kepentingan) */}
      <Box id="kepentingan" sx={{ py: 10, bgcolor: 'background.default' }}>
        <Container maxWidth="lg">
          <Typography variant="h3" align="center" sx={{ fontWeight: 800, color: 'primary.dark', mb: 2 }}>
            Kenapa Wajib Ada eBook Home Tajwid?
          </Typography>
          <Typography variant="body1" align="center" color="text.secondary" sx={{ mb: 8, maxWidth: 700, mx: 'auto' }}>
            Kami membina panduan ini khas untuk keperluan praktikal di rumah dengan 4 kelebihan utama yang memudahkan pembelajaran anda sekeluarga.
          </Typography>

          <Grid container spacing={4}>
            
            {/* Kepentingan 1 */}
            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', p: 1, transition: 'all 0.3s', '&:hover': { transform: 'translateY(-5px)' } }}>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Box sx={{ color: 'primary.main', mb: 2 }}>
                    <SchoolIcon sx={{ fontSize: 40 }} />
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 700, mb: 1.5, color: 'primary.dark' }}>
                    Sesuai Untuk Semua
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                    Diformulasikan khas untuk ibu bapa yang tiada asas pengajian agama tinggi. Bahasanya santai, ringkas, dan mudah difahami terus oleh anak-anak.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* Kepentingan 2 */}
            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', p: 1, transition: 'all 0.3s', '&:hover': { transform: 'translateY(-5px)' } }}>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Box sx={{ color: 'primary.main', mb: 2 }}>
                    <AccessTimeIcon sx={{ fontSize: 40 }} />
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 700, mb: 1.5, color: 'primary.dark' }}>
                    Ikut Masa Sendiri
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                    Tiada paksaan waktu! Anda boleh membuka ebook ini pada waktu malam sebelum tidur atau hujung minggu mengikut kelapangan waktu keluarga anda.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* Kepentingan 3 */}
            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', p: 1, transition: 'all 0.3s', '&:hover': { transform: 'translateY(-5px)' } }}>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Box sx={{ color: 'primary.main', mb: 2 }}>
                    <AutoStoriesIcon sx={{ fontSize: 40 }} />
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 700, mb: 1.5, color: 'primary.dark' }}>
                    Fokus Kesalahan Lazim
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                    Kami membongkar kesilapan tajwid yang kerap berlaku ketika membaca Al-Quran supaya pembetulan dapat dilakukan dengan cepat dan tepat.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* Kepentingan 4 */}
            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', p: 1, transition: 'all 0.3s', '&:hover': { transform: 'translateY(-5px)' } }}>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Box sx={{ color: 'primary.main', mb: 2 }}>
                    <CheckCircleIcon sx={{ fontSize: 40 }} />
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 700, mb: 1.5, color: 'primary.dark' }}>
                    Bebas Audio Sebutan
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                    Dilengkapi audio bunyi makhraj dan hukum tajwid di setiap muka surat. Cukup tekan ikon audio, anda akan dengar sebutan yang tepat.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

          </Grid>
        </Container>
      </Box>

      {/* 5. Interactive Audio Demo Section */}
      <Box id="audio-demo" sx={{ py: 8, bgcolor: 'background.paper' }}>
        <Container maxWidth="lg">
          <AudioDemo />
        </Container>
      </Box>

      {/* 6. Contoh Paparan Ebook Section */}
      <Box id="previu" sx={{ py: 10, bgcolor: 'background.default' }}>
        <Container maxWidth="lg">
          <Typography variant="h3" align="center" sx={{ fontWeight: 800, color: 'primary.dark', mb: 2 }}>
            Lihat Sendiri Isi Dalam Ebook
          </Typography>
          <Typography variant="body1" align="center" color="text.secondary" sx={{ mb: 6, maxWidth: 650, mx: 'auto' }}>
            Setiap helaian direka dengan warna-warna harmoni dan rajah yang ceria supaya anak-anak teruja untuk belajar dan tidak mudah bosan.
          </Typography>
          <EbookGallery />
        </Container>
      </Box>

      {/* 7. Bonus Section (Bonus yang akan dapat) */}
      <Box id="bonus" sx={{ py: 10, bgcolor: 'primary.dark', color: '#fff' }}>
        <Container maxWidth="lg">
          <Typography variant="h3" align="center" sx={{ fontWeight: 800, mb: 2, color: '#fff' }}>
            Bonus Istimewa Pembelian Hari Ini!
          </Typography>
          <Typography variant="body1" align="center" sx={{ mb: 8, color: '#d1d5db', maxWidth: 700, mx: 'auto' }}>
            Apabila anda mendapatkan eBook Home Tajwid (Pakej Combo & Family), anda akan menerima bonus tambahan ini secara PERCUMA!
          </Typography>

          <Grid container spacing={4} sx={{ justifyContent: 'center' }}>
            
            {/* Bonus Card 1 */}
            <Grid size={{ xs: 12, md: 5 }}>
              <Paper 
                elevation={6}
                sx={{ 
                  p: 3, 
                  height: '100%', 
                  bgcolor: 'rgba(255,255,255,0.06)', 
                  border: '1px solid rgba(255,255,255,0.1)',
                  color: '#fff',
                  borderRadius: 4,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    borderColor: 'secondary.main'
                  }
                }}
              >
                <Box 
                  component="img"
                  src={bonus1Img}
                  alt="Bonus Flashcard Tajwid"
                  sx={{ 
                    width: '100%', 
                    maxHeight: 280, 
                    objectFit: 'contain', 
                    borderRadius: 3, 
                    mb: 3,
                    bgcolor: '#fff',
                    p: 1
                  }}
                />
                <Typography variant="h5" sx={{ fontWeight: 800, color: 'secondary.main', mb: 1 }}>
                  Flashcard Tajwid Poket
                </Typography>
                <Typography variant="body2" sx={{ color: '#d1d5db', mb: 2 }}>
                  Alat bantuan visual bersaiz poket yang mudah dicetak dan dibawa ke mana-mana. Membantu anak menghafal hukum tajwid asas dengan teknik santai & pantas.
                </Typography>
                <Typography variant="button" sx={{ px: 2, py: 0.5, borderRadius: 2, bgcolor: 'rgba(198, 231, 114, 0.25)', color: 'secondary.light', fontWeight: 'bold' }}>
                  Bernilai RM39 - PERCUMA
                </Typography>
              </Paper>
            </Grid>

            {/* Bonus Card 2 */}
            <Grid size={{ xs: 12, md: 5 }}>
              <Paper 
                elevation={6}
                sx={{ 
                  p: 3, 
                  height: '100%', 
                  bgcolor: 'rgba(255,255,255,0.06)', 
                  border: '1px solid rgba(255,255,255,0.1)',
                  color: '#fff',
                  borderRadius: 4,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    borderColor: 'secondary.main'
                  }
                }}
              >
                <Box 
                  component="img"
                  src={bonus2Img}
                  alt="Bonus Tips Betulkan Bacaan"
                  sx={{ 
                    width: '100%', 
                    maxHeight: 280, 
                    objectFit: 'contain', 
                    borderRadius: 3, 
                    mb: 3,
                    bgcolor: '#fff',
                    p: 1
                  }}
                />
                <Typography variant="h5" sx={{ fontWeight: 800, color: 'secondary.main', mb: 1 }}>
                  Panduan & Tips Betulkan Bacaan
                </Typography>
                <Typography variant="body2" sx={{ color: '#d1d5db', mb: 2 }}>
                  Modul ringkas panduan ibu bapa untuk membetulkan kesalahan sebutan makhraj huruf dan dengung yang biasa anak lakukan semasa latihan.
                </Typography>
                <Typography variant="button" sx={{ px: 2, py: 0.5, borderRadius: 2, bgcolor: 'rgba(198, 231, 114, 0.25)', color: 'secondary.light', fontWeight: 'bold' }}>
                  Bernilai RM29 - PERCUMA
                </Typography>
              </Paper>
            </Grid>

          </Grid>
        </Container>
      </Box>

      {/* 8. Jaminan Pulangan Wang & Risk Reversal */}
      <Box sx={{ py: 10, bgcolor: 'background.default' }}>
        <Container maxWidth="md">
          <Paper 
            elevation={4} 
            sx={{ 
              p: { xs: 4, md: 6 }, 
              borderRadius: 5, 
              border: '2px solid #66D47E', 
              background: 'linear-gradient(135deg, #f2fcf4 0%, #fff 100%)',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {/* Background design */}
            <Box sx={{ position: 'absolute', top: -30, right: -30, width: 120, height: 120, borderRadius: '50%', bgcolor: 'rgba(102, 212, 126, 0.05)' }} />
            
            <Avatar 
              sx={{ 
                bgcolor: 'secondary.main', 
                color: '#fff', 
                width: 72, 
                height: 72, 
                mx: 'auto', 
                mb: 3,
                boxShadow: '0 8px 20px rgba(102, 212, 126, 0.3)'
              }}
            >
              <VerifiedUserIcon sx={{ fontSize: 40 }} />
            </Avatar>

            <Typography variant="h4" sx={{ fontWeight: 800, color: 'secondary.dark', mb: 2 }}>
              Jaminan Pulangan Wang 100%
            </Typography>

            <Typography variant="body1" sx={{ color: 'text.primary', fontSize: '1.1rem', lineHeight: 1.7, maxWidth: 650, mx: 'auto', mb: 4 }}>
              "🛡️ Jaminan pulangan wang jika anda benar-benar merasakan eBook Home Tajwid ini tidak membantu anda memahami tajwid dengan lebih baik."
            </Typography>
            
            <Divider sx={{ mb: 3, borderStyle: 'dashed' }} />
            
            <Typography variant="body2" color="text.secondary">
              Kami sangat komited membimbing anda. Jika dalam tempoh 30 hari anda mendapati ebook ini tidak menambah kefahaman tajwid keluarga anda, sila e-mel pihak admin kami untuk pulangan wang sepenuhnya tanpa soal.
            </Typography>
          </Paper>
        </Container>
      </Box>

      {/* 9. Borang Tempahan Section */}
      <Box 
        id="tempah" 
        sx={{ 
          py: 10, 
          bgcolor: 'background.paper', 
          borderTop: '1px solid #d5e3c8',
          borderBottom: '1px solid #d5e3c8',
          background: 'linear-gradient(180deg, #ffffff 0%, #f4fcd2 100%)'
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h3" sx={{ fontWeight: 800, color: 'primary.dark', mb: 2 }}>
              Dapatkan eBook Home Tajwid Anda Hari Ini!
            </Typography>
            <Typography variant="h6" sx={{ color: 'secondary.dark', fontWeight: 'bold', mb: 3, display: 'inline-flex', alignItems: 'center', gap: 1 }}>
              <WarningAmberIcon /> PENTING: ILMU MAHAL UNTUK ANAK
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 700, mx: 'auto', fontSize: '1.05rem', lineHeight: 1.6 }}>
              ‼️ Jangan tunggu sampai anak terbiasa dengan bacaan yang salah. Mulakan pembetulan dari rumah hari ini. Berikan anak pelaburan ilmu terbaik.
            </Typography>
          </Box>
          
          <CheckoutForm />
        </Container>
      </Box>

      {/* 10. Soalan Lazim (FAQ) Section */}
      <Box id="faq" sx={{ py: 10, bgcolor: 'background.default' }}>
        <Container maxWidth="lg">
          <FaqSection />
        </Container>
      </Box>

      {/* 11. Footer */}
      <Box sx={{ bgcolor: 'primary.dark', color: '#fff', py: 6, borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} sx={{ alignItems: 'center' }}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
                <Box component="img" src={logoImg} sx={{ height: 40, width: 40, bgcolor: '#fff', borderRadius: '50%', p: 0.5 }} />
                <Typography variant="h6" sx={{ fontWeight: 800, color: 'secondary.main' }}>
                  QURANICGEN
                </Typography>
              </Box>
              <Typography variant="body2" sx={{ color: '#9ca3af', maxWidth: 450 }}>
                QuranicGen berdedikasi menyediakan bahan rujukan pembelajaran Al-Quran dan tajwid interaktif secara atas talian yang berkualiti untuk membantu keluarga membina asas rohani yang kuat dari rumah.
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }} sx={{ textAlign: { xs: 'left', md: 'right' } }}>
              <Typography variant="body2" sx={{ color: '#d1d5db', mb: 1 }}>
                &copy; {new Date().getFullYear()} QuranicGen. Hak Cipta Terpelihara.
              </Typography>
              <Typography variant="caption" sx={{ color: '#6b7280' }}>
                Penafian: eBook Home Tajwid ini adalah produk pendidikan digital. Kesan pembelajaran mungkin berbeza mengikut kekerapan dan usaha latihan masing-masing.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>

    </Box>
  );
}

export default App;
