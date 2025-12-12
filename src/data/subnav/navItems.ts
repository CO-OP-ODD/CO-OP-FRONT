export const NavItem = {
  ABOUT: 'About Us',
  HISTORY: 'Our History',
  NEWSROOM: 'News Room'
} as const;

// 타입 유추
export type NavItem = typeof NavItem[keyof typeof NavItem];