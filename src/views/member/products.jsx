import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { PageHead, Grid } from './_ui';

const PRODUCTS = [
  { name: 'JYSON', desc: 'Your intelligence that operates, not assists.', status: 'Live', href: 'https://jyson.vercel.app', cta: 'Open JYSON' },
  { name: 'ACCESS', desc: 'Identity & ownership for the AI-powered world.', status: 'Beta', href: '#', cta: 'Request access' },
  { name: 'JD AI OS', desc: 'The operating system that runs the studio — packaged.', status: 'Available', href: 'https://jdproductions.io/jd-ai-os.html', cta: 'Explore' },
  { name: 'Builder', desc: 'Turn a blueprint into a running system.', status: 'Soon', href: '#', cta: 'Join waitlist' }
];

const tone = { Live: 'success', Beta: 'secondary', Available: 'primary', Soon: 'default' };

export default function Products() {
  return (
    <Box>
      <PageHead eyebrow="Products & Access" title="Your launchpad." subtitle="Everything JD Productions builds — open the ones you have, unlock the rest." />
      <Grid min={280}>
        {PRODUCTS.map((p) => (
          <Card key={p.name} variant="outlined" sx={{ borderRadius: 3, display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flex: 1 }}>
              <Stack direction="row" sx={{ justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                <Typography variant="h4">{p.name}</Typography>
                <Chip label={p.status} size="small" color={tone[p.status]} variant={p.status === 'Soon' ? 'outlined' : 'filled'} />
              </Stack>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>{p.desc}</Typography>
              <Button variant={p.status === 'Live' ? 'contained' : 'outlined'} color="primary" href={p.href} target="_blank" disabled={p.href === '#'}>
                {p.cta}
              </Button>
            </CardContent>
          </Card>
        ))}
      </Grid>
    </Box>
  );
}
