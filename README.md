# Aioverse Documentation

Welcome to the Aioverse documentation repository. This repository contains blogs, knowledge base articles, notes, wiki pages, and library resources.

## 🚀 Documentation Platform

This documentation is built using [Mintlify](https://mintlify.com), a modern documentation platform with a beautiful, customizable frontend.

## 📦 Local Development

### Prerequisites

- Node.js 18 or higher
- npm or yarn

### Installation

Install the Mintlify CLI:

```bash
npm i -g mintlify
```

### Running Locally

Run the following command in the root of your documentation (where `mint.json` is):

```bash
mintlify dev
```

This will start a local development server at `http://localhost:3000`.

### Building for Production

Mintlify documentation is automatically built and deployed when you push to your repository. No manual build step is required.

## 📁 Structure

- `mint.json` - Main configuration file for Mintlify
- `introduction.mdx` - Home page
- `quickstart.mdx` - Quick start guide
- `kb/` - Knowledge base articles
- `blog/` - Blog posts
- `wiki/` - Wiki documentation

## ✏️ Contributing

1. Create or edit MDX files in the appropriate directory
2. Update `mint.json` if adding new pages to navigation
3. Test locally using `mintlify dev`
4. Commit and push your changes

## 📚 Resources

- [Mintlify Documentation](https://mintlify.com/docs)
- [MDX Documentation](https://mdxjs.com/)
- [GitHub Repository](https://github.com/Aioverse-DEV/docx)

## 📝 License

See [LICENSE](LICENSE) file for details.
