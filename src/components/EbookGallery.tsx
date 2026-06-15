import React, { useState } from 'react';
import { Box, Grid, Card, CardMedia, CardActionArea, Typography, Dialog, IconButton } from '@mui/material';
import {
  Close as CloseIcon,
  ArrowBackIosNew as ArrowBackIosNewIcon,
  ArrowForwardIos as ArrowForwardIosIcon,
  ZoomIn as ZoomInIcon
} from '@mui/icons-material';

// Import assets
import isiKandunganImg from '../assets/Iklan Ebook Home Tajwid/Isi Kandungan.png';
import img21 from '../assets/Iklan Ebook Home Tajwid/CONTOH PAPARAN/21.png';
import img22 from '../assets/Iklan Ebook Home Tajwid/CONTOH PAPARAN/22.png';
import img23 from '../assets/Iklan Ebook Home Tajwid/CONTOH PAPARAN/23.png';
import img3 from '../assets/Iklan Ebook Home Tajwid/Paparan visual ebook (Utama)/3.png';
import img5 from '../assets/Iklan Ebook Home Tajwid/Paparan visual ebook (Utama)/5.png';
import img8 from '../assets/Iklan Ebook Home Tajwid/Paparan visual ebook (Utama)/8.png';
import img25 from '../assets/Iklan Ebook Home Tajwid/Paparan visual ebook (Utama)/25.png';

interface GalleryItem {
  src: string;
  title: string;
  category: 'isi' | 'contoh' | 'utama';
  caption: string;
}

const galleryItems: GalleryItem[] = [
  {
    src: isiKandunganImg,
    title: 'Isi Kandungan',
    category: 'isi',
    caption: 'Susunan bab yang tersusun rapi memudahkan carian topik tajwid.',
  },
  {
    src: img21,
    title: 'Hukum Tajwid Terperinci',
    category: 'contoh',
    caption: 'Warna-warni dan teks yang besar membantu pembacaan tanpa keliru.',
  },
  {
    src: img22,
    title: 'Panduan Praktikal',
    category: 'contoh',
    caption: 'Formula ringkas yang senang diingati oleh anak-anak.',
  },
  {
    src: img23,
    title: 'Kesalahan Lazim',
    category: 'contoh',
    caption: 'Fokus kepada kesilapan biasa yang sering dibuat oleh pembaca.',
  },
  {
    src: img3,
    title: 'Bab Pengenalan',
    category: 'utama',
    caption: 'Penerangan asas yang sesuai walaupun untuk pemula.',
  },
  {
    src: img5,
    title: 'Makharaj Huruf',
    category: 'utama',
    caption: 'Visual kedudukan makhraj bagi bunyi sebutan huruf yang tepat.',
  },
  {
    src: img8,
    title: 'Contoh Praktikal',
    category: 'utama',
    caption: 'Latihan pendek untuk menguji kefahaman pembaca.',
  },
  {
    src: img25,
    title: 'Tips Bonus',
    category: 'utama',
    caption: 'Tips istimewa untuk mengekalkan kelancaran bacaan Al-Quran.',
  },
];

export const EbookGallery: React.FC = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const handlePrev = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : galleryItems.length - 1));
    }
  };

  const handleNext = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev !== null && prev < galleryItems.length - 1 ? prev + 1 : 0));
    }
  };

  return (
    <Box>
      <Grid container spacing={3}>
        {galleryItems.map((item, index) => (
          <Grid size={{ xs: 12, sm: 6, md: 3 }} key={item.src}>
            <Card 
              sx={{ 
                height: '100%', 
                display: 'flex', 
                flexDirection: 'column',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-6px)',
                  boxShadow: '0 12px 24px rgba(0,0,0,0.1)',
                  '& .zoom-overlay': {
                    opacity: 1
                  }
                }
              }}
            >
              <CardActionArea onClick={() => openLightbox(index)} sx={{ flexGrow: 1, position: 'relative' }}>
                <CardMedia
                  component="img"
                  image={item.src}
                  alt={item.title}
                  sx={{ 
                    height: 280, 
                    objectFit: 'contain',
                    bgcolor: '#f5ede7',
                    p: 1
                  }}
                />
                <Box 
                  className="zoom-overlay"
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    bgcolor: 'rgba(112, 26, 44, 0.4)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    opacity: 0,
                    transition: 'opacity 0.3s ease',
                  }}
                >
                  <IconButton sx={{ color: '#fff', bgcolor: 'rgba(0,0,0,0.5)', '&:hover': { bgcolor: 'rgba(0,0,0,0.7)' } }}>
                    <ZoomInIcon fontSize="large" />
                  </IconButton>
                </Box>
              </CardActionArea>
              <Box sx={{ p: 2, flexGrow: 0, borderTop: '1px solid #ebdcd3' }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: 'primary.main', mb: 0.5 }}>
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.85rem' }}>
                  {item.caption}
                </Typography>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Lightbox Dialog */}
      <Dialog
        fullScreen
        open={lightboxIndex !== null}
        onClose={closeLightbox}
        slotProps={{
          paper: {
            sx: {
              bgcolor: 'rgba(15, 23, 42, 0.95)',
              color: '#fff',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              p: 2
            }
          }
        }}
      >
        {lightboxIndex !== null && galleryItems[lightboxIndex] && (
          <Box sx={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', position: 'relative' }}>
            {/* Close Button */}
            <IconButton
              onClick={closeLightbox}
              sx={{
                position: 'absolute',
                top: 16,
                right: 16,
                color: '#fff',
                bgcolor: 'rgba(255,255,255,0.1)',
                '&:hover': { bgcolor: 'rgba(255,255,255,0.2)' },
                zIndex: 10
              }}
            >
              <CloseIcon />
            </IconButton>

            {/* Navigation buttons */}
            <Box 
              sx={{ 
                flexGrow: 1, 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'space-between',
                width: '100%',
                maxHeight: 'calc(100% - 120px)',
                px: { xs: 1, md: 4 }
              }}
            >
              <IconButton 
                onClick={handlePrev}
                sx={{ 
                  color: '#fff', 
                  bgcolor: 'rgba(255,255,255,0.1)', 
                  '&:hover': { bgcolor: 'rgba(255,255,255,0.2)' },
                  p: 1.5
                }}
              >
                <ArrowBackIosNewIcon />
              </IconButton>

              <Box 
                component="img"
                src={galleryItems[lightboxIndex].src}
                alt={galleryItems[lightboxIndex].title}
                sx={{
                  maxWidth: '85%',
                  maxHeight: '80vh',
                  objectFit: 'contain',
                  boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
                  borderRadius: 2,
                  bgcolor: '#ffffff',
                  p: { xs: 0.5, md: 2 }
                }}
              />

              <IconButton 
                onClick={handleNext}
                sx={{ 
                  color: '#fff', 
                  bgcolor: 'rgba(255,255,255,0.1)', 
                  '&:hover': { bgcolor: 'rgba(255,255,255,0.2)' },
                  p: 1.5
                }}
              >
                <ArrowForwardIosIcon />
              </IconButton>
            </Box>

            {/* Title and Caption */}
            <Box sx={{ textAlign: 'center', px: 4, py: 2, mt: 'auto' }}>
              <Typography variant="h5" sx={{ fontWeight: 'bold', color: 'secondary.main', mb: 1 }}>
                {galleryItems[lightboxIndex].title}
              </Typography>
              <Typography variant="body1" sx={{ color: '#cbd5e1', maxWidth: 600, mx: 'auto', mb: 2 }}>
                {galleryItems[lightboxIndex].caption}
              </Typography>
              <Typography variant="caption" sx={{ color: '#64748b' }}>
                Halaman {lightboxIndex + 1} daripada {galleryItems.length}
              </Typography>
            </Box>
          </Box>
        )}
      </Dialog>
    </Box>
  );
};
