import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import CircularProgress from '@mui/material/CircularProgress';
import { PageHead } from '@/views/member/_ui';
import useAdminData from '@/hooks/useAdminData';

export default function FounderAccounts() {
  const { data, error, isLoading } = useAdminData();
  return (
    <Box>
      <PageHead eyebrow="Accounts" title="Manage every account." subtitle="Live from Clerk — plans, roles, and activity across all members." />
      {error && <Alert severity="warning" sx={{ mb: 2 }}>Live data unavailable — check founder role + endpoint.</Alert>}
      <Card variant="outlined" sx={{ borderRadius: 3 }}>
        <CardContent>
          {isLoading && <Stack alignItems="center" sx={{ py: 5 }}><CircularProgress size={26} /></Stack>}
          {(data?.users || []).map((u, i) => (
            <Box key={u.id}>
              {i > 0 && <Divider />}
              <Stack direction={{ xs: 'column', sm: 'row' }} sx={{ justifyContent: 'space-between', alignItems: { sm: 'center' }, py: 1.75, gap: 1 }}>
                <Box>
                  <Typography variant="body1" sx={{ fontWeight: 600 }}>{u.name}</Typography>
                  <Typography variant="caption" color="text.secondary">{u.email} · joined {u.createdAt}</Typography>
                </Box>
                <Stack direction="row" spacing={1.5} sx={{ alignItems: 'center' }}>
                  <Chip label={u.plan ? u.plan.toUpperCase() : 'no plan'} size="small" variant="outlined" color={u.plan ? 'primary' : 'default'} />
                  <Chip label={u.role} size="small" color={u.role !== 'member' ? 'secondary' : 'default'} />
                  <Button size="small" variant="outlined" color="primary" href={`https://dashboard.clerk.com`} target="_blank">Manage</Button>
                </Stack>
              </Stack>
            </Box>
          ))}
        </CardContent>
      </Card>
    </Box>
  );
}
