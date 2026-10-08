
// templates/saasLanding.js

export const saasLanding = {
  id: 'saas-landing',
  name: 'SaaS Landing Page',
  theme: 'saasModern',

  sections: [
    {
      id: 'hero',
      type: 'hero',
      order: 1,
      optional: false,
      layout: 'centered',
      style: 'default',
      density: 'lg',

      content: {
        eyebrow: 'New — v2.0 is here',
        heading: 'Build websites at the speed of thought',
        subheading:
          'The modern website maker for teams that want to launch faster, look better, and spend less time writing code.',

        primaryCta: {
          label: 'Get started free',
          href: '/signup',
        },

        secondaryCta: {
          label: 'See how it works',
          href: '/demo',
        },
      },
    },

    {
      id: 'social-proof',
      type: 'logos',
      order: 2,
      optional: true,
      layout: 'centered',
      style: 'muted',
      density: 'sm',

      content: {
        eyebrow: 'Trusted by modern teams',
        heading: 'Built for teams that move fast',

        items: [
          { name: 'Acme' },
          { name: 'Vertex' },
          { name: 'Northstar' },
          { name: 'Cloudline' },
          { name: 'Orbit' },
        ],
      },
    },

    {
      id: 'features',
      type: 'features',
      order: 3,
      optional: false,
      layout: 'grid',
      style: 'muted',
      density: 'lg',

      content: {
        eyebrow: 'Everything you need',
        heading: 'From idea to live website in minutes',
        subheading:
          'A complete toolkit for creating polished websites without slowing your team down.',

        items: [
          {
            eyebrow: 'Fast',
            heading: 'Launch in minutes',
            body:
              'Start with a proven structure, customize your content, and publish without rebuilding everything from scratch.',
          },
          {
            eyebrow: 'Flexible',
            heading: 'Make it your own',
            body:
              'Choose layouts, sections, typography, colors, and themes that match your brand.',
          },
          {
            eyebrow: 'Themable',
            heading: 'Change the entire look',
            body:
              'Switch between professionally designed visual systems without rewriting your content.',
          },
          {
            eyebrow: 'Composable',
            heading: 'Build your way',
            body:
              'Mix and match sections to create a page that fits your product, audience, and goals.',
          },
          {
            eyebrow: 'Responsive',
            heading: 'Looks great everywhere',
            body:
              'Every layout is designed to adapt naturally across desktop, tablet, and mobile screens.',
          },
          {
            eyebrow: 'Production ready',
            heading: 'Built for real websites',
            body:
              'Clean structure, reusable components, and a design system made for scalable websites.',
          },
        ],
      },
    },

    {
      id: 'product-showcase',
      type: 'showcase',
      order: 4,
      optional: true,
      layout: 'split',
      style: 'default',
      density: 'lg',

      content: {
        eyebrow: 'One workspace',
        heading: 'Everything you need to build better websites',
        subheading:
          'Bring your content, design system, and page structure together in one flexible workflow.',

        primaryCta: {
          label: 'Explore the platform',
          href: '/features',
        },

        items: [
          {
            heading: 'Visual page building',
            body:
              'Compose complete pages from reusable sections instead of starting from a blank canvas.',
          },
          {
            heading: 'Design system built in',
            body:
              'Keep typography, spacing, colors, radii, and visual styles consistent across every page.',
          },
          {
            heading: 'Built to scale',
            body:
              'Start with one landing page and expand into a complete website without changing your foundation.',
          },
        ],
      },
    },

    {
      id: 'how-it-works',
      type: 'steps',
      order: 5,
      optional: true,
      layout: 'horizontal',
      style: 'muted',
      density: 'lg',

      content: {
        eyebrow: 'How it works',
        heading: 'Go from blank page to launch',
        subheading:
          'A simple workflow designed to keep you moving instead of fighting your tools.',

        items: [
          {
            number: '01',
            heading: 'Choose a starting point',
            body:
              'Pick a template that matches your website, industry, and goals.',
          },
          {
            number: '02',
            heading: 'Customize your content',
            body:
              'Replace the copy, calls to action, and sections with your own content.',
          },
          {
            number: '03',
            heading: 'Make it yours',
            body:
              'Apply your brand and choose a visual theme that fits your identity.',
          },
          {
            number: '04',
            heading: 'Publish',
            body:
              'Review your website, connect your domain, and launch when you are ready.',
          },
        ],
      },
    },

    {
      id: 'pricing',
      type: 'pricing',
      order: 6,
      optional: false,
      layout: 'tiers-with-toggle',
      style: 'default',
      density: 'lg',

      content: {
        eyebrow: 'Pricing',
        heading: 'Simple, transparent pricing',
        subheading:
          'Start free and upgrade when your website and team grow.',

        toggle: true,

        tiers: [
          {
            name: 'Starter',
            description: 'For individuals and side projects',
            monthlyPrice: 0,
            yearlyPrice: 0,

            features: [
              '1 project',
              'Core sections',
              'Basic themes',
              'Community support',
            ],

            ctaLabel: 'Start free',
            ctaHref: '/signup',
          },

          {
            name: 'Pro',
            description: 'For creators and growing teams',
            monthlyPrice: 29,
            yearlyPrice: 290,

            features: [
              'Unlimited projects',
              'All templates',
              'All themes',
              'Custom domains',
              'Priority support',
              'Advanced customization',
            ],

            ctaLabel: 'Start free trial',
            ctaHref: '/signup',

            featured: true,
          },

          {
            name: 'Enterprise',
            description: 'For organizations with advanced needs',
            monthlyPrice: 99,
            yearlyPrice: 990,

            features: [
              'Everything in Pro',
              'SSO',
              'Audit logs',
              'Advanced permissions',
              'Dedicated support',
              'SLA',
            ],

            ctaLabel: 'Contact sales',
            ctaHref: '/contact',
          },
        ],
      },
    },

    {
      id: 'faq',
      type: 'faq',
      order: 7,
      optional: true,
      layout: 'accordion',
      style: 'muted',
      density: 'lg',

      content: {
        eyebrow: 'FAQ',
        heading: 'Questions? We have answers.',
        subheading:
          'Everything you need to know before getting started.',

        items: [
          {
            question: 'Do I need to know how to code?',
            answer:
              'No. The platform is designed to let you build and customize websites without requiring you to write everything from scratch.',
          },
          {
            question: 'Can I change the design after creating my website?',
            answer:
              'Yes. Your content and structure can remain intact while you change themes and visual styles.',
          },
          {
            question: 'Can I use my own domain?',
            answer:
              'Yes. Custom domains are available on supported plans.',
          },
          {
            question: 'Can I create more than one website?',
            answer:
              'Yes. Higher plans support multiple projects so you can create and manage more websites from the same platform.',
          },
          {
            question: 'Is there a free plan?',
            answer:
              'Yes. The Starter plan lets you begin building without paying upfront.',
          },
          {
            question: 'Can I upgrade later?',
            answer:
              'Absolutely. You can start with the free plan and upgrade when you need additional features.',
          },
        ],
      },
    },

    {
      id: 'final-cta',
      type: 'cta',
      order: 8,
      optional: false,
      layout: 'centered',
      style: 'brand',
      density: 'lg',

      content: {
        eyebrow: 'Start building today',
        heading: 'Your next website starts here.',
        subheading:
          'Create a polished, professional website without starting from scratch.',

        primaryCta: {
          label: 'Create your website',
          href: '/signup',
        },

        secondaryCta: {
          label: 'Talk to sales',
          href: '/contact',
        },
      },
    },

    {
      id: 'footer',
      type: 'footer',
      order: 9,
      optional: false,
      layout: 'multicol',
      style: 'dark',
      density: 'md',

      content: {
        brand: {
          name: 'WebMaker',
          tagline: 'Build websites at the speed of thought.',
        },

        columns: [
          {
            heading: 'Product',
            links: [
              { label: 'Features', href: '/features' },
              { label: 'Templates', href: '/templates' },
              { label: 'Pricing', href: '/pricing' },
              { label: 'Changelog', href: '/changelog' },
            ],
          },
          {
            heading: 'Company',
            links: [
              { label: 'About', href: '/about' },
              { label: 'Blog', href: '/blog' },
              { label: 'Careers', href: '/careers' },
              { label: 'Contact', href: '/contact' },
            ],
          },
          {
            heading: 'Resources',
            links: [
              { label: 'Documentation', href: '/docs' },
              { label: 'Help center', href: '/help' },
              { label: 'Community', href: '/community' },
            ],
          },
          {
            heading: 'Legal',
            links: [
              { label: 'Privacy', href: '/privacy' },
              { label: 'Terms', href: '/terms' },
              { label: 'Security', href: '/security' },
            ],
          },
        ],

        legal: '© 2026 WebMaker, Inc.',

        social: [
          {
            label: 'Twitter',
            href: 'https://twitter.com',
          },
          {
            label: 'GitHub',
            href: 'https://github.com',
          },
        ],
      },
    },
  ],
};

