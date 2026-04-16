# AIOVERSE Theme Files Index

This directory contains the official AIOVERSE brand theme configuration files for multiple platforms and languages.

## 📁 Files Overview

### Core Theme Files

| File | Format | Use Case |
|------|--------|----------|
| `colors.css` | CSS | Web projects, static sites, HTML |
| `theme.json` | JSON | Configuration files, design tools |
| `theme.js` | JavaScript | React, Vue, Angular, web apps |
| `theme.py` | Python | Python scripts, Django, Flask |
| `_variables.scss` | SCSS/SASS | Sass projects, preprocessed CSS |
| `tailwind.config.js` | JavaScript | Tailwind CSS projects |
| `mui-theme.js` | JavaScript | Material-UI/React projects |

### Templates & Documentation

| File | Format | Use Case |
|------|--------|----------|
| `README-template.md` | Markdown | README template for repositories |
| `USAGE.md` | Markdown | Complete usage documentation |

### Root Configuration

| File | Format | Use Case |
|------|--------|----------|
| `../aioverse-theme.yml` | YAML | Complete brand reference |
| `../.github/labels.yml` | YAML | GitHub issue labels |
| `../.github/workflows/aioverse-branded-ci.yml` | YAML | GitHub Actions workflow template |

## 🎨 Color Reference

```
Electric Aqua: #73effb  (Primary accent, CTAs, highlights)
Midnight Teal: #002428  (Dark backgrounds, primary color)
Soft White: #fafafa     (Text on dark, light backgrounds)
```

## 🚀 Quick Start

### Web/HTML Projects
```html
<link rel="stylesheet" href="theme/colors.css">
<div class="aio-theme-dark">
  <h1 class="aio-text-primary">AIOVERSE</h1>
</div>
```

### React Projects
```javascript
import { AIOVERSEColors, AIOVERSETheme } from './theme/theme.js';
```

### React + Material-UI
```javascript
import { ThemeProvider } from '@mui/material/styles';
import aioverseMuiTheme from './theme/mui-theme';

function App() {
  return (
    <ThemeProvider theme={aioverseMuiTheme}>
      {/* Your app */}
    </ThemeProvider>
  );
}
```

### Tailwind CSS Projects
```javascript
// tailwind.config.js
module.exports = require('./theme/tailwind.config.js');
```

### SCSS/SASS Projects
```scss
@import 'theme/variables';

.my-component {
  @include aio-dark-theme;
  color: $aio-electric-aqua;
}
```

### Python Projects
```python
from theme.theme import AIOVERSEColors, AIOVERSETheme
AIOVERSEColors.print_branded("Success!", "electric_aqua")
```

### GitHub Actions
```yaml
# Use the workflow template
# See: .github/workflows/aioverse-branded-ci.yml
env:
  AIO_ELECTRIC_AQUA: '#73effb'
```

## 📚 Documentation

See [USAGE.md](USAGE.md) for comprehensive usage examples and best practices.

## 🔗 Resources

- [AIOVERSE Branding Repository](https://github.com/Aioverse-DEV/Aioverse-Branding)
- [Complete Theme Reference](../aioverse-theme.yml)
- [Brand System Documentation](https://github.com/Aioverse-DEV/Aioverse-Branding/blob/main/AIOVERSE%20%E2%80%94%20Brand%20System%20Documentation)

## 💡 Tips

1. **Always use the official colors** - Don't modify or create variants
2. **Follow design principles** - Dark-field first, signal over noise
3. **Use provided templates** - For consistent branding across repos
4. **Add AIOVERSE badges** - To all README files
5. **Apply branded labels** - To GitHub issues and PRs

---

**AIOVERSE** - *AI-Powered Drone & UAV Systems*

© 2026 Aiotize Inc.
