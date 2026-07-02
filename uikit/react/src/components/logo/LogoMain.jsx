'use client';

// @mui
import Box from '@mui/material/Box';

// @project
import { FONT_ORBITRON } from '@/config';

/***************************  LOGO - MAIN (JDPay wordmark — Orbitron 900, gradient)  ***************************/

export default function LogoMain() {
  return (
    <Box
      component="span"
      sx={{
        fontFamily: FONT_ORBITRON,
        fontWeight: 900,
        fontSize: { xs: 20, lg: 23 },
        lineHeight: 1,
        letterSpacing: '0.5px',
        whiteSpace: 'nowrap',
        background: 'linear-gradient(100deg, #00B5A0, #9A5BFF)',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        color: 'transparent'
      }}
    >
      JDPay
    </Box>
  );
}
