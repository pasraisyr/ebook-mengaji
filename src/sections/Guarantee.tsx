import { Box, Container, Paper, Avatar, Typography, Divider } from '@mui/material';
import { VerifiedUser as VerifiedUserIcon } from '@mui/icons-material';

export function Guarantee() {
  return (
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
  );
}
