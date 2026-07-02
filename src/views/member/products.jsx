import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { useNavigate } from 'react-router-dom';
import { PageHead, Grid } from './_ui';
import useSubscription from '@/hooks/useSubscription';
import { hasFeature, planFor } from '@/config/entitlements';

const PRODUCTS = [
  { name: 'JYSON', feature: 'jyson', desc: 'Your intelligence that operates, not assists.', href: 'https://jyson.vercel.app', cta: 'Open JYSON' },
  { name: 'The Mode', feature: 'the_mode', desc: 'The daily intelligence brief the studio runs on.', to: '/the-mode', cta: 'Read today' },
  { name: 'JD AI OS Template', feature: 'ai_os_template', desc: 'The operating system that runs the studio — packaged for you.', href: 'https://jdproductions.io/jd-ai-os.html', cta: 'Explore' },
  { name: 'ACCESS', feature: 'access_beta', desc: 'Identity & ownership for the AI-powered world.', to: '/concierge', cta: 'Request access' }
];

export default function Products() {
  const { plan } = useSubscription();
  const navigate = useNavigate();
  return (
    <Box>
      <PageHead eyebrow="Products & Access" title="Your launchpad." subtitle="What your plan unlocks — and what's one upgrade away." />
      <Grid min={280}>
        {PRODUCTS.map((p) => {
          const unlocked = hasFeature(plan, p.feature);
          return (
            <Card key={p.name} variant="outlined" sx={{ borderRadius: 3, display: 'flex', flexDirection: 'column', opacity: unlocked ? 1 : 0.92 }}>
              <CardContent sx={{ flex: 1 }}>
                <Stack direction="row" sx={{ justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                  <Typography variant="h4">{p.name}</Typography>
                  <Chip label={unlocked ? 'Included' : `${planFor(p.feature)}+`} size="small" color={unlocked ? 'success' : 'default'} variant={unlocked ? 'filled' : 'outlined'} />
                </Stack>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>{p.desc}</Typography>
                {unlocked ? (
                  p.href
                    ? <Button variant="contained" color="primary" href={p.href} target="_blank">{p.cta}</Button>
                    : <Button variant="contained" color="primary" onClick={() => navigate(p.to)}>{p.cta}</Button>
                ) : (
                  <Button variant="outlined" color="primary" onClick={() => navigate('/billing')}>Unlock with {planFor(p.feature)}</Button>
                )}
              </CardContent>
            </Card>
          );
        })}
      </Grid>
    </Box>
  );
}
