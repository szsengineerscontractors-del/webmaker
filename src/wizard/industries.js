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
//
// Placeholder conventions:
//   - Bracket placeholders like [Your phone] are intentional. They tell the
//     user "replace this." They are safer than fake data.
//   - Names, quotes, and avatars are demo-only. Do not treat them as real.
//   - Stats are illustrative. Users are expected to edit them.
//   - For non-subscription businesses (restaurant, cafe, band), pricing
//     entries use `monthlyPrice` as a flat price and mirror it in
//     `yearlyPrice`. The renderer should not show a monthly/yearly toggle
//     when `toggle` is false or absent.
//
// CTA hrefs:
//   All `href` values point to real section IDs rendered by the site:
//   #contact, #features, #gallery, #pricing, #about, #team, #stats,
//   #testimonials, #cta. Do NOT introduce new anchor targets without
//   also adding a matching section id.

export const industries = {
  restaurant: {
    name: 'Restaurant',
    icon: '🍕',
    theme: 'warmSerif',
    availableThemes: ['warmSerif', 'boldDark', 'editorial', 'nature', 'clinicTrust'],
    description: 'Menu, atmosphere, reviews, and reservations',

    compulsory: ['hero'],
    recommended: ['features', 'gallery', 'about', 'testimonials', 'contact'],
    optional: ['pricing', 'cta', 'team', 'stats'],

    layout: {
      hero: 'bg-slideshow',
      features: 'grid',
      gallery: 'masonry',
      about: 'split',
      testimonials: '3up',
      contact: 'split',
      pricing: 'tiers',
      cta: 'centered',
      team: 'grid',
      stats: '3up',
    },

    placeholder: {
      hero: {
        eyebrow: 'Neighborhood kitchen',
        heading: 'Seasonal plates, made from scratch',
        subheading: 'A small dining room, a short menu, and a lot of care.',
        primaryCta: { label: 'Reserve a table', href: '#contact' },
        secondaryCta: { label: 'View menu', href: '#features' },
        image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1200&h=900&fit=crop',
        slideshow: {
          images: [
            { src: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=2000&h=1200&fit=crop', alt: 'Dining room with warm lighting and set tables' },
            { src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=2000&h=1200&fit=crop', alt: 'Restaurant interior with wooden tables and pendant lights' },
            { src: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=2000&h=1200&fit=crop', alt: 'Chef plating a dish in the kitchen' },
            { src: 'https://images.unsplash.com/photo-1481833761820-0509d3217039?w=2000&h=1200&fit=crop', alt: 'Glass of red wine on a table' },
          ],
          interval: 4000,
          fadeDuration: 800,
        },
      },
      features: {
        eyebrow: 'Menu',
        heading: 'What we cook',
        subheading: 'A short menu that changes with the season.',
        items: [
          { heading: 'Wood-fired pizza', body: 'Blistered crust, local toppings, made to order.', image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&h=600&fit=crop' },
          { heading: 'Handmade pasta', body: 'Rolled daily. Simple sauces, good butter, real parmesan.', image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=800&h=600&fit=crop' },
          { heading: 'Seasonal plates', body: 'Whatever the market has. Always changing, always fresh.', image: 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=800&h=600&fit=crop' },
        ],
      },
      gallery: {
        heading: 'From the kitchen',
        subheading: 'A look at what we make',
        images: [
          { src: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&h=800&fit=crop', alt: 'Sliced pizza on a wooden board' },
          { src: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=800&h=1000&fit=crop', alt: 'Bowl of fresh pasta with herbs' },
          { src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=800&fit=crop', alt: 'Restaurant interior with warm wood and soft light' },
          { src: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&h=1000&fit=crop', alt: 'Chef finishing a plate in the kitchen' },
          { src: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?w=800&h=800&fit=crop', alt: 'Plated main course on a ceramic dish' },
          { src: 'https://images.unsplash.com/photo-1481833761820-0509d3217039?w=800&h=1000&fit=crop', alt: 'Glass of red wine on a linen tablecloth' },
        ],
      },
      about: {
        eyebrow: 'Our story',
        heading: 'A small kitchen, a short menu, a lot of care',
        body: [
          'We opened with one stove and a handful of tables. The idea was simple: cook the food we want to eat, and change the menu when the market changes.',
          'The room is small on purpose. We would rather do fewer things well than a lot of things quickly.',
        ],
        image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=1200&h=900&fit=crop',
        facts: [
          { value: '[Year]', label: 'Opened' },
          { value: '[Seats]', label: 'Seats' },
          { value: '[Menu]', label: 'Items on menu' },
          { value: '[Days]', label: 'Open per week' },
        ],
      },
      testimonials: {
        heading: 'What guests say',
        items: [
          { quote: 'We came for a birthday and ended up staying three hours. Everything was excellent.', name: 'Maria S.', role: 'Diner', rating: 5, avatar: 'https://i.pravatar.cc/150?u=restaurant-maria' },
          { quote: 'The pasta is the reason we keep coming back. Simple and perfect.', name: 'James T.', role: 'Regular', rating: 5, avatar: 'https://i.pravatar.cc/150?u=restaurant-james' },
          { quote: 'Small room, big flavors. Book ahead if you can.', name: 'Priya K.', role: 'First-time guest', rating: 5, avatar: 'https://i.pravatar.cc/150?u=restaurant-priya' },
        ],
      },
      pricing: {
        heading: 'Menus',
        subheading: 'Prices are per person unless noted.',
        toggle: false,
        tiers: [
          { name: 'Lunch', monthlyPrice: 24, yearlyPrice: 24, description: 'Weekdays, 12–3pm', features: ['Two courses', 'Coffee included'], ctaLabel: 'See menu' },
          { name: 'Tasting menu', monthlyPrice: 85, yearlyPrice: 85, description: 'Five courses', features: ['Wine pairing available', 'Seasonal'], ctaLabel: 'Reserve', featured: true },
        ],
      },
      cta: {
        heading: 'Book a table',
        subheading: 'Walk-ins welcome. Reservations recommended on weekends.',
        primaryCta: { label: 'Reserve now', href: '#contact' },
        image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&h=900&fit=crop',
      },
      team: {
        heading: 'In the kitchen',
        subheading: 'The people behind the plates',
        members: [
          { name: '[Chef name]', role: 'Head Chef', bio: 'Runs the kitchen and writes the menu.', avatar: 'https://i.pravatar.cc/300?u=restaurant-chef' },
          { name: '[Owner name]', role: 'Owner', bio: 'Runs the floor and picks the wine.', avatar: 'https://i.pravatar.cc/300?u=restaurant-owner' },
        ],
      },
      stats: {
        heading: 'At a glance',
        items: [
          { value: '[Year]', suffix: '', label: 'Opened' },
          { value: '[Seats]', suffix: '', label: 'Seats' },
          { value: '[Menu]', suffix: '', label: 'Menu items' },
        ],
      },
      contact: {
        eyebrow: 'Visit',
        heading: 'Find us',
        subheading: 'Walk-ins welcome. Reservations recommended on weekends.',
        info: [
          { label: 'Address', value: '[Your address]' },
          { label: 'Phone', value: '[Your phone]' },
          { label: 'Hours', value: '[Your hours]' },
        ],
      },
    },
  },

  salon: {
    name: 'Salon',
    icon: '💇',
    theme: 'clinicTrust',
    availableThemes: ['clinicTrust', 'playfulPop', 'warmSerif', 'luxe', 'nature'],
    description: 'Services, stylists, gallery, and booking',

    compulsory: ['hero'],
    recommended: ['features', 'gallery', 'team', 'testimonials', 'contact'],
    optional: ['pricing', 'about', 'cta', 'stats'],

    layout: {
      hero: 'split',
      features: 'grid',
      gallery: 'grid',
      team: 'grid',
      testimonials: '2up',
      contact: 'centered',
      pricing: 'tiers',
      about: 'split-reverse',
      cta: 'centered',
      stats: '3up',
    },

    placeholder: {
      hero: {
        eyebrow: 'Book your appointment',
        heading: 'Hair, nails, and skin — under one roof',
        subheading: 'A small team of specialists who actually listen.',
        primaryCta: { label: 'Book now', href: '#contact' },
        secondaryCta: { label: 'See services', href: '#features' },
        image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1200&h=900&fit=crop',
      },
      features: {
        eyebrow: 'Services',
        heading: 'What we do',
        subheading: 'From a quick trim to a full transformation.',
        items: [
          { heading: 'Cut & style', body: 'Consultation, cut, and finish. Curly, straight, or somewhere in between.', image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800&h=600&fit=crop' },
          { heading: 'Color', body: 'Full color, highlights, balayage, and gloss.', image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800&h=600&fit=crop' },
          { heading: 'Nails & skin', body: 'Manicures, pedicures, and facials.', image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&h=600&fit=crop' },
        ],
      },
      gallery: {
        heading: 'Recent work',
        subheading: 'Styles from our chairs',
        images: [
          { src: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&h=800&fit=crop', alt: 'Stylist finishing a blowout' },
          { src: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=800&h=800&fit=crop', alt: 'Close-up of painted nails' },
          { src: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800&h=800&fit=crop', alt: 'Salon interior with mirrors and chairs' },
          { src: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=800&h=800&fit=crop', alt: 'Hair color being applied' },
          { src: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=800&h=800&fit=crop', alt: 'Stylist blow-drying a client\'s hair' },
          { src: 'https://images.unsplash.com/photo-1607779097040-26e80aa78e66?w=800&h=800&fit=crop', alt: 'Quiet treatment room with soft lighting' },
        ],
      },
      team: {
        heading: 'The team',
        subheading: 'Specialists, not generalists',
        members: [
          { name: '[Stylist name]', role: 'Lead Stylist', bio: 'Color specialist. Cuts curly hair well.', avatar: 'https://i.pravatar.cc/300?u=salon-stylist' },
          { name: '[Nail artist]', role: 'Nail Artist', bio: 'Classic and gel. Clean lines, long wear.', avatar: 'https://i.pravatar.cc/300?u=salon-nails' },
          { name: '[Esthetician]', role: 'Esthetician', bio: 'Facials for sensitive and reactive skin.', avatar: 'https://i.pravatar.cc/300?u=salon-skin' },
        ],
      },
      testimonials: {
        heading: 'What clients say',
        items: [
          { quote: 'Best haircut I have had in years. They actually listened.', name: 'Aisha M.', role: 'Client', rating: 5, avatar: 'https://i.pravatar.cc/150?u=salon-aisha' },
          { quote: 'The staff is friendly and the color came out exactly right.', name: 'Rachel D.', role: 'Client', rating: 5, avatar: 'https://i.pravatar.cc/150?u=salon-rachel' },
        ],
      },
      pricing: {
        heading: 'Services & pricing',
        subheading: 'Prices vary by stylist and hair length.',
        toggle: false,
        tiers: [
          { name: 'Haircut', monthlyPrice: 45, yearlyPrice: 45, description: 'Wash, cut, style', features: ['Consultation', 'Blow dry'], ctaLabel: 'Book' },
          { name: 'Color', monthlyPrice: 120, yearlyPrice: 120, description: 'Full color service', features: ['Consultation', 'Gloss', 'Style'], ctaLabel: 'Book', featured: true },
          { name: 'Manicure', monthlyPrice: 35, yearlyPrice: 35, description: 'Classic or gel', features: ['Shape', 'Cuticle care', 'Polish'], ctaLabel: 'Book' },
        ],
      },
      about: {
        eyebrow: 'About us',
        heading: 'A small salon with a long memory',
        body: [
          'We opened with one chair and a simple idea: everyone should feel good walking out. That has not changed.',
          'Today we have a small team of specialists, and we still know most of our clients by name.',
        ],
        image: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=1200&h=900&fit=crop',
        facts: [
          { value: '[Year]', label: 'Opened' },
          { value: '[Stylists]', label: 'Stylists' },
          { value: '[Clients]', label: 'Regulars' },
          { value: '[Rating]', label: 'Average rating' },
        ],
      },
      cta: {
        heading: 'Ready for a change?',
        subheading: 'Book your appointment today.',
        primaryCta: { label: 'Book now', href: '#contact' },
        image: 'https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?w=1200&h=900&fit=crop',
      },
      stats: {
        heading: 'At a glance',
        items: [
          { value: '[Year]', suffix: '', label: 'Opened' },
          { value: '[Stylists]', suffix: '', label: 'Stylists' },
          { value: '[Clients]', suffix: '+', label: 'Regular clients' },
        ],
      },
      contact: {
        eyebrow: 'Visit',
        heading: 'Book your appointment',
        subheading: 'Walk-ins welcome. Appointments preferred.',
        info: [
          { label: 'Address', value: '[Your address]' },
          { label: 'Phone', value: '[Your phone]' },
          { label: 'Hours', value: '[Your hours]' },
        ],
      },
    },
  },

  contractor: {
    name: 'Contractor',
    icon: '🔧',
    theme: 'boldDark',
    availableThemes: ['boldDark', 'saasModern', 'clinicTrust', 'brutalist', 'nature'],
    description: 'Services, projects, credibility, and quotes',

    compulsory: ['hero'],
    recommended: ['features', 'gallery', 'stats', 'testimonials', 'about', 'contact'],
    optional: ['pricing', 'team', 'cta'],

    layout: {
      hero: 'split-reverse',
      features: 'grid',
      gallery: 'featured',
      stats: '4up',
      testimonials: '2up',
      about: 'facts',
      contact: 'split',
      pricing: 'tiers',
      team: 'list',
      cta: 'banner',
    },

    placeholder: {
      hero: {
        eyebrow: 'Licensed & insured',
        heading: 'Renovations done on time and on budget',
        subheading: 'Kitchens, bathrooms, additions, and full builds.',
        primaryCta: { label: 'Request a quote', href: '#contact' },
        secondaryCta: { label: 'See our work', href: '#gallery' },
        image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&h=900&fit=crop',
      },
      features: {
        eyebrow: 'Services',
        heading: 'What we do',
        subheading: 'From small repairs to full builds.',
        items: [
          { heading: 'General contracting', body: 'Full project management from permits to punch list.', image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=600&fit=crop' },
          { heading: 'Renovations', body: 'Kitchens, bathrooms, and additions.', image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=600&fit=crop' },
          { heading: 'Commercial', body: 'Offices, retail, and light industrial.', image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&h=600&fit=crop' },
        ],
      },
      gallery: {
        heading: 'Recent projects',
        subheading: 'A look at what we build',
        images: [
          { src: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&h=900&fit=crop', alt: 'Active construction site with framing' },
          { src: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=800&fit=crop', alt: 'Crew working on a residential renovation' },
          { src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=800&fit=crop', alt: 'Finished modern home exterior' },
          { src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=800&fit=crop', alt: 'Interior renovation with new flooring' },
          { src: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=800&fit=crop', alt: 'Framing on a residential addition' },
        ],
      },
      stats: {
        heading: 'At a glance',
        items: [
          { value: '[Years]', suffix: '+', label: 'Years in business' },
          { value: '[Projects]', suffix: '+', label: 'Projects completed' },
          { value: '[Crew]', suffix: '', label: 'People on crew' },
          { value: '[Licenses]', suffix: '', label: 'Licenses held' },
        ],
      },
      testimonials: {
        heading: 'What clients say',
        items: [
          { quote: 'Finished on time and on budget. The crew cleaned up every day.', name: 'David R.', role: 'Homeowner', rating: 5, avatar: 'https://i.pravatar.cc/150?u=contractor-david' },
          { quote: 'Clear communication from the first estimate to the final walkthrough.', name: 'Anna L.', role: 'Business owner', rating: 5, avatar: 'https://i.pravatar.cc/150?u=contractor-anna' },
        ],
      },
      about: {
        eyebrow: 'Who we are',
        heading: 'A small crew that shows up when it says it will',
        body: [
          'We started as a two-person crew doing small renovations. We still run small, because that is how we keep the quality up.',
          'Licensed, insured, and happy to give you references before you hire us.',
        ],
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1200&h=900&fit=crop',
        facts: [
          { value: '[Year]', label: 'Founded' },
          { value: '[Crew]', label: 'On the crew' },
          { value: '[Projects]', label: 'Projects/yr' },
          { value: '[Licenses]', label: 'Licenses' },
        ],
      },
      pricing: {
        heading: 'How we price',
        subheading: 'Every project is different. Here is how we start.',
        toggle: false,
        tiers: [
          { name: 'Consultation', monthlyPrice: 0, yearlyPrice: 0, description: 'Free', features: ['Site visit', 'Written estimate'], ctaLabel: 'Book now' },
          { name: 'Standard build', monthlyPrice: 0, yearlyPrice: 0, description: 'Custom quote', features: ['Fixed price', 'Timeline in writing'], ctaLabel: 'Get quote', featured: true },
        ],
      },
      team: {
        heading: 'Our leadership',
        members: [
          { name: '[Founder name]', role: 'Founder', bio: 'On site most days. Answers the phone himself.', avatar: 'https://i.pravatar.cc/300?u=contractor-founder' },
          { name: '[Ops name]', role: 'Operations', bio: 'Schedules crews and keeps projects moving.', avatar: 'https://i.pravatar.cc/300?u=contractor-ops' },
        ],
      },
      cta: {
        heading: 'Ready to start your project?',
        subheading: 'We respond to every quote request within one business day.',
        primaryCta: { label: 'Request a quote', href: '#contact' },
        image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&h=900&fit=crop',
      },
      contact: {
        eyebrow: 'Get in touch',
        heading: 'Request a free quote',
        subheading: 'We respond within one business day.',
        info: [
          { label: 'Phone', value: '[Your phone]' },
          { label: 'Email', value: '[Your email]' },
          { label: 'Service area', value: '[Your service area]' },
        ],
      },
    },
  },

  consultant: {
    name: 'Consultant',
    icon: '💼',
    theme: 'saasModern',
    availableThemes: ['saasModern', 'boldDark', 'warmSerif', 'editorial', 'luxe'],
    description: 'Services, case studies, engagement options, and contact',

    compulsory: ['hero'],
    recommended: ['features', 'stats', 'testimonials', 'about', 'contact'],
    optional: ['pricing', 'gallery', 'team', 'cta'],

    layout: {
      hero: 'centered',
      features: 'bento',
      stats: 'split',
      testimonials: '2up',
      about: 'split',
      contact: 'split',
      pricing: 'tiers-with-toggle',
      gallery: 'grid',
      team: 'featured',
      cta: 'split',
    },

    placeholder: {
      hero: {
        eyebrow: 'Strategy & operations',
        heading: 'Fractional leadership for growing teams',
        subheading: 'Hands-on help with planning, hiring, and the decisions that actually matter.',
        primaryCta: { label: 'Book an intro call', href: '#contact' },
        secondaryCta: { label: 'See services', href: '#features' },
        image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1200&h=900&fit=crop',
      },
      features: {
        eyebrow: 'Services',
        heading: 'How I can help',
        subheading: 'Fractional, flexible, focused on outcomes.',
        items: [
          { heading: 'Strategic planning', body: 'Roadmaps, priorities, and quarterly goals.', image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop' },
          { heading: 'Go-to-market', body: 'Positioning, pricing, and launch planning.', image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop' },
          { heading: 'Operations', body: 'Process, hiring, and scaling decisions.', image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop' },
        ],
      },
      stats: {
        heading: 'Track record',
        items: [
          { value: '[Years]', suffix: 'y', label: 'Consulting' },
          { value: '[Clients]', suffix: '+', label: 'Clients served' },
          { value: '[Engagements]', suffix: '+', label: 'Engagements' },
        ],
      },
      testimonials: {
        heading: 'What clients say',
        items: [
          { quote: 'Helped us focus on the few things that actually moved the needle.', name: 'Sarah K.', role: 'Founder', rating: 5, avatar: 'https://i.pravatar.cc/150?u=consultant-sarah' },
          { quote: 'Sharp strategic thinking, and he does the work, not just the deck.', name: 'Daniel M.', role: 'CEO', rating: 5, avatar: 'https://i.pravatar.cc/150?u=consultant-daniel' },
        ],
      },
      about: {
        eyebrow: 'About',
        heading: 'An operator, not a deck',
        body: [
          'I spent years running teams inside growing companies before going independent. I know what it looks like when the plan meets the calendar.',
          'I work with a small number of clients at a time, on the things that actually matter.',
        ],
        image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?w=1200&h=900&fit=crop',
        facts: [
          { value: '[Years]y', label: 'Experience' },
          { value: '[Clients]', label: 'Clients' },
          { value: '[Engagements]', label: 'Engagements' },
          { value: '[Focus]', label: 'Focus area' },
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
      gallery: {
        heading: 'Selected work',
        subheading: 'A few recent engagements',
        images: [
          { src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=800&fit=crop', alt: 'Workshop session with a whiteboard' },
          { src: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=800&fit=crop', alt: 'Team working through a planning session' },
          { src: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=800&fit=crop', alt: 'Strategy notes and a laptop on a desk' },
        ],
      },
      team: {
        heading: 'About me',
        members: [
          { name: '[Your name]', role: 'Principal', bio: 'Former operator. Now helping founders avoid the mistakes I made.', avatar: 'https://i.pravatar.cc/300?u=consultant-principal' },
        ],
      },
      cta: {
        heading: 'Ready to talk?',
        subheading: 'Free 30-minute intro call.',
        primaryCta: { label: 'Book a call', href: '#contact' },
        image: 'https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=1200&h=900&fit=crop',
      },
      contact: {
        eyebrow: 'Let\'s talk',
        heading: 'Book a free intro call',
        subheading: '30 minutes, no commitment.',
        info: [
          { label: 'Email', value: '[Your email]' },
          { label: 'Response time', value: 'Within one business day' },
        ],
      },
    },
  },

  photographer: {
    name: 'Photographer',
    icon: '📷',
    theme: 'boldDark',
    availableThemes: ['boldDark', 'warmSerif', 'playfulPop', 'editorial', 'brutalist'],
    description: 'Portfolio-first with packages and booking',

    compulsory: ['hero'],
    recommended: ['gallery', 'about', 'testimonials', 'pricing', 'contact'],
    optional: ['features', 'cta', 'stats', 'team'],

    layout: {
      hero: 'bg-image',
      gallery: 'featured',
      about: 'centered',
      testimonials: 'wall',
      pricing: 'tiers',
      contact: 'info-only',
      features: 'alternating',
      cta: 'centered',
      stats: '3up',
      team: 'featured',
    },

    placeholder: {
      hero: {
        eyebrow: 'Portraits, weddings, brands',
        heading: 'Photographs that hold up over time',
        subheading: 'Available for shoots locally and for travel.',
        primaryCta: { label: 'Check availability', href: '#contact' },
        secondaryCta: { label: 'View portfolio', href: '#gallery' },
        image: 'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=1600&h=900&fit=crop',
      },
      gallery: {
        heading: 'Selected work',
        subheading: 'A small sample of recent projects',
        images: [
          { src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1600&h=900&fit=crop', alt: 'Wedding couple walking through a field' },
          { src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&h=800&fit=crop', alt: 'Outdoor portrait in natural light' },
          { src: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&h=800&fit=crop', alt: 'Studio portrait with a soft backdrop' },
          { src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&h=800&fit=crop', alt: 'Close-up portrait of a smiling subject' },
          { src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=800&fit=crop', alt: 'Wedding ceremony from the back of the aisle' },
        ],
      },
      about: {
        eyebrow: 'Behind the lens',
        heading: 'A decade of chasing light',
        body: [
          'I started shooting weddings and never stopped. Hundreds of them later, I still get butterflies before the first look.',
          'Based in [Your city]. Available for travel.',
        ],
        image: 'https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=1200&h=900&fit=crop',
        facts: [
          { value: '[Year]', label: 'Started' },
          { value: '[Weddings]', label: 'Weddings shot' },
          { value: '[Countries]', label: 'Countries worked' },
          { value: '[Rating]', label: 'Rating' },
        ],
      },
      testimonials: {
        heading: 'Kind words',
        items: [
          { quote: 'Best photos we have ever had. Truly captured the day.', name: 'Emma & John', role: 'Wedding clients', rating: 5, avatar: 'https://i.pravatar.cc/150?u=photographer-emma' },
          { quote: 'Professional, easy to work with, and the results were excellent.', name: 'Chris B.', role: 'Brand client', rating: 5, avatar: 'https://i.pravatar.cc/150?u=photographer-chris' },
          { quote: 'Made me feel comfortable and the photos show it.', name: 'Leila R.', role: 'Portrait client', rating: 5, avatar: 'https://i.pravatar.cc/150?u=photographer-leila' },
        ],
      },
      pricing: {
        heading: 'Packages',
        subheading: 'Custom quotes available for larger projects.',
        toggle: false,
        tiers: [
          { name: 'Mini session', monthlyPrice: 250, yearlyPrice: 250, description: '30 minutes', features: ['10 edited images', 'Online gallery'], ctaLabel: 'Book' },
          { name: 'Full session', monthlyPrice: 600, yearlyPrice: 600, description: '2 hours', features: ['40 edited images', 'Print release', 'Online gallery'], ctaLabel: 'Book', featured: true },
          { name: 'Wedding', monthlyPrice: 3500, yearlyPrice: 3500, description: 'Full day', features: ['Two photographers', 'Edited gallery', 'Online gallery'], ctaLabel: 'Inquire' },
        ],
      },
      features: {
        eyebrow: 'Services',
        heading: 'What I shoot',
        subheading: 'Weddings, portraits, brands, and events.',
        items: [
          { heading: 'Weddings', body: 'Full-day coverage, two photographers, edited gallery.', image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop' },
          { heading: 'Portraits', body: 'Personal, family, and professional headshots.', image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&h=600&fit=crop' },
          { heading: 'Brands', body: 'Product, lifestyle, and editorial photography.', image: 'https://images.unsplash.com/photo-1493612276216-ee3925520721?w=800&h=600&fit=crop' },
        ],
      },
      cta: {
        heading: 'Ready to book?',
        subheading: 'Limited availability each month.',
        primaryCta: { label: 'Check availability', href: '#contact' },
      },
      stats: {
        heading: 'At a glance',
        items: [
          { value: '[Weddings]', suffix: '+', label: 'Weddings shot' },
          { value: '[Years]', suffix: '+', label: 'Years shooting' },
          { value: '[Rating]', suffix: '★', label: 'Average rating' },
        ],
      },
      team: {
        heading: 'About',
        members: [
          { name: '[Your name]', role: 'Photographer', bio: 'Shooting weddings and portraits for over a decade.', avatar: 'https://i.pravatar.cc/300?u=photographer-me' },
        ],
      },
      contact: {
        eyebrow: 'Get in touch',
        heading: 'Let\'s work together',
        subheading: 'Tell me about your project and your date.',
        info: [
          { label: 'Email', value: '[Your email]' },
          { label: 'Based in', value: '[Your city]' },
          { label: 'Travel', value: 'Available for travel' },
        ],
      },
    },
  },

  fitness: {
    name: 'Fitness / Gym',
    icon: '💪',
    theme: 'boldDark',
    availableThemes: ['boldDark', 'saasModern', 'brutalist', 'nature'],
    description: 'Classes, memberships, coaches, and booking',

    compulsory: ['hero'],
    recommended: ['features', 'pricing', 'team', 'testimonials', 'contact'],
    optional: ['stats', 'about', 'gallery', 'cta'],

    layout: {
      hero: 'bg-image',
      features: 'grid',
      pricing: 'tiers-with-toggle',
      team: 'grid',
      testimonials: '3up',
      contact: 'split',
      stats: '4up',
      about: 'split',
      gallery: 'grid',
      cta: 'banner',
    },

    placeholder: {
      hero: {
        eyebrow: 'Train with purpose',
        heading: 'Coaching that meets you where you are',
        subheading: 'Small classes, real programming, and coaches who pay attention.',
        primaryCta: { label: 'Start a free trial', href: '#pricing' },
        secondaryCta: { label: 'See classes', href: '#features' },
        image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1600&h=900&fit=crop',
      },
      features: {
        eyebrow: 'What we offer',
        heading: 'Training for every level',
        subheading: 'Whether it is your first session or your hundredth.',
        items: [
          { heading: 'Strength', body: 'Barbell, kettlebell, and bodyweight programming.', image: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=800&h=600&fit=crop' },
          { heading: 'Conditioning', body: 'HIIT, circuits, and endurance work.', image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=600&fit=crop' },
          { heading: 'Mobility', body: 'Yoga, stretching, and recovery sessions.', image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=600&fit=crop' },
        ],
      },
      pricing: {
        eyebrow: 'Memberships',
        heading: 'Pick your plan',
        subheading: 'Cancel anytime. No joining fee.',
        toggle: true,
        tiers: [
          { name: 'Drop-in', monthlyPrice: 25, yearlyPrice: 25, description: 'Per class', features: ['Any class', 'No commitment'], ctaLabel: 'Book a class' },
          { name: 'Unlimited', monthlyPrice: 149, yearlyPrice: 1490, description: 'Best value', features: ['Unlimited classes', 'Open gym access', 'Towel service'], ctaLabel: 'Join now', featured: true },
          { name: 'Personal', monthlyPrice: 499, yearlyPrice: 4990, description: '1-on-1 coaching', features: ['4 sessions/month', 'Custom program', 'Nutrition guide'], ctaLabel: 'Get started' },
        ],
      },
      team: {
        heading: 'Meet the coaches',
        subheading: 'Certified, experienced, and focused on your progress',
        members: [
          { name: '[Coach name]', role: 'Head Coach', bio: 'Certified strength coach. Ten years working with beginners and athletes.', avatar: 'https://i.pravatar.cc/300?u=fitness-head' },
          { name: '[Coach name]', role: 'Conditioning Coach', bio: 'Former competitive athlete. Loves a hard metcon.', avatar: 'https://i.pravatar.cc/300?u=fitness-conditioning' },
          { name: '[Coach name]', role: 'Mobility Coach', bio: 'Yoga and strength background. Helps with what hurts.', avatar: 'https://i.pravatar.cc/300?u=fitness-mobility' },
        ],
      },
      testimonials: {
        heading: 'Member stories',
        items: [
          { quote: 'The coaches actually pay attention. That is not true at most gyms.', name: 'Marcus D.', role: 'Member', rating: 5, avatar: 'https://i.pravatar.cc/150?u=fitness-marcus' },
          { quote: 'Best gym I have trained at. The programming is real.', name: 'Priya S.', role: 'Member', rating: 5, avatar: 'https://i.pravatar.cc/150?u=fitness-priya' },
          { quote: 'The community is what keeps me coming back.', name: 'Tom R.', role: 'Member', rating: 5, avatar: 'https://i.pravatar.cc/150?u=fitness-tom' },
        ],
      },
      stats: {
        heading: 'At a glance',
        items: [
          { value: '[Members]', suffix: '+', label: 'Active members' },
          { value: '[Coaches]', suffix: '', label: 'Coaches' },
          { value: '[Classes]', suffix: '+', label: 'Weekly classes' },
          { value: '[Rating]', suffix: '★', label: 'Average rating' },
        ],
      },
      about: {
        eyebrow: 'Our story',
        heading: 'Built by coaches, for everyone',
        body: [
          'We opened with one squat rack and a belief that fitness should be for everyone, not just people who already look the part.',
          'Today we are a full gym, but the belief has not changed.',
        ],
        image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=1200&h=900&fit=crop',
        facts: [
          { value: '[Year]', label: 'Opened' },
          { value: '[Members]', label: 'Members' },
          { value: '[Coaches]', label: 'Coaches' },
          { value: '[Rating]', label: 'Rating' },
        ],
      },
      gallery: {
        heading: 'Inside the gym',
        subheading: 'Where the work gets done',
        images: [
          { src: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=800&fit=crop', alt: 'Gym floor with racks and platforms' },
          { src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=800&fit=crop', alt: 'Weights lined up on a rack' },
          { src: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&h=800&fit=crop', alt: 'Group class mid-workout' },
          { src: 'https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=800&h=800&fit=crop', alt: 'Athlete mid-set on a barbell' },
          { src: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=800&h=800&fit=crop', alt: 'Gym equipment on the floor' },
          { src: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800&h=800&fit=crop', alt: 'Coach spotting a member' },
        ],
      },
      cta: {
        heading: 'First class is on us',
        subheading: 'Come try a session. No pressure, no commitment.',
        primaryCta: { label: 'Claim free class', href: '#pricing' },
        image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1200&h=900&fit=crop',
      },
      contact: {
        eyebrow: 'Visit',
        heading: 'Come train with us',
        subheading: 'Open seven days. Drop in any time.',
        info: [
          { label: 'Address', value: '[Your address]' },
          { label: 'Phone', value: '[Your phone]' },
          { label: 'Hours', value: '[Your hours]' },
        ],
      },
    },
  },

  barber: {
    name: 'Barber',
    icon: '💈',
    theme: 'boldDark',
    availableThemes: ['boldDark', 'warmSerif', 'brutalist', 'editorial'],
    description: 'Cuts, shaves, prices, and booking',

    compulsory: ['hero'],
    recommended: ['features', 'pricing', 'gallery', 'testimonials', 'contact'],
    optional: ['team', 'about', 'stats', 'cta'],

    layout: {
      hero: 'split',
      features: 'grid',
      pricing: 'tiers',
      gallery: 'masonry',
      testimonials: '2up',
      contact: 'split',
      team: 'grid',
      about: 'split-reverse',
      stats: '3up',
      cta: 'banner',
    },

    placeholder: {
      hero: {
        eyebrow: 'Walk-ins welcome',
        heading: 'Sharp cuts and hot towel shaves',
        subheading: 'Classic barbering in a shop that does not rush.',
        primaryCta: { label: 'Book a cut', href: '#contact' },
        secondaryCta: { label: 'See the shop', href: '#gallery' },
        image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=1200&h=900&fit=crop',
      },
      features: {
        eyebrow: 'Services',
        heading: 'What we do',
        subheading: 'Walk-ins welcome. Appointments preferred.',
        items: [
          { heading: 'Haircut', body: 'Classic or modern. Scissor and clipper work.', image: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=800&h=600&fit=crop' },
          { heading: 'Beard trim', body: 'Shaped, lined, and finished with oil.', image: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=800&h=600&fit=crop' },
          { heading: 'Hot towel shave', body: 'Straight razor, hot towel, the works.', image: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=800&h=600&fit=crop' },
        ],
      },
      pricing: {
        heading: 'Prices',
        subheading: 'Cash and card accepted.',
        toggle: false,
        tiers: [
          { name: 'Haircut', monthlyPrice: 35, yearlyPrice: 35, description: '30 min', features: ['Consultation', 'Wash', 'Style'], ctaLabel: 'Book' },
          { name: 'Cut + beard', monthlyPrice: 55, yearlyPrice: 55, description: '45 min', features: ['Haircut', 'Beard trim', 'Hot towel'], ctaLabel: 'Book', featured: true },
          { name: 'Full service', monthlyPrice: 75, yearlyPrice: 75, description: '60 min', features: ['Haircut', 'Beard', 'Hot shave', 'Facial'], ctaLabel: 'Book' },
        ],
      },
      gallery: {
        heading: 'Recent cuts',
        subheading: 'Work from the shop',
        images: [
          { src: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=800&h=800&fit=crop', alt: 'Fresh fade on a client' },
          { src: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=800&h=1000&fit=crop', alt: 'Barber finishing a scissor cut' },
          { src: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=800&h=800&fit=crop', alt: 'Beard being trimmed with a straight razor' },
          { src: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=800&h=1000&fit=crop', alt: 'Barber chair in the shop' },
          { src: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=800&h=800&fit=crop', alt: 'Clippers and combs on a counter' },
        ],
      },
      testimonials: {
        heading: 'What customers say',
        items: [
          { quote: 'Best fade in the neighborhood. Been coming here for years.', name: 'Danny R.', role: 'Regular', rating: 5, avatar: 'https://i.pravatar.cc/150?u=barber-danny' },
          { quote: 'They actually listen to what you want. That is rare.', name: 'Ahmed S.', role: 'Customer', rating: 5, avatar: 'https://i.pravatar.cc/150?u=barber-ahmed' },
        ],
      },
      team: {
        heading: 'The barbers',
        members: [
          { name: '[Barber name]', role: 'Owner / Master Barber', bio: 'Behind the chair for years. Trained in [place].', avatar: 'https://i.pravatar.cc/300?u=barber-owner' },
          { name: '[Barber name]', role: 'Senior Barber', bio: 'Fades, tapers, and modern styles.', avatar: 'https://i.pravatar.cc/300?u=barber-senior' },
        ],
      },
      about: {
        eyebrow: 'Our story',
        heading: 'A barbershop, not a salon',
        body: [
          'We opened with one chair and a simple promise: sharp cuts, no attitude.',
          'Years later, we still hold the same standard.',
        ],
        image: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=1200&h=900&fit=crop',
        facts: [
          { value: '[Year]', label: 'Opened' },
          { value: '[Barbers]', label: 'Barbers' },
          { value: '[Cuts]', label: 'Cuts given' },
          { value: '[Rating]', label: 'Rating' },
        ],
      },
      stats: {
        heading: 'At a glance',
        items: [
          { value: '[Years]', suffix: '+', label: 'Years open' },
          { value: '[Barbers]', suffix: '', label: 'Barbers' },
          { value: '[Rating]', suffix: '★', label: 'Rating' },
        ],
      },
      cta: {
        heading: 'Look sharp this week',
        subheading: 'Same-day appointments often available.',
        primaryCta: { label: 'Book now', href: '#contact' },
        image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=1200&h=900&fit=crop',
      },
      contact: {
        eyebrow: 'Visit',
        heading: 'Come get a cut',
        subheading: 'Walk-ins welcome. Book ahead to skip the wait.',
        info: [
          { label: 'Address', value: '[Your address]' },
          { label: 'Phone', value: '[Your phone]' },
          { label: 'Hours', value: '[Your hours]' },
        ],
      },
    },
  },

  lawyer: {
    name: 'Lawyer',
    icon: '⚖️',
    theme: 'saasModern',
    availableThemes: ['saasModern', 'clinicTrust', 'editorial', 'luxe'],
    description: 'Practice areas, credentials, and consultation booking',

    compulsory: ['hero'],
    recommended: ['features', 'about', 'stats', 'testimonials', 'contact'],
    optional: ['team', 'pricing', 'gallery', 'cta'],

    layout: {
      hero: 'split',
      features: 'grid',
      about: 'split-reverse',
      stats: '4up',
      testimonials: '2up',
      contact: 'split',
      team: 'grid',
      pricing: 'tiers',
      cta: 'centered',
    },

    placeholder: {
      hero: {
        eyebrow: 'Licensed in [Your state]',
        heading: 'Practical legal advice, without the runaround',
        subheading: 'Business law, contracts, and disputes for small companies.',
        primaryCta: { label: 'Book a free consultation', href: '#contact' },
        secondaryCta: { label: 'Practice areas', href: '#features' },
        image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200&h=900&fit=crop',
      },
      features: {
        eyebrow: 'Practice areas',
        heading: 'How I can help',
        subheading: 'Focused on small business and startup needs.',
        items: [
          { heading: 'Business formation', body: 'LLCs, corporations, and partnership agreements.', image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop' },
          { heading: 'Contracts', body: 'Drafting, reviewing, and negotiating agreements.', image: 'https://images.unsplash.com/photo-1423592707957-3b212afa6733?w=800&h=600&fit=crop' },
          { heading: 'Disputes', body: 'Commercial litigation and settlement negotiation.', image: 'https://images.unsplash.com/photo-1436450412740-6b988f486c6b?w=800&h=600&fit=crop' },
        ],
      },
      stats: {
        heading: 'By the numbers',
        items: [
          { value: '[Years]', suffix: '+', label: 'Years practicing' },
          { value: '[Clients]', suffix: '+', label: 'Clients served' },
          { value: '[Cases]', suffix: '+', label: 'Cases handled' },
          { value: '[States]', suffix: '', label: 'States licensed' },
        ],
      },
      testimonials: {
        heading: 'What clients say',
        items: [
          { quote: 'Clear, direct, and affordable. Exactly what a small business needs.', name: 'Rebecca T.', role: 'Founder', rating: 5, avatar: 'https://i.pravatar.cc/150?u=lawyer-rebecca' },
          { quote: 'Handled our contract dispute efficiently and got us a fair outcome.', name: 'Anthony M.', role: 'Business owner', rating: 5, avatar: 'https://i.pravatar.cc/150?u=lawyer-anthony' },
        ],
      },
      about: {
        eyebrow: 'About',
        heading: 'Legal counsel that speaks plain English',
        body: [
          'I spent years at a large firm before going out on my own. I wanted to work directly with founders and small business owners.',
          'Today I do exactly that — clear advice, fair pricing, and no billing by the six-minute increment.',
        ],
        image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200&h=900&fit=crop',
        facts: [
          { value: '[Years]y', label: 'Experience' },
          { value: '[Clients]', label: 'Clients' },
          { value: '[States]', label: 'States licensed' },
          { value: '[Fees]', label: 'Flat-fee options' },
        ],
      },
      team: {
        heading: 'About the firm',
        members: [
          { name: '[Your name]', role: 'Founding Partner', bio: 'Business law. Former in-house counsel.', avatar: 'https://i.pravatar.cc/300?u=lawyer-me' },
          { name: '[Associate name]', role: 'Associate', bio: 'Contracts and commercial litigation.', avatar: 'https://i.pravatar.cc/300?u=lawyer-associate' },
        ],
      },
      pricing: {
        heading: 'How we work',
        subheading: 'Most matters are handled on a flat fee.',
        toggle: false,
        tiers: [
          { name: 'Consultation', monthlyPrice: 0, yearlyPrice: 0, description: 'Free, 30 minutes', features: ['Initial assessment', 'No obligation'], ctaLabel: 'Book now' },
          { name: 'Flat fee', monthlyPrice: 0, yearlyPrice: 0, description: 'Fixed scope', features: ['Transparent pricing', 'No surprises'], ctaLabel: 'Get quote', featured: true },
          { name: 'Retainer', monthlyPrice: 2500, yearlyPrice: 25000, description: 'Ongoing', features: ['Priority access', 'Unlimited consults', 'Contract reviews'], ctaLabel: 'Discuss' },
        ],
      },
      cta: {
        heading: 'Need legal help?',
        subheading: 'Free 30-minute consultation. No obligation.',
        primaryCta: { label: 'Book consultation', href: '#contact' },
      },
      contact: {
        eyebrow: 'Get in touch',
        heading: 'Book a free consultation',
        subheading: 'I respond to every inquiry within one business day.',
        info: [
          { label: 'Email', value: '[Your email]' },
          { label: 'Phone', value: '[Your phone]' },
          { label: 'Office', value: '[Your office address]' },
        ],
      },
    },
  },

  cafe: {
    name: 'Cafe',
    icon: '☕',
    theme: 'warmSerif',
    availableThemes: ['warmSerif', 'editorial', 'nature', 'boldDark'],
    description: 'Menu, story, gallery, and location',

    compulsory: ['hero'],
    recommended: ['features', 'gallery', 'about', 'testimonials', 'contact'],
    optional: ['pricing', 'team', 'cta', 'stats'],

    layout: {
      hero: 'split',
      features: 'alternating',
      gallery: 'masonry',
      about: 'split-reverse',
      testimonials: '3up',
      contact: 'split',
      pricing: 'tiers',
      team: 'grid',
      cta: 'centered',
      stats: '3up',
    },

    placeholder: {
      hero: {
        eyebrow: 'Specialty coffee, made slowly',
        heading: 'Slow coffee, warm bread, good light',
        subheading: 'A neighborhood cafe with a short menu and a long table.',
        primaryCta: { label: 'See menu', href: '#features' },
        secondaryCta: { label: 'Find us', href: '#contact' },
        image: 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=1200&h=900&fit=crop',
      },
      features: {
        eyebrow: 'Menu',
        heading: 'What we serve',
        subheading: 'Coffee, pastries, and a light lunch. All made in-house.',
        items: [
          { heading: 'Coffee', body: 'Espresso, filter, and cold brew. Beans change weekly.', image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&h=600&fit=crop' },
          { heading: 'Pastries', body: 'Croissants, cinnamon rolls, and daily specials.', image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&h=600&fit=crop' },
          { heading: 'Lunch', body: 'Sandwiches, salads, and soup. Fresh daily.', image: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?w=800&h=600&fit=crop' },
        ],
      },
      gallery: {
        heading: 'Inside the cafe',
        subheading: 'A look around',
        images: [
          { src: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&h=800&fit=crop', alt: 'Cafe interior with wooden tables and plants' },
          { src: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&h=1000&fit=crop', alt: 'Latte with latte art on a saucer' },
          { src: 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=800&h=800&fit=crop', alt: 'Barista behind the counter' },
          { src: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&h=1000&fit=crop', alt: 'Fresh pastries on a tray' },
          { src: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=800&h=800&fit=crop', alt: 'Coffee beans in a hopper' },
          { src: 'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=800&h=1000&fit=crop', alt: 'Window seating with morning light' },
        ],
      },
      about: {
        eyebrow: 'Our story',
        heading: 'A cafe built on slow mornings',
        body: [
          'We opened with one espresso machine and a stubborn idea: coffee should be worth sitting down for.',
          'We still roast small, bake daily, and know most of our regulars by name.',
        ],
        image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1200&h=900&fit=crop',
        facts: [
          { value: '[Year]', label: 'Opened' },
          { value: '[Roasters]', label: 'Roasters we work with' },
          { value: '[Regulars]', label: 'Regulars' },
          { value: '[Rating]', label: 'Rating' },
        ],
      },
      testimonials: {
        heading: 'Regulars say',
        items: [
          { quote: 'Best flat white in the neighborhood. I come here every morning.', name: 'Jenna M.', role: 'Regular', rating: 5, avatar: 'https://i.pravatar.cc/150?u=cafe-jenna' },
          { quote: 'Cozy spot, great coffee, friendly staff.', name: 'Owen K.', role: 'Local', rating: 5, avatar: 'https://i.pravatar.cc/150?u=cafe-owen' },
          { quote: 'The cinnamon rolls alone are worth the trip.', name: 'Farah A.', role: 'Visitor', rating: 5, avatar: 'https://i.pravatar.cc/150?u=cafe-farah' },
        ],
      },
      pricing: {
        heading: 'Menu highlights',
        subheading: 'A few of our most-ordered items.',
        toggle: false,
        tiers: [
          { name: 'Espresso', monthlyPrice: 3, yearlyPrice: 3, description: 'Single or double', features: ['House blend', 'Oat milk available'], ctaLabel: 'Order' },
          { name: 'Flat white', monthlyPrice: 5, yearlyPrice: 5, description: 'Our signature', features: ['Double shot', 'Silky microfoam'], ctaLabel: 'Order', featured: true },
          { name: 'Cold brew', monthlyPrice: 6, yearlyPrice: 6, description: '18-hour steep', features: ['Smooth', 'Low acid'], ctaLabel: 'Order' },
        ],
      },
      team: {
        heading: 'Behind the bar',
        members: [
          { name: '[Owner name]', role: 'Owner / Head Barista', bio: 'Runs the bar and picks the beans.', avatar: 'https://i.pravatar.cc/300?u=cafe-owner' },
          { name: '[Baker name]', role: 'Baker', bio: 'Makes everything from scratch every morning.', avatar: 'https://i.pravatar.cc/300?u=cafe-baker' },
        ],
      },
      cta: {
        heading: 'Come sit with us',
        subheading: 'Open every day.',
        primaryCta: { label: 'Get directions', href: '#contact' },
      },
      stats: {
        heading: 'At a glance',
        items: [
          { value: '[Years]', suffix: 'y', label: 'Open' },
          { value: '[Cups]', suffix: 'k+', label: 'Cups poured' },
          { value: '[Rating]', suffix: '★', label: 'Rating' },
        ],
      },
      contact: {
        eyebrow: 'Visit',
        heading: 'Find us',
        subheading: 'We are on the corner. Come say hi.',
        info: [
          { label: 'Address', value: '[Your address]' },
          { label: 'Hours', value: '[Your hours]' },
          { label: 'Phone', value: '[Your phone]' },
        ],
      },
    },
  },

  dentist: {
    name: 'Dentist',
    icon: '🦷',
    theme: 'clinicTrust',
    availableThemes: ['clinicTrust', 'saasModern', 'nature', 'editorial'],
    description: 'Services, team, patient reviews, insurance, and booking',

    compulsory: ['hero'],
    recommended: ['features', 'team', 'testimonials', 'about', 'contact'],
    optional: ['stats', 'pricing', 'gallery', 'cta'],

    layout: {
      hero: 'split',
      features: 'grid',
      team: 'grid',
      testimonials: '3up',
      about: 'split-reverse',
      contact: 'split',
      stats: '4up',
      pricing: 'tiers',
      cta: 'banner',
    },

    placeholder: {
      hero: {
        eyebrow: 'Accepting new patients',
        heading: 'Gentle dental care for the whole family',
        subheading: 'Modern practice, friendly team, no judgment.',
        primaryCta: { label: 'Book appointment', href: '#contact' },
        secondaryCta: { label: 'Our services', href: '#features' },
        image: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=1200&h=900&fit=crop',
      },
      features: {
        eyebrow: 'Services',
        heading: 'What we offer',
        subheading: 'From routine cleanings to cosmetic work.',
        items: [
          { heading: 'General dentistry', body: 'Cleanings, fillings, and checkups.', image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&h=600&fit=crop' },
          { heading: 'Cosmetic', body: 'Whitening, veneers, and smile design.', image: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=800&h=600&fit=crop' },
          { heading: 'Orthodontics', body: 'Braces and clear aligners for all ages.', image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=600&fit=crop' },
        ],
      },
      team: {
        heading: 'Meet the team',
        subheading: 'Friendly, experienced, and gentle',
        members: [
          { name: '[Dentist name]', role: 'Lead Dentist', bio: 'General and family dentistry.', avatar: 'https://i.pravatar.cc/300?u=dentist-lead' },
          { name: '[Orthodontist name]', role: 'Orthodontist', bio: 'Clear aligners and pediatric ortho.', avatar: 'https://i.pravatar.cc/300?u=dentist-ortho' },
          { name: '[Hygienist name]', role: 'Hygienist', bio: 'The reason our patients actually like cleanings.', avatar: 'https://i.pravatar.cc/300?u=dentist-hygienist' },
        ],
      },
      testimonials: {
        heading: 'Patient reviews',
        items: [
          { quote: 'I used to dread the dentist. Now I do not mind going.', name: 'Tom H.', role: 'Patient', rating: 5, avatar: 'https://i.pravatar.cc/150?u=dentist-tom' },
          { quote: 'They explain everything and never rush you.', name: 'Rebecca S.', role: 'Patient', rating: 5, avatar: 'https://i.pravatar.cc/150?u=dentist-rebecca' },
          { quote: 'Brought my whole family here. Everyone is happy.', name: 'Daniel M.', role: 'Patient', rating: 5, avatar: 'https://i.pravatar.cc/150?u=dentist-daniel' },
        ],
      },
      about: {
        eyebrow: 'About us',
        heading: 'Modern dentistry, human approach',
        body: [
          'We opened to build a practice patients actually look forward to visiting.',
          'Quiet rooms, gentle technique, and no lectures about flossing.',
        ],
        image: 'https://images.unsplash.com/photo-1629909615184-74f495363b67?w=1200&h=900&fit=crop',
        facts: [
          { value: '[Year]', label: 'Opened' },
          { value: '[Patients]', label: 'Patients' },
          { value: '[Team]', label: 'Team' },
          { value: '[Rating]', label: 'Rating' },
        ],
      },
      stats: {
        heading: 'At a glance',
        items: [
          { value: '[Years]', suffix: '+', label: 'Years open' },
          { value: '[Patients]', suffix: 'k+', label: 'Patients' },
          { value: '[Rating]', suffix: '★', label: 'Google rating' },
          { value: '[Insurance]', suffix: '%', label: 'Insurance accepted' },
        ],
      },
      pricing: {
        heading: 'Our plans',
        subheading: 'In-house membership available for patients without insurance.',
        toggle: false,
        tiers: [
          { name: 'New patient', monthlyPrice: 99, yearlyPrice: 99, description: 'First visit', features: ['Exam', 'X-rays', 'Cleaning'], ctaLabel: 'Book now' },
          { name: 'Membership', monthlyPrice: 29, yearlyPrice: 290, description: 'No insurance needed', features: ['2 cleanings/year', 'X-rays included', 'Discount on treatments'], ctaLabel: 'Join', featured: true },
          { name: 'Cosmetic consult', monthlyPrice: 0, yearlyPrice: 0, description: 'Free', features: ['Smile assessment', 'Treatment plan'], ctaLabel: 'Book now' },
        ],
      },
      cta: {
        heading: 'Ready for a healthier smile?',
        subheading: 'Same-week appointments available.',
        primaryCta: { label: 'Book online', href: '#contact' },
        image: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=1200&h=900&fit=crop',
      },
      contact: {
        eyebrow: 'Visit',
        heading: 'Book your appointment',
        subheading: 'We accept most insurance plans.',
        info: [
          { label: 'Address', value: '[Your address]' },
          { label: 'Phone', value: '[Your phone]' },
          { label: 'Hours', value: '[Your hours]' },
        ],
      },
    },
  },

  band: {
    name: 'Band / Musician',
    icon: '🎸',
    theme: 'boldDark',
    availableThemes: ['boldDark', 'brutalist', 'playfulPop', 'luxe'],
    description: 'Music, shows, merch, and booking',

    compulsory: ['hero'],
    recommended: ['features', 'gallery', 'about', 'cta', 'contact'],
    optional: ['pricing', 'stats', 'team', 'testimonials'],

    layout: {
      hero: 'bg-image',
      features: 'grid',
      gallery: 'featured',
      about: 'centered',
      cta: 'centered',
      contact: 'split',
      pricing: 'tiers',
      stats: '3up',
      team: 'list',
      testimonials: 'wall',
    },

    placeholder: {
      hero: {
        eyebrow: 'New album out now',
        heading: 'Loud, honest, and tired of the same old thing',
        subheading: 'On tour this fall. Come say hi.',
        primaryCta: { label: 'Listen now', href: '#features' },
        secondaryCta: { label: 'Tour dates', href: '#gallery' },
        image: 'https://images.unsplash.com/photo-1501612780327-45045538702b?w=1600&h=900&fit=crop',
      },
      features: {
        eyebrow: 'Listen',
        heading: 'Where to find the music',
        subheading: 'Streaming everywhere. Physical copies on Bandcamp.',
        items: [
          { heading: 'Streaming', body: 'Full catalog on the usual platforms.', image: 'https://images.unsplash.com/photo-1611339555312-e607c8352fd7?w=800&h=600&fit=crop' },
          { heading: 'Bandcamp', body: 'Buy vinyl, tapes, and digital.', image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&h=600&fit=crop' },
          { heading: 'Live', body: 'Tour dates and ticket links.', image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop' },
        ],
      },
      gallery: {
        heading: 'Live',
        subheading: 'Moments from the road',
        images: [
          { src: 'https://images.unsplash.com/photo-1501612780327-45045538702b?w=1600&h=900&fit=crop', alt: 'Band on stage under colored lights' },
          { src: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=800&fit=crop', alt: 'Crowd with hands up at a show' },
          { src: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&h=800&fit=crop', alt: 'Guitar player mid-solo' },
          { src: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&h=800&fit=crop', alt: 'Stage lights cutting through haze' },
          { src: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&h=800&fit=crop', alt: 'Drum kit set up on stage' },
        ],
      },
      about: {
        eyebrow: 'About',
        heading: 'Three friends, one loud room',
        body: [
          'We started in a basement. First show was to twelve people. Two of them were our roommates.',
          'A few albums later, we still play every show like it is the last one.',
        ],
        image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1200&h=900&fit=crop',
        facts: [
          { value: '[Year]', label: 'Formed' },
          { value: '[Albums]', label: 'Albums' },
          { value: '[Shows]', label: 'Shows played' },
          { value: '[Listeners]', label: 'Monthly listeners' },
        ],
      },
      testimonials: {
        heading: 'Press',
        items: [
          { quote: '"A ferocious live act that refuses to slow down."', name: '[Publication]', role: 'Music review', rating: 5, avatar: 'https://i.pravatar.cc/150?u=band-press1' },
          { quote: '"One of the best new bands to come out of the city this year."', name: '[Publication]', role: 'Feature', rating: 5, avatar: 'https://i.pravatar.cc/150?u=band-press2' },
        ],
      },
      stats: {
        heading: 'At a glance',
        items: [
          { value: '[Albums]', suffix: '', label: 'Albums' },
          { value: '[Shows]', suffix: '+', label: 'Shows played' },
          { value: '[Listeners]', suffix: 'k', label: 'Monthly listeners' },
        ],
      },
      team: {
        heading: 'The band',
        members: [
          { name: '[Name]', role: 'Vocals / Guitar', bio: 'Writes most of the songs.', avatar: 'https://i.pravatar.cc/300?u=band-vocals' },
          { name: '[Name]', role: 'Bass', bio: 'Holds down the low end.', avatar: 'https://i.pravatar.cc/300?u=band-bass' },
          { name: '[Name]', role: 'Drums', bio: 'Loudest member. Also the nicest.', avatar: 'https://i.pravatar.cc/300?u=band-drums' },
        ],
      },
      pricing: {
        heading: 'Merch',
        subheading: 'Ships worldwide. Pick up at shows too.',
        toggle: false,
        tiers: [
          { name: 'T-shirt', monthlyPrice: 30, yearlyPrice: 30, description: 'Limited run', features: ['Screen printed', 'Ships worldwide'], ctaLabel: 'Buy' },
          { name: 'Vinyl', monthlyPrice: 35, yearlyPrice: 35, description: 'New album', features: ['180g black vinyl', 'Download code'], ctaLabel: 'Buy', featured: true },
          { name: 'Bundle', monthlyPrice: 60, yearlyPrice: 60, description: 'Best value', features: ['Vinyl + shirt', 'Signed poster'], ctaLabel: 'Buy' },
        ],
      },
      cta: {
        heading: 'On tour this fall',
        subheading: 'Tickets on sale now.',
        primaryCta: { label: 'See dates', href: '#gallery' },
      },
      contact: {
        eyebrow: 'Get in touch',
        heading: 'Booking & press',
        subheading: 'For shows, features, or collabs.',
        info: [
          { label: 'Booking', value: '[Your booking email]' },
          { label: 'Press', value: '[Your press email]' },
          { label: 'Based in', value: '[Your city]' },
        ],
      },
    },
  },

  videoProduction: {
    name: 'Video Production',
    icon: '🎬',
    theme: 'boldDark',
    availableThemes: ['boldDark', 'editorial', 'luxe', 'brutalist'],
    description: 'Reels, services, clients, and project inquiries',

    compulsory: ['hero'],
    recommended: ['gallery', 'features', 'about', 'testimonials', 'contact'],
    optional: ['stats', 'team', 'pricing', 'cta'],

    layout: {
      hero: 'bg-image',
      gallery: 'featured',
      features: 'grid',
      about: 'split',
      testimonials: 'wall',
      contact: 'split',
      stats: '4up',
      team: 'list',
      pricing: 'tiers',
      cta: 'banner',
    },

    placeholder: {
      hero: {
        eyebrow: 'Film · Commercial · Documentary',
        heading: 'Stories worth watching',
        subheading: 'A production company for brands that care about craft.',
        primaryCta: { label: 'See our work', href: '#gallery' },
        secondaryCta: { label: 'Start a project', href: '#contact' },
        image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=1600&h=900&fit=crop',
      },
      gallery: {
        heading: 'Selected work',
        subheading: 'A look at recent projects',
        images: [
          { src: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=1600&h=900&fit=crop', alt: 'Film set with camera and crew' },
          { src: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800&h=800&fit=crop', alt: 'Cinema camera on a tripod' },
          { src: 'https://images.unsplash.com/photo-1524712245354-2c4e5e7121c0?w=800&h=800&fit=crop', alt: 'Crew setting up a shot' },
          { src: 'https://images.unsplash.com/photo-1500210816540-9e7e6b1f80b2?w=800&h=800&fit=crop', alt: 'Interview setup with lights' },
          { src: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&h=800&fit=crop', alt: 'Director watching a monitor on set' },
          { src: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=800&h=800&fit=crop', alt: 'Behind-the-scenes moment during filming' },
        ],
      },
      features: {
        eyebrow: 'What we do',
        heading: 'Services',
        subheading: 'From concept to final cut.',
        items: [
          { heading: 'Commercials', body: 'Brand films, product spots, and campaigns.', image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&h=600&fit=crop' },
          { heading: 'Documentary', body: 'Long-form storytelling with real subjects.', image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&h=600&fit=crop' },
          { heading: 'Music videos', body: 'Visual concepts that match the track.', image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop' },
        ],
      },
      about: {
        eyebrow: 'About',
        heading: 'Filmmakers first, everything else second',
        body: [
          'We started with two cameras and a rented van. Years later, we still shoot every project like it is our first.',
          'Commercials, documentaries, branded content — if it tells a story, we make it.',
        ],
        image: 'https://images.unsplash.com/photo-1524712245354-2c4e5e7121c0?w=1200&h=900&fit=crop',
        facts: [
          { value: '[Year]', label: 'Founded' },
          { value: '[Projects]', label: 'Projects' },
          { value: '[Years]', label: 'Experience' },
          { value: '[Awards]', label: 'Awards' },
        ],
      },
      testimonials: {
        heading: 'What clients say',
        items: [
          { quote: 'They turned our vision into something better than we imagined.', name: 'Aisha R.', role: 'Brand Director', rating: 5, avatar: 'https://i.pravatar.cc/150?u=video-aisha' },
          { quote: 'Professional, creative, and they actually hit deadlines.', name: 'Marcus L.', role: 'Marketing Lead', rating: 5, avatar: 'https://i.pravatar.cc/150?u=video-marcus' },
          { quote: 'The final cut gave us goosebumps. That is the job.', name: 'Priya K.', role: 'Founder', rating: 5, avatar: 'https://i.pravatar.cc/150?u=video-priya' },
        ],
      },
      stats: {
        heading: 'At a glance',
        items: [
          { value: '[Projects]', suffix: '+', label: 'Projects delivered' },
          { value: '[Years]', suffix: 'y', label: 'In business' },
          { value: '[Clients]', suffix: '+', label: 'Brand clients' },
          { value: '[Awards]', suffix: '', label: 'Awards' },
        ],
      },
      team: {
        heading: 'The team',
        members: [
          { name: '[Director name]', role: 'Founder / Director', bio: 'Years behind the camera. Obsessed with story.', avatar: 'https://i.pravatar.cc/300?u=video-director' },
          { name: '[Producer name]', role: 'Producer', bio: 'Runs every shoot like clockwork.', avatar: 'https://i.pravatar.cc/300?u=video-producer' },
          { name: '[Editor name]', role: 'Editor', bio: 'The reason our cuts hit right.', avatar: 'https://i.pravatar.cc/300?u=video-editor' },
        ],
      },
      pricing: {
        heading: 'How we work',
        subheading: 'Every project is scoped individually.',
        toggle: false,
        tiers: [
          { name: 'Short-form', monthlyPrice: 5000, yearlyPrice: 5000, description: 'Per project', features: ['Short film', 'Full production', 'Two revisions'], ctaLabel: 'Get quote' },
          { name: 'Brand film', monthlyPrice: 15000, yearlyPrice: 15000, description: 'Per project', features: ['Longer film', 'Concept + production', 'Full post'], ctaLabel: 'Get quote', featured: true },
          { name: 'Campaign', monthlyPrice: 50000, yearlyPrice: 50000, description: 'Multi-asset', features: ['Hero + cutdowns', 'Full team', 'Multi-month campaign'], ctaLabel: 'Discuss' },
        ],
      },
      cta: {
        heading: 'Got a story to tell?',
        subheading: 'We would love to hear about it.',
        primaryCta: { label: 'Start a project', href: '#contact' },
        image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=1200&h=900&fit=crop',
      },
      contact: {
        eyebrow: 'Get in touch',
        heading: 'Let\'s talk',
        subheading: 'Tell us about your project. We respond within one business day.',
        info: [
          { label: 'Email', value: '[Your email]' },
          { label: 'Phone', value: '[Your phone]' },
          { label: 'Studio', value: '[Your city]' },
        ],
      },
    },
  },

  postProduction: {
    name: 'Post-Production Studio',
    icon: '🎥',
    theme: 'boldDark',
    availableThemes: ['boldDark', 'editorial', 'luxe', 'brutalist'],
    description: 'Editorial, color, sound, and VFX services',

    compulsory: ['hero'],
    recommended: ['features', 'gallery', 'about', 'testimonials', 'contact'],
    optional: ['team', 'stats', 'pricing', 'cta'],

    layout: {
      hero: 'split',
      features: 'grid',
      gallery: 'featured',
      about: 'split-reverse',
      testimonials: '2up',
      contact: 'split',
      team: 'list',
      stats: '4up',
      pricing: 'tiers',
      cta: 'banner',
    },

    placeholder: {
      hero: {
        eyebrow: 'Edit · Color · Sound · VFX',
        heading: 'Where the cut comes alive',
        subheading: 'Full-service post for films, series, and branded content.',
        primaryCta: { label: 'See our work', href: '#gallery' },
        secondaryCta: { label: 'Book a suite', href: '#contact' },
        image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=1200&h=900&fit=crop',
      },
      features: {
        eyebrow: 'Services',
        heading: 'What we do',
        subheading: 'Full-service post under one roof.',
        items: [
          { heading: 'Editorial', body: 'Offline and online editing with senior editors.', image: 'https://images.unsplash.com/photo-1585816799336-ec42e30f92c6?w=800&h=600&fit=crop' },
          { heading: 'Color', body: 'Grading suites with reference monitors.', image: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?w=800&h=600&fit=crop' },
          { heading: 'Sound', body: 'Mixing, sound design, and ADR.', image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&h=600&fit=crop' },
          { heading: 'VFX', body: 'Compositing, cleanup, and finishing.', image: 'https://images.unsplash.com/photo-1626544827763-d516dce335e2?w=800&h=600&fit=crop' },
        ],
      },
      gallery: {
        heading: 'Recent work',
        subheading: 'Selected projects',
        images: [
          { src: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=1600&h=900&fit=crop', alt: 'Editing suite with monitors and a console' },
          { src: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800&h=800&fit=crop', alt: 'Color grading setup with reference monitor' },
          { src: 'https://images.unsplash.com/photo-1585816799336-ec42e30f92c6?w=800&h=800&fit=crop', alt: 'Studio desk with editing equipment' },
          { src: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&h=800&fit=crop', alt: 'Mixing console in a sound room' },
          { src: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&h=800&fit=crop', alt: 'Behind the scenes on a shoot' },
        ],
      },
      about: {
        eyebrow: 'About',
        heading: 'A post house built by editors',
        body: [
          'We opened with one editing suite. Now we run several, plus color and sound rooms.',
          'We still edit every project like it matters — because to us, it does.',
        ],
        image: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=1200&h=900&fit=crop',
        facts: [
          { value: '[Year]', label: 'Opened' },
          { value: '[Suites]', label: 'Suites' },
          { value: '[Projects]', label: 'Projects finished' },
          { value: '[Awards]', label: 'Awards' },
        ],
      },
      testimonials: {
        heading: 'What directors say',
        items: [
          { quote: 'Best post house I have worked with in years.', name: 'Daniel R.', role: 'Film Director', rating: 5, avatar: 'https://i.pravatar.cc/150?u=post-daniel' },
          { quote: 'They saved our film in post. Genuinely.', name: 'Amara O.', role: 'Producer', rating: 5, avatar: 'https://i.pravatar.cc/150?u=post-amara' },
        ],
      },
      team: {
        heading: 'The team',
        members: [
          { name: '[Editor name]', role: 'Supervising Editor', bio: 'Years cutting features and series.', avatar: 'https://i.pravatar.cc/300?u=post-editor' },
          { name: '[Colorist name]', role: 'Colorist', bio: 'Graded documentaries and features.', avatar: 'https://i.pravatar.cc/300?u=post-colorist' },
          { name: '[Mixer name]', role: 'Re-recording Mixer', bio: 'Comes from a music background, mixes like one.', avatar: 'https://i.pravatar.cc/300?u=post-mixer' },
        ],
      },
      stats: {
        heading: 'At a glance',
        items: [
          { value: '[Features]', suffix: '+', label: 'Features finished' },
          { value: '[Suites]', suffix: '', label: 'Suites' },
          { value: '[Years]', suffix: 'y', label: 'In business' },
          { value: '[Awards]', suffix: '', label: 'Awards' },
        ],
      },
      pricing: {
        heading: 'How we charge',
        subheading: 'Every project is scoped individually.',
        toggle: false,
        tiers: [
          { name: 'Day rate', monthlyPrice: 1500, yearlyPrice: 1500, description: 'Per day', features: ['Senior editor', 'Fully loaded suite'], ctaLabel: 'Book' },
          { name: 'Project', monthlyPrice: 0, yearlyPrice: 0, description: 'Custom quote', features: ['Full scope', 'Fixed price', 'Timeline in writing'], ctaLabel: 'Get quote', featured: true },
          { name: 'Retainer', monthlyPrice: 10000, yearlyPrice: 100000, description: 'Ongoing', features: ['Priority booking', 'Monthly hours', 'Dedicated team'], ctaLabel: 'Discuss' },
        ],
      },
      cta: {
        heading: 'Need a suite this week?',
        subheading: 'Same-week bookings often available.',
        primaryCta: { label: 'Book now', href: '#contact' },
        image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=1200&h=900&fit=crop',
      },
      contact: {
        eyebrow: 'Get in touch',
        heading: 'Book a suite',
        subheading: 'We respond within one business day.',
        info: [
          { label: 'Email', value: '[Your email]' },
          { label: 'Phone', value: '[Your phone]' },
          { label: 'Studio', value: '[Your city]' },
        ],
      },
    },
  },

  creativeStudio: {
    name: 'Creative Studio / Agency',
    icon: '🎨',
    theme: 'editorial',
    availableThemes: ['editorial', 'brutalist', 'boldDark', 'luxe'],
    description: 'Branding, campaigns, and design work',

    compulsory: ['hero'],
    recommended: ['gallery', 'features', 'about', 'testimonials', 'contact'],
    optional: ['team', 'stats', 'pricing', 'cta'],

    layout: {
      hero: 'centered',
      gallery: 'masonry',
      features: 'grid',
      about: 'split',
      testimonials: 'wall',
      contact: 'split',
      team: 'grid',
      stats: '3up',
      pricing: 'tiers',
      cta: 'banner',
    },

    placeholder: {
      hero: {
        eyebrow: 'Brand · Digital · Campaign',
        heading: 'Ideas that move people',
        subheading: 'A creative studio for brands that want to stand out.',
        primaryCta: { label: 'See our work', href: '#gallery' },
        secondaryCta: { label: 'Start a project', href: '#contact' },
        image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=1600&h=900&fit=crop',
      },
      gallery: {
        heading: 'Selected work',
        subheading: 'A look at recent projects',
        images: [
          { src: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=800&fit=crop', alt: 'Brand identity mockup on a desk' },
          { src: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=1000&fit=crop', alt: 'Poster design on a wall' },
          { src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=800&fit=crop', alt: 'Workshop with sticky notes on a wall' },
          { src: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&h=1000&fit=crop', alt: 'Design system spread on a table' },
          { src: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=800&fit=crop', alt: 'Team working together in the studio' },
          { src: 'https://images.unsplash.com/photo-1611532736579-6b16e2b50449?w=800&h=1000&fit=crop', alt: 'Printed brand collateral on a surface' },
        ],
      },
      features: {
        eyebrow: 'Capabilities',
        heading: 'What we do',
        subheading: 'Brand, digital, and everything in between.',
        items: [
          { heading: 'Branding', body: 'Identity, naming, and brand systems.', image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&h=600&fit=crop' },
          { heading: 'Digital', body: 'Websites, products, and design systems.', image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=600&fit=crop' },
          { heading: 'Campaigns', body: 'Concept to launch, across every channel.', image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop' },
        ],
      },
      about: {
        eyebrow: 'About',
        heading: 'A studio built on craft',
        body: [
          'We started as a few designers and a shared desk. Today we are a full studio across brand, digital, and campaigns.',
          'Small enough to care, big enough to deliver.',
        ],
        image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&h=900&fit=crop',
        facts: [
          { value: '[Year]', label: 'Founded' },
          { value: '[Brands]', label: 'Brands launched' },
          { value: '[Team]', label: 'Team' },
          { value: '[Awards]', label: 'Awards' },
        ],
      },
      testimonials: {
        heading: 'What clients say',
        items: [
          { quote: 'They did not just design a brand. They built one.', name: 'Elena M.', role: 'CMO', rating: 5, avatar: 'https://i.pravatar.cc/150?u=studio-elena' },
          { quote: 'Strategic, beautiful, and easy to work with.', name: 'Kwame A.', role: 'Founder', rating: 5, avatar: 'https://i.pravatar.cc/150?u=studio-kwame' },
          { quote: 'Best creative partner we have worked with.', name: 'Sarah T.', role: 'Head of Brand', rating: 5, avatar: 'https://i.pravatar.cc/150?u=studio-sarah' },
        ],
      },
      team: {
        heading: 'The studio',
        members: [
          { name: '[Creative Director]', role: 'Creative Director', bio: 'Former agency ECD. Went indie to do better work.', avatar: 'https://i.pravatar.cc/300?u=studio-cd' },
          { name: '[Design Lead]', role: 'Design Lead', bio: 'Obsessed with type and grids.', avatar: 'https://i.pravatar.cc/300?u=studio-design' },
          { name: '[Strategy Lead]', role: 'Strategy Lead', bio: 'Makes sure the work actually solves something.', avatar: 'https://i.pravatar.cc/300?u=studio-strategy' },
        ],
      },
      stats: {
        heading: 'At a glance',
        items: [
          { value: '[Brands]', suffix: '+', label: 'Brands launched' },
          { value: '[Years]', suffix: 'y', label: 'In business' },
          { value: '[Awards]', suffix: '', label: 'Awards' },
        ],
      },
      pricing: {
        heading: 'Engagements',
        subheading: 'Every engagement is scoped individually.',
        toggle: false,
        tiers: [
          { name: 'Sprint', monthlyPrice: 8000, yearlyPrice: 8000, description: 'Two-week engagement', features: ['Discovery', 'Concept direction', 'Deliverables'], ctaLabel: 'Get started' },
          { name: 'Brand', monthlyPrice: 25000, yearlyPrice: 25000, description: 'Full identity', features: ['Strategy', 'Identity system', 'Guidelines', 'Launch support'], ctaLabel: 'Get started', featured: true },
          { name: 'Partner', monthlyPrice: 15000, yearlyPrice: 150000, description: 'Ongoing retainer', features: ['Dedicated team', 'Priority work', 'Monthly hours'], ctaLabel: 'Discuss' },
        ],
      },
      cta: {
        heading: 'Got a project in mind?',
        subheading: 'Tell us about it.',
        primaryCta: { label: 'Start a conversation', href: '#contact' },
        image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=1200&h=900&fit=crop',
      },
      contact: {
        eyebrow: 'Get in touch',
        heading: 'Let\'s make something',
        subheading: 'We reply to every inquiry within one business day.',
        info: [
          { label: 'New business', value: '[Your email]' },
          { label: 'Careers', value: '[Your careers email]' },
          { label: 'Studio', value: '[Your city]' },
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
  about: 'About',
  gallery: 'Gallery',
  testimonials: 'Testimonials',
  contact: 'Contact',
  team: 'Team',
  stats: 'Stats',
};

export const SECTION_DESCRIPTIONS = {
  hero: 'The first thing visitors see',
  features: 'What you offer',
  about: 'Your story and background',
  pricing: 'Plans and prices',
  cta: 'A short conversion block',
  gallery: 'Photos of your work',
  testimonials: 'Customer reviews',
  contact: 'How to reach you',
  team: 'Your people',
  stats: 'Key numbers',
};