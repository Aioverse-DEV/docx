---
title: "Contributing Guidelines"
category: community
---

# Contributing to Aioverse

Thank you for your interest in contributing to Aioverse! This guide will help you get started.

## Code of Conduct

Please read and follow our Code of Conduct. We are committed to providing a welcoming and inclusive environment for all contributors.

## How to Contribute

### Reporting Bugs

1. Check if the bug has already been reported in [Issues](https://github.com/Aioverse-DEV/docx/issues)
2. If not, create a new issue with:
   - Clear title and description
   - Steps to reproduce
   - Expected vs actual behavior
   - Environment details (OS, version, etc.)

### Suggesting Features

1. Check existing feature requests
2. Create a new issue with:
   - Clear use case
   - Proposed solution
   - Alternative approaches considered

### Pull Requests

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes
4. Write or update tests
5. Update documentation
6. Commit with descriptive messages
7. Push to your fork
8. Open a Pull Request

## Development Setup

```bash
# Clone your fork
git clone https://github.com/YOUR-USERNAME/docx.git
cd docx

# Add upstream remote
git remote add upstream https://github.com/Aioverse-DEV/docx.git

# Install dependencies
npm install

# Run tests
npm test

# Start development server
npm run dev
```

## Coding Standards

- Follow existing code style
- Write clear, self-documenting code
- Add comments for complex logic
- Use meaningful variable and function names
- Keep functions small and focused

## Testing

- Write unit tests for new features
- Ensure all tests pass before submitting PR
- Aim for high code coverage

## Documentation

- Update README if needed
- Document new features in wiki
- Add code comments for complex logic
- Update API documentation

## Commit Messages

Follow conventional commits:

```
feat: add new feature
fix: resolve bug
docs: update documentation
test: add tests
refactor: code improvement
style: formatting changes
chore: maintenance tasks
```

## Review Process

1. Maintainers will review your PR
2. Address any requested changes
3. Once approved, your PR will be merged
4. Your contribution will be credited in release notes

## Questions?

Feel free to ask questions in:
- GitHub Discussions
- Community forum
- Our Discord server

Thank you for contributing to Aioverse! 🎉
