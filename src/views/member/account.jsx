import Box from '@mui/material/Box';
import { UserProfile } from '@clerk/clerk-react';
import { PageHead } from './_ui';

export default function Account() {
  return (
    <Box>
      <PageHead eyebrow="Account" title="Your profile & security." subtitle="Manage your identity, password, connected accounts, and sessions." />
      <Box sx={{ '& .cl-rootBox, & .cl-cardBox': { width: '100%', maxWidth: '100%' } }}>
        <UserProfile routing="hash" appearance={{ variables: { colorPrimary: '#002244', fontFamily: "'Inter', sans-serif", borderRadius: '10px' }, elements: { card: { boxShadow: 'none', border: '1px solid #EFEDF4' }, navbar: { background: 'transparent' } } }} />
      </Box>
    </Box>
  );
}
