# Contributing to Aioverse Documentation

Thank you for contributing to the Aioverse documentation! This guide will help you add and organize content.

## Getting Started

1. **Install Mintlify CLI**
   ```bash
   npm install -g mintlify
   ```

2. **Run Local Development Server**
   ```bash
   mintlify dev
   ```
   This starts a local server at `http://localhost:3000`

## Adding New Content

### Creating a New Page

1. Create an MDX file in the appropriate directory:
   - `kb/` for Knowledge Base articles
   - `blog/` for Blog posts
   - `wiki/` for Wiki pages

2. Add frontmatter to your MDX file:
   ```mdx
   ---
   title: 'Your Page Title'
   description: 'A brief description of your page'
   ---
   
   # Your Content Here
   ```

3. Update `mint.json` to add the page to navigation:
   ```json
   {
     "group": "Knowledge Base",
     "pages": [
       "kb/overview",
       "kb/your-new-page"
     ]
   }
   ```

### MDX Components

Mintlify supports various components:

#### Cards
```mdx
<Card title="Title" icon="icon-name" href="/path">
  Description
</Card>
```

#### Card Groups
```mdx
<CardGroup cols={2}>
  <Card title="Card 1" icon="rocket">Content</Card>
  <Card title="Card 2" icon="code">Content</Card>
</CardGroup>
```

#### Callouts
```mdx
<Note>This is a note</Note>
<Tip>This is a tip</Tip>
<Warning>This is a warning</Warning>
<Info>This is info</Info>
```

#### Accordions
```mdx
<AccordionGroup>
  <Accordion title="Title" icon="icon">
    Content here
  </Accordion>
</AccordionGroup>
```

#### Steps
```mdx
<Steps>
  <Step title="First Step">
    Content
  </Step>
  <Step title="Second Step">
    Content
  </Step>
</Steps>
```

### Adding Images

1. Place images in the `images/` directory
2. Reference them in your MDX:
   ```mdx
   ![Alt text](/images/your-image.png)
   ```

### Code Blocks

Use fenced code blocks with language specification:

````mdx
```javascript
const example = "code";
```
````

## Organizing Content

### Directory Structure

```
├── kb/           # Knowledge Base articles
├── blog/         # Blog posts
├── wiki/         # Wiki documentation
├── images/       # Image assets
├── logo/         # Logo files
└── public/       # Public assets
```

### Navigation Structure

Edit `mint.json` to control:
- Main navigation sidebar
- Top tabs
- Topbar links
- Footer links

## Styling

### Theme Colors

Update colors in `mint.json`:
```json
"colors": {
  "primary": "#0D9373",
  "light": "#07C983",
  "dark": "#0D9373"
}
```

### Branding

Update logo and favicon paths in `mint.json`:
```json
"logo": {
  "dark": "/logo/dark.svg",
  "light": "/logo/light.svg"
},
"favicon": "/favicon.svg"
```

## Best Practices

1. **Use descriptive titles** - Make titles clear and searchable
2. **Add descriptions** - Always include a description in frontmatter
3. **Organize logically** - Group related content together
4. **Use components** - Leverage Mintlify components for better UX
5. **Test locally** - Always preview changes with `mintlify dev`
6. **Keep it updated** - Maintain current and accurate information

## Resources

- [Mintlify Documentation](https://mintlify.com/docs)
- [MDX Documentation](https://mdxjs.com/)
- [Mintlify Components](https://mintlify.com/docs/components)
- [Icon Options](https://mintlify.com/docs/icons)

## Questions?

If you have questions or need help, please open an issue on GitHub or contact the team.
