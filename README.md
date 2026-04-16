# Mintlify Documentation

This documentation is built with [Mintlify](https://mintlify.com), a modern documentation platform.

## 🚀 Getting Started

### Prerequisites

- Node.js 16 or higher
- npm, yarn, or pnpm

### Installation

Install Mintlify CLI:

```bash
npm i -g mintlify
```

### Development

Run the development server:

```bash
mintlify dev
```

Your documentation will be available at `http://localhost:3000`

## 📁 Project Structure

```
docx/
├── mint.json              # Configuration file
├── introduction.mdx       # Homepage
├── quickstart.mdx         # Quick start guide
├── development.mdx        # Development guide
├── essentials/            # Essential guides
│   ├── markdown.mdx
│   ├── code.mdx
│   ├── images.mdx
│   ├── settings.mdx
│   └── navigation.mdx
├── api-reference/         # API documentation
│   ├── introduction.mdx
│   └── endpoint/
│       ├── get.mdx
│       ├── create.mdx
│       ├── update.mdx
│       └── delete.mdx
├── blog/                  # Blog posts
│   └── overview.mdx
├── logo/                  # Logo files
│   ├── dark.svg
│   └── light.svg
├── images/                # Image assets
│   ├── hero-light.svg
│   └── hero-dark.svg
└── favicon.svg            # Favicon
```

## ✨ Features

- 📝 **MDX Support**: Write content in Markdown with JSX components
- 🎨 **Customizable**: Fully customizable colors, branding, and styling
- 🔍 **Built-in Search**: Powerful search functionality out of the box
- 📱 **Responsive**: Mobile-friendly by default
- 🌙 **Dark Mode**: Automatic dark mode support
- 🚀 **Fast**: Optimized for performance
- 📊 **Analytics**: Built-in analytics integration

## 🎨 Customization

### Update Branding

1. Replace logos in `/logo` directory
2. Update `favicon.svg`
3. Modify colors in `mint.json`:

```json
{
  "colors": {
    "primary": "#0D9373",
    "light": "#07C983",
    "dark": "#0D9373"
  }
}
```

### Add Content

1. Create a new `.mdx` file in the appropriate directory
2. Add frontmatter:

```mdx
---
title: 'Page Title'
description: 'Page description'
---

Your content here...
```

3. Update navigation in `mint.json`

### Configure Navigation

Edit the `navigation` array in `mint.json`:

```json
{
  "navigation": [
    {
      "group": "Getting Started",
      "pages": ["introduction", "quickstart"]
    }
  ]
}
```

## 🚢 Deployment

### Deploy to Mintlify Cloud

1. Sign up at [mintlify.com](https://mintlify.com)
2. Connect your GitHub repository
3. Configure your custom domain (optional)
4. Deploy automatically on every push

### Self-Hosting

Build the documentation:

```bash
mintlify build
```

Deploy the generated static files to your hosting provider:
- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront
- Any static hosting service

## 📚 Documentation

For more information about Mintlify:

- [Official Documentation](https://mintlify.com/docs)
- [GitHub](https://github.com/mintlify/mint)
- [Community Discord](https://discord.gg/mintlify)

## 🤝 Contributing

Contributions are welcome! Please read our contributing guidelines before submitting a pull request.

## 📝 License

See [LICENSE](LICENSE) file for details.

## 🆘 Support

- 📧 Email: support@example.com
- 💬 Community: [community.example.com](https://community.example.com)
- 🐛 Issues: [GitHub Issues](https://github.com/Aioverse-DEV/docx/issues)
