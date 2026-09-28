// templates/saasLanding.js
export const saasLanding = {
  id: 'saas-landing',
  name: 'SaaS Landing Page',
  theme: 'saasModern',
  sections: [
    {
      type: 'hero',
      layout: 'centered',
      style: 'default',
      density: 'lg',
      content: {
        eyebrow: 'New — v2.0',
        heading: 'Build websites at the speed of thought',
        subheading: 'The website maker for modern teams.',
        primaryCta: { label: 'Get started', href: '/signup' },
        secondaryCta: { label: 'See demo', href: '/demo' },
      },
    },
    {
      type: 'features',
      layout: 'grid',
      style: 'muted',
      content: {
        eyebrow: 'Features',
        heading: 'Everything you need to ship',
        subheading: 'Composable, fast, themable.',
        items: [
          { eyebrow: 'Fast',     heading: 'Ship in minutes',    body: 'Compose sections, not code.' },
          { eyebrow: 'Themable', heading: 'Any brand',          body: 'Swap a theme, change everything.' },
          { eyebrow: 'Composable', heading: 'Mix and match',    body: 'Every section fits every theme.' },
        ],
      },
    },
    {
      type: 'pricing',
      layout: 'tiers-with-toggle',
      style: 'default',
      content: {
        eyebrow: 'Pricing',
        heading: 'Simple, transparent pricing',
        subheading: 'Start free. Upgrade when you grow.',
        toggle: true,
        tiers: [
          {
            name: 'Starter', description: 'For side projects',
            monthlyPrice: 0, yearlyPrice: 0,
            features: ['1 project', 'Community support', 'Basic themes'],
            ctaLabel: 'Start free', ctaHref: '/signup',
          },
          {
            name: 'Pro', description: 'For growing teams',
            monthlyPrice: 29, yearlyPrice: 290,
            features: ['Unlimited projects', 'All themes', 'Priority support', 'Custom domains'],
            ctaLabel: 'Start free trial', ctaHref: '/signup',
            featured: true,
          },
          {
            name: 'Enterprise', description: 'For large orgs',
            monthlyPrice: 99, yearlyPrice: 990,
            features: ['SSO', 'Audit logs', 'Dedicated support', 'SLA'],
            ctaLabel: 'Contact sales', ctaHref: '/contact',
          },
        ],
      },
    },
    {
      type: 'cta',
      layout: 'centered',
      style: 'brand',
      content: {
        heading: 'Ready to build?',
        subheading: 'Start free. No credit card required.',
        primaryCta: { label: 'Create account', href: '/signup' },
        secondaryCta: { label: 'Talk to sales', href: '/contact' },
      },
    },
    {
      type: 'footer',
      layout: 'multicol',
      style: 'dark',
      content: {
        brand: { name: 'WebMaker', tagline: 'Build websites at the speed of thought.' },
        columns: [
          { heading: 'Product', links: [{ label: 'Features', href: '/features' }, { label: 'Pricing', href: '/pricing' }] },
          { heading: 'Company', links: [{ label: 'About', href: '/about' }, { label: 'Blog', href: '/blog' }] },
          { heading: 'Legal',   links: [{ label: 'Privacy', href: '/privacy' }, { label: 'Terms', href: '/terms' }] },
        ],
        legal: '© 2026 WebMaker, Inc.',
        social: [
          { label: 'Twitter', href: 'https://twitter.com' },
          { label: 'GitHub', href: 'https://github.com' },
        ],
      },
    },
  ],
};