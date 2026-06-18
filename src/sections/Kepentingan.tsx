import { Box, Container, Grid, Typography, Card, CardContent } from '@mui/material';
import {
  School as SchoolIcon,
  AccessTime as AccessTimeIcon,
  AutoStories as AutoStoriesIcon,
  CheckCircle as CheckCircleIcon
} from '@mui/icons-material';

export function Kepentingan() {
  return (
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
  );
}
