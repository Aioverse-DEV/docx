# Aioverse Docx Blog

A personal blog for knowledge base, notes, wiki, and library built with Jekyll and hosted on GitHub Pages.

## Features

- 📝 Blog posts in Markdown
- 🎨 Clean, responsive design
- 📚 Organized content categories
- 🚀 GitHub Pages compatible

## Quick Start

### Prerequisites

- Ruby (2.7 or higher)
- Bundler

### Local Development

1. **Install dependencies:**
   ```bash
   bundle install
   ```

2. **Run the development server:**
   ```bash
   bundle exec jekyll serve
   ```

3. **View your site:**
   Open your browser to `http://localhost:4000`

### Creating New Posts

Create a new file in the `_posts` directory with the naming convention:
```
YYYY-MM-DD-title.md
```

Example:
```markdown
---
layout: post
title: "My First Post"
date: 2026-04-16 19:00:00 +0000
categories: notes
---

Your content here...
```

## Project Structure

```
.
├── _config.yml          # Site configuration
├── _layouts/            # Page templates
│   ├── default.html     # Base layout
│   └── post.html        # Blog post layout
├── _posts/              # Blog posts
├── _includes/           # Reusable components
├── assets/              # CSS, images, JS
│   └── css/
│       └── style.css
├── index.html           # Home page
├── Gemfile              # Ruby dependencies
└── README.md            # This file
```

## Deployment

This site is configured for GitHub Pages. Simply push to the `main` branch, and GitHub will automatically build and deploy your site.

## Customization

- **Site title & description**: Edit `_config.yml`
- **Styling**: Modify `assets/css/style.css`
- **Layouts**: Edit files in `_layouts/`
- **Home page**: Customize `index.html`

## Content Categories

This blog is designed for:
- **KB (Knowledge Base)**: Technical knowledge and documentation
- **Notes**: Quick thoughts and ideas
- **Wiki**: Personal wiki entries
- **Library**: Resource collections and references

## License

See [LICENSE](LICENSE) file for details.
