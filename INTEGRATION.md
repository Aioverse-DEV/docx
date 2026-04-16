# AIOVERSE Theme Integration Guide

Complete guide for integrating AIOVERSE brand colors and themes across different project types, CI/CD pipelines, and platforms.

## 📋 Table of Contents

- [GitHub Integration](#github-integration)
- [Web Projects](#web-projects)
- [Documentation Sites](#documentation-sites)
- [CI/CD Pipelines](#cicd-pipelines)
- [Monitoring & Dashboards](#monitoring--dashboards)
- [Terminal & CLI Tools](#terminal--cli-tools)
- [Cross-Repository Standards](#cross-repository-standards)

---

## 🐙 GitHub Integration

### Repository Settings

#### 1. Apply GitHub Labels

Copy `.github/labels.yml` to all repositories and apply:

```bash
# Install the GitHub Label Sync tool
npm install -g github-label-sync

# Sync labels to a repository
github-label-sync --access-token $GITHUB_TOKEN Aioverse-DEV/repo-name .github/labels.yml
```

Or manually via GitHub Settings → Issues → Labels.

#### 2. Update README Files

Use the template in `theme/README-template.md` for consistent branding:

```markdown
[![AIOVERSE](https://img.shields.io/badge/AIOVERSE-Brand-73effb?style=for-the-badge)](https://github.com/Aioverse-DEV/Aioverse-Branding)
[![Status](https://img.shields.io/badge/Status-Active-73effb?style=for-the-badge)]()
```

#### 3. Repository Metadata

Update repository description to include AIOVERSE context:
```
"Part of the AIOVERSE ecosystem - AI-Powered Drone & UAV Systems"
```

---

## 🌐 Web Projects

### Static HTML Sites

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="theme-color" content="#002428">
  <link rel="stylesheet" href="path/to/theme/colors.css">
  <title>AIOVERSE Project</title>
</head>
<body class="aio-theme-dark">
  <header class="aio-bg-dark">
    <h1 class="aio-text-primary">AIOVERSE</h1>
  </header>
  <main>
    <button class="aio-btn-primary">Get Started</button>
  </main>
</body>
</html>
```

### React Projects

**1. Install theme as a dependency:**

```bash
# Copy theme files to your project
cp -r path/to/docx/theme src/theme
```

**2. Import and use:**

```jsx
import { AIOVERSEColors, AIOVERSETheme } from './theme/theme';
import './theme/colors.css';

function App() {
  return (
    <div className="aio-theme-dark">
      <h1 style={{ color: AIOVERSEColors.ELECTRIC_AQUA }}>
        AIOVERSE
      </h1>
    </div>
  );
}
```

**3. With Material-UI:**

```jsx
import { ThemeProvider } from '@mui/material/styles';
import aioverseMuiTheme from './theme/mui-theme';

function App() {
  return (
    <ThemeProvider theme={aioverseMuiTheme}>
      <YourApp />
    </ThemeProvider>
  );
}
```

### Vue.js Projects

```vue
<template>
  <div class="aio-theme-dark">
    <h1 class="aio-text-primary">AIOVERSE</h1>
  </div>
</template>

<script>
import { AIOVERSEColors } from '@/theme/theme.js';

export default {
  name: 'App',
  data() {
    return {
      colors: AIOVERSEColors
    };
  }
};
</script>

<style>
@import '@/theme/colors.css';
</style>
```

### Tailwind CSS Projects

```javascript
// tailwind.config.js
module.exports = {
  ...require('./theme/tailwind.config.js'),
  // Your additional config
}
```

```html
<div class="bg-aioverse-midnight-teal text-aioverse-soft-white">
  <h1 class="text-aioverse-electric-aqua font-nebula">AIOVERSE</h1>
</div>
```

---

## 📚 Documentation Sites

### MkDocs

**mkdocs.yml:**

```yaml
theme:
  name: material
  palette:
    - scheme: slate
      primary: custom
      accent: custom
  custom_dir: overrides

extra_css:
  - theme/colors.css
  - custom.css
```

**custom.css:**

```css
@import url('theme/colors.css');

:root {
  --md-primary-fg-color: var(--aio-electric-aqua);
  --md-primary-bg-color: var(--aio-midnight-teal);
  --md-accent-fg-color: var(--aio-electric-aqua);
}
```

### Jekyll

**_config.yml:**

```yaml
# Site settings
title: AIOVERSE Documentation
description: AI-Powered Drone & UAV Systems
baseurl: ""

# Theme colors
colors:
  primary: "#73effb"
  background: "#002428"
  text: "#fafafa"
```

**assets/css/style.scss:**

```scss
---
---

@import "variables";
@import "theme/variables";

body {
  @include aio-dark-theme;
}
```

### Docusaurus

**docusaurus.config.js:**

```javascript
module.exports = {
  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
    },
    navbar: {
      style: 'dark',
    },
  },
  stylesheets: [
    '/theme/colors.css',
  ],
};
```

**src/css/custom.css:**

```css
@import url('/theme/colors.css');

:root {
  --ifm-color-primary: var(--aio-electric-aqua);
  --ifm-background-color: var(--aio-midnight-teal);
  --ifm-font-color-base: var(--aio-soft-white);
}
```

### VitePress

**docs/.vitepress/theme/index.js:**

```javascript
import DefaultTheme from 'vitepress/theme';
import '../../../theme/colors.css';

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    // Custom enhancements
  }
};
```

---

## 🔄 CI/CD Pipelines

### GitHub Actions

**Use the branded workflow template:**

```yaml
name: AIOVERSE Build

on: [push, pull_request]

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
          echo "::notice::Building with AIOVERSE brand theme"
          echo "![AIOVERSE](https://img.shields.io/badge/AIOVERSE-Brand-73effb?style=for-the-badge)" >> $GITHUB_STEP_SUMMARY
      
      - uses: actions/checkout@v4
      - name: Build
        run: npm run build
```

### GitLab CI

**.gitlab-ci.yml:**

```yaml
variables:
  AIO_ELECTRIC_AQUA: "#73effb"
  AIO_MIDNIGHT_TEAL: "#002428"
  AIO_SOFT_WHITE: "#fafafa"

build:
  stage: build
  script:
    - echo "Building with AIOVERSE theme"
    - npm run build
  artifacts:
    reports:
      dotenv: build.env
```

### Jenkins

**Jenkinsfile:**

```groovy
pipeline {
    environment {
        AIO_ELECTRIC_AQUA = '#73effb'
        AIO_MIDNIGHT_TEAL = '#002428'
        AIO_SOFT_WHITE = '#fafafa'
    }
    stages {
        stage('Build') {
            steps {
                echo "Building with AIOVERSE brand theme"
                sh 'npm run build'
            }
        }
    }
}
```

---

## 📊 Monitoring & Dashboards

### Grafana

**Custom theme JSON:**

```json
{
  "theme": {
    "colors": {
      "primary": "#73effb",
      "secondary": "#002428",
      "background": "#002428",
      "text": "#fafafa",
      "success": "#73effb",
      "warning": "#ffd700",
      "error": "#ff6b6b"
    }
  }
}
```

### Prometheus Alert Manager

**alertmanager.yml:**

```yaml
templates:
  - 'templates/*.tmpl'

route:
  group_by: ['alertname']
  
receivers:
  - name: 'aioverse-alerts'
    webhook_configs:
      - url: 'http://alertmanager.aioverse.local/webhook'
        send_resolved: true
```

---

## 💻 Terminal & CLI Tools

### Bash Scripts

```bash
#!/bin/bash

# AIOVERSE Colors
ELECTRIC_AQUA="\033[38;2;115;239;251m"
MIDNIGHT_TEAL="\033[38;2;0;36;40m"
SOFT_WHITE="\033[38;2;250;250;250m"
RESET="\033[0m"

echo -e "${ELECTRIC_AQUA}╔═══════════════════════════════╗${RESET}"
echo -e "${ELECTRIC_AQUA}║${SOFT_WHITE}     AIOVERSE Build Tool     ${ELECTRIC_AQUA}║${RESET}"
echo -e "${ELECTRIC_AQUA}╚═══════════════════════════════╝${RESET}"
echo ""
echo -e "${SOFT_WHITE}Building project...${RESET}"
```

### Python CLI Tools

```python
from theme.theme import AIOVERSEColors

def main():
    AIOVERSEColors.print_branded("=" * 50, "electric_aqua")
    AIOVERSEColors.print_branded("  AIOVERSE Build Tool  ", "soft_white")
    AIOVERSEColors.print_branded("=" * 50, "electric_aqua")
    
    print("\nBuilding project...")
    # Build logic here
    
    AIOVERSEColors.print_branded("✓ Build successful!", "electric_aqua")

if __name__ == "__main__":
    main()
```

### Node.js CLI Tools

```javascript
import chalk from 'chalk';
import { AIOVERSEColors } from './theme/theme.js';

const electricAqua = chalk.hex(AIOVERSEColors.ELECTRIC_AQUA);
const softWhite = chalk.hex(AIOVERSEColors.SOFT_WHITE);

console.log(electricAqua('═'.repeat(50)));
console.log(softWhite('  AIOVERSE Build Tool  '));
console.log(electricAqua('═'.repeat(50)));
console.log('\nBuilding project...');
```

---

## 🌍 Cross-Repository Standards

### Standard Files to Include

Every Aioverse-DEV repository should include:

1. **README.md** - Using `theme/README-template.md`
2. **theme/** directory - Copy from this repository
3. **.github/labels.yml** - For consistent issue labels
4. **LICENSE** - With AIOVERSE footer
5. **CONTRIBUTING.md** - With brand guidelines reference

### Quick Setup Script

```bash
#!/bin/bash
# apply-aioverse-theme.sh - Apply AIOVERSE theme to a repository

THEME_REPO="https://github.com/Aioverse-DEV/docx.git"
TEMP_DIR="/tmp/aioverse-theme"

echo "Applying AIOVERSE theme..."

# Clone theme repo
git clone --depth 1 $THEME_REPO $TEMP_DIR

# Copy theme files
cp -r $TEMP_DIR/theme ./
cp $TEMP_DIR/.github/labels.yml .github/
cp $TEMP_DIR/.github/workflows/aioverse-branded-ci.yml .github/workflows/

# Cleanup
rm -rf $TEMP_DIR

echo "✓ AIOVERSE theme applied successfully!"
echo "  - Theme files: ./theme/"
echo "  - Labels: ./.github/labels.yml"
echo "  - Workflow: ./.github/workflows/aioverse-branded-ci.yml"
echo ""
echo "Next steps:"
echo "  1. Update your README using theme/README-template.md"
echo "  2. Sync labels: github-label-sync --access-token \$TOKEN owner/repo .github/labels.yml"
echo "  3. Import theme in your project files"
```

### Badge Standards

Every repository README should include:

```markdown
[![AIOVERSE](https://img.shields.io/badge/AIOVERSE-Brand-73effb?style=for-the-badge)](https://github.com/Aioverse-DEV/Aioverse-Branding)
[![License](https://img.shields.io/badge/License-MIT-73effb?style=for-the-badge)](LICENSE)
[![Status](https://img.shields.io/badge/Status-Active-73effb?style=for-the-badge)]()
```

### Commit Message Format

Use AIOVERSE-branded commit prefixes:

```
🎨 style: Apply AIOVERSE theme
✨ feat: Add new feature
🐛 fix: Fix bug
📝 docs: Update documentation
🚀 deploy: Deploy to production
```

---

## ✅ Verification Checklist

After applying the AIOVERSE theme to a repository:

- [ ] Theme files copied to `./theme/`
- [ ] README updated with AIOVERSE badges
- [ ] GitHub labels applied
- [ ] CI/CD workflows using AIOVERSE branding
- [ ] Documentation site using AIOVERSE colors
- [ ] Repository description includes "AIOVERSE"
- [ ] All new UI elements use brand colors
- [ ] Terminal output uses brand colors (if applicable)

---

## 🔗 Resources

- [AIOVERSE Branding Repository](https://github.com/Aioverse-DEV/Aioverse-Branding)
- [Theme Files](../theme/)
- [Complete Theme Reference](../aioverse-theme.yml)
- [Usage Guide](USAGE.md)

---

**AIOVERSE** - *AI-Powered Drone & UAV Systems*

© 2026 Aiotize Inc.
