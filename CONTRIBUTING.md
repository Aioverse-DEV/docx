# Contributing to Docx Documentation

Thank you for your interest in contributing to our documentation! This guide will help you get started.

## Getting Started

1. Fork the repository
2. Clone your fork locally
3. Install Mintlify CLI: `npm i -g mintlify`
4. Run the development server: `mintlify dev`
5. Make your changes
6. Test your changes locally
7. Submit a pull request

## Documentation Structure

- `introduction.mdx` - Homepage
- `quickstart.mdx` - Quick start guide
- `development.mdx` - Development guide
- `essentials/` - Core documentation guides
- `api-reference/` - API documentation
- `blog/` - Blog posts and articles

## Writing Guidelines

### Style Guide

1. **Use clear, concise language**
   - Write in active voice
   - Use short sentences
   - Avoid jargon when possible

2. **Format consistently**
   - Use proper heading hierarchy (H1 → H2 → H3)
   - Include code examples where appropriate
   - Add visual elements (images, diagrams) when helpful

3. **Frontmatter**
   - Every MDX file must have frontmatter with `title` and `description`
   ```mdx
   ---
   title: 'Page Title'
   description: 'Clear description of the page content'
   ---
   ```

### Components

Use Mintlify components to enhance documentation:

- `<Note>` - For helpful notes
- `<Tip>` - For pro tips and suggestions
- `<Warning>` - For important warnings
- `<Info>` - For informational callouts
- `<Card>` - For linking to related content
- `<Accordion>` - For collapsible content
- `<Tabs>` - For multiple code examples or alternatives

### Code Examples

- Always specify the language for syntax highlighting
- Include comments to explain complex code
- Provide examples in multiple languages when relevant
- Test all code examples before committing

## Pull Request Process

1. **Create a descriptive PR title**
   - Good: "Add guide for API authentication"
   - Bad: "Update docs"

2. **Describe your changes**
   - What did you change?
   - Why did you make this change?
   - Any related issues?

3. **Test locally**
   - Run `mintlify dev` to preview changes
   - Check all links work
   - Verify formatting is correct
   - Test on both light and dark themes

4. **Request review**
   - Tag relevant reviewers
   - Respond to feedback promptly

## Navigation Updates

When adding new pages, update `mint.json`:

```json
{
  "navigation": [
    {
      "group": "Your Group",
      "pages": ["new-page"]
    }
  ]
}
```

## Image Guidelines

- Store images in `/images` directory
- Use descriptive filenames
- Optimize images before committing (max 500KB)
- Provide alt text for accessibility
- Use SVG for logos and icons when possible

## Reporting Issues

Found a problem? Please open an issue with:

- Clear description of the issue
- Steps to reproduce (if applicable)
- Expected vs actual behavior
- Screenshots (if helpful)
- Your environment (OS, browser, etc.)

## Code of Conduct

- Be respectful and inclusive
- Provide constructive feedback
- Help others learn and grow
- Focus on what's best for the community

## Questions?

- Check existing documentation
- Search closed issues
- Ask in discussions
- Email: support@example.com

Thank you for contributing! 🎉
