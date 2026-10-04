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
    availableThemes: ['clinicTrust', 'playfulPop', 'warmSerif'],
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
    availableThemes: ['boldDark', 'saasModern', 'clinicTrust'],
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
    availableThemes: ['saasModern', 'boldDark', 'warmSerif'],
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
    availableThemes: ['boldDark', 'warmSerif', 'playfulPop'],
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