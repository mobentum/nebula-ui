import { configureAxe } from 'jest-axe';

export const axe = configureAxe({
  rules: {
    // Real colors aren't computed in jsdom.
    'color-contrast': { enabled: false },
    // Content rendered in unit tests intentionally sits outside landmarks.
    region: { enabled: false },
  },
});
