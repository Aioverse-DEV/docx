# GitHub OAuth App Installation

This repository contains the GitHub App manifest for the Aioverse-DEV organization.

## About

The OAuth App defined in `.github/app-manifest.yml` provides secure authentication and authorization for accessing the docx repository resources.

## Installation

To install this OAuth App for the organization:

1. **Using the GitHub UI:**
   - Go to your organization settings: `https://github.com/organizations/Aioverse-DEV/settings/apps`
   - Click "New GitHub App"
   - Fill in the details based on the manifest in `.github/app-manifest.yml`

2. **Using the Manifest:**
   - Convert the YAML manifest to JSON format
   - Use GitHub's manifest-based installation flow
   - URL format: `https://github.com/organizations/Aioverse-DEV/settings/apps/new`

## Permissions

The app requests the following permissions:
- **Contents**: Read access to repository contents
- **Metadata**: Read access to repository metadata

## Events

The app subscribes to:
- Push events
- Pull request events

## Configuration

The manifest file is located at `.github/app-manifest.yml`. Modify it to adjust:
- App name and description
- Permissions and scopes
- Event subscriptions
- Public/private visibility

## Security

This app is configured as private and only available to the Aioverse-DEV organization.
