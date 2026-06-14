import { Box, Button, Card, CardContent, CardHeader, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Stack, Typography } from '@mui/material';
import CheckCircleIcon from '@tabler/icons-react/dist/icons/IconCheck';
import { PLANS, STRIPE_CONFIG } from '../../config/plans';

export default function PricingSection() {
  const handleSelectPlan = (plan) => {
    // Redirect to Stripe Checkout
    window.location.href = `/checkout?plan=${plan.id}`;
  };

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Stack spacing={4} sx={{ mb: 8 }}>
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="h3" sx={{ mb: 2, fontWeight: 700 }}>
            Simple, Transparent Pricing
          </Typography>
          <Typography variant="body1" color="textSecondary" sx={{ maxWidth: 600, mx: 'auto' }}>
            Choose the plan that fits your business needs. All plans include direct access to our team and support.
          </Typography>
        </Box>

        <Grid container spacing={3} justifyContent="center">
          {PLANS.map((plan, index) => (
            <Grid item xs={12} sm={6} md={4} key={plan.id}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  border: plan.featured ? '2px solid #FFC20E' : '1px solid #e0e0e0',
                  transform: plan.featured ? 'scale(1.05)' : 'scale(1)',
                  background: plan.featured ? '#fffbf0' : '#fff',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    boxShadow: 3,
                    borderColor: '#FFC20E',
                  },
                }}
              >
                <CardHeader
                  title={plan.name}
                  subheader={plan.description}
                  sx={{
                    pb: 2,
                    '& .MuiCardHeader-title': {
                      fontSize: '1.5rem',
                      fontWeight: 700,
                      color: '#0A2540',
                    },
                    '& .MuiCardHeader-subheader': {
                      fontSize: '0.875rem',
                      color: '#666',
                      mt: 1,
                    },
                  }}
                />
                <CardContent sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <Box sx={{ mb: 3 }}>
                    <Typography variant="h4" sx={{ fontWeight: 700, color: '#FFC20E' }}>
                      ${plan.price}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      per {plan.billing}
                    </Typography>
                  </Box>

                  <List sx={{ flex: 1, mb: 3 }}>
                    {plan.features.map((feature, idx) => (
                      <ListItem key={idx} sx={{ px: 0, py: 0.75 }}>
                        <ListItemIcon sx={{ minWidth: 32 }}>
                          <CheckCircleIcon size={18} color="#FFC20E" />
                        </ListItemIcon>
                        <ListItemText
                          primary={feature}
                          primaryTypographyProps={{
                            variant: 'body2',
                            sx={{ color: '#333' },
                          }}
                        />
                      </ListItem>
                    ))}
                  </List>

                  <Button
                    fullWidth
                    variant="contained"
                    sx={{
                      background: '#FFC20E',
                      color: '#0A2540',
                      '&:hover': {
                        background: '#ffb300',
                      },
                    }}
                    onClick={() => handleSelectPlan(plan)}
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Container>
  );
}
