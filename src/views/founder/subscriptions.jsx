import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { PageHead, Grid, StatCard } from '@/views/member/_ui';

export default function FounderSubscriptions() {
  return (
    <Box>
      <PageHead eyebrow="Subscriptions & Revenue" title="The yield." subtitle="Plans, MRR, and churn across the studio — wired to Stripe." />
      <Grid min={220}>
        <StatCard label="LAUNCH" value="—" hint="$297 / mo" />
        <StatCard label="GROW" value="—" hint="$997 / mo" accent="primary.main" />
        <StatCard label="SCALE" value="—" hint="$5k / mo" accent="secondary.dark" />
        <StatCard label="MRR" value="—" hint="Total recurring" />
      </Grid>
      <Typography variant="caption" color="text.secondary" sx={{ mt: 2, display: 'block' }}>Live figures connect to the Stripe API in the data phase.</Typography>
    </Box>
  );
}
