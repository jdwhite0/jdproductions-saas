import { useUser } from '@clerk/clerk-react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { PageHead, Grid, StatCard } from './_ui';
import useSubscription from '@/hooks/useSubscription';

export default function Overview() {
  const { user } = useUser();
  const { planName, sub, isLoading } = useSubscription();
  const navigate = useNavigate();
  const name = user?.firstName || 'there';
  const services = user?.publicMetadata?.services || [];
  return (
    <Box>
      <PageHead eyebrow="Command" title={`Welcome back, ${name}.`} subtitle="Your ventures, products, and intelligence — in one place." />
      <Grid min={220} sx={{ mb: 3 }}>
        <StatCard label="Plan" value={isLoading ? '…' : planName || 'None yet'} hint={planName ? (sub?.cancelAtPeriodEnd ? `Ends ${sub.renewsAt}` : `Renews ${sub?.renewsAt || 'monthly'}`) : 'Pick a plan to unlock the studio'} accent="primary.main" />
        <StatCard label="Active services" value={services.length} hint={services.length ? 'In delivery' : 'Start via Concierge'} />
        <StatCard label="Next invoice" value={sub?.renewsAt || '—'} hint={planName ? undefined : 'No subscription yet'} />
        <StatCard label="The Mode" value="Daily" hint="Latest brief ready" accent="secondary.dark" />
      </Grid>
      {!planName && !isLoading && (
        <Card variant="outlined" sx={{ borderRadius: 3, mb: 3, borderColor: 'secondary.main' }}>
          <CardContent>
            <Stack direction={{ xs: 'column', sm: 'row' }} sx={{ alignItems: { sm: 'center' }, justifyContent: 'space-between', gap: 2 }}>
              <Box>
                <Typography variant="h4">Activate your plan</Typography>
                <Typography variant="body2" color="text.secondary">Unlock products, services, and the studio behind them.</Typography>
              </Box>
              <Button variant="contained" color="primary" onClick={() => navigate('/billing')}>See plans</Button>
            </Stack>
          </CardContent>
        </Card>
      )}
      <Card variant="outlined" sx={{ borderRadius: 3, background: 'linear-gradient(120deg,#002244,#001B36)', color: '#fff' }}>
        <CardContent sx={{ p: { xs: 3, md: 4 } }}>
          <Stack direction={{ xs: 'column', md: 'row' }} sx={{ alignItems: { md: 'center' }, justifyContent: 'space-between', gap: 2 }}>
            <Box>
              <Chip label="Build what compounds" size="small" sx={{ bgcolor: 'secondary.main', color: '#002244', fontWeight: 700, mb: 1.5 }} />
              <Typography variant="h3" sx={{ color: '#fff' }}>Have something worth building?</Typography>
              <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.7)', mt: 1, maxWidth: 520 }}>
                Start a new venture, system, or production with the studio — right from your Concierge.
              </Typography>
            </Box>
            <Button variant="contained" color="secondary" onClick={() => navigate('/concierge')} sx={{ color: '#002244', fontWeight: 700, whiteSpace: 'nowrap' }}>
              Talk to the studio
            </Button>
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
}
