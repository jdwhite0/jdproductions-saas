import { useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Switch from '@mui/material/Switch';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Snackbar from '@mui/material/Snackbar';
import { PageHead } from './_ui';

const CHANNELS = [
  { id: 'daily_brief', title: 'The Mode — Daily Brief', desc: 'Your daily intelligence read. The signal the studio runs on.', def: true },
  { id: 'educational_content', title: 'Playbooks & Educational', desc: 'Systems, playbooks, and how-tos on building what compounds.', def: true },
  { id: 'product_update', title: 'Product Updates', desc: 'New features and releases across JYSON, ACCESS, and the platform.', def: true },
  { id: 'weekly_digest', title: 'Weekly Digest', desc: 'A once-a-week synthesis of what mattered.', def: false },
  { id: 'account', title: 'Account & Billing', desc: 'Receipts, renewals, and important account notices.', def: true, locked: true }
];

export default function EmailPreferences() {
  const [prefs, setPrefs] = useState(Object.fromEntries(CHANNELS.map((c) => [c.id, c.def])));
  const [saved, setSaved] = useState(false);
  const toggle = (id) => setPrefs((p) => ({ ...p, [id]: !p[id] }));
  return (
    <Box>
      <PageHead eyebrow="Email Preferences" title="Choose what lands in your inbox." subtitle="Control marketing and intelligence emails. Account and billing notices are always on." />
      <Card variant="outlined" sx={{ borderRadius: 3, maxWidth: 720 }}>
        <CardContent>
          {CHANNELS.map((c, i) => (
            <Box key={c.id}>
              {i > 0 && <Divider />}
              <Stack direction="row" sx={{ justifyContent: 'space-between', alignItems: 'center', py: 2, gap: 2 }}>
                <Box>
                  <Typography variant="body1" sx={{ fontWeight: 600 }}>{c.title}</Typography>
                  <Typography variant="body2" color="text.secondary">{c.desc}</Typography>
                </Box>
                <Switch checked={!!prefs[c.id]} disabled={c.locked} onChange={() => toggle(c.id)} color="primary" />
              </Stack>
            </Box>
          ))}
          <Button variant="contained" color="primary" sx={{ mt: 2 }} onClick={() => setSaved(true)}>Save preferences</Button>
        </CardContent>
      </Card>
      <Snackbar open={saved} autoHideDuration={2500} onClose={() => setSaved(false)} message="Preferences saved" />
    </Box>
  );
}
