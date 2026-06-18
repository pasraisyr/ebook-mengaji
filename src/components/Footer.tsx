import { Box, Container, Grid, Typography } from '@mui/material';
import logoImg from '../assets/Iklan Ebook Home Tajwid/Paparan visual ebook (Utama)/logo QURANICGEN.png';

export function Footer() {
  return (
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
  );
}
