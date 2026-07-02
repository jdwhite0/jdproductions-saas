// @mui
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';

export const hero = {
  chip: {
    label: (
      <>
        <Typography variant="caption" sx={{ color: 'text.secondary' }}>
          The rail for the
        </Typography>
        <Chip
          label={
            <Typography variant="caption" sx={{ color: 'primary.main' }}>
              creator economy
            </Typography>
          }
          sx={{ height: 24, bgcolor: 'primary.lighter', mr: -1, ml: 0.75, '& .MuiChip-label': { px: 1.25 } }}
        />
      </>
    )
  },
  headLine: 'Spend value. Move creativity.',
  captionLine:
    'JDP Pay is the simplest way to move JDP on Base — the exchange layer that lets creativity flow through the network. No seed phrase. No gas headaches. Just participation.',
  primaryBtn: { children: 'Open ACCESS Wallet', href: 'https://jdptoken.com/dashboard/', target: '_blank' },
  videoSrc: '',
  videoThumbnail: 'https://jdptoken.com/jdp-card-3d.png',
  listData: [
    { image: 'https://jdptoken.com/jdp-coin.png', title: 'Built on Base' },
    { image: 'https://jdptoken.com/jdp-coin.png', title: 'Self-custodial' },
    { image: 'https://jdptoken.com/jdp-coin.png', title: 'No seed phrase' },
    { image: 'https://jdptoken.com/jdp-coin.png', title: 'Gasless sends' },
    { image: 'https://jdptoken.com/jdp-coin.png', title: 'Participation, not speculation' }
  ]
};
