// src/frames/index.js
import Navbar          from './Navbar';
import AnnouncementBar from './AnnouncementBar';
import Footer          from './Footer';

import { meta as navbarMeta }       from './Navbar';
import { meta as announcementMeta } from './AnnouncementBar';
import { meta as footerMeta }       from './Footer';

export { Navbar, AnnouncementBar, Footer };

export const frameRegistry = {
  navbar:             { component: Navbar,          meta: navbarMeta },
  'announcement-bar': { component: AnnouncementBar, meta: announcementMeta },
  footer:             { component: Footer,          meta: footerMeta },
};