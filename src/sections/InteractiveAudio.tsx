import { useState, useRef } from 'react';
import { Box, Container, Typography, Paper, Grid, Card, CardContent, IconButton, Tooltip, Zoom, useTheme } from '@mui/material';
import { 
  PlayArrow as PlayArrowIcon, 
  Pause as PauseIcon, 
  VolumeUp as VolumeUpIcon, 
  CheckCircleOutlined as CheckCircleOutlineIcon 
} from '@mui/icons-material';

interface AudioTrack {
  id: string;
  title: string;
  rule: string;
  arabicText: string;
  transliteration: string;
  description: string;
  audioUrl: string;
}

const audioTracks: AudioTrack[] = [
  {
    id: 'bismillah',
    title: 'Bismillah',
    rule: 'Hukum Asal / Basmalah',
    arabicText: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ',
    transliteration: 'Bismillahir-rahmanir-rahim',
    description: 'Sebutan ringkas dan jelas pada lafaz jalalah (Allah).',
    audioUrl: 'https://www.everyayah.com/data/Abdul_Basit_Murattal_64kbps/001001.mp3',
  },
  {
    id: 'qalqalah',
    title: 'Qalqalah Kubra',
    rule: 'Lantunan Kuat (Bila Wakaf)',
    arabicText: 'قُلْ هُوَ اللَّهُ أَحَدٌ',
    transliteration: 'Qul huwallahu aḥad',
    description: 'Huruf Dal (د) dihujung kalimah dibaca secara melantun kuat.',
    audioUrl: 'https://www.everyayah.com/data/Abdul_Basit_Murattal_64kbps/112001.mp3',
  },
  {
    id: 'ghunnah',
    title: 'Wajib al-Ghunnah',
    rule: 'Dengung Wajib (2 Harakat)',
    arabicText: 'إِنَّا أَعْطَيْنَاكَ الْكَوْثَرَ',
    transliteration: 'Innā a‘ṭainā kal-kawthar',
    description: 'Huruf Nun bertasydid (نّ) wajib dibaca secara mendengung selama 2 harakat.',
    audioUrl: 'https://www.everyayah.com/data/Abdul_Basit_Murattal_64kbps/108001.mp3',
  },
  {
    id: 'ikhfa',
    title: 'Ikhfa\' Haqiqi',
    rule: 'Sembunyi & Dengung',
    arabicText: 'مِنْ شَرِّ مَا خَلَقَ',
    transliteration: 'Min sharri mā khalaq',
    description: 'Pertemuan Nun mati (نْ) dengan Syin (ش) disembunyikan sebutan Nun dan didengungkan.',
    audioUrl: 'https://www.everyayah.com/data/Abdul_Basit_Murattal_64kbps/113002.mp3',
  },
];

export function InteractiveAudio() {
  const theme = useTheme();
  const [playingId, setPlayingId] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handlePlay = (track: AudioTrack) => {
    if (audioRef.current) {
      audioRef.current.pause();
    }

    if (playingId === track.id) {
      setPlayingId(null);
      return;
    }

    setPlayingId(track.id);
    const audio = new Audio(track.audioUrl);
    audioRef.current = audio;
    audio.play().catch((err) => {
      console.error('Audio play failed:', err);
      setPlayingId(null);
    });

    audio.onended = () => {
      setPlayingId(null);
    };
  };

  return (
    <Box id="audio-demo" sx={{ py: 8, bgcolor: 'background.paper' }}>
      <Container maxWidth="lg">
        <Card sx={{ background: 'linear-gradient(135deg, #4a0a17 0%, #073835 100%)', color: '#fff', overflow: 'visible', position: 'relative' }}>
          <CardContent sx={{ p: { xs: 3, md: 5 } }}>
            <Grid container spacing={4} sx={{ alignItems: 'center' }}>
              <Grid size={{ xs: 12, lg: 5 }}>
                <Box>
                  <Typography 
                    variant="overline" 
                    sx={{ 
                      color: 'secondary.main', 
                      fontWeight: 'bold', 
                      letterSpacing: 2,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1
                    }}
                  >
                    <VolumeUpIcon fontSize="small" /> TEKNOLOGI AUDIO INTERAKTIF
                  </Typography>
                  <Typography variant="h3" sx={{ mt: 1, mb: 2, fontWeight: 800, color: '#fff' }}>
                    Dengar Sebutan Betul Terus Dari Ebook!
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#d1d5db', mb: 3 }}>
                    Ebook ini bukan sekadar tulisan dan gambar. Kami bawakan keistimewaan &nbsp;
                    <strong>"Free Audio Voice"</strong> di setiap halaman. Anda atau anak-anak 
                    hanya perlu tekan butang audio untuk dengar cara bacaan tajwid yang betul.
                  </Typography>
                  
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                      <CheckCircleOutlineIcon sx={{ color: 'secondary.main' }} />
                      <Typography variant="body2" sx={{ color: '#e5e7eb' }}>Sesuai untuk anak-anak menyemak bacaan secara mandiri.</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                      <CheckCircleOutlineIcon sx={{ color: 'secondary.main' }} />
                      <Typography variant="body2" sx={{ color: '#e5e7eb' }}>Bantu ibu bapa membetulkan sebutan tanpa rasa ragu-ragu.</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                      <CheckCircleOutlineIcon sx={{ color: 'secondary.main' }} />
                      <Typography variant="body2" sx={{ color: '#e5e7eb' }}>Suara Qari yang merdu, jelas, dan mengikut standard hukum tajwid.</Typography>
                    </Box>
                  </Box>
                </Box>
              </Grid>
              
              <Grid size={{ xs: 12, lg: 7 }}>
                <Paper 
                  elevation={8} 
                  sx={{ 
                    p: { xs: 2, md: 4 }, 
                    background: 'rgba(255, 255, 255, 0.08)', 
                    backdropFilter: 'blur(10px)', 
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: 4,
                    color: '#fff'
                  }}
                >
                  <Typography variant="h6" align="center" sx={{ mb: 3, fontWeight: 700, letterSpacing: 0.5, borderBottom: '1px solid rgba(255,255,255,0.1)', pb: 1.5 }}>
                    Cuba Sekarang (Klik Butang di Bawah)
                  </Typography>
                  
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    {audioTracks.map((track) => {
                      const isCurrentPlaying = playingId === track.id;
                      return (
                        <Box 
                          key={track.id}
                          sx={{ 
                            p: 2, 
                            borderRadius: 3, 
                            background: isCurrentPlaying ? 'rgba(102, 212, 126, 0.15)' : 'rgba(255, 255, 255, 0.05)',
                            border: isCurrentPlaying ? `1px solid ${theme.palette.secondary.main}` : '1px solid rgba(255, 255, 255, 0.05)',
                            transition: 'all 0.3s ease',
                            display: 'flex',
                            flexDirection: { xs: 'column', sm: 'row' },
                            alignItems: { xs: 'flex-start', sm: 'center' },
                            justifyContent: 'space-between',
                            gap: 2,
                            '&:hover': {
                              background: 'rgba(255, 255, 255, 0.08)',
                              transform: 'translateY(-2px)'
                            }
                          }}
                        >
                          <Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.5 }}>
                              <Typography variant="subtitle2" sx={{ color: 'secondary.main', fontWeight: 'bold' }}>
                                {track.title}
                              </Typography>
                              <Typography variant="caption" sx={{ px: 1, py: 0.2, borderRadius: 1, background: 'rgba(255,255,255,0.1)', color: '#d1d5db' }}>
                                {track.rule}
                              </Typography>
                            </Box>
                            <Typography variant="body2" sx={{ color: '#9ca3af', fontSize: '0.85rem' }}>
                              {track.description}
                            </Typography>
                          </Box>
                          
                          <Box sx={{ display: 'flex', alignItems: 'center', width: { xs: '100%', sm: 'auto' }, justifyContent: 'space-between', gap: 3 }}>
                            <Typography 
                              variant="h5" 
                              sx={{ 
                                fontFamily: '"Amiri", "Traditional Arabic", serif', 
                                fontSize: '1.6rem', 
                                textAlign: 'right', 
                                flexGrow: 1,
                                direction: 'rtl',
                                color: isCurrentPlaying ? 'secondary.main' : '#fff'
                              }}
                            >
                              {track.arabicText}
                            </Typography>
                            
                            <Tooltip 
                              title={isCurrentPlaying ? "Pause" : "Dengar Sebutan"} 
                              placement="top" 
                              arrow 
                              slots={{
                                transition: Zoom
                              }}
                            >
                              <IconButton
                                onClick={() => handlePlay(track)}
                                sx={{
                                  bgcolor: isCurrentPlaying ? 'secondary.main' : 'primary.light',
                                  color: '#fff',
                                  '&:hover': {
                                    bgcolor: isCurrentPlaying ? 'secondary.dark' : 'primary.main',
                                  },
                                  width: 44,
                                  height: 44,
                                  boxShadow: '0 4px 10px rgba(0,0,0,0.15)'
                                }}
                              >
                                {isCurrentPlaying ? <PauseIcon /> : <PlayArrowIcon />}
                              </IconButton>
                            </Tooltip>
                          </Box>
                        </Box>
                      );
                    })}
                  </Box>
                </Paper>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}
