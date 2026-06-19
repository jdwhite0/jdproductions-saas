import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import { PageHead } from '@/views/member/_ui';

const MEMBERS = [
  { name: 'Acme Studios', email: 'ops@acme.co', plan: 'GROW', role: 'member', status: 'Active' },
  { name: 'Northwind Co.', email: 'hi@northwind.co', plan: 'LAUNCH', role: 'member', status: 'Active' },
  { name: 'JD White', email: 'jd@jdproductions.io', plan: '—', role: 'founder', status: 'Active' }
];

export default function FounderAccounts() {
  return (
    <Box>
      <PageHead eyebrow="Accounts" title="Manage every account." subtitle="Full control — plans, roles, access, and status across all members." />
      <Card variant="outlined" sx={{ borderRadius: 3 }}>
        <CardContent>
          {MEMBERS.map((m, i) => (
            <Box key={m.email}>
              {i > 0 && <Divider />}
              <Stack direction={{ xs: 'column', sm: 'row' }} sx={{ justifyContent: 'space-between', alignItems: { sm: 'center' }, py: 1.75, gap: 1 }}>
                <Box>
                  <Typography variant="body1" sx={{ fontWeight: 600 }}>{m.name}</Typography>
                  <Typography variant="caption" color="text.secondary">{m.email}</Typography>
                </Box>
                <Stack direction="row" spacing={1.5} sx={{ alignItems: 'center' }}>
                  <Chip label={m.plan} size="small" variant="outlined" />
                  <Chip label={m.role} size="small" color={m.role === 'founder' ? 'secondary' : 'default'} />
                  <Chip label={m.status} size="small" color="success" variant="outlined" />
                  <Button size="small" variant="outlined" color="primary">Manage</Button>
                </Stack>
              </Stack>
            </Box>
          ))}
          <Typography variant="caption" color="text.secondary" sx={{ mt: 1, display: 'block' }}>Wires to Clerk Admin API for live user management next.</Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
