---
title: "Quick Reference - Git Commands"
category: development
---

# Git Commands Quick Reference

## Basic Commands

```bash
# Initialize a repository
git init

# Clone a repository
git clone <url>

# Check status
git status

# Add files to staging
git add <file>
git add .  # Add all files

# Commit changes
git commit -m "message"

# Push to remote
git push origin <branch>

# Pull from remote
git pull origin <branch>
```

## Branching

```bash
# List branches
git branch

# Create new branch
git branch <branch-name>

# Switch branch
git checkout <branch-name>

# Create and switch to new branch
git checkout -b <branch-name>

# Delete branch
git branch -d <branch-name>

# Merge branch
git merge <branch-name>
```

## Remote Operations

```bash
# List remotes
git remote -v

# Add remote
git remote add origin <url>

# Fetch from remote
git fetch origin

# Push new branch
git push -u origin <branch-name>
```

## Undoing Changes

```bash
# Discard changes in working directory
git checkout -- <file>

# Unstage file
git reset HEAD <file>

# Undo last commit (keep changes)
git reset --soft HEAD~1

# Undo last commit (discard changes)
git reset --hard HEAD~1

# Revert a commit
git revert <commit-hash>
```

## Viewing History

```bash
# View commit log
git log

# View compact log
git log --oneline

# View changes
git diff

# View staged changes
git diff --staged
```

---

For more detailed git tutorials, see the [Wiki](/docx/wiki/).
