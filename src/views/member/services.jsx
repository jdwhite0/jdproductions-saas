import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import LinearProgress from '@mui/material/LinearProgress';
import { PageHead, Grid } from './_ui';

const SERVICES = [
  { name: 'Website & Brand System', plan: 'GROW', status: 'Operating', progress: 100 },
  { name: 'AI Operating System', plan: 'GROW', status: 'In build', progress: 62 }
];
const tone = { Operating: 'success', 'In build': 'secondary', Scoping: 'default' };

export default function Services() {
  return (
    <Box>
      <PageHead eyebrow="My Services" title="What we're building for you." subtitle="Every engagement is a system we design, build, and operate with you." />
      <Grid min={320}>
        {SERVICES.map((s) => (
          <Card key={s.name} variant="outlined" sx={{ borderRadius: 3 }}>
            <CardContent>
              <Stack direction="row" sx={{ justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                <Typography variant="h4">{s.name}</Typography>
                <Chip label={s.status} size="small" color={tone[s.status]} />
              </Stack>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>Plan: {s.plan}</Typography>
              <LinearProgress variant="determinate" value={s.progress} sx={{ height: 8, borderRadius: 4 }} />
              <Typography variant="caption" color="text.secondary" sx={{ mt: 1, display: 'block' }}>{s.progress}% complete</Typography>
            </CardContent>
          </Card>
        ))}
      </Grid>
    </Box>
  );
}
