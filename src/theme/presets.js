// presets.js
// Website Maker — 5 ready-to-use theme presets
// Each preset is self-contained: colors, fonts, type, radius, shadows.
// Drop into `themes` map and render.

/* ─────────────────────────────────────────────────────────────
   PRESET 1 — SaaS Modern
   Clean, indigo, professional. Linear / Vercel / Stripe feel.
   ───────────────────────────────────────────────────────────── */

export const saasModern = {
  name: 'SaaS Modern',
  description: 'Clean, indigo, professional. Safe default for B2B SaaS.',

  fontFamily: {
    sans: 'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',
    serif: 'ui-serif, Georgia, Cambria, "Times New Roman", serif',
    mono: 'JetBrains Mono, ui-monospace, SFMono-Regular, Menlo, monospace',
  },
  typeRatio: 1.25, // major third

  typeScale: {
    xs:   '12px',
    sm:   '14px',
    base: '16px',
    lg:   '18px',
    xl:   '20px',
    '2xl':'24px',
    '3xl':'30px',
    '4xl':'38px',
    '5xl':'48px',
    '6xl':'60px',
  },

  compositeType: {
    'heading-1': { size:'5xl',  weight:'bold',     lineHeight:'tight',  tracking:'tight'  },
    'heading-2': { size:'4xl',  weight:'bold',     lineHeight:'tight',  tracking:'tight'  },
    'heading-3': { size:'3xl',  weight:'semibold', lineHeight:'snug',   tracking:'normal' },
    'heading-4': { size:'2xl',  weight:'semibold', lineHeight:'snug',   tracking:'normal' },
    'heading-5': { size:'xl',   weight:'semibold', lineHeight:'normal', tracking:'normal' },
    'heading-6': { size:'lg',   weight:'semibold', lineHeight:'normal', tracking:'normal' },
    'body-lg':   { size:'lg',   weight:'regular',  lineHeight:'relaxed',tracking:'normal' },
    'body':      { size:'base', weight:'regular',  lineHeight:'normal', tracking:'normal' },
    'body-sm':   { size:'sm',   weight:'regular',  lineHeight:'normal', tracking:'normal' },
    'caption':   { size:'xs',   weight:'regular',  lineHeight:'normal', tracking:'wide'   },
    'label':     { size:'sm',   weight:'medium',   lineHeight:'normal', tracking:'normal' },
    'code':      { size:'sm',   weight:'regular',  lineHeight:'normal', tracking:'normal' },
    'quote':     { size:'xl',   weight:'regular',  lineHeight:'relaxed',tracking:'normal' },
  },

  radius: {
    none:'0px', sm:'4px', md:'8px', lg:'12px', xl:'16px', '2xl':'24px', full:'9999px',
  },

  shadow: {
    none: 'none',
    xs:   '0 1px 2px rgba(0,0,0,0.05)',
    sm:   '0 1px 3px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.04)',
    md:   '0 4px 6px rgba(0,0,0,0.08), 0 2px 4px rgba(0,0,0,0.04)',
    lg:   '0 10px 15px rgba(0,0,0,0.10), 0 4px 6px rgba(0,0,0,0.05)',
    xl:   '0 20px 25px rgba(0,0,0,0.10), 0 8px 10px rgba(0,0,0,0.04)',
    '2xl':'0 25px 50px rgba(0,0,0,0.15)',
    inner:'inset 0 2px 4px rgba(0,0,0,0.06)',
  },

  palette: {
    gray: {
      0:'#ffffff', 50:'#f9fafb', 100:'#f3f4f6', 200:'#e5e7eb',
      300:'#d1d5db', 400:'#9ca3af', 500:'#6b7280', 600:'#4b5563',
      700:'#374151', 800:'#1f2937', 900:'#111827', 1000:'#030712',
    },
    brand: {
      50:'#eef2ff', 100:'#e0e7ff', 200:'#c7d2fe', 300:'#a5b4fc',
      400:'#818cf8', 500:'#6366f1', 600:'#4f46e5', 700:'#4338ca',
      800:'#3730a3', 900:'#312e81',
    },
    success: { 50:'#f0fdf4', 500:'#22c55e', 700:'#15803d' },
    warning: { 50:'#fffbeb', 500:'#f59e0b', 700:'#b45309' },
    error:   { 50:'#fef2f2', 500:'#ef4444', 700:'#b91c1c' },
  },

  semantic: {
    background: {
      base:'#ffffff', subtle:'#f9fafb', muted:'#f3f4f6',
      inverse:'#111827', elevated:'#ffffff',
    },
    surface: { 1:'#ffffff', 2:'#f9fafb', 3:'#f3f4f6' },
    text: {
      primary:'#111827', secondary:'#4b5563', muted:'#6b7280',
      disabled:'#9ca3af', inverse:'#ffffff', link:'#4f46e5',
    },
    border: { default:'#e5e7eb', subtle:'#f3f4f6', strong:'#d1d5db', focus:'#6366f1' },
    brand:  { primary:'#4f46e5', secondary:'#6366f1', accent:'#818cf8' },
    state: {
      success:{ bg:'#f0fdf4', text:'#15803d', border:'#bbf7d0' },
      warning:{ bg:'#fffbeb', text:'#b45309', border:'#fde68a' },
      error:  { bg:'#fef2f2', text:'#b91c1c', border:'#fecaca' },
      info:   { bg:'#eff6ff', text:'#1d4ed8', border:'#bfdbfe' },
    },
    interactive: {
      hover:'rgba(0,0,0,0.04)', active:'rgba(0,0,0,0.08)',
      focus:'rgba(99,102,241,0.35)', disabled:'rgba(0,0,0,0.04)',
    },
    overlay: { light:'rgba(255,255,255,0.6)', dark:'rgba(0,0,0,0.5)' },
  },
};

/* ─────────────────────────────────────────────────────────────
   PRESET 2 — Bold Dark
   High contrast, orange accent, editorial. Agency / studio.
   ───────────────────────────────────────────────────────────── */

export const boldDark = {
  name: 'Bold Dark',
  description: 'Dark, orange, dramatic type. Agency / portfolio / studio.',

  fontFamily: {
    sans: 'Inter, ui-sans-serif, system-ui, sans-serif',
    serif: 'ui-serif, Georgia, serif',
    mono: 'ui-monospace, monospace',
  },
  typeRatio: 1.333, // perfect fourth — bolder

  typeScale: {
    xs:'12px', sm:'14px', base:'16px', lg:'18px', xl:'21px',
    '2xl':'28px', '3xl':'37px', '4xl':'50px', '5xl':'66px', '6xl':'88px',
  },

  compositeType: {
    'heading-1': { size:'6xl',  weight:'black',     lineHeight:'tight',  tracking:'tighter' },
    'heading-2': { size:'5xl',  weight:'extrabold', lineHeight:'tight',  tracking:'tight'   },
    'heading-3': { size:'4xl',  weight:'bold',      lineHeight:'tight',  tracking:'tight'   },
    'heading-4': { size:'3xl',  weight:'bold',      lineHeight:'snug',   tracking:'normal'  },
    'heading-5': { size:'2xl',  weight:'semibold',  lineHeight:'snug',   tracking:'normal'  },
    'heading-6': { size:'xl',   weight:'semibold',  lineHeight:'normal', tracking:'normal'  },
    'body-lg':   { size:'lg',   weight:'regular',   lineHeight:'relaxed',tracking:'normal'  },
    'body':      { size:'base', weight:'regular',   lineHeight:'normal', tracking:'normal'  },
    'body-sm':   { size:'sm',   weight:'regular',   lineHeight:'normal', tracking:'normal'  },
    'caption':   { size:'xs',   weight:'medium',    lineHeight:'normal', tracking:'wide'    },
    'label':     { size:'sm',   weight:'semibold',  lineHeight:'normal', tracking:'normal'  },
    'code':      { size:'sm',   weight:'regular',   lineHeight:'normal', tracking:'normal'  },
    'quote':     { size:'2xl',  weight:'light',     lineHeight:'relaxed',tracking:'normal'  },
  },

  radius: {
    none:'0px', sm:'4px', md:'8px', lg:'16px', xl:'24px', '2xl':'32px', full:'9999px',
  },

  shadow: {
    none:'none',
    xs:  '0 1px 2px rgba(0,0,0,0.3)',
    sm:  '0 2px 4px rgba(0,0,0,0.35)',
    md:  '0 6px 12px rgba(0,0,0,0.4)',
    lg:  '0 16px 24px rgba(0,0,0,0.45)',
    xl:  '0 24px 40px rgba(0,0,0,0.5)',
    '2xl':'0 32px 64px rgba(0,0,0,0.6)',
    inner:'inset 0 2px 4px rgba(0,0,0,0.3)',
  },

  palette: {
    gray: {
      0:'#ffffff', 50:'#f8fafc', 100:'#f1f5f9', 200:'#e2e8f0',
      300:'#cbd5e1', 400:'#94a3b8', 500:'#64748b', 600:'#475569',
      700:'#334155', 800:'#1e293b', 900:'#0f172a', 1000:'#020617',
    },
    brand: {
      50:'#fff7ed', 100:'#ffedd5', 200:'#fed7aa', 300:'#fdba74',
      400:'#fb923c', 500:'#f97316', 600:'#ea580c', 700:'#c2410c',
      800:'#9a3412', 900:'#7c2d12',
    },
    success:{ 50:'#f0fdf4', 500:'#22c55e', 700:'#15803d' },
    warning:{ 50:'#fffbeb', 500:'#f59e0b', 700:'#b45309' },
    error:  { 50:'#fef2f2', 500:'#ef4444', 700:'#b91c1c' },
  },

  semantic: {
    background: {
      base:'#0f172a', subtle:'#1e293b', muted:'#334155',
      inverse:'#ffffff', elevated:'#1e293b',
    },
    surface: { 1:'#1e293b', 2:'#334155', 3:'#475569' },
    text: {
      primary:'#f8fafc', secondary:'#cbd5e1', muted:'#94a3b8',
      disabled:'#475569', inverse:'#0f172a', link:'#fb923c',
    },
    border: { default:'#334155', subtle:'#1e293b', strong:'#475569', focus:'#f97316' },
    brand:  { primary:'#f97316', secondary:'#fb923c', accent:'#fdba74' },
    state: {
      success:{ bg:'#052e16', text:'#86efac', border:'#166534' },
      warning:{ bg:'#451a03', text:'#fcd34d', border:'#92400e' },
      error:  { bg:'#450a0a', text:'#fca5a5', border:'#991b1b' },
      info:   { bg:'#082f49', text:'#7dd3fc', border:'#075985' },
    },
    interactive: {
      hover:'rgba(255,255,255,0.06)', active:'rgba(255,255,255,0.12)',
      focus:'rgba(249,115,22,0.45)', disabled:'rgba(255,255,255,0.04)',
    },
    overlay: { light:'rgba(255,255,255,0.1)', dark:'rgba(0,0,0,0.7)' },
  },
};

/* ─────────────────────────────────────────────────────────────
   PRESET 3 — Warm Serif
   Cream + brown, serif headings. Restaurant / boutique / blog.
   ───────────────────────────────────────────────────────────── */

export const warmSerif = {
  name: 'Warm Serif',
  description: 'Cream, brown, serif headings. Restaurant / boutique / editorial.',

  fontFamily: {
    sans:  'Inter, ui-sans-serif, system-ui, sans-serif',
    serif: 'Playfair Display, Georgia, "Times New Roman", serif',
    mono:  'ui-monospace, monospace',
  },
  typeRatio: 1.333, // perfect fourth — editorial

  typeScale: {
    xs:'12px', sm:'14px', base:'17px', lg:'19px', xl:'22px',
    '2xl':'29px', '3xl':'38px', '4xl':'51px', '5xl':'68px', '6xl':'90px',
  },

  compositeType: {
    'heading-1': { size:'6xl',  weight:'regular', lineHeight:'tight',  tracking:'tight'   },
    'heading-2': { size:'5xl',  weight:'regular', lineHeight:'tight',  tracking:'tight'   },
    'heading-3': { size:'4xl',  weight:'regular', lineHeight:'snug',   tracking:'normal'  },
    'heading-4': { size:'3xl',  weight:'medium',  lineHeight:'snug',   tracking:'normal'  },
    'heading-5': { size:'2xl',  weight:'medium',  lineHeight:'normal', tracking:'normal'  },
    'heading-6': { size:'xl',   weight:'medium',  lineHeight:'normal', tracking:'normal'  },
    'body-lg':   { size:'lg',   weight:'regular', lineHeight:'relaxed',tracking:'normal'  },
    'body':      { size:'base', weight:'regular', lineHeight:'relaxed',tracking:'normal'  },
    'body-sm':   { size:'sm',   weight:'regular', lineHeight:'normal', tracking:'normal'  },
    'caption':   { size:'xs',   weight:'regular', lineHeight:'normal', tracking:'wide'    },
    'label':     { size:'sm',   weight:'medium',  lineHeight:'normal', tracking:'wide'    },
    'code':      { size:'sm',   weight:'regular', lineHeight:'normal', tracking:'normal'  },
    'quote':     { size:'2xl',  weight:'regular', lineHeight:'relaxed',tracking:'normal'  },
  },

  radius: {
    none:'0px', sm:'2px', md:'4px', lg:'8px', xl:'12px', '2xl':'16px', full:'9999px',
  },

  shadow: {
    none:'none',
    xs:  '0 1px 2px rgba(59,36,22,0.06)',
    sm:  '0 2px 4px rgba(59,36,22,0.08)',
    md:  '0 4px 10px rgba(59,36,22,0.10)',
    lg:  '0 12px 20px rgba(59,36,22,0.12)',
    xl:  '0 20px 32px rgba(59,36,22,0.14)',
    '2xl':'0 28px 48px rgba(59,36,22,0.16)',
    inner:'inset 0 2px 4px rgba(59,36,22,0.06)',
  },

  palette: {
    gray: {
      0:'#ffffff', 50:'#fdfaf5', 100:'#f9f2e7', 200:'#efe2cc',
      300:'#e0cba8', 400:'#c9a97a', 500:'#a8855a', 600:'#846443',
      700:'#5e452d', 800:'#3b2416', 900:'#241509', 1000:'#140a03',
    },
    brand: {
      50:'#fdf6ec', 100:'#f9e9d2', 200:'#f0d0a3', 300:'#e3b073',
      400:'#d18e4c', 500:'#b45309', 600:'#9a4407', 700:'#7c3505',
      800:'#5e2804', 900:'#421c03',
    },
    success:{ 50:'#f0fdf4', 500:'#22c55e', 700:'#15803d' },
    warning:{ 50:'#fffbeb', 500:'#f59e0b', 700:'#b45309' },
    error:  { 50:'#fef2f2', 500:'#ef4444', 700:'#b91c1c' },
  },

  semantic: {
    background: {
      base:'#fdfaf5', subtle:'#f9f2e7', muted:'#efe2cc',
      inverse:'#3b2416', elevated:'#ffffff',
    },
    surface: { 1:'#ffffff', 2:'#fdfaf5', 3:'#f9f2e7' },
    text: {
      primary:'#3b2416', secondary:'#5e452d', muted:'#846443',
      disabled:'#c9a97a', inverse:'#fdfaf5', link:'#b45309',
    },
    border: { default:'#e7d3b3', subtle:'#f0e2c8', strong:'#d1b488', focus:'#b45309' },
    brand:  { primary:'#b45309', secondary:'#d18e4c', accent:'#e3b073' },
    state: {
      success:{ bg:'#f0fdf4', text:'#15803d', border:'#bbf7d0' },
      warning:{ bg:'#fffbeb', text:'#b45309', border:'#fde68a' },
      error:  { bg:'#fef2f2', text:'#b91c1c', border:'#fecaca' },
      info:   { bg:'#eff6ff', text:'#1d4ed8', border:'#bfdbfe' },
    },
    interactive: {
      hover:'rgba(59,36,22,0.04)', active:'rgba(59,36,22,0.08)',
      focus:'rgba(180,83,9,0.35)', disabled:'rgba(59,36,22,0.04)',
    },
    overlay: { light:'rgba(253,250,245,0.7)', dark:'rgba(59,36,22,0.6)' },
  },
};

/* ─────────────────────────────────────────────────────────────
   PRESET 4 — Clinic Trust
   Teal + white, calm, rounded. Healthcare / finance / legal.
   ───────────────────────────────────────────────────────────── */

export const clinicTrust = {
  name: 'Clinic Trust',
  description: 'Teal, calm, rounded, accessible. Healthcare / finance / legal.',

  fontFamily: {
    sans:  'Inter, ui-sans-serif, system-ui, sans-serif',
    serif: 'ui-serif, Georgia, serif',
    mono:  'ui-monospace, monospace',
  },
  typeRatio: 1.2, // minor third — compact, friendly

  typeScale: {
    xs:'12px', sm:'14px', base:'16px', lg:'18px', xl:'20px',
    '2xl':'24px', '3xl':'28px', '4xl':'34px', '5xl':'40px', '6xl':'48px',
  },

  compositeType: {
    'heading-1': { size:'5xl',  weight:'bold',     lineHeight:'snug',   tracking:'normal' },
    'heading-2': { size:'4xl',  weight:'bold',     lineHeight:'snug',   tracking:'normal' },
    'heading-3': { size:'3xl',  weight:'semibold', lineHeight:'snug',   tracking:'normal' },
    'heading-4': { size:'2xl',  weight:'semibold', lineHeight:'normal', tracking:'normal' },
    'heading-5': { size:'xl',   weight:'semibold', lineHeight:'normal', tracking:'normal' },
    'heading-6': { size:'lg',   weight:'semibold', lineHeight:'normal', tracking:'normal' },
    'body-lg':   { size:'lg',   weight:'regular',  lineHeight:'relaxed',tracking:'normal' },
    'body':      { size:'base', weight:'regular',  lineHeight:'relaxed',tracking:'normal' },
    'body-sm':   { size:'sm',   weight:'regular',  lineHeight:'normal', tracking:'normal' },
    'caption':   { size:'xs',   weight:'regular',  lineHeight:'normal', tracking:'normal' },
    'label':     { size:'sm',   weight:'medium',   lineHeight:'normal', tracking:'normal' },
    'code':      { size:'sm',   weight:'regular',  lineHeight:'normal', tracking:'normal' },
    'quote':     { size:'lg',   weight:'regular',  lineHeight:'relaxed',tracking:'normal' },
  },

  radius: {
    none:'0px', sm:'6px', md:'10px', lg:'14px', xl:'20px', '2xl':'28px', full:'9999px',
  },

  shadow: {
    none:'none',
    xs:  '0 1px 2px rgba(15,23,42,0.04)',
    sm:  '0 1px 3px rgba(15,23,42,0.06)',
    md:  '0 4px 8px rgba(15,23,42,0.06)',
    lg:  '0 10px 20px rgba(15,23,42,0.08)',
    xl:  '0 20px 32px rgba(15,23,42,0.10)',
    '2xl':'0 25px 50px rgba(15,23,42,0.12)',
    inner:'inset 0 2px 4px rgba(15,23,42,0.04)',
  },

  palette: {
    gray: {
      0:'#ffffff', 50:'#f8fafc', 100:'#f1f5f9', 200:'#e2e8f0',
      300:'#cbd5e1', 400:'#94a3b8', 500:'#64748b', 600:'#475569',
      700:'#334155', 800:'#1e293b', 900:'#0f172a', 1000:'#020617',
    },
    brand: {
      50:'#ecfeff', 100:'#cffafe', 200:'#a5f3fc', 300:'#67e8f9',
      400:'#22d3ee', 500:'#06b6d4', 600:'#0891b2', 700:'#0e7490',
      800:'#155e75', 900:'#164e63',
    },
    success:{ 50:'#f0fdf4', 500:'#22c55e', 700:'#15803d' },
    warning:{ 50:'#fffbeb', 500:'#f59e0b', 700:'#b45309' },
    error:  { 50:'#fef2f2', 500:'#ef4444', 700:'#b91c1c' },
  },

  semantic: {
    background: {
      base:'#ffffff', subtle:'#f8fafc', muted:'#f1f5f9',
      inverse:'#0f172a', elevated:'#ffffff',
    },
    surface: { 1:'#ffffff', 2:'#f8fafc', 3:'#f1f5f9' },
    text: {
      primary:'#0f172a', secondary:'#334155', muted:'#64748b',
      disabled:'#94a3b8', inverse:'#ffffff', link:'#0891b2',
    },
    border: { default:'#e2e8f0', subtle:'#f1f5f9', strong:'#cbd5e1', focus:'#06b6d4' },
    brand:  { primary:'#0891b2', secondary:'#06b6d4', accent:'#22d3ee' },
    state: {
      success:{ bg:'#f0fdf4', text:'#15803d', border:'#bbf7d0' },
      warning:{ bg:'#fffbeb', text:'#b45309', border:'#fde68a' },
      error:  { bg:'#fef2f2', text:'#b91c1c', border:'#fecaca' },
      info:   { bg:'#eff6ff', text:'#1d4ed8', border:'#bfdbfe' },
    },
    interactive: {
      hover:'rgba(15,23,42,0.04)', active:'rgba(15,23,42,0.08)',
      focus:'rgba(6,182,212,0.35)', disabled:'rgba(15,23,42,0.04)',
    },
    overlay: { light:'rgba(255,255,255,0.6)', dark:'rgba(15,23,42,0.5)' },
  },
};

/* ─────────────────────────────────────────────────────────────
   PRESET 5 — Playful Pop
   Violet + pink, big radius, bouncy. Consumer / kids / creator.
   ───────────────────────────────────────────────────────────── */

export const playfulPop = {
  name: 'Playful Pop',
  description: 'Violet + pink, big radius, energetic. Consumer / creator / kids.',

  fontFamily: {
    sans:  'Nunito, "Quicksand", ui-sans-serif, system-ui, sans-serif',
    serif: 'ui-serif, Georgia, serif',
    mono:  'ui-monospace, monospace',
  },
  typeRatio: 1.25,

  typeScale: {
    xs:'12px', sm:'14px', base:'16px', lg:'18px', xl:'21px',
    '2xl':'26px', '3xl':'33px', '4xl':'41px', '5xl':'52px', '6xl':'65px',
  },

  compositeType: {
    'heading-1': { size:'6xl',  weight:'extrabold', lineHeight:'tight',  tracking:'tight'   },
    'heading-2': { size:'5xl',  weight:'extrabold', lineHeight:'tight',  tracking:'tight'   },
    'heading-3': { size:'4xl',  weight:'bold',      lineHeight:'tight',  tracking:'tight'   },
    'heading-4': { size:'3xl',  weight:'bold',      lineHeight:'snug',   tracking:'normal'  },
    'heading-5': { size:'2xl',  weight:'bold',      lineHeight:'snug',   tracking:'normal'  },
    'heading-6': { size:'xl',   weight:'bold',      lineHeight:'normal', tracking:'normal'  },
    'body-lg':   { size:'lg',   weight:'regular',   lineHeight:'relaxed',tracking:'normal'  },
    'body':      { size:'base', weight:'regular',   lineHeight:'relaxed',tracking:'normal'  },
    'body-sm':   { size:'sm',   weight:'regular',   lineHeight:'normal', tracking:'normal'  },
    'caption':   { size:'xs',   weight:'semibold',  lineHeight:'normal', tracking:'wide'    },
    'label':     { size:'sm',   weight:'bold',      lineHeight:'normal', tracking:'normal'  },
    'code':      { size:'sm',   weight:'regular',   lineHeight:'normal', tracking:'normal'  },
    'quote':     { size:'xl',   weight:'semibold',  lineHeight:'relaxed',tracking:'normal'  },
  },

  radius: {
    none:'0px', sm:'8px', md:'14px', lg:'20px', xl:'28px', '2xl':'40px', full:'9999px',
  },

  shadow: {
    none:'none',
    xs:  '0 1px 2px rgba(76,29,149,0.08)',
    sm:  '0 2px 6px rgba(76,29,149,0.12)',
    md:  '0 6px 14px rgba(76,29,149,0.16)',
    lg:  '0 14px 24px rgba(76,29,149,0.20)',
    xl:  '0 24px 40px rgba(76,29,149,0.24)',
    '2xl':'0 32px 64px rgba(76,29,149,0.28)',
    inner:'inset 0 2px 4px rgba(76,29,149,0.1)',
  },

  palette: {
    gray: {
      0:'#ffffff', 50:'#faf5ff', 100:'#f3e8ff', 200:'#e9d5ff',
      300:'#d8b4fe', 400:'#c084fc', 500:'#a855f7', 600:'#9333ea',
      700:'#7e22ce', 800:'#6b21a8', 900:'#581c87', 1000:'#3b0764',
    },
    brand: {
      50:'#fdf4ff', 100:'#fae8ff', 200:'#f5d0fe', 300:'#f0abfc',
      400:'#e879f9', 500:'#d946ef', 600:'#c026d3', 700:'#a21caf',
      800:'#86198f', 900:'#701a75',
    },
    success:{ 50:'#f0fdf4', 500:'#22c55e', 700:'#15803d' },
    warning:{ 50:'#fffbeb', 500:'#f59e0b', 700:'#b45309' },
    error:  { 50:'#fef2f2', 500:'#ef4444', 700:'#b91c1c' },
  },

  semantic: {
    background: {
      base:'#ffffff', subtle:'#faf5ff', muted:'#f3e8ff',
      inverse:'#3b0764', elevated:'#ffffff',
    },
    surface: { 1:'#ffffff', 2:'#faf5ff', 3:'#f3e8ff' },
    text: {
      primary:'#3b0764', secondary:'#6b21a8', muted:'#9333ea',
      disabled:'#c084fc', inverse:'#faf5ff', link:'#c026d3',
    },
    border: { default:'#e9d5ff', subtle:'#f3e8ff', strong:'#d8b4fe', focus:'#d946ef' },
    brand:  { primary:'#c026d3', secondary:'#d946ef', accent:'#f0abfc' },
    state: {
      success:{ bg:'#f0fdf4', text:'#15803d', border:'#bbf7d0' },
      warning:{ bg:'#fffbeb', text:'#b45309', border:'#fde68a' },
      error:  { bg:'#fef2f2', text:'#b91c1c', border:'#fecaca' },
      info:   { bg:'#eff6ff', text:'#1d4ed8', border:'#bfdbfe' },
    },
    interactive: {
      hover:'rgba(59,7,100,0.05)', active:'rgba(59,7,100,0.10)',
      focus:'rgba(217,70,239,0.4)', disabled:'rgba(59,7,100,0.04)',
    },
    overlay: { light:'rgba(255,255,255,0.6)', dark:'rgba(59,7,100,0.6)' },
  },
};


/* ─────────────────────────────────────────────────────────────
   PRESET 6 — Editorial
   Monochrome, serif headlines, tight spacing. Magazine / publication.
   ───────────────────────────────────────────────────────────── */

export const editorial = {
  name: 'Editorial',
  description: 'Black, white, serif headlines, tight type. Magazine / publication / long-form.',

  fontFamily: {
    sans:  'Inter, ui-sans-serif, system-ui, sans-serif',
    serif: 'GT Sectra, "Playfair Display", Georgia, "Times New Roman", serif',
    mono:  'ui-monospace, monospace',
  },
  typeRatio: 1.333,

  typeScale: {
    xs:'12px', sm:'14px', base:'17px', lg:'19px', xl:'23px',
    '2xl':'30px', '3xl':'40px', '4xl':'53px', '5xl':'71px', '6xl':'94px',
  },

  compositeType: {
    'heading-1': { size:'6xl',  weight:'regular', lineHeight:'tight',  tracking:'tighter' },
    'heading-2': { size:'5xl',  weight:'regular', lineHeight:'tight',  tracking:'tighter' },
    'heading-3': { size:'4xl',  weight:'regular', lineHeight:'snug',   tracking:'tight'   },
    'heading-4': { size:'3xl',  weight:'regular', lineHeight:'snug',   tracking:'tight'   },
    'heading-5': { size:'2xl',  weight:'medium',  lineHeight:'normal', tracking:'normal'  },
    'heading-6': { size:'xl',   weight:'medium',  lineHeight:'normal', tracking:'normal'  },
    'body-lg':   { size:'lg',   weight:'regular', lineHeight:'relaxed',tracking:'normal'  },
    'body':      { size:'base', weight:'regular', lineHeight:'relaxed',tracking:'normal'  },
    'body-sm':   { size:'sm',   weight:'regular', lineHeight:'normal', tracking:'normal'  },
    'caption':   { size:'xs',   weight:'medium',  lineHeight:'normal', tracking:'widest'  },
    'label':     { size:'sm',   weight:'medium',  lineHeight:'normal', tracking:'wide'    },
    'code':      { size:'sm',   weight:'regular', lineHeight:'normal', tracking:'normal'  },
    'quote':     { size:'2xl',  weight:'regular', lineHeight:'relaxed',tracking:'normal'  },
  },

  radius: {
    none:'0px', sm:'0px', md:'2px', lg:'4px', xl:'6px', '2xl':'8px', full:'9999px',
  },

  shadow: {
    none:'none',
    xs:  '0 1px 2px rgba(0,0,0,0.04)',
    sm:  '0 1px 3px rgba(0,0,0,0.06)',
    md:  '0 4px 8px rgba(0,0,0,0.06)',
    lg:  '0 8px 16px rgba(0,0,0,0.08)',
    xl:  '0 16px 28px rgba(0,0,0,0.10)',
    '2xl':'0 24px 48px rgba(0,0,0,0.12)',
    inner:'inset 0 1px 2px rgba(0,0,0,0.04)',
  },

  palette: {
    gray: {
      0:'#ffffff', 50:'#fafafa', 100:'#f4f4f5', 200:'#e4e4e7',
      300:'#d4d4d8', 400:'#a1a1aa', 500:'#71717a', 600:'#52525b',
      700:'#3f3f46', 800:'#27272a', 900:'#18181b', 1000:'#09090b',
    },
    brand: {
      50:'#f4f4f5', 100:'#e4e4e7', 200:'#d4d4d8', 300:'#a1a1aa',
      400:'#71717a', 500:'#3f3f46', 600:'#27272a', 700:'#18181b',
      800:'#0f0f10', 900:'#09090b',
    },
    success:{ 50:'#f0fdf4', 500:'#22c55e', 700:'#15803d' },
    warning:{ 50:'#fffbeb', 500:'#f59e0b', 700:'#b45309' },
    error:  { 50:'#fef2f2', 500:'#ef4444', 700:'#b91c1c' },
  },

  semantic: {
    background: {
      base:'#ffffff', subtle:'#fafafa', muted:'#f4f4f5',
      inverse:'#18181b', elevated:'#ffffff',
    },
    surface: { 1:'#ffffff', 2:'#fafafa', 3:'#f4f4f5' },
    text: {
      primary:'#09090b', secondary:'#3f3f46', muted:'#71717a',
      disabled:'#a1a1aa', inverse:'#fafafa', link:'#18181b',
    },
    border: { default:'#e4e4e7', subtle:'#f4f4f5', strong:'#d4d4d8', focus:'#18181b' },
    brand:  { primary:'#18181b', secondary:'#3f3f46', accent:'#71717a' },
    state: {
      success:{ bg:'#f0fdf4', text:'#15803d', border:'#bbf7d0' },
      warning:{ bg:'#fffbeb', text:'#b45309', border:'#fde68a' },
      error:  { bg:'#fef2f2', text:'#b91c1c', border:'#fecaca' },
      info:   { bg:'#eff6ff', text:'#1d4ed8', border:'#bfdbfe' },
    },
    interactive: {
      hover:'rgba(0,0,0,0.04)', active:'rgba(0,0,0,0.08)',
      focus:'rgba(24,24,27,0.35)', disabled:'rgba(0,0,0,0.04)',
    },
    overlay: { light:'rgba(255,255,255,0.7)', dark:'rgba(0,0,0,0.6)' },
  },
};

/* ─────────────────────────────────────────────────────────────
   PRESET 7 — Luxe
   Deep navy + gold. Uppercase labels. Premium services.
   ───────────────────────────────────────────────────────────── */

export const luxe = {
  name: 'Luxe',
  description: 'Deep navy, gold accents, refined serif. Premium / luxury / high-end.',

  fontFamily: {
    sans:  'Inter, ui-sans-serif, system-ui, sans-serif',
    serif: 'Cormorant Garamond, "Playfair Display", Georgia, serif',
    mono:  'ui-monospace, monospace',
  },
  typeRatio: 1.333,

  typeScale: {
    xs:'12px', sm:'14px', base:'16px', lg:'18px', xl:'22px',
    '2xl':'29px', '3xl':'39px', '4xl':'52px', '5xl':'69px', '6xl':'92px',
  },

  compositeType: {
    'heading-1': { size:'6xl',  weight:'light',     lineHeight:'tight',  tracking:'wide'    },
    'heading-2': { size:'5xl',  weight:'light',     lineHeight:'tight',  tracking:'wide'    },
    'heading-3': { size:'4xl',  weight:'regular',   lineHeight:'snug',   tracking:'wide'    },
    'heading-4': { size:'3xl',  weight:'medium',    lineHeight:'snug',   tracking:'normal'  },
    'heading-5': { size:'2xl',  weight:'medium',    lineHeight:'normal', tracking:'normal'  },
    'heading-6': { size:'xl',   weight:'medium',    lineHeight:'normal', tracking:'normal'  },
    'body-lg':   { size:'lg',   weight:'regular',   lineHeight:'relaxed',tracking:'normal'  },
    'body':      { size:'base', weight:'regular',   lineHeight:'relaxed',tracking:'normal'  },
    'body-sm':   { size:'sm',   weight:'regular',   lineHeight:'normal', tracking:'normal'  },
    'caption':   { size:'xs',   weight:'medium',    lineHeight:'normal', tracking:'widest'  },
    'label':     { size:'sm',   weight:'medium',    lineHeight:'normal', tracking:'widest'  },
    'code':      { size:'sm',   weight:'regular',   lineHeight:'normal', tracking:'normal'  },
    'quote':     { size:'2xl',  weight:'light',     lineHeight:'relaxed',tracking:'normal'  },
  },

  radius: {
    none:'0px', sm:'0px', md:'0px', lg:'2px', xl:'4px', '2xl':'6px', full:'9999px',
  },

  shadow: {
    none:'none',
    xs:  '0 1px 2px rgba(10,15,26,0.15)',
    sm:  '0 2px 4px rgba(10,15,26,0.2)',
    md:  '0 6px 12px rgba(10,15,26,0.25)',
    lg:  '0 14px 24px rgba(10,15,26,0.3)',
    xl:  '0 24px 40px rgba(10,15,26,0.35)',
    '2xl':'0 32px 64px rgba(10,15,26,0.4)',
    inner:'inset 0 1px 2px rgba(10,15,26,0.2)',
  },

  palette: {
    gray: {
      0:'#ffffff', 50:'#f8f9fb', 100:'#eef1f5', 200:'#dde3ea',
      300:'#c1cad6', 400:'#98a4b5', 500:'#707e92', 600:'#525d70',
      700:'#3d4658', 800:'#2a3242', 900:'#1a202c', 1000:'#0a0f1a',
    },
    brand: {
      50:'#fbf7ee', 100:'#f5ecd3', 200:'#ecd7a1', 300:'#dfbd6b',
      400:'#cfa344', 500:'#b88a2c', 600:'#9a6f1f', 700:'#7a561b',
      800:'#5c421a', 900:'#3f2f16',
    },
    success:{ 50:'#f0fdf4', 500:'#22c55e', 700:'#15803d' },
    warning:{ 50:'#fffbeb', 500:'#f59e0b', 700:'#b45309' },
    error:  { 50:'#fef2f2', 500:'#ef4444', 700:'#b91c1c' },
  },

  semantic: {
    background: {
      base:'#0a0f1a', subtle:'#1a202c', muted:'#2a3242',
      inverse:'#f8f9fb', elevated:'#1a202c',
    },
    surface: { 1:'#1a202c', 2:'#2a3242', 3:'#3d4658' },
    text: {
      primary:'#f8f9fb', secondary:'#c1cad6', muted:'#98a4b5',
      disabled:'#525d70', inverse:'#0a0f1a', link:'#dfbd6b',
    },
    border: { default:'#2a3242', subtle:'#1a202c', strong:'#3d4658', focus:'#cfa344' },
    brand:  { primary:'#cfa344', secondary:'#dfbd6b', accent:'#ecd7a1' },
    state: {
      success:{ bg:'#052e16', text:'#86efac', border:'#166534' },
      warning:{ bg:'#451a03', text:'#fcd34d', border:'#92400e' },
      error:  { bg:'#450a0a', text:'#fca5a5', border:'#991b1b' },
      info:   { bg:'#082f49', text:'#7dd3fc', border:'#075985' },
    },
    interactive: {
      hover:'rgba(255,255,255,0.06)', active:'rgba(255,255,255,0.12)',
      focus:'rgba(207,163,68,0.45)', disabled:'rgba(255,255,255,0.04)',
    },
    overlay: { light:'rgba(255,255,255,0.1)', dark:'rgba(0,0,0,0.7)' },
  },
};

/* ─────────────────────────────────────────────────────────────
   PRESET 8 — Brutalist
   Pure black + yellow, monospace, zero radius. Portfolio / studio.
   ───────────────────────────────────────────────────────────── */

export const brutalist = {
  name: 'Brutalist',
  description: 'Black, white, yellow, mono, no radius. Studio / portfolio / creative.',

  fontFamily: {
    sans:  'Inter, ui-sans-serif, system-ui, sans-serif',
    serif: 'ui-serif, Georgia, serif',
    mono:  '"JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace',
  },
  typeRatio: 1.5,

  typeScale: {
    xs:'12px', sm:'14px', base:'16px', lg:'18px', xl:'21px',
    '2xl':'28px', '3xl':'42px', '4xl':'60px', '5xl':'84px', '6xl':'112px',
  },

  compositeType: {
    'heading-1': { size:'6xl',  weight:'black',    lineHeight:'none',  tracking:'tighter' },
    'heading-2': { size:'5xl',  weight:'black',    lineHeight:'tight', tracking:'tighter' },
    'heading-3': { size:'4xl',  weight:'extrabold',lineHeight:'tight', tracking:'tighter' },
    'heading-4': { size:'3xl',  weight:'bold',     lineHeight:'tight', tracking:'tight'   },
    'heading-5': { size:'2xl',  weight:'bold',     lineHeight:'snug',  tracking:'normal'  },
    'heading-6': { size:'xl',   weight:'bold',     lineHeight:'snug',  tracking:'normal'  },
    'body-lg':   { size:'lg',   weight:'regular',  lineHeight:'normal',tracking:'normal'  },
    'body':      { size:'base', weight:'regular',  lineHeight:'normal',tracking:'normal'  },
    'body-sm':   { size:'sm',   weight:'regular',  lineHeight:'normal',tracking:'normal'  },
    'caption':   { size:'xs',   weight:'bold',     lineHeight:'normal',tracking:'widest'  },
    'label':     { size:'sm',   weight:'bold',     lineHeight:'normal',tracking:'wide'    },
    'code':      { size:'sm',   weight:'regular',  lineHeight:'normal',tracking:'normal'  },
    'quote':     { size:'2xl',  weight:'bold',     lineHeight:'tight', tracking:'tight'   },
  },

  radius: {
    none:'0px', sm:'0px', md:'0px', lg:'0px', xl:'0px', '2xl':'0px', full:'0px',
  },

  shadow: {
    none:'none',
    xs:  '2px 2px 0 rgba(0,0,0,1)',
    sm:  '3px 3px 0 rgba(0,0,0,1)',
    md:  '4px 4px 0 rgba(0,0,0,1)',
    lg:  '6px 6px 0 rgba(0,0,0,1)',
    xl:  '8px 8px 0 rgba(0,0,0,1)',
    '2xl':'12px 12px 0 rgba(0,0,0,1)',
    inner:'inset 2px 2px 0 rgba(0,0,0,1)',
  },

  palette: {
    gray: {
      0:'#ffffff', 50:'#fafafa', 100:'#f4f4f5', 200:'#e4e4e7',
      300:'#d4d4d8', 400:'#a1a1aa', 500:'#71717a', 600:'#52525b',
      700:'#3f3f46', 800:'#27272a', 900:'#18181b', 1000:'#000000',
    },
    brand: {
      50:'#fefce8', 100:'#fef9c3', 200:'#fef08a', 300:'#fde047',
      400:'#facc15', 500:'#eab308', 600:'#ca8a04', 700:'#a16207',
      800:'#854d0e', 900:'#713f12',
    },
    success:{ 50:'#f0fdf4', 500:'#22c55e', 700:'#15803d' },
    warning:{ 50:'#fffbeb', 500:'#f59e0b', 700:'#b45309' },
    error:  { 50:'#fef2f2', 500:'#ef4444', 700:'#b91c1c' },
  },

  semantic: {
    background: {
      base:'#ffffff', subtle:'#fafafa', muted:'#f4f4f5',
      inverse:'#000000', elevated:'#ffffff',
    },
    surface: { 1:'#ffffff', 2:'#f4f4f5', 3:'#e4e4e7' },
    text: {
      primary:'#000000', secondary:'#3f3f46', muted:'#71717a',
      disabled:'#a1a1aa', inverse:'#ffffff', link:'#000000',
    },
    border: { default:'#000000', subtle:'#e4e4e7', strong:'#000000', focus:'#eab308' },
    brand:  { primary:'#facc15', secondary:'#fde047', accent:'#fef08a' },
    state: {
      success:{ bg:'#f0fdf4', text:'#15803d', border:'#15803d' },
      warning:{ bg:'#fffbeb', text:'#b45309', border:'#b45309' },
      error:  { bg:'#fef2f2', text:'#b91c1c', border:'#b91c1c' },
      info:   { bg:'#eff6ff', text:'#1d4ed8', border:'#1d4ed8' },
    },
    interactive: {
      hover:'rgba(0,0,0,0.06)', active:'rgba(0,0,0,0.12)',
      focus:'rgba(234,179,8,0.5)', disabled:'rgba(0,0,0,0.04)',
    },
    overlay: { light:'rgba(255,255,255,0.7)', dark:'rgba(0,0,0,0.8)' },
  },
};

/* ─────────────────────────────────────────────────────────────
   PRESET 9 — Nature
   Deep green + cream, soft radius, warm. Wellness / sustainable.
   ───────────────────────────────────────────────────────────── */

export const nature = {
  name: 'Nature',
  description: 'Deep green, cream, soft warm. Wellness / sustainable / organic.',

  fontFamily: {
    sans:  'Inter, ui-sans-serif, system-ui, sans-serif',
    serif: 'Lora, Georgia, "Times New Roman", serif',
    mono:  'ui-monospace, monospace',
  },
  typeRatio: 1.25,

  typeScale: {
    xs:'12px', sm:'14px', base:'16px', lg:'18px', xl:'20px',
    '2xl':'25px', '3xl':'31px', '4xl':'39px', '5xl':'49px', '6xl':'61px',
  },

  compositeType: {
    'heading-1': { size:'5xl',  weight:'medium',   lineHeight:'tight',  tracking:'tight'   },
    'heading-2': { size:'4xl',  weight:'medium',   lineHeight:'tight',  tracking:'tight'   },
    'heading-3': { size:'3xl',  weight:'medium',   lineHeight:'snug',   tracking:'normal'  },
    'heading-4': { size:'2xl',  weight:'semibold', lineHeight:'snug',   tracking:'normal'  },
    'heading-5': { size:'xl',   weight:'semibold', lineHeight:'normal', tracking:'normal'  },
    'heading-6': { size:'lg',   weight:'semibold', lineHeight:'normal', tracking:'normal'  },
    'body-lg':   { size:'lg',   weight:'regular',  lineHeight:'relaxed',tracking:'normal'  },
    'body':      { size:'base', weight:'regular',  lineHeight:'relaxed',tracking:'normal'  },
    'body-sm':   { size:'sm',   weight:'regular',  lineHeight:'normal', tracking:'normal'  },
    'caption':   { size:'xs',   weight:'medium',   lineHeight:'normal', tracking:'wide'    },
    'label':     { size:'sm',   weight:'medium',   lineHeight:'normal', tracking:'normal'  },
    'code':      { size:'sm',   weight:'regular',  lineHeight:'normal', tracking:'normal'  },
    'quote':     { size:'xl',   weight:'regular',  lineHeight:'relaxed',tracking:'normal'  },
  },

  radius: {
    none:'0px', sm:'4px', md:'8px', lg:'14px', xl:'20px', '2xl':'28px', full:'9999px',
  },

  shadow: {
    none:'none',
    xs:  '0 1px 2px rgba(20,40,30,0.06)',
    sm:  '0 2px 4px rgba(20,40,30,0.08)',
    md:  '0 4px 10px rgba(20,40,30,0.10)',
    lg:  '0 12px 20px rgba(20,40,30,0.12)',
    xl:  '0 20px 32px rgba(20,40,30,0.14)',
    '2xl':'0 28px 48px rgba(20,40,30,0.16)',
    inner:'inset 0 2px 4px rgba(20,40,30,0.06)',
  },

  palette: {
    gray: {
      0:'#ffffff', 50:'#f7f8f5', 100:'#eef1ea', 200:'#dde3d4',
      300:'#c2cdb3', 400:'#9dac89', 500:'#788961', 600:'#5a6b48',
      700:'#425037', 800:'#2b3a25', 900:'#1a2416', 1000:'#0d130b',
    },
    brand: {
      50:'#f0f7f2', 100:'#dcebe0', 200:'#b9d7c1', 300:'#8dbc98',
      400:'#5f9e6f', 500:'#3d8251', 600:'#2b6b3d', 700:'#1f5230',
      800:'#164025', 900:'#0f2c1a',
    },
    success:{ 50:'#f0fdf4', 500:'#22c55e', 700:'#15803d' },
    warning:{ 50:'#fffbeb', 500:'#f59e0b', 700:'#b45309' },
    error:  { 50:'#fef2f2', 500:'#ef4444', 700:'#b91c1c' },
  },

  semantic: {
    background: {
      base:'#f7f8f5', subtle:'#eef1ea', muted:'#dde3d4',
      inverse:'#1a2416', elevated:'#ffffff',
    },
    surface: { 1:'#ffffff', 2:'#f7f8f5', 3:'#eef1ea' },
    text: {
      primary:'#1a2416', secondary:'#425037', muted:'#5a6b48',
      disabled:'#9dac89', inverse:'#f7f8f5', link:'#2b6b3d',
    },
    border: { default:'#dde3d4', subtle:'#eef1ea', strong:'#c2cdb3', focus:'#3d8251' },
    brand:  { primary:'#2b6b3d', secondary:'#3d8251', accent:'#5f9e6f' },
    state: {
      success:{ bg:'#f0fdf4', text:'#15803d', border:'#bbf7d0' },
      warning:{ bg:'#fffbeb', text:'#b45309', border:'#fde68a' },
      error:  { bg:'#fef2f2', text:'#b91c1c', border:'#fecaca' },
      info:   { bg:'#eff6ff', text:'#1d4ed8', border:'#bfdbfe' },
    },
    interactive: {
      hover:'rgba(26,36,22,0.04)', active:'rgba(26,36,22,0.08)',
      focus:'rgba(61,130,81,0.35)', disabled:'rgba(26,36,22,0.04)',
    },
    overlay: { light:'rgba(247,248,245,0.7)', dark:'rgba(26,36,22,0.6)' },
  },
};
/* ─────────────────────────────────────────────────────────────
   REGISTRY — import this
   ───────────────────────────────────────────────────────────── */

export const presets = {
  saasModern,
  boldDark,
  warmSerif,
  clinicTrust,
  playfulPop,
  editorial,
  luxe,
  brutalist,
  nature,
};

export default presets;
