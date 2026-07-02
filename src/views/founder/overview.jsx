import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Alert from '@mui/material/Alert';
import { PageHead, Grid, StatCard } from '@/views/member/_ui';
import useAdminData from '@/hooks/useAdminData';

export default function FounderOverview() {
  const { data, error, isLoading } = useAdminData();
  return (
    <Box>
      <PageHead eyebrow="Founder" title="Studio control center." subtitle="Accounts, revenue, and delivery across the whole SaaS — live." />
      {error && <Alert severity="warning" sx={{ mb: 2 }}>Live data unavailable — check founder role + endpoint.</Alert>}
      <Grid min={220} sx={{ mb: 3 }}>
        <StatCard label="Members" value={isLoading ? '…' : data?.totalUsers ?? '—'} hint="Total accounts" accent="primary.main" />
        <StatCard label="MRR" value={isLoading ? '…' : data ? `$${data.mrr.toLocaleString()}` : '—'} hint="Monthly recurring" accent="secondary.dark" />
        <StatCard label="Active subs" value={isLoading ? '…' : data ? Object.values(data.planCounts).reduce((a, b) => a + b, 0) : '—'} hint="Across all plans" />
        <StatCard label="The Mode" value="Daily" hint="Publishing" />
      </Grid>
      <Card variant="outlined" sx={{ borderRadius: 3, maxWidth: 720 }}>
        <CardContent>
          <Typography variant="h4" sx={{ mb: 1 }}>Newest accounts</Typography>
          {(data?.users || []).slice(0, 6).map((u, i) => (
            <Box key={u.id}>
              {i > 0 && <Divider />}
              <Stack direction="row" sx={{ justifyContent: 'space-between', py: 1.5 }}>
                <Typography variant="body1" sx={{ fontWeight: 600 }}>{u.name}</Typography>
                <Typography variant="body2" color="text.secondary">{u.plan ? u.plan.toUpperCase() : 'no plan'} · {u.createdAt}</Typography>
              </Stack>
            </Box>
          ))}
        </CardContent>
      </Card>
    </Box>
  );
}
