# JD Productions SaaS Platform

Complete SaaS application built with saasable-ui (React + Material UI) + Stripe.

## Quick Start

```bash
npm install
npm run start
```

App runs on `http://localhost:5173`

## Features

- **Pricing Page** — Display LAUNCH, GROW, SCALE plans
- **User Auth** — Login/Register (built-in to saasable-ui)
- **Dashboard** — Customer portal (subscriptions, billing, settings)
- **Stripe Integration** — Direct checkout link

## Plans

| Plan | Price | Features |
|------|-------|----------|
| LAUNCH | $297/mo | Website, Stripe, Mobile, 72-hour, Support |
| GROW | $997/mo | Everything + Systems, Automation, AI, Analytics |
| SCALE | $5k/mo | Everything + Account Mgr, Architecture, Training |

## Deploy to Vercel

```bash
vercel
```

Or connect repo to Vercel:
- Root Directory: `.` (apps/saas)
- Env vars set in vercel.json

## Stripe Configuration

1. Create Stripe Account (if not done)
2. Create Products for each plan in Stripe Dashboard:
   - LAUNCH: `prod_launch`
   - GROW: `prod_grow`
   - SCALE: `prod_scale`
3. Create Price objects for each:
   - LAUNCH Monthly: `price_launch_monthly`
   - GROW Monthly: `price_grow_monthly`
   - SCALE Monthly: `price_scale_monthly`
4. Update Stripe keys in environment

## File Structure

```
src/
├── config/
│   └── plans.js          ← Plan definitions + Stripe config
├── sections/
│   └── pricing/
│       └── PricingSection.jsx  ← Pricing page component
├── layouts/              ← Admin layout (dashboard)
├── views/                ← Pages (login, register, dashboard)
└── App.jsx
```

## Next Steps

1. **Deploy to Vercel** — `vercel`
2. **Wire checkout** — Create Stripe checkout session endpoint
3. **Webhook handling** — Handle Stripe events (payment, subscription updates)
4. **Customer portal** — Link to Stripe Customer Portal

## Pricing Page

Add to jdproductions.io:
```html
<a href="https://accounts.jdproductions.io/pricing">View Plans</a>
```

Customers → Sign up → Dashboard → Manage subscription

## Troubleshooting

- **Missing .env** → Copy .env.example to .env
- **Stripe key missing** → Add VITE_STRIPE_PUBLISHABLE_KEY to environment
- **Build fails** → `npm audit fix --force`
