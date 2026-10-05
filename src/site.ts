import { FEATURE_BLOG, FEATURE_SERVICES } from 'astro:env/server';

export const SITE = {
  name: 'Octavio Garbarino',
  title: 'Octavio Garbarino, Engineering Manager',
  description:
    'Engineering Manager and Tech Lead from Uruguay with 12+ years building web products, leading teams and speaking at meetups and conferences.',
  url: 'https://oti.noroof.dev',
  email: 'octavio.garbarino@noroof.dev',
  // Set to a Formspree form id (e.g. "xyzabcd") to enable the contact form on /services.
  // While empty, the page falls back to an email link.
  formspreeId: '',
  // Optional booking link (e.g. a Cal.com event). Hidden while empty.
  bookingUrl: '',
};

export const NAV = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/resume', label: 'Resume' },
  { href: '/case-studies', label: 'Case studies' },
  ...(FEATURE_BLOG ? [{ href: '/blog', label: 'Blog' }] : []),
  ...(FEATURE_SERVICES ? [{ href: '/services', label: 'Services' }] : []),
];

export const SOCIAL = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/octavio-garbarino-betervide' },
  { label: 'GitHub', href: 'https://github.com/octaviogarbet' },
  { label: 'X / Twitter', href: 'https://twitter.com/octaviogarbet' },
];
