# Docx Documentation - Mintlify Setup

## Quick Setup Guide

This repository is configured with Mintlify for modern, beautiful documentation.

### 1. Install Mintlify CLI

```bash
npm install -g mintlify
```

### 2. Run Locally

```bash
cd docx
mintlify dev
```

Visit `http://localhost:3000` to view your documentation.

### 3. Customize

#### Update Branding

1. **Logo**: Replace files in `/logo` directory
   - `dark.svg` - Logo for dark mode
   - `light.svg` - Logo for light mode

2. **Favicon**: Replace `favicon.svg`

3. **Colors**: Edit `mint.json`:
   ```json
   {
     "colors": {
       "primary": "#0D9373",
       "light": "#07C983",
       "dark": "#0D9373"
     }
   }
   ```

#### Add Content

1. Create a new `.mdx` file:
   ```mdx
   ---
   title: 'My New Page'
   description: 'Description of the page'
   ---
   
   # My New Page
   
   Content goes here...
   ```

2. Add to navigation in `mint.json`:
   ```json
   {
     "navigation": [
       {
         "group": "My Group",
         "pages": ["my-new-page"]
       }
     ]
   }
   ```

### 4. Deploy

#### Option A: Mintlify Cloud (Recommended)

1. Sign up at [mintlify.com](https://mintlify.com)
2. Connect your GitHub repository
3. Configure settings
4. Deploy automatically on push

#### Option B: Self-Host

```bash
mintlify build
```

Deploy the output to:
- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront
- Any static hosting

### 5. Features

✅ **Completed**:
- Basic configuration (`mint.json`)
- Introduction page
- Quick start guide
- Development guide
- Essential documentation guides
- API reference with endpoints
- Blog section
- Navigation structure
- Branding placeholders
- GitHub Actions workflow

🎨 **Customize Next**:
- Replace logo and favicon with your brand assets
- Update colors to match your brand
- Add your actual content
- Configure custom domain
- Set up analytics (GA4, Plausible, etc.)
- Add social links

### 6. Project Structure

```
docx/
├── mint.json                 # Main configuration
├── introduction.mdx          # Homepage
├── quickstart.mdx           # Getting started
├── development.mdx          # Development guide
├── essentials/              # Core guides
│   ├── markdown.mdx
│   ├── code.mdx
│   ├── images.mdx
│   ├── settings.mdx
│   └── navigation.mdx
├── api-reference/           # API docs
│   ├── introduction.mdx
│   └── endpoint/
│       ├── get.mdx
│       ├── create.mdx
│       ├── update.mdx
│       └── delete.mdx
├── blog/                    # Blog posts
│   └── overview.mdx
├── logo/                    # Brand assets
├── images/                  # Media files
└── .github/workflows/       # CI/CD
```

### 7. Useful Commands

```bash
# Start dev server
mintlify dev

# Build for production
mintlify build

# Install CLI globally
npm install -g mintlify

# Update CLI
npm update -g mintlify
```

### 8. Resources

- 📚 [Mintlify Documentation](https://mintlify.com/docs)
- 💬 [Discord Community](https://discord.gg/mintlify)
- 🐛 [Report Issues](https://github.com/mintlify/mint/issues)
- 📧 [Email Support](mailto:hi@mintlify.com)

### 9. Tips

<details>
<summary>💡 Pro Tips</summary>

- Use MDX components for rich content (Card, Accordion, Tabs, etc.)
- Add screenshots with light/dark variants
- Use code groups for multi-language examples
- Enable analytics to track documentation usage
- Set up custom domain for professional appearance
- Use OpenAPI spec for automatic API docs
- Enable search customization
- Add contextual help with tooltips

</details>

---

**Need Help?** Check the [CONTRIBUTING.md](CONTRIBUTING.md) file for more detailed guidelines.
