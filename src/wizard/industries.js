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
    availableThemes: ['warmSerif', 'boldDark', 'clinicTrust', 'editorial', 'nature'],
    description: 'Menu, gallery, reviews, and reservations',

    compulsory: ['hero'],
    recommended: ['features', 'gallery', 'testimonials', 'contact', 'about'],
    optional: ['stats', 'team', 'pricing', 'cta'],

    layout: {
      hero: 'bg-slideshow',
      about: 'split',
      features: 'grid',
      gallery: 'masonry',
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
        image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1200&h=900&fit=crop',
        slideshow: {
          images: [
            { src: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=2000&h=1200&fit=crop', alt: 'Restaurant' },
            { src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=2000&h=1200&fit=crop', alt: 'Interior' },
            { src: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=2000&h=1200&fit=crop', alt: 'Food' },
            { src: 'https://images.unsplash.com/photo-1481833761820-0509d3217039?w=2000&h=1200&fit=crop', alt: 'Wine' },
          ],
          interval: 2000,
          fadeDuration: 1000,
        },
      },
      features: {
        eyebrow: 'Our menu',
        heading: 'From our kitchen',
        subheading: 'Handmade pasta, wood-fired pizza, and seasonal specials.',
        items: [
          { heading: 'Margherita', body: 'San Marzano tomatoes, fresh mozzarella, basil.', image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&h=600&fit=crop' },
          { heading: 'Pepperoni', body: 'Crispy, spicy, classic. A house favorite.', image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=800&h=600&fit=crop' },
          { heading: 'Quattro Formaggi', body: 'Four cheeses, one perfect slice.', image: 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=800&h=600&fit=crop' },
        ],
      },
      gallery: {
        heading: 'From the kitchen',
        subheading: 'A look at what we make',
        images: [
          { src: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&h=800&fit=crop', alt: 'Pizza' },
          { src: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=800&h=1000&fit=crop', alt: 'Pasta' },
          { src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=800&fit=crop', alt: 'Restaurant interior' },
          { src: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&h=1000&fit=crop', alt: 'Dish' },
          { src: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?w=800&h=800&fit=crop', alt: 'Plated food' },
          { src: 'https://images.unsplash.com/photo-1481833761820-0509d3217039?w=800&h=1000&fit=crop', alt: 'Wine' },
        ],
      },
      testimonials: {
        heading: 'What our guests say',
        items: [
          { quote: 'Best Italian in the neighborhood. We come every Friday.', name: 'Maria S.', role: 'Regular', rating: 5, avatar: 'https://i.pravatar.cc/150?u=maria' },
          { quote: 'The pasta is unbelievable. Tastes like my grandmother made it.', name: 'James T.', role: 'Local', rating: 5, avatar: 'https://i.pravatar.cc/150?u=james' },
          { quote: 'Cozy atmosphere, great service, incredible food.', name: 'Priya K.', role: 'Visitor', rating: 5, avatar: 'https://i.pravatar.cc/150?u=priya' },
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
          { name: 'Marco Rossi', role: 'Head Chef', bio: 'Trained in Bologna, cooking for 30 years.', avatar: 'https://i.pravatar.cc/300?u=marco' },
          { name: 'Elena Rossi', role: 'Owner', bio: 'Runs the front of house with warmth and precision.', avatar: 'https://i.pravatar.cc/300?u=elena' },
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
        image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&h=900&fit=crop',
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
      about: {
        eyebrow: 'Our story',
        heading: 'A family recipe, three generations deep',
        body: [
          'It started with Nonna Elena in 1985, cooking for neighbors in a tiny kitchen in Bologna.',
          'Today, her grandsons run the same recipes out of our Brooklyn kitchen — same flour, same passion, same Sunday sauce.',
        ],
        image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=1200&h=900&fit=crop',
        facts: [
          { value: '1985', label: 'Founded' },
          { value: '3', label: 'Generations' },
          { value: '50k+', label: 'Guests served' },
          { value: '4.9★', label: 'Rating' },
        ],
      },
    },
  },

  salon: {
    name: 'Salon',
    icon: '💇',
    theme: 'clinicTrust',
    availableThemes: ['clinicTrust', 'playfulPop', 'warmSerif', 'luxe', 'nature'],
    description: 'Services, gallery, reviews, and booking',

    compulsory: ['hero'],
    recommended: ['features', 'gallery', 'testimonials', 'contact', 'about'],
    optional: ['stats', 'team', 'pricing', 'cta'],

    layout: {
      hero: 'split',
      features: 'grid',
      about: 'split-reverse',
      gallery: 'grid',
      testimonials: '3up',
      contact: 'centered',
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
        image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1200&h=900&fit=crop',
      },
      features: {
        eyebrow: 'Services',
        heading: 'What we offer',
        subheading: 'From a quick trim to a full transformation.',
        items: [
          { heading: 'Haircut & Styling', body: 'Cut, color, blowout — tailored to you.', image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800&h=600&fit=crop' },
          { heading: 'Manicure & Pedicure', body: 'Classic or gel. Always pristine.', image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800&h=600&fit=crop' },
          { heading: 'Facials & Skincare', body: 'Rejuvenating treatments for every skin type.', image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&h=600&fit=crop' },
        ],
      },
      gallery: {
        heading: 'Our work',
        subheading: 'Recent styles from our team',
        images: [
          { src: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&h=800&fit=crop', alt: 'Hair styling' },
          { src: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=800&h=800&fit=crop', alt: 'Nail art' },
          { src: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800&h=800&fit=crop', alt: 'Salon interior' },
          { src: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=800&h=800&fit=crop', alt: 'Hair color' },
          { src: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=800&h=800&fit=crop', alt: 'Styling' },
          { src: 'https://images.unsplash.com/photo-1607779097040-26e80aa78e66?w=800&h=800&fit=crop', alt: 'Spa' },
        ],
      },
      testimonials: {
        heading: 'Loved by our clients',
        items: [
          { quote: 'Best haircut I have had in years.', name: 'Aisha M.', role: 'Client', rating: 5, avatar: 'https://i.pravatar.cc/150?u=aisha' },
          { quote: 'The staff is so friendly and talented.', name: 'Rachel D.', role: 'Client', rating: 5, avatar: 'https://i.pravatar.cc/150?u=rachel' },
          { quote: 'I always leave feeling amazing.', name: 'Tom H.', role: 'Client', rating: 5, avatar: 'https://i.pravatar.cc/150?u=tomh' },
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
          { name: 'Sofia Martinez', role: 'Lead Stylist', bio: 'Color specialist with 12 years of experience.', avatar: 'https://i.pravatar.cc/300?u=sofia' },
          { name: 'Jade Chen', role: 'Nail Artist', bio: 'Known for intricate, long-lasting designs.', avatar: 'https://i.pravatar.cc/300?u=jade' },
          { name: 'Amara Okafor', role: 'Esthetician', bio: 'Skincare expert focused on results.', avatar: 'https://i.pravatar.cc/300?u=amara' },
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
        image: 'https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?w=1200&h=900&fit=crop',
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
      about: {
        eyebrow: 'About us',
        heading: 'Ten years of transformations',
        body: [
          'We opened in 2014 with one chair and a simple idea: everyone deserves to feel amazing walking out.',
          'Today we have a full team of specialists, but the idea hasn\'t changed.',
        ],
        image: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=1200&h=900&fit=crop',
        facts: [
          { value: '2014', label: 'Opened' },
          { value: '10+', label: 'Stylists' },
          { value: '5k+', label: 'Clients' },
          { value: '4.9★', label: 'Rating' },
        ],
      },
    },
  },

  contractor: {
    name: 'Contractor',
    icon: '🔧',
    theme: 'boldDark',
    availableThemes: ['boldDark', 'saasModern', 'clinicTrust', 'brutalist', 'nature'],
    description: 'Services, projects, stats, and quotes',

    compulsory: ['hero'],
    recommended: ['features', 'stats', 'gallery', 'testimonials', 'contact', 'about'],
    optional: ['team', 'pricing', 'cta'],

    layout: {
      hero: 'split-reverse',
      features: 'grid',
      about: 'facts',
      stats: '4up',
      gallery: 'featured',
      testimonials: '2up',
      contact: 'split',
      team: 'list',
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
        image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&h=900&fit=crop',
      },
      features: {
        eyebrow: 'Services',
        heading: 'What we do',
        subheading: 'From small repairs to full builds.',
        items: [
          { heading: 'General Contracting', body: 'Full-service project management from start to finish.', image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=600&fit=crop' },
          { heading: 'Renovations', body: 'Kitchens, bathrooms, and additions done right.', image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=600&fit=crop' },
          { heading: 'Commercial Builds', body: 'Offices, retail, and industrial spaces.', image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&h=600&fit=crop' },
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
        images: [
          { src: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&h=900&fit=crop', alt: 'Featured project' },
          { src: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=800&fit=crop', alt: 'Construction site' },
          { src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=800&fit=crop', alt: 'Modern home' },
          { src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=800&fit=crop', alt: 'Interior work' },
          { src: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=800&fit=crop', alt: 'Renovation' },
        ],
      },
      testimonials: {
        heading: 'What clients say',
        items: [
          { quote: 'Finished on time, on budget, and it looks incredible.', name: 'David R.', role: 'Homeowner', rating: 5, avatar: 'https://i.pravatar.cc/150?u=davidr' },
          { quote: 'Professional team. Clear communication throughout.', name: 'Anna L.', role: 'Business owner', rating: 5, avatar: 'https://i.pravatar.cc/150?u=annal' },
          { quote: 'We would hire them again without hesitation.', name: 'Michael B.', role: 'Property manager', rating: 5, avatar: 'https://i.pravatar.cc/150?u=michaelb' },
        ],
      },
      team: {
        heading: 'Our leadership',
        members: [
          { name: 'Robert Chen', role: 'Founder', bio: '30 years in construction management.', avatar: 'https://i.pravatar.cc/300?u=robertc' },
          { name: 'Sarah Patel', role: 'Operations Lead', bio: 'Oversees every project from kickoff to closeout.', avatar: 'https://i.pravatar.cc/300?u=sarahp' },
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
        image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&h=900&fit=crop',
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
      about: {
        eyebrow: 'Who we are',
        heading: 'Building in this city for 25 years',
        body: [
          'We started as a two-person crew doing small renovations. Now we run full builds with 200+ team members.',
          'Licensed, insured, and proud of every project we\'ve completed.',
        ],
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1200&h=900&fit=crop',
        facts: [
          { value: '1999', label: 'Founded' },
          { value: '200+', label: 'Team' },
          { value: '50+', label: 'Projects/yr' },
          { value: '100%', label: 'Satisfaction' },
        ],
      },
    },
  },

  consultant: {
    name: 'Consultant',
    icon: '💼',
    theme: 'saasModern',
    availableThemes: ['saasModern', 'boldDark', 'warmSerif', 'editorial', 'luxe'],
    description: 'Services, pricing, reviews, and contact',

    compulsory: ['hero'],
    recommended: ['features', 'pricing', 'testimonials', 'contact', 'about'],
    optional: ['stats', 'team', 'gallery', 'cta'],

    layout: {
      hero: 'centered',
      features: 'bento',
      pricing: 'tiers-with-toggle',
      testimonials: '2up',
      about: 'split',
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
        image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1200&h=900&fit=crop',
      },
      features: {
        eyebrow: 'Services',
        heading: 'How I can help',
        subheading: 'Fractional, flexible, focused on outcomes.',
        items: [
          { heading: 'Strategic Planning', body: 'Roadmaps, priorities, and quarterly goals.', image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop' },
          { heading: 'Go-to-Market', body: 'Positioning, pricing, and launch strategy.', image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop' },
          { heading: 'Operations', body: 'Process, hiring, and scaling decisions.', image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop' },
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
          { quote: 'Doubled our revenue in 6 months.', name: 'Sarah K.', role: 'Founder, SaaS', rating: 5, avatar: 'https://i.pravatar.cc/150?u=sarahk' },
          { quote: 'Sharp strategic thinking, hands-on execution.', name: 'Daniel M.', role: 'CEO, Agency', rating: 5, avatar: 'https://i.pravatar.cc/150?u=danielm' },
          { quote: 'The clarity and focus we needed.', name: 'Nina P.', role: 'Founder, DTC', rating: 5, avatar: 'https://i.pravatar.cc/150?u=ninap' },
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
          { name: 'Alex Morgan', role: 'Founder & Principal', bio: 'Former operator. Now helping founders avoid the mistakes I made.', avatar: 'https://i.pravatar.cc/300?u=alexm' },
        ],
      },
      gallery: {
        heading: 'Case studies',
        subheading: 'Selected work',
        images: [
          { src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=800&fit=crop', alt: 'Workshop' },
          { src: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=800&fit=crop', alt: 'Team session' },
          { src: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=800&fit=crop', alt: 'Strategy' },
        ],
      },
      cta: {
        heading: 'Ready to talk?',
        subheading: 'Free 30-minute intro call.',
        primaryCta: { label: 'Book a call', href: '#book' },
        image: 'https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=1200&h=900&fit=crop',
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
      about: {
        eyebrow: 'About me',
        heading: 'Former operator, now helping founders',
        body: [
          'I built and sold two companies before I turned 35. Now I help founders avoid the mistakes I made.',
          'Fractional, flexible, and focused on outcomes — not decks.',
        ],
        image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?w=1200&h=900&fit=crop',
        facts: [
          { value: '12y', label: 'Experience' },
          { value: '40+', label: 'Clients' },
          { value: '2', label: 'Exits' },
          { value: '$200M', label: 'Revenue added' },
        ],
      },
    },
  },

  photographer: {
    name: 'Photographer',
    icon: '📷',
    theme: 'boldDark',
    availableThemes: ['boldDark', 'warmSerif', 'playfulPop', 'editorial', 'brutalist'],
    description: 'Gallery-first with booking',

    compulsory: ['hero'],
    recommended: ['about', 'gallery', 'testimonials', 'cta', 'contact'],
    optional: ['features', 'stats', 'team', 'pricing'],

    layout: {
      hero: 'bg-image',
      gallery: 'featured',
      about: 'centered',
      testimonials: 'wall',
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
        image: 'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=1600&h=900&fit=crop',
      },
      gallery: {
        heading: 'Selected work',
        subheading: 'A small sample of recent projects',
        images: [
          { src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1600&h=900&fit=crop', alt: 'Wedding' },
          { src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&h=800&fit=crop', alt: 'Portrait' },
          { src: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&h=800&fit=crop', alt: 'Portrait' },
          { src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=800&fit=crop', alt: 'Wedding' },
          { src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&h=800&fit=crop', alt: 'Portrait' },
        ],
      },
      testimonials: {
        heading: 'Kind words',
        items: [
          { quote: 'Best photos we have ever had. Truly captured the day.', name: 'Emma & John', role: 'Wedding clients', rating: 5, avatar: 'https://i.pravatar.cc/150?u=emmajohn' },
          { quote: 'Professional, easy to work with, incredible results.', name: 'Chris B.', role: 'Brand client', rating: 5, avatar: 'https://i.pravatar.cc/150?u=chrisb' },
          { quote: 'Made me feel comfortable and the photos show it.', name: 'Leila R.', role: 'Portrait client', rating: 5, avatar: 'https://i.pravatar.cc/150?u=leilar' },
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
          { heading: 'Weddings', body: 'Full-day coverage, two photographers, edited gallery.', image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop' },
          { heading: 'Portraits', body: 'Personal, family, and professional headshots.', image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&h=600&fit=crop' },
          { heading: 'Brands', body: 'Product, lifestyle, and editorial photography.', image: 'https://images.unsplash.com/photo-1493612276216-ee3925520721?w=800&h=600&fit=crop' },
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
          { name: 'Jamie Rivera', role: 'Photographer', bio: 'Shooting weddings and portraits for over a decade.', avatar: 'https://i.pravatar.cc/300?u=jamier' },
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
      about: {
        eyebrow: 'Behind the lens',
        heading: 'A decade of chasing light',
        body: [
          'I started shooting weddings in 2014. Ten years, 200+ weddings, and I still get butterflies before the first look.',
          'Based in New York, available worldwide.',
        ],
        image: 'https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=1200&h=900&fit=crop',
        facts: [
          { value: '2014', label: 'Started' },
          { value: '200+', label: 'Weddings' },
          { value: '10+', label: 'Countries' },
          { value: '4.9★', label: 'Rating' },
        ],
      },
    },
  },
  fitness: {
    name: 'Fitness / Gym',
    icon: '💪',
    theme: 'boldDark',
    availableThemes: ['boldDark', 'saasModern', 'brutalist', 'nature'],
    description: 'Classes, trainers, memberships, and booking',

    compulsory: ['hero'],
    recommended: ['features', 'pricing', 'testimonials', 'team', 'contact', 'about'],
    optional: ['stats', 'gallery', 'cta'],

    layout: {
      hero: 'bg-image',
      features: 'grid',
      pricing: 'tiers-with-toggle',
      testimonials: '3up',
      team: 'grid',
      contact: 'split',
      about: 'split',
      stats: '4up',
      gallery: 'grid',
      cta: 'banner',
    },

    placeholder: {
      hero: {
        eyebrow: 'Train with purpose',
        heading: 'Stronger every day',
        subheading: 'Small classes, expert coaches, real results.',
        primaryCta: { label: 'Start free trial', href: '#join' },
        secondaryCta: { label: 'See classes', href: '#classes' },
        image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1600&h=900&fit=crop',
      },
      features: {
        eyebrow: 'What we offer',
        heading: 'Training for every level',
        subheading: 'Whether it\'s your first session or your hundredth.',
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
          { name: 'Unlimited', monthlyPrice: 149, yearlyPrice: 1490, description: 'Best value', features: ['Unlimited classes', 'Open gym access', 'Free towel service'], ctaLabel: 'Join now', featured: true },
          { name: 'Personal', monthlyPrice: 499, yearlyPrice: 4990, description: '1-on-1 coaching', features: ['4 sessions/month', 'Custom program', 'Nutrition guide'], ctaLabel: 'Get started' },
        ],
      },
      testimonials: {
        heading: 'Real results',
        items: [
          { quote: 'Lost 20kg in 6 months. The coaches actually care.', name: 'Marcus D.', role: 'Member since 2023', rating: 5, avatar: 'https://i.pravatar.cc/150?u=marcusd' },
          { quote: 'Best gym I\'ve ever trained at. Period.', name: 'Priya S.', role: 'Member', rating: 5, avatar: 'https://i.pravatar.cc/150?u=priyas' },
          { quote: 'The community keeps me coming back.', name: 'Tom R.', role: 'Member', rating: 5, avatar: 'https://i.pravatar.cc/150?u=tomr' },
        ],
      },
      team: {
        heading: 'Meet the coaches',
        subheading: 'Certified, experienced, and obsessed with your progress',
        members: [
          { name: 'Jordan Blake', role: 'Head Coach', bio: 'NSCA-certified, 10 years coaching strength athletes.', avatar: 'https://i.pravatar.cc/300?u=jordanb' },
          { name: 'Mia Chen', role: 'Conditioning Coach', bio: 'Former competitive sprinter. Loves a good metcon.', avatar: 'https://i.pravatar.cc/300?u=miac' },
          { name: 'Sam Okafor', role: 'Mobility Coach', bio: 'Yoga + strength background. Fixes what hurts.', avatar: 'https://i.pravatar.cc/300?u=samo' },
        ],
      },
      stats: {
        heading: 'By the numbers',
        items: [
          { value: '500', suffix: '+', label: 'Active members' },
          { value: '12', suffix: '', label: 'Expert coaches' },
          { value: '40', suffix: '+', label: 'Weekly classes' },
          { value: '4.9', suffix: '★', label: 'Google rating' },
        ],
      },
      gallery: {
        heading: 'Inside the gym',
        subheading: 'Where the work gets done',
        images: [
          { src: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=800&fit=crop', alt: 'Gym floor' },
          { src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=800&fit=crop', alt: 'Weights' },
          { src: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&h=800&fit=crop', alt: 'Class' },
          { src: 'https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=800&h=800&fit=crop', alt: 'Training' },
          { src: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=800&h=800&fit=crop', alt: 'Equipment' },
          { src: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800&h=800&fit=crop', alt: 'Coaching' },
        ],
      },
      cta: {
        heading: 'First class is on us',
        subheading: 'Come try a session. No pressure, no commitment.',
        primaryCta: { label: 'Claim free class', href: '#join' },
        image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1200&h=900&fit=crop',
      },
      contact: {
        eyebrow: 'Visit us',
        heading: 'Come train with us',
        subheading: 'Open 7 days. Drop in any time.',
        info: [
          { label: 'Address', value: '789 Iron Street' },
          { label: 'Phone', value: '(555) 456-7890' },
          { label: 'Hours', value: 'Mon–Sun, 5am – 10pm' },
        ],
      },
      about: {
        eyebrow: 'Our story',
        heading: 'Built by athletes, for everyone',
        body: [
          'We opened in 2015 with one squat rack and a stubborn belief that fitness should be for everyone.',
          'Today we\'re a full gym with 500+ members — from first-timers to competitive lifters.',
        ],
        image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=1200&h=900&fit=crop',
        facts: [
          { value: '2015', label: 'Opened' },
          { value: '500+', label: 'Members' },
          { value: '12', label: 'Coaches' },
          { value: '4.9★', label: 'Rating' },
        ],
      },
    },
  },

  barber: {
    name: 'Barber',
    icon: '💈',
    theme: 'boldDark',
    availableThemes: ['boldDark', 'warmSerif', 'brutalist', 'editorial'],
    description: 'Services, gallery, booking, and reviews',

    compulsory: ['hero'],
    recommended: ['features', 'pricing', 'gallery', 'testimonials', 'contact', 'about'],
    optional: ['team', 'stats', 'cta'],

    layout: {
      hero: 'split',
      features: 'grid',
      pricing: 'tiers',
      gallery: 'masonry',
      testimonials: '3up',
      contact: 'split',
      about: 'split-reverse',
      team: 'grid',
      stats: '3up',
      cta: 'banner',
    },

    placeholder: {
      hero: {
        eyebrow: 'Est. 2012',
        heading: 'Sharp cuts, straight razors, cold beer',
        subheading: 'Classic barbering in a modern shop.',
        primaryCta: { label: 'Book a cut', href: '#book' },
        secondaryCta: { label: 'See our work', href: '#work' },
        image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=1200&h=900&fit=crop',
      },
      features: {
        eyebrow: 'Services',
        heading: 'What we do',
        subheading: 'Walk-ins welcome, appointments preferred.',
        items: [
          { heading: 'Haircut', body: 'Classic or modern, always sharp.', image: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=800&h=600&fit=crop' },
          { heading: 'Beard Trim', body: 'Shaped, lined, and oiled.', image: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=800&h=600&fit=crop' },
          { heading: 'Hot Towel Shave', body: 'Straight razor, hot towel, the works.', image: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=800&h=600&fit=crop' },
        ],
      },
      pricing: {
        heading: 'Services & pricing',
        tiers: [
          { name: 'Haircut', monthlyPrice: 35, yearlyPrice: 35, description: '30 min', features: ['Consultation', 'Wash', 'Style'], ctaLabel: 'Book' },
          { name: 'Cut + Beard', monthlyPrice: 55, yearlyPrice: 55, description: '45 min', features: ['Haircut', 'Beard trim', 'Hot towel'], ctaLabel: 'Book', featured: true },
          { name: 'Full Service', monthlyPrice: 75, yearlyPrice: 75, description: '60 min', features: ['Haircut', 'Beard', 'Hot shave', 'Facial'], ctaLabel: 'Book' },
        ],
      },
      gallery: {
        heading: 'Our work',
        subheading: 'Recent cuts from the shop',
        images: [
          { src: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=800&h=800&fit=crop', alt: 'Fade' },
          { src: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=800&h=1000&fit=crop', alt: 'Cut' },
          { src: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=800&h=800&fit=crop', alt: 'Beard' },
          { src: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800&h=1000&fit=crop', alt: 'Shop' },
          { src: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=800&h=800&fit=crop', alt: 'Chair' },
          { src: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=800&h=1000&fit=crop', alt: 'Tools' },
        ],
      },
      testimonials: {
        heading: 'What the guys say',
        items: [
          { quote: 'Best fade in the city. Been coming here for 5 years.', name: 'Danny R.', role: 'Regular', rating: 5, avatar: 'https://i.pravatar.cc/150?u=dannyr' },
          { quote: 'Great atmosphere, great cuts. What more do you need?', name: 'Kevin L.', role: 'Customer', rating: 5, avatar: 'https://i.pravatar.cc/150?u=kevinl' },
          { quote: 'They actually listen to what you want. Rare.', name: 'Ahmed S.', role: 'Customer', rating: 5, avatar: 'https://i.pravatar.cc/150?u=ahmeds' },
        ],
      },
      team: {
        heading: 'The barbers',
        members: [
          { name: 'Vinny Russo', role: 'Owner / Master Barber', bio: '20 years behind the chair. Trained in Naples.', avatar: 'https://i.pravatar.cc/300?u=vinnyr' },
          { name: 'Devon Park', role: 'Senior Barber', bio: 'Fades, tapers, and modern styles.', avatar: 'https://i.pravatar.cc/300?u=devonp' },
        ],
      },
      stats: {
        heading: 'By the numbers',
        items: [
          { value: '12', suffix: '+', label: 'Years open' },
          { value: '20', suffix: 'k+', label: 'Cuts given' },
          { value: '4.9', suffix: '★', label: 'Rating' },
        ],
      },
      cta: {
        heading: 'Look sharp this week',
        subheading: 'Same-day appointments often available.',
        primaryCta: { label: 'Book now', href: '#book' },
        image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=1200&h=900&fit=crop',
      },
      contact: {
        eyebrow: 'Visit us',
        heading: 'Come get a cut',
        subheading: 'Walk-ins welcome. Book ahead to skip the wait.',
        info: [
          { label: 'Address', value: '321 Main Street' },
          { label: 'Phone', value: '(555) 567-8901' },
          { label: 'Hours', value: 'Tue–Sat, 9am – 8pm' },
        ],
      },
      about: {
        eyebrow: 'Our story',
        heading: 'A barbershop, not a salon',
        body: [
          'We opened in 2012 with one chair and a simple promise: sharp cuts, no attitude.',
          'Twelve years later, we still hold the same standard.',
        ],
        image: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=1200&h=900&fit=crop',
        facts: [
          { value: '2012', label: 'Opened' },
          { value: '2', label: 'Barbers' },
          { value: '20k+', label: 'Cuts' },
          { value: '4.9★', label: 'Rating' },
        ],
      },
    },
  },

  lawyer: {
    name: 'Lawyer',
    icon: '⚖️',
    theme: 'saasModern',
    availableThemes: ['saasModern', 'clinicTrust', 'editorial', 'luxe'],
    description: 'Practice areas, credentials, consultation booking',

    compulsory: ['hero'],
    recommended: ['features', 'about', 'testimonials', 'contact', 'stats'],
    optional: ['team', 'pricing', 'gallery', 'cta'],

    layout: {
      hero: 'split',
      features: 'grid',
      about: 'split-reverse',
      testimonials: '2up',
      contact: 'split',
      stats: '4up',
      team: 'grid',
      pricing: 'tiers',
      cta: 'centered',
    },

    placeholder: {
      hero: {
        eyebrow: 'Licensed in NY & NJ',
        heading: 'Practical legal advice, without the runaround',
        subheading: 'Business law, contracts, and disputes for small companies.',
        primaryCta: { label: 'Free consultation', href: '#consult' },
        secondaryCta: { label: 'Practice areas', href: '#areas' },
        image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200&h=900&fit=crop',
      },
      features: {
        eyebrow: 'Practice areas',
        heading: 'How I can help',
        subheading: 'Focused on small business and startup needs.',
        items: [
          { heading: 'Business Formation', body: 'LLCs, corporations, and partnership agreements.', image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop' },
          { heading: 'Contracts', body: 'Drafting, reviewing, and negotiating agreements.', image: 'https://images.unsplash.com/photo-1423592707957-3b212afa6733?w=800&h=600&fit=crop' },
          { heading: 'Disputes', body: 'Commercial litigation and settlement negotiation.', image: 'https://images.unsplash.com/photo-1436450412740-6b988f486c6b?w=800&h=600&fit=crop' },
        ],
      },
      testimonials: {
        heading: 'What clients say',
        items: [
          { quote: 'Clear, direct, and affordable. Exactly what a small business needs.', name: 'Rebecca T.', role: 'Founder, DTC brand', rating: 5, avatar: 'https://i.pravatar.cc/150?u=rebeccat' },
          { quote: 'Handled our contract dispute efficiently and got us a great outcome.', name: 'Anthony M.', role: 'CEO, agency', rating: 5, avatar: 'https://i.pravatar.cc/150?u=anthonym' },
        ],
      },
      stats: {
        heading: 'By the numbers',
        items: [
          { value: '15', suffix: '+', label: 'Years practicing' },
          { value: '300', suffix: '+', label: 'Clients served' },
          { value: '98', suffix: '%', label: 'Settled pre-trial' },
          { value: '$50', suffix: 'M+', label: 'Deals closed' },
        ],
      },
      team: {
        heading: 'About the firm',
        members: [
          { name: 'Daniel Rhodes', role: 'Founding Partner', bio: '15 years in business law. Former GC at two startups.', avatar: 'https://i.pravatar.cc/300?u=danielr' },
          { name: 'Sofia Alvarez', role: 'Associate', bio: 'Contracts and commercial litigation.', avatar: 'https://i.pravatar.cc/300?u=sofiaa' },
        ],
      },
      pricing: {
        heading: 'How we work',
        tiers: [
          { name: 'Consultation', monthlyPrice: 0, yearlyPrice: 0, description: 'Free, 30 minutes', features: ['Initial assessment', 'No obligation'], ctaLabel: 'Book now' },
          { name: 'Flat Fee', monthlyPrice: 0, yearlyPrice: 0, description: 'Fixed scope', features: ['Transparent pricing', 'No surprises'], ctaLabel: 'Get quote', featured: true },
          { name: 'Retainer', monthlyPrice: 2500, yearlyPrice: 25000, description: 'Ongoing', features: ['Priority access', 'Unlimited consults', 'Contract reviews'], ctaLabel: 'Discuss' },
        ],
      },
      cta: {
        heading: 'Need legal help?',
        subheading: 'Free 30-minute consultation. No obligation.',
        primaryCta: { label: 'Book consultation', href: '#consult' },
      },
      contact: {
        eyebrow: 'Get in touch',
        heading: 'Book a free consultation',
        subheading: 'I respond to every inquiry within 24 hours.',
        info: [
          { label: 'Email', value: 'daniel@example.com' },
          { label: 'Phone', value: '(555) 678-9012' },
          { label: 'Office', value: '100 Legal Plaza, Suite 500' },
        ],
      },
      about: {
        eyebrow: 'About',
        heading: 'Legal counsel that speaks plain English',
        body: [
          'I spent 8 years at a big firm before going out on my own. I wanted to work directly with founders and small business owners.',
          'Today I do exactly that — clear advice, fair pricing, no billing by the six-minute increment.',
        ],
        image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200&h=900&fit=crop',
        facts: [
          { value: '15y', label: 'Experience' },
          { value: '300+', label: 'Clients' },
          { value: '2', label: 'States licensed' },
          { value: '100%', label: 'Flat-fee options' },
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
    optional: ['stats', 'team', 'pricing', 'cta'],

    layout: {
      hero: 'split',
      features: 'grid',
      gallery: 'masonry',
      about: 'split-reverse',
      testimonials: '3up',
      contact: 'split',
      stats: '3up',
      team: 'grid',
      pricing: 'tiers',
      cta: 'centered',
    },

    placeholder: {
      hero: {
        eyebrow: 'Specialty coffee, since 2018',
        heading: 'Slow coffee, warm bread, good light',
        subheading: 'A neighborhood cafe in the heart of the city.',
        primaryCta: { label: 'See menu', href: '#menu' },
        secondaryCta: { label: 'Find us', href: '#visit' },
        image: 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=1200&h=900&fit=crop',
      },
      features: {
        eyebrow: 'Menu',
        heading: 'What we serve',
        subheading: 'Coffee, pastries, and light lunch. All made in-house.',
        items: [
          { heading: 'Coffee', body: 'Single-origin espresso, filter, and cold brew.', image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&h=600&fit=crop' },
          { heading: 'Pastries', body: 'Croissants, cinnamon rolls, and daily specials.', image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&h=600&fit=crop' },
          { heading: 'Lunch', body: 'Sandwiches, salads, and soup. Fresh daily.', image: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?w=800&h=600&fit=crop' },
        ],
      },
      gallery: {
        heading: 'From the cafe',
        subheading: 'A look inside',
        images: [
          { src: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&h=800&fit=crop', alt: 'Interior' },
          { src: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&h=1000&fit=crop', alt: 'Latte' },
          { src: 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=800&h=800&fit=crop', alt: 'Counter' },
          { src: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&h=1000&fit=crop', alt: 'Pastry' },
          { src: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=800&h=800&fit=crop', alt: 'Beans' },
          { src: 'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=800&h=1000&fit=crop', alt: 'Seating' },
        ],
      },
      testimonials: {
        heading: 'Regulars say',
        items: [
          { quote: 'Best flat white in the neighborhood. Come here every morning.', name: 'Jenna M.', role: 'Regular', rating: 5, avatar: 'https://i.pravatar.cc/150?u=jennam' },
          { quote: 'Cozy spot, great coffee, friendly staff. What else do you need?', name: 'Owen K.', role: 'Local', rating: 5, avatar: 'https://i.pravatar.cc/150?u=owenk' },
          { quote: 'The cinnamon rolls alone are worth the trip.', name: 'Farah A.', role: 'Visitor', rating: 5, avatar: 'https://i.pravatar.cc/150?u=faraha' },
        ],
      },
      stats: {
        heading: 'By the numbers',
        items: [
          { value: '6', suffix: 'y', label: 'Open' },
          { value: '50', suffix: 'k+', label: 'Cups poured' },
          { value: '4.8', suffix: '★', label: 'Rating' },
        ],
      },
      team: {
        heading: 'Behind the bar',
        members: [
          { name: 'Nora Chen', role: 'Owner / Head Barista', bio: 'Two-time regional latte art champion.', avatar: 'https://i.pravatar.cc/300?u=norac' },
          { name: 'Liam Doyle', role: 'Baker', bio: 'Makes everything from scratch every morning.', avatar: 'https://i.pravatar.cc/300?u=liamd' },
        ],
      },
      pricing: {
        heading: 'Menu highlights',
        tiers: [
          { name: 'Espresso', monthlyPrice: 3, yearlyPrice: 3, description: 'Single or double', features: ['House blend', 'Oat milk available'], ctaLabel: 'Order' },
          { name: 'Flat White', monthlyPrice: 5, yearlyPrice: 5, description: 'Our signature', features: ['Double shot', 'Silky microfoam'], ctaLabel: 'Order', featured: true },
          { name: 'Cold Brew', monthlyPrice: 6, yearlyPrice: 6, description: '18-hour steep', features: ['Smooth', 'Low acid'], ctaLabel: 'Order' },
        ],
      },
      cta: {
        heading: 'Come sit with us',
        subheading: 'Open every day, 7am – 6pm.',
        primaryCta: { label: 'Get directions', href: '#visit' },
      },
      contact: {
        eyebrow: 'Visit',
        heading: 'Find us',
        subheading: 'We\'re on the corner of 5th and Main.',
        info: [
          { label: 'Address', value: '55 Fifth Street' },
          { label: 'Hours', value: 'Mon–Sun, 7am – 6pm' },
          { label: 'Phone', value: '(555) 789-0123' },
        ],
      },
      about: {
        eyebrow: 'Our story',
        heading: 'A cafe built on slow mornings',
        body: [
          'We opened in 2018 with one espresso machine and a stubborn idea: coffee should be worth sitting down for.',
          'Six years later, we still roast small, bake daily, and know most of our regulars by name.',
        ],
        image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1200&h=900&fit=crop',
        facts: [
          { value: '2018', label: 'Opened' },
          { value: '2', label: 'Owners' },
          { value: '50k+', label: 'Cups poured' },
          { value: '4.8★', label: 'Rating' },
        ],
      },
    },
  },

  dentist: {
    name: 'Dentist',
    icon: '🦷',
    theme: 'clinicTrust',
    availableThemes: ['clinicTrust', 'saasModern', 'nature', 'editorial'],
    description: 'Services, team, insurance, and booking',

    compulsory: ['hero'],
    recommended: ['features', 'about', 'team', 'testimonials', 'contact', 'stats'],
    optional: ['pricing', 'gallery', 'cta'],

    layout: {
      hero: 'split',
      features: 'grid',
      about: 'split-reverse',
      team: 'grid',
      testimonials: '3up',
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
        primaryCta: { label: 'Book appointment', href: '#book' },
        secondaryCta: { label: 'Our services', href: '#services' },
        image: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=1200&h=900&fit=crop',
      },
      features: {
        eyebrow: 'Services',
        heading: 'What we offer',
        subheading: 'From routine cleanings to cosmetic work.',
        items: [
          { heading: 'General Dentistry', body: 'Cleanings, fillings, and checkups.', image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&h=600&fit=crop' },
          { heading: 'Cosmetic', body: 'Whitening, veneers, and smile design.', image: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=800&h=600&fit=crop' },
          { heading: 'Orthodontics', body: 'Braces and clear aligners for all ages.', image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=600&fit=crop' },
        ],
      },
      team: {
        heading: 'Meet the team',
        subheading: 'Friendly, experienced, and gentle',
        members: [
          { name: 'Dr. Sarah Kim', role: 'Lead Dentist', bio: 'DDS from NYU. 12 years in family dentistry.', avatar: 'https://i.pravatar.cc/300?u=sarahk' },
          { name: 'Dr. Marcus Wei', role: 'Orthodontist', bio: 'Specialist in clear aligners and pediatric ortho.', avatar: 'https://i.pravatar.cc/300?u=marcusw' },
          { name: 'Nina Patel', role: 'Hygienist', bio: 'The reason our patients actually like cleanings.', avatar: 'https://i.pravatar.cc/300?u=ninap' },
        ],
      },
      testimonials: {
        heading: 'Patient reviews',
        items: [
          { quote: 'I used to dread the dentist. Now I actually look forward to it.', name: 'Tom H.', role: 'Patient', rating: 5, avatar: 'https://i.pravatar.cc/150?u=tomh' },
          { quote: 'Dr. Kim is patient, kind, and explains everything.', name: 'Rebecca S.', role: 'Patient', rating: 5, avatar: 'https://i.pravatar.cc/150?u=rebeccas' },
          { quote: 'Brought my whole family here. Everyone loves it.', name: 'Daniel M.', role: 'Patient', rating: 5, avatar: 'https://i.pravatar.cc/150?u=danielm' },
        ],
      },
      stats: {
        heading: 'By the numbers',
        items: [
          { value: '10', suffix: '+', label: 'Years open' },
          { value: '5', suffix: 'k+', label: 'Patients' },
          { value: '4.9', suffix: '★', label: 'Google rating' },
          { value: '100', suffix: '%', label: 'Insurance accepted' },
        ],
      },
      pricing: {
        heading: 'Our plans',
        tiers: [
          { name: 'New Patient', monthlyPrice: 99, yearlyPrice: 99, description: 'First visit', features: ['Exam', 'X-rays', 'Cleaning'], ctaLabel: 'Book now' },
          { name: 'Membership', monthlyPrice: 29, yearlyPrice: 290, description: 'No insurance needed', features: ['2 cleanings/year', 'Free X-rays', '15% off treatments'], ctaLabel: 'Join', featured: true },
          { name: 'Cosmetic Consult', monthlyPrice: 0, yearlyPrice: 0, description: 'Free', features: ['Smile assessment', 'Treatment plan'], ctaLabel: 'Book now' },
        ],
      },
      cta: {
        heading: 'Ready for a healthier smile?',
        subheading: 'Same-week appointments available.',
        primaryCta: { label: 'Book online', href: '#book' },
        image: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=1200&h=900&fit=crop',
      },
      contact: {
        eyebrow: 'Visit us',
        heading: 'Book your appointment',
        subheading: 'We accept most insurance plans.',
        info: [
          { label: 'Address', value: '200 Dental Way, Suite 3' },
          { label: 'Phone', value: '(555) 890-1234' },
          { label: 'Hours', value: 'Mon–Fri, 8am – 6pm' },
        ],
      },
      about: {
        eyebrow: 'About us',
        heading: 'Modern dentistry, human approach',
        body: [
          'We opened in 2014 to build a practice patients actually look forward to visiting.',
          'Quiet rooms, gentle technique, and no lectures about flossing.',
        ],
        image: 'https://images.unsplash.com/photo-1629909615184-74f495363b67?w=1200&h=900&fit=crop',
        facts: [
          { value: '2014', label: 'Opened' },
          { value: '5k+', label: 'Patients' },
          { value: '10+', label: 'Years' },
          { value: '4.9★', label: 'Rating' },
        ],
      },
    },
  },

  band: {
    name: 'Band / Musician',
    icon: '🎸',
    theme: 'boldDark',
    availableThemes: ['boldDark', 'brutalist', 'playfulPop', 'luxe'],
    description: 'Shows, music, merch, and booking',

    compulsory: ['hero'],
    recommended: ['features', 'gallery', 'about', 'cta', 'contact'],
    optional: ['stats', 'team', 'testimonials', 'pricing'],

    layout: {
      hero: 'bg-image',
      features: 'grid',
      gallery: 'featured',
      about: 'centered',
      cta: 'centered',
      contact: 'split',
      stats: '3up',
      team: 'list',
      testimonials: 'wall',
      pricing: 'tiers',
    },

    placeholder: {
      hero: {
        eyebrow: 'New album out now',
        heading: 'Loud, honest, and tired of the same old thing',
        subheading: 'On tour this fall. Come say hi.',
        primaryCta: { label: 'Listen now', href: '#listen' },
        secondaryCta: { label: 'Tour dates', href: '#tour' },
        image: 'https://images.unsplash.com/photo-1501612780327-45045538702b?w=1600&h=900&fit=crop',
      },
      features: {
        eyebrow: 'Music',
        heading: 'Where to listen',
        subheading: 'Streaming everywhere. Physical copies on Bandcamp.',
        items: [
          { heading: 'Spotify', body: 'Full catalog streaming.', image: 'https://images.unsplash.com/photo-1611339555312-e607c8352fd7?w=800&h=600&fit=crop' },
          { heading: 'Bandcamp', body: 'Buy vinyl, tapes, and digital.', image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&h=600&fit=crop' },
          { heading: 'Apple Music', body: 'Also on Apple.', image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop' },
        ],
      },
      gallery: {
        heading: 'Live',
        subheading: 'Moments from the road',
        images: [
          { src: 'https://images.unsplash.com/photo-1501612780327-45045538702b?w=1600&h=900&fit=crop', alt: 'On stage' },
          { src: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=800&fit=crop', alt: 'Crowd' },
          { src: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&h=800&fit=crop', alt: 'Guitar' },
          { src: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&h=800&fit=crop', alt: 'Lights' },
          { src: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&h=800&fit=crop', alt: 'Drums' },
        ],
      },
      testimonials: {
        heading: 'Press',
        items: [
          { quote: '"A ferocious live act that refuses to slow down."', name: 'The Local Paper', role: 'Music review', rating: 5, avatar: 'https://i.pravatar.cc/150?u=press1' },
          { quote: '"One of the best new bands to come out of the city this year."', name: 'Indie Weekly', role: 'Feature', rating: 5, avatar: 'https://i.pravatar.cc/150?u=press2' },
        ],
      },
      stats: {
        heading: 'By the numbers',
        items: [
          { value: '3', suffix: '', label: 'Albums' },
          { value: '120', suffix: '+', label: 'Shows played' },
          { value: '50', suffix: 'k', label: 'Monthly listeners' },
        ],
      },
      team: {
        heading: 'The band',
        members: [
          { name: 'Rae', role: 'Vocals / Guitar', bio: 'Writes most of the songs. Allergic to genre.', avatar: 'https://i.pravatar.cc/300?u=rae' },
          { name: 'Kai', role: 'Bass', bio: 'The reason the low end sounds like that.', avatar: 'https://i.pravatar.cc/300?u=kai' },
          { name: 'Sam', role: 'Drums', bio: 'Loudest member. Also the nicest.', avatar: 'https://i.pravatar.cc/300?u=sam' },
        ],
      },
      pricing: {
        heading: 'Merch',
        tiers: [
          { name: 'T-Shirt', monthlyPrice: 30, yearlyPrice: 30, description: 'Limited run', features: ['Screen printed', 'Ships worldwide'], ctaLabel: 'Buy' },
          { name: 'Vinyl', monthlyPrice: 35, yearlyPrice: 35, description: 'New album', features: ['180g black vinyl', 'Download code'], ctaLabel: 'Buy', featured: true },
          { name: 'Bundle', monthlyPrice: 60, yearlyPrice: 60, description: 'Best value', features: ['Vinyl + shirt', 'Signed poster'], ctaLabel: 'Buy' },
        ],
      },
      cta: {
        heading: 'On tour this fall',
        subheading: 'Tickets on sale now.',
        primaryCta: { label: 'See dates', href: '#tour' },
      },
      contact: {
        eyebrow: 'Get in touch',
        heading: 'Booking & press',
        subheading: 'For shows, features, or collabs.',
        info: [
          { label: 'Booking', value: 'booking@example.com' },
          { label: 'Press', value: 'press@example.com' },
          { label: 'Based in', value: 'Brooklyn, NY' },
        ],
      },
      about: {
        eyebrow: 'About',
        heading: 'Three friends, one loud room',
        body: [
          'We started in a basement in 2019. First show was to twelve people. Two of them were our roommates.',
          'Three albums later, we still play every show like it\'s the last one.',
        ],
        image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1200&h=900&fit=crop',
        facts: [
          { value: '2019', label: 'Formed' },
          { value: '3', label: 'Albums' },
          { value: '120+', label: 'Shows' },
          { value: '50k', label: 'Listeners/mo' },
        ],
      },
    },
  },
  videoProduction: {
    name: 'Video Production',
    icon: '🎬',
    theme: 'boldDark',
    availableThemes: ['boldDark', 'editorial', 'luxe', 'brutalist'],
    description: 'Reels, client roster, and project inquiries',

    compulsory: ['hero'],
    recommended: ['gallery', 'features', 'about', 'testimonials', 'contact'],
    optional: ['stats', 'team', 'cta', 'pricing'],

    layout: {
      hero: 'bg-image',
      gallery: 'featured',
      features: 'grid',
      about: 'split',
      testimonials: 'wall',
      contact: 'split',
      stats: '4up',
      team: 'list',
      cta: 'banner',
      pricing: 'tiers',
    },

    placeholder: {
      hero: {
        eyebrow: 'Film · Commercial · Documentary',
        heading: 'Stories worth watching',
        subheading: 'A production company for brands that care about craft.',
        primaryCta: { label: 'See our work', href: '#work' },
        secondaryCta: { label: 'Start a project', href: '#contact' },
        image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=1600&h=900&fit=crop',
      },
      gallery: {
        heading: 'Selected work',
        subheading: 'A look at recent projects',
        images: [
          { src: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=1600&h=900&fit=crop', alt: 'On set' },
          { src: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800&h=800&fit=crop', alt: 'Camera' },
          { src: 'https://images.unsplash.com/photo-1524712245354-2c4e5e7121c0?w=800&h=800&fit=crop', alt: 'Crew' },
          { src: 'https://images.unsplash.com/photo-1500210816540-9e7e6b1f80b2?w=800&h=800&fit=crop', alt: 'Interview' },
          { src: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&h=800&fit=crop', alt: 'Filming' },
          { src: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=800&h=800&fit=crop', alt: 'Behind the scenes' },
        ],
      },
      features: {
        eyebrow: 'What we do',
        heading: 'Services',
        subheading: 'From concept to final cut.',
        items: [
          { heading: 'Commercials', body: 'Brand films, product spots, and campaigns.', image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&h=600&fit=crop' },
          { heading: 'Documentary', body: 'Long-form storytelling with real subjects.', image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&h=600&fit=crop' },
          { heading: 'Music Videos', body: 'Visual concepts that match the track.', image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop' },
        ],
      },
      testimonials: {
        heading: 'What clients say',
        items: [
          { quote: 'They turned our vision into something better than we imagined.', name: 'Aisha R.', role: 'Brand Director, Nike', rating: 5, avatar: 'https://i.pravatar.cc/150?u=aishar' },
          { quote: 'Professional, creative, and actually hits deadlines.', name: 'Marcus L.', role: 'Marketing Lead, Spotify', rating: 5, avatar: 'https://i.pravatar.cc/150?u=marcusl' },
          { quote: 'The final cut gave us goosebumps. That\'s the job.', name: 'Priya K.', role: 'Founder, DTC brand', rating: 5, avatar: 'https://i.pravatar.cc/150?u=priyak' },
        ],
      },
      stats: {
        heading: 'By the numbers',
        items: [
          { value: '200', suffix: '+', label: 'Projects delivered' },
          { value: '15', suffix: 'y', label: 'In business' },
          { value: '40', suffix: '+', label: 'Brand clients' },
          { value: '3', suffix: '', label: 'Awards' },
        ],
      },
      team: {
        heading: 'The team',
        members: [
          { name: 'Sam Reyes', role: 'Founder / Director', bio: '15 years behind the camera. Obsessed with story.', avatar: 'https://i.pravatar.cc/300?u=samr' },
          { name: 'Nina Chen', role: 'Producer', bio: 'Runs every shoot like clockwork.', avatar: 'https://i.pravatar.cc/300?u=ninac' },
          { name: 'Tom Okafor', role: 'Editor', bio: 'The reason our cuts hit right.', avatar: 'https://i.pravatar.cc/300?u=tomo' },
        ],
      },
      pricing: {
        heading: 'How we work',
        tiers: [
          { name: 'Short-form', monthlyPrice: 5000, yearlyPrice: 5000, description: 'Per project', features: ['1-2 min film', 'Full production', '2 revisions'], ctaLabel: 'Get quote' },
          { name: 'Brand Film', monthlyPrice: 15000, yearlyPrice: 15000, description: 'Per project', features: ['3-5 min film', 'Concept + production', 'Full post'], ctaLabel: 'Get quote', featured: true },
          { name: 'Campaign', monthlyPrice: 50000, yearlyPrice: 50000, description: 'Multi-asset', features: ['Hero + cutdowns', 'Full team', '3-month campaign'], ctaLabel: 'Discuss' },
        ],
      },
      cta: {
        heading: 'Got a story to tell?',
        subheading: 'We\'d love to hear about it.',
        primaryCta: { label: 'Start a project', href: '#contact' },
        image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=1200&h=900&fit=crop',
      },
      contact: {
        eyebrow: 'Get in touch',
        heading: 'Let\'s talk',
        subheading: 'Tell us about your project. We respond within 24 hours.',
        info: [
          { label: 'Email', value: 'hello@example.com' },
          { label: 'Phone', value: '(555) 123-4567' },
          { label: 'Studio', value: 'Los Angeles, CA' },
        ],
      },
      about: {
        eyebrow: 'About',
        heading: 'Filmmakers first, everything else second',
        body: [
          'We started in 2009 with two cameras and a rented van. Fifteen years later, we still shoot every project like it\'s our first.',
          'Commercials, documentaries, branded content — if it tells a story, we make it.',
        ],
        image: 'https://images.unsplash.com/photo-1524712245354-2c4e5e7121c0?w=1200&h=900&fit=crop',
        facts: [
          { value: '2009', label: 'Founded' },
          { value: '200+', label: 'Projects' },
          { value: '15y', label: 'Experience' },
          { value: '3', label: 'Awards' },
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
    optional: ['team', 'stats', 'cta', 'pricing'],

    layout: {
      hero: 'split',
      features: 'grid',
      gallery: 'featured',
      about: 'split-reverse',
      testimonials: '2up',
      contact: 'split',
      team: 'list',
      stats: '4up',
      cta: 'banner',
      pricing: 'tiers',
    },

    placeholder: {
      hero: {
        eyebrow: 'Edit · Color · Sound · VFX',
        heading: 'Where the cut comes alive',
        subheading: 'Full-service post for films, series, and branded content.',
        primaryCta: { label: 'See our work', href: '#work' },
        secondaryCta: { label: 'Book a suite', href: '#contact' },
        image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=1200&h=900&fit=crop',
      },
      features: {
        eyebrow: 'Services',
        heading: 'What we do',
        subheading: 'Full-service post under one roof.',
        items: [
          { heading: 'Editorial', body: 'Offline and online editing with senior editors.', image: 'https://images.unsplash.com/photo-1585816799336-ec42e30f92c6?w=800&h=600&fit=crop' },
          { heading: 'Color', body: 'DaVinci Resolve suites with reference monitors.', image: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?w=800&h=600&fit=crop' },
          { heading: 'Sound', body: 'Mixing, sound design, and ADR.', image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&h=600&fit=crop' },
          { heading: 'VFX', body: 'Compositing, cleanup, and finishing.', image: 'https://images.unsplash.com/photo-1626544827763-d516dce335e2?w=800&h=600&fit=crop' },
        ],
      },
      gallery: {
        heading: 'Recent work',
        subheading: 'Selected projects',
        images: [
          { src: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=1600&h=900&fit=crop', alt: 'Editing suite' },
          { src: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800&h=800&fit=crop', alt: 'Color grading' },
          { src: 'https://images.unsplash.com/photo-1585816799336-ec42e30f92c6?w=800&h=800&fit=crop', alt: 'Studio' },
          { src: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&h=800&fit=crop', alt: 'Sound' },
          { src: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&h=800&fit=crop', alt: 'Set' },
        ],
      },
      testimonials: {
        heading: 'What directors say',
        items: [
          { quote: 'Best post house I\'ve worked with in ten years.', name: 'Daniel R.', role: 'Film Director', rating: 5, avatar: 'https://i.pravatar.cc/150?u=danielr' },
          { quote: 'They saved our film in post. Genuinely.', name: 'Amara O.', role: 'Producer', rating: 5, avatar: 'https://i.pravatar.cc/150?u=amarao' },
        ],
      },
      team: {
        heading: 'The team',
        members: [
          { name: 'Ravi Kapoor', role: 'Supervising Editor', bio: '20 years cutting features and series.', avatar: 'https://i.pravatar.cc/300?u=ravik' },
          { name: 'Sofia Martin', role: 'Colorist', bio: 'Graded three Emmy-nominated docs.', avatar: 'https://i.pravatar.cc/300?u=sofiam' },
          { name: 'Josh Lin', role: 'Re-recording Mixer', bio: 'Comes from a music background, mixes like one.', avatar: 'https://i.pravatar.cc/300?u=joshlin' },
        ],
      },
      stats: {
        heading: 'By the numbers',
        items: [
          { value: '30', suffix: '+', label: 'Features finished' },
          { value: '8', suffix: '', label: 'Suites' },
          { value: '15', suffix: 'y', label: 'In business' },
          { value: '3', suffix: '', label: 'Emmy noms' },
        ],
      },
      pricing: {
        heading: 'How we charge',
        tiers: [
          { name: 'Day Rate', monthlyPrice: 1500, yearlyPrice: 1500, description: 'Per day', features: ['Senior editor', 'Fully loaded suite'], ctaLabel: 'Book' },
          { name: 'Project', monthlyPrice: 0, yearlyPrice: 0, description: 'Custom quote', features: ['Full scope', 'Fixed price', 'Timeline guarantee'], ctaLabel: 'Get quote', featured: true },
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
          { label: 'Email', value: 'bookings@example.com' },
          { label: 'Phone', value: '(555) 234-5678' },
          { label: 'Studio', value: 'New York, NY' },
        ],
      },
      about: {
        eyebrow: 'About',
        heading: 'A post house built by editors',
        body: [
          'We opened in 2009 with one Avid suite. Now we run eight, plus color and sound rooms.',
          'We still edit every project like it matters — because to us, it does.',
        ],
        image: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=1200&h=900&fit=crop',
        facts: [
          { value: '2009', label: 'Opened' },
          { value: '8', label: 'Suites' },
          { value: '30+', label: 'Features' },
          { value: '3', label: 'Emmy noms' },
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
    optional: ['team', 'stats', 'cta', 'pricing'],

    layout: {
      hero: 'centered',
      gallery: 'masonry',
      features: 'grid',
      about: 'split',
      testimonials: 'wall',
      contact: 'split',
      team: 'grid',
      stats: '3up',
      cta: 'banner',
      pricing: 'tiers',
    },

    placeholder: {
      hero: {
        eyebrow: 'Brand · Digital · Campaign',
        heading: 'Ideas that move people',
        subheading: 'A creative studio for brands that want to stand out.',
        primaryCta: { label: 'See our work', href: '#work' },
        secondaryCta: { label: 'Start a project', href: '#contact' },
        image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=1600&h=900&fit=crop',
      },
      gallery: {
        heading: 'Selected work',
        subheading: 'A look at recent projects',
        images: [
          { src: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=800&fit=crop', alt: 'Brand' },
          { src: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=1000&fit=crop', alt: 'Poster' },
          { src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=800&fit=crop', alt: 'Workshop' },
          { src: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&h=1000&fit=crop', alt: 'Design' },
          { src: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=800&fit=crop', alt: 'Team' },
          { src: 'https://images.unsplash.com/photo-1611532736579-6b16e2b50449?w=800&h=1000&fit=crop', alt: 'Print' },
        ],
      },
      features: {
        eyebrow: 'Capabilities',
        heading: 'What we do',
        subheading: 'Brand, digital, and everything between.',
        items: [
          { heading: 'Branding', body: 'Identity, naming, and brand systems.', image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&h=600&fit=crop' },
          { heading: 'Digital', body: 'Websites, products, and design systems.', image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=600&fit=crop' },
          { heading: 'Campaigns', body: 'Concept to launch, across every channel.', image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop' },
        ],
      },
      testimonials: {
        heading: 'What clients say',
        items: [
          { quote: 'They didn\'t just design a brand. They built one.', name: 'Elena M.', role: 'CMO, fintech', rating: 5, avatar: 'https://i.pravatar.cc/150?u=elenam' },
          { quote: 'Strategic, beautiful, and easy to work with.', name: 'Kwame A.', role: 'Founder, DTC', rating: 5, avatar: 'https://i.pravatar.cc/150?u=kwamea' },
          { quote: 'Best creative partner we\'ve worked with.', name: 'Sarah T.', role: 'Head of Brand, SaaS', rating: 5, avatar: 'https://i.pravatar.cc/150?u=saraht' },
        ],
      },
      team: {
        heading: 'The studio',
        members: [
          { name: 'Mira Patel', role: 'Creative Director', bio: 'Former ECD at a big agency. Went indie to do better work.', avatar: 'https://i.pravatar.cc/300?u=mirap' },
          { name: 'Diego Rios', role: 'Design Lead', bio: 'Obsessed with type and grids.', avatar: 'https://i.pravatar.cc/300?u=diegor' },
          { name: 'Ade Okonkwo', role: 'Strategy Lead', bio: 'Makes sure the work actually solves something.', avatar: 'https://i.pravatar.cc/300?u=adeo' },
        ],
      },
      stats: {
        heading: 'By the numbers',
        items: [
          { value: '60', suffix: '+', label: 'Brands launched' },
          { value: '12', suffix: 'y', label: 'In business' },
          { value: '4', suffix: '', label: 'Awwwards' },
        ],
      },
      pricing: {
        heading: 'Engagements',
        tiers: [
          { name: 'Sprint', monthlyPrice: 8000, yearlyPrice: 8000, description: '2-week engagement', features: ['Discovery', 'Concept direction', 'Deliverables'], ctaLabel: 'Get started' },
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
        subheading: 'We reply to every inquiry within 24 hours.',
        info: [
          { label: 'New business', value: 'hello@example.com' },
          { label: 'Careers', value: 'jobs@example.com' },
          { label: 'Studio', value: 'Brooklyn, NY' },
        ],
      },
      about: {
        eyebrow: 'About',
        heading: 'A studio built on craft',
        body: [
          'We started in 2013 as three designers and a shared desk. Today we\'re a full studio across brand, digital, and campaigns.',
          'Small enough to care, big enough to deliver.',
        ],
        image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&h=900&fit=crop',
        facts: [
          { value: '2013', label: 'Founded' },
          { value: '60+', label: 'Brands' },
          { value: '12', label: 'Team' },
          { value: '4', label: 'Awwwards' },
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