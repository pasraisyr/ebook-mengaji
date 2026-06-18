import React, { useState } from 'react';
import { Box, Container, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { 
  ExpandMore as ExpandMoreIcon, 
  HelpOutlined as HelpOutlineIcon 
} from '@mui/icons-material';
import { faqItems } from '../data/faq';

export function Faq() {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange = (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box id="faq" sx={{ py: 10, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
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
      </Container>
    </Box>
  );
}
