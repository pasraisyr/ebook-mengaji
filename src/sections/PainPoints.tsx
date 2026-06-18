import { Box, Container, Grid, Typography, Paper, Avatar } from '@mui/material';
import { ErrorOutlined as ErrorOutlineIcon } from '@mui/icons-material';

export function PainPoints() {
  return (
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
  );
}
