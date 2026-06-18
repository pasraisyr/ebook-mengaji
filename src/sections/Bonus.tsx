import { Box, Container, Grid, Typography, Paper } from '@mui/material';
import bonus1Img from '../assets/Iklan Ebook Home Tajwid/BONUS PEMBELIAN/BONUS pembelian.png';
import bonus2Img from '../assets/Iklan Ebook Home Tajwid/BONUS PEMBELIAN/BONUS PEMBELIAN 2.png';

export function Bonus() {
  return (
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
                PERCUMA
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
                PERCUMA
              </Typography>
            </Paper>
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
}
