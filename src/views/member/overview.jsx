import { useUser } from '@clerk/clerk-react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { PageHead, Grid, StatCard } from './_ui';

export default function Overview() {
  const { user } = useUser();
  const name = user?.firstName || 'there';
  return (
    <Box>
      <PageHead eyebrow="Command" title={`Welcome back, ${name}.`} subtitle="Your ventures, products, and intelligence — in one place." />
      <Grid min={220} sx={{ mb: 3 }}>
        <StatCard label="Plan" value="GROW" hint="Renews monthly" accent="primary.main" />
        <StatCard label="Active services" value="2" hint="1 in build" />
        <StatCard label="Next invoice" value="Jul 1" hint="$997.00" />
        <StatCard label="The Mode" value="Daily" hint="Latest brief ready" accent="secondary.dark" />
      </Grid>
      <Card variant="outlined" sx={{ borderRadius: 3, background: 'linear-gradient(120deg,#002244,#001B36)', color: '#fff' }}>
        <CardContent sx={{ p: { xs: 3, md: 4 } }}>
          <Stack direction={{ xs: 'column', md: 'row' }} sx={{ alignItems: { md: 'center' }, justifyContent: 'space-between', gap: 2 }}>
            <Box>
              <Chip label="Build what compounds" size="small" sx={{ bgcolor: 'secondary.main', color: '#002244', fontWeight: 700, mb: 1.5 }} />
              <Typography variant="h3" sx={{ color: '#fff' }}>Have something worth building?</Typography>
              <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.7)', mt: 1, maxWidth: 520 }}>
                Start a new venture, system, or production with the studio. We design, build, and operate it with you.
              </Typography>
            </Box>
            <Button variant="contained" color="secondary" href="https://jdproductions.io/contact.html" target="_blank" sx={{ color: '#002244', fontWeight: 700, whiteSpace: 'nowrap' }}>
              Start a project
            </Button>
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
}
