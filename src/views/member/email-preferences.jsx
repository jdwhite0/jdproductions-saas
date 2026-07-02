import { useEffect, useState } from 'react';
import { useUser } from '@clerk/clerk-react';
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
  const { user, isLoaded } = useUser();
  const [prefs, setPrefs] = useState(null);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  // Load persisted prefs from Clerk metadata
  useEffect(() => {
    if (!isLoaded) return;
    const stored = user?.unsafeMetadata?.emailPrefs;
    setPrefs(stored && typeof stored === 'object'
      ? { ...Object.fromEntries(CHANNELS.map((c) => [c.id, c.def])), ...stored }
      : Object.fromEntries(CHANNELS.map((c) => [c.id, c.def])));
  }, [isLoaded, user]);

  const toggle = (id) => setPrefs((p) => ({ ...p, [id]: !p[id] }));

  const save = async () => {
    setSaving(true);
    try {
      await user.update({ unsafeMetadata: { ...user.unsafeMetadata, emailPrefs: prefs } });
      setSaved(true);
    } finally { setSaving(false); }
  };

  if (!prefs) return null;
  return (
    <Box>
      <PageHead eyebrow="Email Preferences" title="Choose what lands in your inbox." subtitle="Preferences save to your account and apply across all JD Productions emails. Account and billing notices are always on." />
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
          <Button variant="contained" color="primary" sx={{ mt: 2 }} disabled={saving} onClick={save}>
            {saving ? 'Saving…' : 'Save preferences'}
          </Button>
        </CardContent>
      </Card>
      <Snackbar open={saved} autoHideDuration={2500} onClose={() => setSaved(false)} message="Preferences saved to your account" />
    </Box>
  );
}
