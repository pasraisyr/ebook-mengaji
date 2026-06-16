import React, { useState } from 'react';
import { 
  Box, Typography, Card, CardContent, TextField, Button, 
  Grid, InputAdornment, Paper, Divider, Dialog, DialogContent,
  DialogTitle, Alert, Zoom, useTheme
} from '@mui/material';
import {
  Person as PersonIcon,
  Email as EmailIcon,
  WhatsApp as WhatsAppIcon,
  LocalOffer as LocalOfferIcon,
  Security as SecurityIcon,
  CheckCircle as CheckCircleIcon,
  ErrorOutlined as ErrorOutlineIcon
} from '@mui/icons-material';
import confetti from 'canvas-confetti';

interface Product {
  name: string;
  price: number;
  originalPrice: number;
  description: string;
  features: string[];
}

const product: Product = {
  name: 'eBook Home Tajwid (Edisi Penuh)',
  price: 19.90,
  originalPrice: 39.90,
  description: 'Panduan lengkap belajar tajwid dari rumah dengan audio sebutan interaktif di setiap halaman.',
  features: [
    'eBook Home Tajwid PDF (Edisi Penuh)',
    'Audio Sebutan Interaktif di setiap halaman',
    'BONUS 1: Flashcard Tajwid Poket (Printable)',
    'BONUS 2: Ebook Panduan & Tips Betulkan Bacaan Anak',
    'Akses Kumpulan Sokongan WhatsApp & Seumur Hidup'
  ]
};

export const CheckoutForm: React.FC = () => {
  const theme = useTheme();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  
  const [errors, setErrors] = useState<{name?: string; email?: string; phone?: string}>({});
  const [showSuccess, setShowSuccess] = useState(false);
  const [showFailure, setShowFailure] = useState(false);
  const [loading, setLoading] = useState(false);

  const currentPackage = product;

  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const status = params.get('status_id');
    if (status === '1') {
      const saved = localStorage.getItem('quranicgen_buyer');
      if (saved) {
        try {
          const parsed = JSON.parse(saved);
          setName(parsed.name || '');
          setEmail(parsed.email || '');
          setPhone(parsed.phone || '');
        } catch (e) {
          console.error(e);
        }
      }
      setShowSuccess(true);
      triggerConfetti();
    } else if (status === '3') {
      const saved = localStorage.getItem('quranicgen_buyer');
      if (saved) {
        try {
          const parsed = JSON.parse(saved);
          setName(parsed.name || '');
          setEmail(parsed.email || '');
          setPhone(parsed.phone || '');
        } catch (e) {
          console.error(e);
        }
      }
      setShowFailure(true);
    }
  }, []);

  const handleSendToWhatsApp = () => {
    const params = new URLSearchParams(window.location.search);
    const billCode = params.get('billcode') || 'N/A';
    const whatsappNum = import.meta.env.VITE_SELLER_WHATSAPP_NUMBER || '601123456789';
    
    const message = `Assalamualaikum QuranicGen, saya telah membuat pembelian eBook Home Tajwid.

Butiran Pembelian:
Nama: ${name}
E-mel: ${email}
No. Tel: ${phone}
Status: Pembayaran Berjaya (Rujukan Bil: ${billCode})`;

    const encodedMessage = encodeURIComponent(message);
    const waUrl = `https://wa.me/${whatsappNum}?text=${encodedMessage}`;
    window.open(waUrl, '_blank');
  };

  const clearUrlParams = () => {
    window.history.replaceState({}, document.title, window.location.pathname);
  };

  const validate = () => {
    const tempErrors: typeof errors = {};
    if (!name.trim()) tempErrors.name = 'Sila masukkan nama penuh anda.';
    
    if (!email.trim()) {
      tempErrors.email = 'Sila masukkan e-mel.';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      tempErrors.email = 'Format e-mel tidak sah.';
    }
    
    if (!phone.trim()) {
      tempErrors.phone = 'Sila masukkan nombor WhatsApp.';
    } else if (phone.length < 9) {
      tempErrors.phone = 'Sila masukkan nombor telefon yang sah.';
    }
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const triggerConfetti = () => {
    const duration = 3 * 1000;
    const end = Date.now() + duration;

    (function frame() {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#701a2c', '#b27f66', '#a0354e', '#d8b29c']
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#701a2c', '#b27f66', '#a0354e', '#d8b29c']
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    }());
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);

    // Save details to localStorage
    const buyerData = { name, email, phone };
    localStorage.setItem('quranicgen_buyer', JSON.stringify(buyerData));

    setTimeout(() => {
      const billUrl = import.meta.env.VITE_TOYYIBPAY_BILL_URL;
      if (!billUrl || billUrl === 'mock') {
        // Redirect to local mock payment portal
        window.location.href = window.location.origin + window.location.pathname + '?mock_payment=true';
      } else {
        // Redirect to real ToyyibPay Bill Link with prefilled customer details
        const separator = billUrl.includes('?') ? '&' : '?';
        const prefilledUrl = `${billUrl}${separator}billTo=${encodeURIComponent(name)}&billEmail=${encodeURIComponent(email)}&billPhone=${encodeURIComponent(phone)}`;
        window.location.href = prefilledUrl;
      }
    }, 800);
  };

  return (
    <Box>
      <Grid container spacing={4}>
        {/* Product Details */}
        <Grid size={{ xs: 12, md: 7 }}>
          <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 3, display: 'flex', alignItems: 'center', gap: 1 }}>
            <LocalOfferIcon color="primary" /> 1. Butiran eBook & Kandungan
          </Typography>
          
          <Paper
            elevation={2}
            sx={{
              p: 3.5,
              borderRadius: 4,
              border: `2px solid ${theme.palette.primary.main}`,
              position: 'relative',
              background: 'linear-gradient(135deg, #ffffff 0%, #faf6f3 100%)',
              boxShadow: '0 6px 15px rgba(0,0,0,0.03)'
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                top: -12,
                right: 20,
                bgcolor: 'primary.main',
                color: '#fff',
                px: 2,
                py: 0.5,
                borderRadius: 3,
                fontSize: '0.75rem',
                fontWeight: 'bold',
                letterSpacing: 0.5,
                boxShadow: '0 4px 8px rgba(112,26,44,0.2)'
              }}
            >
              TAWARAN PROMOSI
            </Box>
            
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: 1 }}>
                <Typography variant="h6" sx={{ fontWeight: 800, color: 'primary.main' }}>
                  {product.name}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Typography variant="body1" sx={{ textDecoration: 'line-through', color: 'text.secondary', fontSize: '0.95rem' }}>
                    RM{product.originalPrice.toFixed(2)}
                  </Typography>
                  <Typography variant="h5" sx={{ fontWeight: 900, color: 'secondary.main' }}>
                    RM{product.price.toFixed(2)}
                  </Typography>
                </Box>
              </Box>
              
              <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5, mb: 1, lineHeight: 1.6 }}>
                {product.description}
              </Typography>
              
              <Divider sx={{ my: 1.5, borderStyle: 'dashed', borderColor: 'rgba(112, 26, 44, 0.15)' }} />
              
              <Typography variant="subtitle2" sx={{ fontWeight: 'bold', color: 'primary.main', mb: 1 }}>
                Kandungan Pakej & Bonus:
              </Typography>
              
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                {product.features.map((feat, i) => (
                  <Box key={i} sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                    <CheckCircleIcon sx={{ color: 'primary.light', fontSize: 20 }} />
                    <Typography variant="body2" color="text.primary" sx={{ fontSize: '0.92rem', fontWeight: 500 }}>
                      {feat}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </Paper>
        </Grid>

        {/* Customer particulars */}
        <Grid size={{ xs: 12, md: 5 }}>
          <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 3, display: 'flex', alignItems: 'center', gap: 1 }}>
            <PersonIcon color="primary" /> 2. Butiran Penghantaran & Pembayaran
          </Typography>
          
          <Card elevation={3} sx={{ borderRadius: 4, overflow: 'hidden', border: '1px solid #ebdcd3' }}>
            <Box sx={{ bgcolor: 'primary.main', color: '#fff', p: 2, textAlign: 'center' }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                Jumlah Perlu Dibayar
              </Typography>
              <Typography variant="h3" sx={{ fontWeight: 800, color: 'secondary.main', my: 1 }}>
                RM{currentPackage.price.toFixed(2)}
              </Typography>
              <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.7)' }}>
                Termasuk semua cukai dan caj pemprosesan. Tiada kos tersembunyi.
              </Typography>
            </Box>
            
            <CardContent sx={{ p: 3 }}>
              <form onSubmit={handleSubmit}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
                  <TextField
                    fullWidth
                    label="Nama Penuh"
                    variant="outlined"
                    placeholder="Masukkan nama penuh anda"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    error={!!errors.name}
                    helperText={errors.name}
                    slotProps={{
                      input: {
                        startAdornment: (
                          <InputAdornment position="start">
                            <PersonIcon color="action" />
                          </InputAdornment>
                        ),
                      }
                    }}
                  />

                  <TextField
                    fullWidth
                    label="Alamat E-mel"
                    variant="outlined"
                    type="email"
                    placeholder="contoh@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    error={!!errors.email}
                    helperText={errors.email || "Link muat turun eBook akan dihantar ke e-mel ini."}
                    slotProps={{
                      input: {
                        startAdornment: (
                          <InputAdornment position="start">
                            <EmailIcon color="action" />
                          </InputAdornment>
                        ),
                      }
                    }}
                  />

                  <TextField
                    fullWidth
                    label="Nombor Telefon WhatsApp"
                    variant="outlined"
                    placeholder="0123456789"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    error={!!errors.phone}
                    helperText={errors.phone || "Untuk penghantaran bonus dan bantuan sokongan."}
                    slotProps={{
                      input: {
                        startAdornment: (
                          <InputAdornment position="start">
                            <WhatsAppIcon color="action" />
                          </InputAdornment>
                        ),
                      }
                    }}
                  />
                  
                  <Box sx={{ mt: 1 }}>
                    <Button
                      fullWidth
                      variant="contained"
                      color="secondary"
                      size="large"
                      type="submit"
                      disabled={loading}
                      className="pulse-glow"
                      sx={{ 
                        py: 1.8, 
                        fontSize: '1.1rem', 
                        fontWeight: 'bold',
                        borderRadius: 3
                      }}
                    >
                      {loading ? 'Memproses...' : 'DAPATKAN EBOOK SEKARANG 🚀'}
                    </Button>
                  </Box>
                  
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1, mt: 1, color: 'text.secondary' }}>
                    <SecurityIcon fontSize="small" sx={{ color: 'success.main' }} />
                    <Typography variant="caption" sx={{ fontWeight: 500 }}>
                      Transaksi Selamat & Penyulitan SSL 256-bit.
                    </Typography>
                  </Box>
                </Box>
              </form>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Success Dialog */}
      <Dialog
        open={showSuccess}
        onClose={() => {
          setShowSuccess(false);
          clearUrlParams();
        }}
        maxWidth="xs"
        fullWidth
        slots={{
          transition: Zoom
        }}
        slotProps={{
          paper: {
            sx: { borderRadius: 5, p: 2, textAlign: 'center' }
          }
        }}
      >
        <DialogTitle sx={{ pb: 0 }}>
          <CheckCircleIcon sx={{ color: 'success.main', fontSize: 64, mb: 1 }} />
          <Typography variant="h5" sx={{ fontWeight: 800, color: 'primary.main' }}>
            Tempahan Berjaya! 🎉
          </Typography>
        </DialogTitle>
        <DialogContent>
          <Typography variant="body1" sx={{ mb: 3, color: 'text.secondary' }}>
            Terima kasih <strong>{name}</strong>! Resit tempahan dan akses muat turun untuk <strong>{currentPackage.name}</strong> telah disediakan.
          </Typography>
          
          <Alert severity="success" sx={{ mb: 3, textAlign: 'left', borderRadius: 3 }}>
            Sila klik butang di bawah untuk menghantar butiran pembelian ke WhatsApp kami dan menerima pautan muat turun eBook serta-merta.
          </Alert>

          <Button
            fullWidth
            variant="contained"
            onClick={handleSendToWhatsApp}
            className="pulse-glow"
            sx={{ 
              py: 1.8, 
              borderRadius: 3, 
              mb: 1.5, 
              fontWeight: 'bold',
              background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
              color: '#fff',
              '&:hover': {
                background: 'linear-gradient(135deg, #128C7E 0%, #075E54 100%)',
              }
            }}
          >
            Hantar Butiran ke WhatsApp 🚀
          </Button>

          <Button
            fullWidth
            variant="outlined"
            onClick={() => {
              setShowSuccess(false);
              clearUrlParams();
              // reset form
              setName('');
              setEmail('');
              setPhone('');
            }}
            sx={{ py: 1.5, borderRadius: 2 }}
          >
            Tutup
          </Button>
        </DialogContent>
      </Dialog>

      {/* Failure Dialog */}
      <Dialog
        open={showFailure}
        onClose={() => {
          setShowFailure(false);
          clearUrlParams();
        }}
        maxWidth="xs"
        fullWidth
        slots={{
          transition: Zoom
        }}
        slotProps={{
          paper: {
            sx: { borderRadius: 5, p: 2, textAlign: 'center' }
          }
        }}
      >
        <DialogTitle sx={{ pb: 0 }}>
          <ErrorOutlineIcon sx={{ color: 'error.main', fontSize: 64, mb: 1 }} />
          <Typography variant="h5" sx={{ fontWeight: 800, color: 'error.main' }}>
            Pembayaran Gagal ❌
          </Typography>
        </DialogTitle>
        <DialogContent>
          <Typography variant="body1" sx={{ mb: 3, color: 'text.secondary' }}>
            Maaf <strong>{name}</strong>, transaksi pembayaran anda tidak berjaya dilakukan. Sila cuba lagi atau hubungi kami jika baki akaun anda telah ditolak.
          </Typography>
          
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={() => {
              setShowFailure(false);
              clearUrlParams();
            }}
            sx={{ py: 1.5, borderRadius: 2 }}
          >
            Cuba Semula
          </Button>
        </DialogContent>
      </Dialog>
    </Box>
  );
};
