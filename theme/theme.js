// AIOVERSE Brand Theme - JavaScript/TypeScript Configuration
// Official color palette and theming for web projects
// Version 1.0 - March 2026

/**
 * AIOVERSE official brand color palette
 */
export const AIOVERSEColors = {
  // Primary Brand Colors (HEX)
  ELECTRIC_AQUA: '#73effb',
  MIDNIGHT_TEAL: '#002428',
  SOFT_WHITE: '#fafafa',
  
  // RGB Values
  ELECTRIC_AQUA_RGB: { r: 115, g: 239, b: 251 },
  MIDNIGHT_TEAL_RGB: { r: 0, g: 36, b: 40 },
  SOFT_WHITE_RGB: { r: 250, g: 250, b: 250 },
  
  // Opacity Variants
  electricAquaWithAlpha: (alpha) => `rgba(115, 239, 251, ${alpha})`,
  midnightTealWithAlpha: (alpha) => `rgba(0, 36, 40, ${alpha})`,
  softWhiteWithAlpha: (alpha) => `rgba(250, 250, 250, ${alpha})`,
};

/**
 * AIOVERSE brand theme configuration
 */
export const AIOVERSETheme = {
  brand: {
    name: 'AIOVERSE',
    company: 'Aiotize Inc.',
    tagline: 'AI-Powered Drone & UAV Systems',
  },
  
  colors: {
    primary: AIOVERSEColors.ELECTRIC_AQUA,
    backgroundDark: AIOVERSEColors.MIDNIGHT_TEAL,
    backgroundLight: AIOVERSEColors.SOFT_WHITE,
    textOnDark: AIOVERSEColors.SOFT_WHITE,
    textOnLight: AIOVERSEColors.MIDNIGHT_TEAL,
    accent: AIOVERSEColors.ELECTRIC_AQUA,
  },
  
  typography: {
    primaryDisplay: {
      family: 'NEBULA 2',
      style: 'Futuristic Sans',
      usage: 'Headlines, Logomark, Key messaging',
    },
    secondaryDisplay: {
      family: 'Nohemi',
      style: 'Geometric Sans',
      usage: 'Sub-headings, Section labels, UI headers',
    },
    body: {
      family: 'Helvetica Neue',
      style: 'Neutral Sans',
      usage: 'Body copy, Paragraph text, Data tables',
    },
    monospace: {
      family: 'Tokyo Trail Mono',
      style: 'Monospace',
      usage: 'Code blocks, Technical specs, Terminals',
    },
  },
  
  gradients: {
    primary: `linear-gradient(135deg, ${AIOVERSEColors.MIDNIGHT_TEAL} 0%, ${AIOVERSEColors.electricAquaWithAlpha(0.3)} 100%)`,
    accent: `linear-gradient(90deg, ${AIOVERSEColors.ELECTRIC_AQUA} 0%, ${AIOVERSEColors.SOFT_WHITE} 100%)`,
    dark: `linear-gradient(180deg, ${AIOVERSEColors.MIDNIGHT_TEAL} 0%, ${AIOVERSEColors.midnightTealWithAlpha(0.95)} 100%)`,
  },
  
  designPrinciples: [
    'Dark-Field First: Lead with Midnight Teal as the dominant base',
    'Signal Over Noise: Every design element serves communication',
    'Geometric Tension: Use diagonal lines, angular crops',
    'Monochromatic Depth: Build depth within the brand palette',
    'Type as Architecture: Typography is structural',
    'Whitespace as Intention: Negative space communicates clarity',
  ],
};

/**
 * CSS-in-JS styled components theme object
 */
export const styledComponentsTheme = {
  colors: {
    electricAqua: AIOVERSEColors.ELECTRIC_AQUA,
    midnightTeal: AIOVERSEColors.MIDNIGHT_TEAL,
    softWhite: AIOVERSEColors.SOFT_WHITE,
    primary: AIOVERSEColors.ELECTRIC_AQUA,
    background: AIOVERSEColors.MIDNIGHT_TEAL,
    text: AIOVERSEColors.SOFT_WHITE,
  },
  fonts: {
    display: 'NEBULA 2, sans-serif',
    heading: 'Nohemi, sans-serif',
    body: 'Helvetica Neue, Arial, sans-serif',
    mono: 'Tokyo Trail Mono, Courier New, monospace',
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    xxl: '3rem',
  },
};

// CommonJS export for compatibility
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { AIOVERSEColors, AIOVERSETheme, styledComponentsTheme };
}
