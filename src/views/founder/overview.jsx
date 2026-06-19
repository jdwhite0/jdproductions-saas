import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import { PageHead, Grid, StatCard } from '@/views/member/_ui';

const SIGNUPS = [
  { name: 'Acme Studios', plan: 'GROW', when: 'Today' },
  { name: 'Northwind Co.', plan: 'LAUNCH', when: 'Yesterday' }
];

export default function FounderOverview() {
  return (
    <Box>
      <PageHead eyebrow="Founder" title="Studio control center." subtitle="Accounts, revenue, and delivery across the whole SaaS." />
      <Grid min={220} sx={{ mb: 3 }}>
        <StatCard label="Members" value="—" hint="Total accounts" accent="primary.main" />
        <StatCard label="MRR" value="—" hint="Monthly recurring" accent="secondary.dark" />
        <StatCard label="Active services" value="—" hint="In delivery" />
        <StatCard label="Briefs published" value="Daily" hint="The Mode" />
      </Grid>
      <Card variant="outlined" sx={{ borderRadius: 3, maxWidth: 720 }}>
        <CardContent>
          <Typography variant="h4" sx={{ mb: 1 }}>Recent signups</Typography>
          {SIGNUPS.map((s, i) => (
            <Box key={s.name}>
              {i > 0 && <Divider />}
              <Stack direction="row" sx={{ justifyContent: 'space-between', py: 1.5 }}>
                <Typography variant="body1" sx={{ fontWeight: 600 }}>{s.name}</Typography>
                <Typography variant="body2" color="text.secondary">{s.plan} · {s.when}</Typography>
              </Stack>
            </Box>
          ))}
          <Typography variant="caption" color="text.secondary" sx={{ mt: 1, display: 'block' }}>Live data wires to Clerk + Stripe + Supabase next.</Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
