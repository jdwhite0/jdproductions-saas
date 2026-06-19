// Shared lightweight building blocks for member/founder pages (MUI 7 safe — no Grid API)
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export function PageHead({ eyebrow, title, subtitle, action }) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 2, mb: 3 }}>
      <Box>
        {eyebrow && (
          <Typography variant="caption" sx={{ color: 'secondary.dark', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            {eyebrow}
          </Typography>
        )}
        <Typography variant="h2" sx={{ mt: 0.5 }}>{title}</Typography>
        {subtitle && <Typography variant="body1" color="text.secondary" sx={{ mt: 1, maxWidth: 560 }}>{subtitle}</Typography>}
      </Box>
      {action}
    </Box>
  );
}

export function Grid({ min = 240, gap = 2.5, children, sx }) {
  return <Box sx={{ display: 'grid', gridTemplateColumns: `repeat(auto-fill, minmax(${min}px, 1fr))`, gap, ...sx }}>{children}</Box>;
}

export function StatCard({ label, value, hint, accent }) {
  return (
    <Card variant="outlined" sx={{ borderRadius: 3 }}>
      <CardContent>
        <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{label}</Typography>
        <Typography variant="h2" sx={{ mt: 1, color: accent || 'text.primary' }}>{value}</Typography>
        {hint && <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>{hint}</Typography>}
      </CardContent>
    </Card>
  );
}
