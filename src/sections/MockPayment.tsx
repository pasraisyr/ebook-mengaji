import { Box, Paper, Typography, CardContent, Alert, Button } from '@mui/material';

interface MockPaymentProps {
  onSimulatePayment: (success: boolean) => void;
}

export function MockPayment({ onSimulatePayment }: MockPaymentProps) {
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
              onClick={() => onSimulatePayment(true)}
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
              onClick={() => onSimulatePayment(false)}
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
