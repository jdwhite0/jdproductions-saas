import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import { PageHead, Grid, StatCard } from '@/views/member/_ui';
import useAdminData from '@/hooks/useAdminData';

export default function FounderSubscriptions() {
  const { data, error, isLoading } = useAdminData();
  const c = data?.planCounts || {};
  const v = (n) => (isLoading ? '…' : n ?? 0);
  return (
    <Box>
      <PageHead eyebrow="Subscriptions & Revenue" title="The yield." subtitle="Live plan counts and MRR from Stripe." />
      {error && <Alert severity="warning" sx={{ mb: 2 }}>Live data unavailable.</Alert>}
      <Grid min={220}>
        <StatCard label="LAUNCH" value={v(c.launch)} hint="$297 / mo" />
        <StatCard label="GROW" value={v(c.grow)} hint="$997 / mo" accent="primary.main" />
        <StatCard label="SCALE" value={v(c.scale)} hint="$5k / mo" accent="secondary.dark" />
        <StatCard label="MRR" value={isLoading ? '…' : data ? `$${data.mrr.toLocaleString()}` : '—'} hint="Total recurring" />
      </Grid>
    </Box>
  );
}
