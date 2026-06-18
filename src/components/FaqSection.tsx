import React, { useState } from 'react';
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { 
  ExpandMore as ExpandMoreIcon, 
  HelpOutlined as HelpOutlineIcon 
} from '@mui/icons-material';

interface FaqItem {
  question: string;
  answer: string;
}

const faqItems: FaqItem[] = [
  {
    question: "Siapa yang sesuai membaca eBook Home Tajwid ini?",
    answer: "Ebook ini direka khas untuk ibu bapa yang ingin mendidik anak-anak belajar tajwid di rumah. Ia juga sangat sesuai untuk golongan dewasa, remaja, atau sesiapa sahaja yang mahu membetulkan kesalahan bacaan tajwid yang sering berulang dengan penerangan yang ringkas."
  },
  {
    question: "Adakah ebook ini betul-betul ada audio sebutan di setiap halaman?",
    answer: "Ya, betul! Ini adalah keunikan utama eBook Home Tajwid. Di setiap halaman pembelajaran, disediakan butang audio. Apabila diklik, ia akan memainkan sebutan yang betul bagi ayat/hukum tajwid tersebut supaya anda atau anak-anak tidak ragu-ragu tentang sebutan tajwid yang betul."
  },
  {
    question: "Bagaimanakah cara penghantaran ebook ini dilakukan?",
    answer: "Sistem kami akan menghantar e-mel pengesahan berserta pautan (link) untuk memuat turun ebook dalam format PDF berkualiti tinggi sebaik sahaja pembayaran selesai dilakukan. Anda boleh membacanya di telefon pintar, tablet, atau laptop. Fail bonus juga akan disertakan dalam e-mel yang sama."
  },
  {
    question: "Bolehkah saya mencetak (print) ebook dan bonus flashcard ini?",
    answer: "Boleh! Ebook ini didatangkan dalam format PDF resolusi tinggi yang sedia untuk dicetak. Kad bonus (flashcards) juga diformat khas supaya mudah dicetak di rumah untuk dijadikan alat bantu mengajar fizikal yang menarik bagi anak-anak."
  },
  {
    question: "Bagaimanakah jaminan pulangan wang 100% berfungsi?",
    answer: "Kami sangat yakin dengan kualiti eBook Home Tajwid ini. Walau bagaimanapun, jika selepas membaca dan mempraktikkannya, anda merasakan ebook ini langsung tidak membantu anda atau anak anda memahami tajwid dengan lebih baik, hantarkan e-mel kepada kami dalam masa 30 hari. Kami akan kembalikan wang anda sepenuhnya tanpa sebarang soalan rumit."
  }
];

export const FaqSection: React.FC = () => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange = (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1, mb: 4 }}>
        <HelpOutlineIcon color="primary" sx={{ fontSize: 32 }} />
        <Typography variant="h4" align="center" sx={{ fontWeight: 800 }}>
          Soalan Lazim (FAQ)
        </Typography>
      </Box>
      
      <Box sx={{ maxWidth: 800, mx: 'auto' }}>
        {faqItems.map((item, index) => {
          const panelId = `panel-${index}`;
          const isCurrentExpanded = expanded === panelId;
          return (
            <Accordion 
              key={index}
              expanded={isCurrentExpanded} 
              onChange={handleChange(panelId)}
              sx={{ 
                mb: 1.5, 
                borderRadius: '12px !important',
                border: '1px solid #d5e3c8',
                boxShadow: isCurrentExpanded ? '0 8px 20px rgba(0,0,0,0.06)' : 'none',
                '&::before': { display: 'none' }, // Remove default line divider
                transition: 'all 0.2s ease',
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon color="primary" />}
                aria-controls={`${panelId}-content`}
                id={`${panelId}-header`}
                sx={{
                  px: 3,
                  py: 1,
                  '& .MuiAccordionSummary-content': {
                    margin: '12px 0'
                  }
                }}
              >
                <Typography sx={{ fontWeight: 700, color: isCurrentExpanded ? 'primary.main' : 'text.primary', fontSize: '1.05rem' }}>
                  {item.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ px: 3, pb: 3, pt: 0 }}>
                <Typography color="text.secondary" sx={{ lineHeight: 1.7, fontSize: '0.95rem' }}>
                  {item.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          );
        })}
      </Box>
    </Box>
  );
};
