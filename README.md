# Aioverse Documentation

A comprehensive documentation site built with Jekyll, featuring blogs, knowledge base articles, notes, wiki pages, and library documentation.

## 🌐 Domainwide Documentation Hub

Additional domainwide documentation scaffolding is available at:

- [Docs Hub](/docs/README.md)
- [Wiki (Domain)](/wiki/README.md)
- [Blog (Domain)](/blog/README.md)
- [Library (Domain)](/library/README.md)
- [Templates](/templates/README.md)
- [Ingestion Blueprint](/docs/ingestion/library-blueprint.md)

## 📚 Sections

- **[Blogs](/blogs/)** - Technical blog posts, tutorials, and articles
- **[Knowledge Base](/kb/)** - FAQ and solutions to common problems
- **[Notes](/notes/)** - Quick reference guides and cheat sheets
- **[Wiki](/wiki/)** - Detailed documentation and guides
- **[Library](/library/)** - API documentation and code examples

## 🚀 Quick Start

### Prerequisites

- Ruby 2.7 or higher
- Bundler
- Git

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/Aioverse-DEV/docx.git
   cd docx
   ```

2. **Install dependencies**
   ```bash
   bundle install
   ```

3. **Run the development server**
   ```bash
   bundle exec jekyll serve
   ```

4. **View the site**
   Open your browser and visit `http://localhost:4000/docx/`

## 📝 Adding Content

### Blog Posts

Create a new file in `_blogs/` directory:

```markdown
---
title: "Your Blog Post Title"
date: 2026-04-16
categories: [category1, category2]
tags: [tag1, tag2]
---

Your content here...
```

### Knowledge Base Articles

Create a new file in `_kb/` directory:

```markdown
---
title: "Article Title"
category: troubleshooting
---

Your content here...
```

### Notes

Create a new file in `_notes/` directory for quick reference guides.

### Wiki Pages

Create a new file in `_wiki/` directory for comprehensive documentation.

### Library Documentation

Create a new file in `_library/` directory for API references and examples.

## 🛠️ Configuration

Edit `_config.yml` to customize:
- Site title and description
- Base URL
- Theme settings
- Collections
- Plugins

## 🎨 Customization

### Styles

Custom styles are in `assets/css/style.scss`. The site uses the Minima theme as a base.

### Layouts

Custom layouts are available in `_layouts/`:
- `default.html` - Base layout
- `home.html` - Homepage layout
- `post.html` - Blog post layout
- `page.html` - Standard page layout

### Includes

Reusable components are in `_includes/`:
- `navigation.html` - Site navigation menu

## 📦 Deployment

### GitHub Pages

This site is configured for GitHub Pages deployment:

1. Push changes to the main branch
2. GitHub Actions will automatically build and deploy
3. Site will be available at `https://aioverse-dev.github.io/docx/`

### Manual Build

```bash
bundle exec jekyll build
```

The built site will be in the `_site/` directory.

## 🤝 Contributing

We welcome contributions! Please:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

See [CONTRIBUTING.md](/wiki/contributing/) for detailed guidelines.

## 📄 License

This project is licensed under the Apache License 2.0 - see the [LICENSE](LICENSE) file for details.

## 🔗 Links

- [Live Site](https://aioverse-dev.github.io/docx/)
- [GitHub Repository](https://github.com/Aioverse-DEV/docx)
- [Issue Tracker](https://github.com/Aioverse-DEV/docx/issues)

## 💬 Support

- Check the [Knowledge Base](/kb/)
- Read the [Wiki](/wiki/)
- Open an [Issue](https://github.com/Aioverse-DEV/docx/issues)

---

Built with ❤️ using [Jekyll](https://jekyllrb.com/) and [GitHub Pages](https://pages.github.com/)
