// src/wizard/industries.js
// Each industry maps to: a theme, a section recipe, and placeholder content.
//
// Section roles:
//   compulsory  — always included, not toggleable (hero)
//   recommended — pre-checked for the user, but they can uncheck
//   optional    — available to add, but not pre-checked
//
// Layout roles:
//   Each industry curates a `layout` map. The wizard reads it first,
//   falls back to the section's own `meta.defaultLayout` if not specified.

export const industries = {
  restaurant: {
    name: 'Restaurant',
    icon: '🍕',
    theme: 'warmSerif',
    availableThemes: ['warmSerif', 'boldDark', 'clinicTrust'],
    description: 'Menu, gallery, reviews, and reservations',

    compulsory: ['hero'],
    recommended: ['features', 'gallery', 'testimonials', 'contact'],
    optional: ['stats', 'team', 'pricing', 'cta'],

    // ─── Layout curation ───
    layout: {
      hero: 'split',              // text left, image right
      features: 'grid',
      gallery: 'masonry',         // Pinterest-style
      testimonials: '3up',
      contact: 'split',
      stats: '3up',
      team: 'grid',
      pricing: 'tiers',
      cta: 'centered',
    },

    placeholder: {
      hero: {
        eyebrow: 'Since 1985',
        heading: 'Authentic Italian, made fresh daily',
        subheading: 'Family recipes passed down through generations.',
        primaryCta: { label: 'Reserve a table', href: '#reserve' },
        secondaryCta: { label: 'View menu', href: '#menu' },
      },
      features: {
        eyebrow: 'Our menu',
        heading: 'From our kitchen',
        subheading: 'Handmade pasta, wood-fired pizza, and seasonal specials.',
        items: [
          { heading: 'Margherita', body: 'San Marzano tomatoes, fresh mozzarella, basil.' },
          { heading: 'Pepperoni', body: 'Crispy, spicy, classic. A house favorite.' },
          { heading: 'Quattro Formaggi', body: 'Four cheeses, one perfect slice.' },
        ],
      },
      gallery: {
        heading: 'From the kitchen',
        subheading: 'A look at what we make',
        images: [],
      },
      testimonials: {
        heading: 'What our guests say',
        items: [
          { quote: 'Best Italian in the neighborhood. We come every Friday.', name: 'Maria S.', role: 'Regular', rating: 5 },
          { quote: 'The pasta is unbelievable. Tastes like my grandmother made it.', name: 'James T.', role: 'Local', rating: 5 },
          { quote: 'Cozy atmosphere, great service, incredible food.', name: 'Priya K.', role: 'Visitor', rating: 5 },
        ],
      },
      stats: {
        heading: 'By the numbers',
        items: [
          { value: '25', suffix: '+', label: 'Years open' },
          { value: '50', suffix: 'k+', label: 'Guests served' },
          { value: '4.9', suffix: '★', label: 'Average rating' },
        ],
      },
      team: {
        heading: 'Meet the team',
        subheading: 'The people behind every plate',
        members: [
          { name: 'Marco Rossi', role: 'Head Chef', bio: 'Trained in Bologna, cooking for 30 years.' },
          { name: 'Elena Rossi', role: 'Owner', bio: 'Runs the front of house with warmth and precision.' },
        ],
      },
      pricing: {
        heading: 'Special menus',
        tiers: [
          { name: 'Lunch Prix Fixe', monthlyPrice: 24, yearlyPrice: 24, description: 'Mon–Fri, 12–3pm', features: ['Two courses', 'Coffee included'], ctaLabel: 'See menu' },
          { name: 'Chef\'s Tasting', monthlyPrice: 85, yearlyPrice: 85, description: 'Five courses', features: ['Wine pairing available', 'Seasonal menu'], ctaLabel: 'Reserve', featured: true },
        ],
      },
      cta: {
        heading: 'Book your table tonight',
        subheading: 'Walk-ins welcome, reservations recommended.',
        primaryCta: { label: 'Reserve now', href: '#reserve' },
      },
      contact: {
        eyebrow: 'Visit us',
        heading: 'Come say hello',
        subheading: 'Walk-ins welcome. Reservations recommended on weekends.',
        info: [
          { label: 'Address', value: '123 Main Street' },
          { label: 'Phone', value: '(555) 123-4567' },
          { label: 'Hours', value: 'Mon–Sun, 11am – 10pm' },
        ],
      },
    },
  },

  salon: {
    name: 'Salon',
    icon: '💇',
    theme: 'clinicTrust',
    availableThemes: ['clinicTrust', 'playfulPop', 'warmSerif'],
    description: 'Services, gallery, reviews, and booking',

    compulsory: ['hero'],
    recommended: ['features', 'gallery', 'testimonials', 'contact'],
    optional: ['stats', 'team', 'pricing', 'cta'],

    layout: {
      hero: 'split',              // text left, image right
      features: 'grid',
      gallery: 'grid',
      testimonials: '3up',
      contact: 'centered',        // softer, friendlier
      stats: '3up',
      team: 'grid',
      pricing: 'tiers',
      cta: 'centered',
    },

    placeholder: {
      hero: {
        eyebrow: 'Book your transformation',
        heading: 'Look good. Feel great.',
        subheading: 'Hair, nails, skincare — all under one roof.',
        primaryCta: { label: 'Book now', href: '#book' },
        secondaryCta: { label: 'See services', href: '#services' },
      },
      features: {
        eyebrow: 'Services',
        heading: 'What we offer',
        subheading: 'From a quick trim to a full transformation.',
        items: [
          { heading: 'Haircut & Styling', body: 'Cut, color, blowout — tailored to you.' },
          { heading: 'Manicure & Pedicure', body: 'Classic or gel. Always pristine.' },
          { heading: 'Facials & Skincare', body: 'Rejuvenating treatments for every skin type.' },
        ],
      },
      gallery: {
        heading: 'Our work',
        subheading: 'Recent styles from our team',
        images: [],
      },
      testimonials: {
        heading: 'Loved by our clients',
        items: [
          { quote: 'Best haircut I have had in years.', name: 'Aisha M.', role: 'Client', rating: 5 },
          { quote: 'The staff is so friendly and talented.', name: 'Rachel D.', role: 'Client', rating: 5 },
          { quote: 'I always leave feeling amazing.', name: 'Tom H.', role: 'Client', rating: 5 },
        ],
      },
      stats: {
        heading: 'By the numbers',
        items: [
          { value: '10', suffix: '+', label: 'Years in business' },
          { value: '5', suffix: 'k+', label: 'Happy clients' },
          { value: '4.9', suffix: '★', label: 'Average rating' },
        ],
      },
      team: {
        heading: 'Meet our stylists',
        subheading: 'Trained, certified, and obsessed with detail',
        members: [
          { name: 'Sofia Martinez', role: 'Lead Stylist', bio: 'Color specialist with 12 years of experience.' },
          { name: 'Jade Chen', role: 'Nail Artist', bio: 'Known for intricate, long-lasting designs.' },
          { name: 'Amara Okafor', role: 'Esthetician', bio: 'Skincare expert focused on results.' },
        ],
      },
      pricing: {
        heading: 'Services & pricing',
        tiers: [
          { name: 'Haircut', monthlyPrice: 45, yearlyPrice: 45, description: 'Wash, cut, style', features: ['Consultation', 'Blow dry'], ctaLabel: 'Book' },
          { name: 'Color', monthlyPrice: 120, yearlyPrice: 120, description: 'Full color service', features: ['Consultation', 'Gloss', 'Style'], ctaLabel: 'Book', featured: true },
          { name: 'Manicure', monthlyPrice: 35, yearlyPrice: 35, description: 'Classic or gel', features: ['Shape', 'Cuticle care', 'Polish'], ctaLabel: 'Book' },
        ],
      },
      cta: {
        heading: 'Ready for a change?',
        subheading: 'Book your appointment today.',
        primaryCta: { label: 'Book now', href: '#book' },
      },
      contact: {
        eyebrow: 'Visit us',
        heading: 'Book your appointment',
        subheading: 'Walk-ins welcome, appointments preferred.',
        info: [
          { label: 'Address', value: '456 Oak Avenue' },
          { label: 'Phone', value: '(555) 234-5678' },
          { label: 'Hours', value: 'Tue–Sun, 9am – 7pm' },
        ],
      },
    },
  },

  contractor: {
    name: 'Contractor',
    icon: '🔧',
    theme: 'boldDark',
    availableThemes: ['boldDark', 'saasModern', 'clinicTrust'],
    description: 'Services, projects, stats, and quotes',

    compulsory: ['hero'],
    recommended: ['features', 'stats', 'gallery', 'testimonials', 'contact'],
    optional: ['team', 'pricing', 'cta'],

    layout: {
      hero: 'split-reverse',      // image left, text right
      features: 'grid',
      stats: '4up',               // contractors love numbers
      gallery: 'featured',        // one big hero project
      testimonials: '2up',
      contact: 'split',
      team: 'list',               // professional feel
      pricing: 'tiers',
      cta: 'banner',
    },

    placeholder: {
      hero: {
        eyebrow: 'Licensed & insured',
        heading: 'Building tomorrow, today',
        subheading: 'Quality construction and renovation for over 25 years.',
        primaryCta: { label: 'Get a free quote', href: '#quote' },
        secondaryCta: { label: 'See our work', href: '#work' },
      },
      features: {
        eyebrow: 'Services',
        heading: 'What we do',
        subheading: 'From small repairs to full builds.',
        items: [
          { heading: 'General Contracting', body: 'Full-service project management from start to finish.' },
          { heading: 'Renovations', body: 'Kitchens, bathrooms, and additions done right.' },
          { heading: 'Commercial Builds', body: 'Offices, retail, and industrial spaces.' },
        ],
      },
      stats: {
        heading: 'By the numbers',
        items: [
          { value: '50', suffix: '+', label: 'Projects delivered' },
          { value: '200', suffix: '+', label: 'Team members' },
          { value: '25', suffix: '+', label: 'Years of excellence' },
          { value: '100', suffix: '%', label: 'Client satisfaction' },
        ],
      },
      gallery: {
        heading: 'Recent projects',
        subheading: 'A look at what we build',
        images: [],
      },
      testimonials: {
        heading: 'What clients say',
        items: [
          { quote: 'Finished on time, on budget, and it looks incredible.', name: 'David R.', role: 'Homeowner', rating: 5 },
          { quote: 'Professional team. Clear communication throughout.', name: 'Anna L.', role: 'Business owner', rating: 5 },
          { quote: 'We would hire them again without hesitation.', name: 'Michael B.', role: 'Property manager', rating: 5 },
        ],
      },
      team: {
        heading: 'Our leadership',
        members: [
          { name: 'Robert Chen', role: 'Founder', bio: '30 years in construction management.' },
          { name: 'Sarah Patel', role: 'Operations Lead', bio: 'Oversees every project from kickoff to closeout.' },
        ],
      },
      pricing: {
        heading: 'How we price',
        tiers: [
          { name: 'Consultation', monthlyPrice: 0, yearlyPrice: 0, description: 'Free', features: ['Site visit', 'Written estimate'], ctaLabel: 'Book now' },
          { name: 'Standard Build', monthlyPrice: 0, yearlyPrice: 0, description: 'Custom quote', features: ['Fixed price', 'Timeline guarantee'], ctaLabel: 'Get quote', featured: true },
        ],
      },
      cta: {
        heading: 'Ready to start your project?',
        subheading: 'We respond within 24 hours.',
        primaryCta: { label: 'Request a quote', href: '#quote' },
      },
      contact: {
        eyebrow: 'Get in touch',
        heading: 'Request a free quote',
        subheading: 'We respond within 24 hours.',
        info: [
          { label: 'Phone', value: '(555) 345-6789' },
          { label: 'Email', value: 'info@example.com' },
          { label: 'Service area', value: 'Greater metro area' },
        ],
      },
    },
  },

  consultant: {
    name: 'Consultant',
    icon: '💼',
    theme: 'saasModern',
    availableThemes: ['saasModern', 'boldDark', 'warmSerif'],
    description: 'Services, pricing, reviews, and contact',

    compulsory: ['hero'],
    recommended: ['features', 'pricing', 'testimonials', 'contact'],
    optional: ['stats', 'team', 'gallery', 'cta'],

    layout: {
      hero: 'centered',           // clean, professional
      features: 'bento',          // modern, asymmetric
      pricing: 'tiers-with-toggle',
      testimonials: '2up',
      stats: 'split',
      team: 'featured',
      gallery: 'grid',
      cta: 'split',
      contact: 'split',
    },

    placeholder: {
      hero: {
        eyebrow: 'Strategy & growth',
        heading: 'Helping founders grow faster',
        subheading: 'Fractional leadership, strategic planning, and hands-on execution.',
        primaryCta: { label: 'Book a call', href: '#book' },
        secondaryCta: { label: 'See services', href: '#services' },
      },
      features: {
        eyebrow: 'Services',
        heading: 'How I can help',
        subheading: 'Fractional, flexible, focused on outcomes.',
        items: [
          { heading: 'Strategic Planning', body: 'Roadmaps, priorities, and quarterly goals.' },
          { heading: 'Go-to-Market', body: 'Positioning, pricing, and launch strategy.' },
          { heading: 'Operations', body: 'Process, hiring, and scaling decisions.' },
        ],
      },
      pricing: {
        eyebrow: 'Engagements',
        heading: 'Simple, transparent pricing',
        subheading: 'Pick the level of support you need.',
        toggle: true,
        tiers: [
          { name: 'Advisory', monthlyPrice: 1500, yearlyPrice: 15000, description: 'Monthly calls', features: ['2 calls/month', 'Email support'], ctaLabel: 'Get started' },
          { name: 'Fractional', monthlyPrice: 5000, yearlyPrice: 50000, description: 'Weekly involvement', features: ['Weekly calls', 'Ongoing support', 'Slack access'], ctaLabel: 'Get started', featured: true },
          { name: 'Embedded', monthlyPrice: 12000, yearlyPrice: 120000, description: 'Full engagement', features: ['Daily involvement', 'Team embedding', 'Priority support'], ctaLabel: 'Contact me' },
        ],
      },
      testimonials: {
        heading: 'What clients say',
        items: [
          { quote: 'Doubled our revenue in 6 months.', name: 'Sarah K.', role: 'Founder, SaaS', rating: 5 },
          { quote: 'Sharp strategic thinking, hands-on execution.', name: 'Daniel M.', role: 'CEO, Agency', rating: 5 },
          { quote: 'The clarity and focus we needed.', name: 'Nina P.', role: 'Founder, DTC', rating: 5 },
        ],
      },
      stats: {
        heading: 'Track record',
        items: [
          { value: '40', suffix: '+', label: 'Clients served' },
          { value: '12', suffix: 'y', label: 'Years consulting' },
          { value: '$200', suffix: 'M+', label: 'Client revenue added' },
        ],
      },
      team: {
        heading: 'About me',
        members: [
          { name: 'Alex Morgan', role: 'Founder & Principal', bio: 'Former operator. Now helping founders avoid the mistakes I made.' },
        ],
      },
      gallery: {
        heading: 'Case studies',
        subheading: 'Selected work',
        images: [],
      },
      cta: {
        heading: 'Ready to talk?',
        subheading: 'Free 30-minute intro call.',
        primaryCta: { label: 'Book a call', href: '#book' },
      },
      contact: {
        eyebrow: 'Let\'s talk',
        heading: 'Book a free intro call',
        subheading: '30 minutes, no commitment.',
        info: [
          { label: 'Email', value: 'hello@example.com' },
          { label: 'Response time', value: 'Within 24 hours' },
        ],
      },
    },
  },

  photographer: {
    name: 'Photographer',
    icon: '📷',
    theme: 'boldDark',
    availableThemes: ['boldDark', 'warmSerif', 'playfulPop'],
    description: 'Gallery-first with booking',

    compulsory: ['hero'],
    recommended: ['gallery', 'testimonials', 'cta', 'contact'],
    optional: ['features', 'stats', 'team', 'pricing'],

    layout: {
      hero: 'bg-image',           // full-bleed image, dramatic
      gallery: 'featured',        // one hero shot + smaller ones
      testimonials: 'wall',       // dense, many reviews
      cta: 'centered',
      contact: 'info-only',
      features: 'alternating',
      stats: '3up',
      team: 'featured',
      pricing: 'tiers',
    },

    placeholder: {
      hero: {
        eyebrow: 'Portraits, weddings, brands',
        heading: 'Capturing moments that last',
        subheading: 'Available for shoots worldwide.',
        primaryCta: { label: 'Book a session', href: '#book' },
        secondaryCta: { label: 'View portfolio', href: '#work' },
      },
      gallery: {
        heading: 'Selected work',
        subheading: 'A small sample of recent projects',
        images: [],
      },
      testimonials: {
        heading: 'Kind words',
        items: [
          { quote: 'Best photos we have ever had. Truly captured the day.', name: 'Emma & John', role: 'Wedding clients', rating: 5 },
          { quote: 'Professional, easy to work with, incredible results.', name: 'Chris B.', role: 'Brand client', rating: 5 },
          { quote: 'Made me feel comfortable and the photos show it.', name: 'Leila R.', role: 'Portrait client', rating: 5 },
        ],
      },
      cta: {
        heading: 'Ready to book?',
        subheading: 'Limited availability each month.',
        primaryCta: { label: 'Check availability', href: '#book' },
      },
      features: {
        eyebrow: 'Services',
        heading: 'What I shoot',
        subheading: 'Weddings, portraits, brands, and events.',
        items: [
          { heading: 'Weddings', body: 'Full-day coverage, two photographers, edited gallery.' },
          { heading: 'Portraits', body: 'Personal, family, and professional headshots.' },
          { heading: 'Brands', body: 'Product, lifestyle, and editorial photography.' },
        ],
      },
      stats: {
        heading: 'By the numbers',
        items: [
          { value: '200', suffix: '+', label: 'Weddings shot' },
          { value: '10', suffix: '+', label: 'Years shooting' },
          { value: '4.9', suffix: '★', label: 'Average rating' },
        ],
      },
      team: {
        heading: 'About',
        members: [
          { name: 'Jamie Rivera', role: 'Photographer', bio: 'Shooting weddings and portraits for over a decade.' },
        ],
      },
      pricing: {
        heading: 'Packages',
        tiers: [
          { name: 'Mini Session', monthlyPrice: 250, yearlyPrice: 250, description: '30 minutes', features: ['10 edited images', 'Online gallery'], ctaLabel: 'Book' },
          { name: 'Full Session', monthlyPrice: 600, yearlyPrice: 600, description: '2 hours', features: ['40 edited images', 'Print release', 'Online gallery'], ctaLabel: 'Book', featured: true },
          { name: 'Wedding', monthlyPrice: 3500, yearlyPrice: 3500, description: 'Full day', features: ['Two photographers', '300+ edited images', 'Online gallery'], ctaLabel: 'Inquire' },
        ],
      },
      contact: {
        eyebrow: 'Get in touch',
        heading: 'Let\'s work together',
        subheading: 'Tell me about your project.',
        info: [
          { label: 'Email', value: 'studio@example.com' },
          { label: 'Based in', value: 'New York City' },
          { label: 'Travel', value: 'Available worldwide' },
        ],
      },
    },
  },
};

export const industryList = Object.entries(industries).map(([id, data]) => ({
  id,
  ...data,
}));

// Section label lookup — used by wizard UIs
export const SECTION_LABELS = {
  hero: 'Hero',
  features: 'Features / Services',
  pricing: 'Pricing',
  cta: 'Call to action',
  gallery: 'Gallery',
  testimonials: 'Testimonials',
  contact: 'Contact',
  team: 'Team',
  stats: 'Stats',
};

export const SECTION_DESCRIPTIONS = {
  features: 'What you offer',
  pricing: 'Plans and prices',
  cta: 'A short conversion block',
  gallery: 'Photos of your work',
  testimonials: 'Customer reviews',
  contact: 'How to reach you',
  team: 'Your people',
  stats: 'Key numbers',
};