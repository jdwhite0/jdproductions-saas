import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import { PageHead, Grid } from './_ui';

const INVOICES = [
  { id: 'INV-0007', date: 'Jun 1, 2026', amount: '$997.00', status: 'Paid' },
  { id: 'INV-0006', date: 'May 1, 2026', amount: '$997.00', status: 'Paid' }
];

export default function Billing() {
  return (
    <Box>
      <PageHead eyebrow="Billing & Payments" title="Your plan & payments." subtitle="Manage your subscription, payment method, and invoices." />
      <Grid min={300} sx={{ mb: 3 }}>
        <Card variant="outlined" sx={{ borderRadius: 3 }}>
          <CardContent>
            <Stack direction="row" sx={{ justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
              <Typography variant="h4">Current plan</Typography>
              <Chip label="Active" size="small" color="success" />
            </Stack>
            <Typography variant="h2" color="primary.main">GROW</Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>$997 / month · renews Jul 1, 2026</Typography>
            <Stack direction="row" spacing={1.5}>
              <Button variant="contained" color="primary">Manage subscription</Button>
              <Button variant="outlined" color="primary" href="https://jdproductions.io/pricing.html" target="_blank">Change plan</Button>
            </Stack>
          </CardContent>
        </Card>
        <Card variant="outlined" sx={{ borderRadius: 3 }}>
          <CardContent>
            <Typography variant="h4" sx={{ mb: 1 }}>Payment method</Typography>
            <Typography variant="body1">Visa ending 4242</Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>Expires 08 / 28</Typography>
            <Button variant="outlined" color="primary">Update card</Button>
          </CardContent>
        </Card>
      </Grid>
      <Card variant="outlined" sx={{ borderRadius: 3 }}>
        <CardContent>
          <Typography variant="h4" sx={{ mb: 1 }}>Invoices</Typography>
          {INVOICES.map((inv, i) => (
            <Box key={inv.id}>
              {i > 0 && <Divider />}
              <Stack direction="row" sx={{ justifyContent: 'space-between', alignItems: 'center', py: 1.5 }}>
                <Box>
                  <Typography variant="body1" sx={{ fontWeight: 600 }}>{inv.id}</Typography>
                  <Typography variant="caption" color="text.secondary">{inv.date}</Typography>
                </Box>
                <Stack direction="row" spacing={2} sx={{ alignItems: 'center' }}>
                  <Typography variant="body2">{inv.amount}</Typography>
                  <Chip label={inv.status} size="small" color="success" variant="outlined" />
                  <Button size="small" variant="text" color="primary">Receipt</Button>
                </Stack>
              </Stack>
            </Box>
          ))}
        </CardContent>
      </Card>
    </Box>
  );
}
