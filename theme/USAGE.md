# AIOVERSE Theme Usage Guide

This repository contains the official **AIOVERSE brand theme** configuration files for use across all Aioverse-DEV repositories, tasks, and jobs.

## 🎨 Brand Colors

The AIOVERSE brand uses three primary colors:

| Color Name | Hex | RGB | Usage |
|------------|-----|-----|-------|
| **Electric Aqua** | `#73effb` | `115, 239, 251` | Primary accent, CTAs, highlights, interactive elements |
| **Midnight Teal** | `#002428` | `0, 36, 40` | Primary backgrounds, dark mode, hero sections |
| **Soft White** | `#fafafa` | `250, 250, 250` | Text on dark, UI containers, light backgrounds |

## 📁 Theme Files

### CSS (`theme/colors.css`)
Ready-to-use CSS variables and utility classes:

```html
<link rel="stylesheet" href="theme/colors.css">

<!-- Use CSS variables -->
<div style="background-color: var(--aio-midnight-teal); color: var(--aio-soft-white);">
  <h1 style="color: var(--aio-electric-aqua);">AIOVERSE</h1>
</div>

<!-- Use utility classes -->
<div class="aio-bg-dark aio-text-light">
  <button class="aio-btn-primary">Get Started</button>
</div>
```

### JSON (`theme/theme.json`)
For configuration files and design tools:

```json
{
  "colors": {
    "electricAqua": {
      "hex": "#73effb",
      "rgb": [115, 239, 251]
    }
  }
}
```

### JavaScript/TypeScript (`theme/theme.js`)
For web applications:

```javascript
import { AIOVERSEColors, AIOVERSETheme } from './theme/theme.js';

// Use in React/Vue/etc.
const Button = styled.button`
  background-color: ${AIOVERSEColors.ELECTRIC_AQUA};
  color: ${AIOVERSEColors.MIDNIGHT_TEAL};
`;
```

### Python (`theme/theme.py`)
For Python applications and scripts:

```python
from theme import AIOVERSEColors, AIOVERSETheme

# Print with brand colors in terminal
AIOVERSEColors.print_branded("Success!", "electric_aqua")

# Use in applications
bg_color = AIOVERSETheme.COLORS["background_dark"]
```

### YAML (`aioverse-theme.yml`)
Complete brand configuration reference with all details.

## 🔧 Integration Examples

### GitHub Actions Workflows

Use AIOVERSE colors in your CI/CD workflows:

```yaml
name: AIOVERSE Branded Build

env:
  AIO_ELECTRIC_AQUA: '#73effb'
  AIO_MIDNIGHT_TEAL: '#002428'
  AIO_SOFT_WHITE: '#fafafa'

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: 🎨 AIOVERSE Branding
        run: |
          echo "![AIOVERSE](https://img.shields.io/badge/AIOVERSE-Brand-73effb?style=for-the-badge)" >> $GITHUB_STEP_SUMMARY
```

### README Badges

Add AIOVERSE-branded badges to your README:

```markdown
[![AIOVERSE](https://img.shields.io/badge/AIOVERSE-Brand-73effb?style=for-the-badge)](https://github.com/Aioverse-DEV/Aioverse-Branding)
[![Status](https://img.shields.io/badge/Status-Active-73effb?style=for-the-badge)]()
[![License](https://img.shields.io/badge/License-MIT-73effb?style=for-the-badge)](LICENSE)
```

Result:
[![AIOVERSE](https://img.shields.io/badge/AIOVERSE-Brand-73effb?style=for-the-badge)](https://github.com/Aioverse-DEV/Aioverse-Branding)
[![Status](https://img.shields.io/badge/Status-Active-73effb?style=for-the-badge)]()
[![License](https://img.shields.io/badge/License-MIT-73effb?style=for-the-badge)](LICENSE)

### Issue Labels

Apply AIOVERSE colors to GitHub issue labels using `.github/labels.yml`:

```yaml
labels:
  - name: "priority: high"
    color: "73effb"  # Electric Aqua
  - name: "type: documentation"
    color: "002428"  # Midnight Teal
```

### HTML/Web Pages

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="theme/colors.css">
</head>
<body class="aio-theme-dark">
  <header class="aio-bg-dark">
    <h1 class="aio-text-primary">AIOVERSE</h1>
  </header>
  <main class="aio-card">
    <h2 class="aio-card-header">Welcome</h2>
    <p class="aio-card-body">Content goes here</p>
    <button class="aio-btn-primary">Get Started</button>
  </main>
</body>
</html>
```

### Markdown Documentation

Use the provided template at `theme/README-template.md` for consistent documentation across all repositories.

### Terminal Output

```bash
# Bash script with AIOVERSE colors
ELECTRIC_AQUA="\033[38;2;115;239;251m"
RESET="\033[0m"

echo -e "${ELECTRIC_AQUA}AIOVERSE${RESET} - AI-Powered Drone Systems"
```

```python
# Python script
from theme.theme import AIOVERSEColors

AIOVERSEColors.print_branded("Build successful!", "electric_aqua")
```

## 🎯 Design Principles

When using the AIOVERSE theme, follow these principles:

1. **Dark-Field First** - Lead with Midnight Teal as the dominant base
2. **Signal Over Noise** - Every design element serves communication
3. **Geometric Tension** - Use diagonal lines, angular crops, and structural grid systems
4. **Monochromatic Depth** - Build depth within the brand palette
5. **Type as Architecture** - Typography is structural
6. **Whitespace as Intention** - Negative space communicates clarity

## 📚 Typography

### Font Stack

- **Primary Display**: NEBULA 2 (Headlines, Logomark)
- **Secondary Display**: Nohemi (Sub-headings, UI headers)
- **Body**: Helvetica Neue (Body copy, tables)
- **Monospace**: Tokyo Trail Mono (Code, technical specs)

### Hierarchy

```css
h1 { font: NEBULA 2 ExtraBold 48-72pt; color: var(--aio-electric-aqua); }
h2 { font: NEBULA 2 Bold 32-48pt; color: var(--aio-soft-white); }
h3 { font: Nohemi Medium 24-32pt; color: var(--aio-electric-aqua); }
body { font: Helvetica Neue Regular 14-16pt; color: var(--aio-soft-white); }
code { font: Tokyo Trail Mono 13pt; color: var(--aio-electric-aqua); }
```

## 🔗 Resources

- **Full Brand Guidelines**: [Aioverse-Branding Repository](https://github.com/Aioverse-DEV/Aioverse-Branding)
- **Logo Assets**: Available in the branding repository
- **Font Files**: See `AIOVERSE-BRAND ASSETS-REPO / All-Fonts /`

## 📋 Quick Reference

```yaml
# AIOVERSE Color Palette
Electric Aqua: "#73effb"  # Primary accent
Midnight Teal: "#002428"  # Dark background
Soft White: "#fafafa"     # Light text/background

# Common Use Cases
- Buttons/CTAs: Electric Aqua background
- Page background: Midnight Teal
- Text on dark: Soft White
- Highlights: Electric Aqua
- Code blocks: Electric Aqua text on Midnight Teal background
```

## 🤝 Contributing

When contributing to any Aioverse-DEV repository:

1. Use the AIOVERSE theme colors for all UI elements
2. Follow the design principles outlined above
3. Use the provided templates for documentation
4. Add AIOVERSE badges to your README files
5. Apply branded labels to issues and PRs

## 📝 License

This theme configuration is part of the AIOVERSE brand identity by Aiotize Inc.

---

<div align="center">

**AIOVERSE** - *AI-Powered Drone & UAV Systems*

© 2026 Aiotize Inc. All rights reserved.

</div>
