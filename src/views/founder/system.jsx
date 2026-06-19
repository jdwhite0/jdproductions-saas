import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { PageHead, Grid, StatCard } from '@/views/member/_ui';

export default function FounderSystem() {
  return (
    <Box>
      <PageHead eyebrow="System" title="Platform health." subtitle="Status across the ecosystem — access-app, The Mode pipeline, and integrations." />
      <Grid min={220}>
        <StatCard label="Access App" value="Live" hint="app-iota-inky-62" accent="primary.main" />
        <StatCard label="The Mode" value="Publishing" hint="Daily brief feed" accent="secondary.dark" />
        <StatCard label="Auth" value="Clerk" hint="mighty-owl-15" />
        <StatCard label="Billing" value="Stripe" hint="Live keys" />
      </Grid>
    </Box>
  );
}
