# GitHub App Installation for OAuth

This repository contains the GitHub App manifest for the Aioverse-DEV organization.

## About

The GitHub App defined in `.github/app-manifest.yml` (and `.github/app-manifest.json`) provides OAuth-based authentication and authorization for accessing the docx repository resources.

## Installation

To install this OAuth App for the organization:

1. **Using the GitHub UI:**
   - Go to your organization settings: `https://github.com/organizations/Aioverse-DEV/settings/apps`
   - Click "New GitHub App"
   - Fill in the details based on the manifest in `.github/app-manifest.yml`

2. **Using the Manifest (Recommended):**
   - The manifest is available in both YAML (`.github/app-manifest.yml`) and JSON (`.github/app-manifest.json`) formats
   - Use the JSON manifest with GitHub's manifest-based installation flow
   - Navigate to: `https://github.com/organizations/Aioverse-DEV/settings/apps/new`
   - Or use the GitHub API to create the app from the manifest

## Permissions

The app requests the following permissions:
- **Contents**: Read access to repository contents
- **Metadata**: Read access to repository metadata

## Events

The app subscribes to:
- Push events
- Pull request events

## Configuration

The manifest files are located at:
- `.github/app-manifest.yml` (YAML format - human-readable)
- `.github/app-manifest.json` (JSON format - ready for API use)

Modify them to adjust:
- App name and description
- Permissions and scopes
- Event subscriptions
- Public/private visibility

## Security

This app is configured as private and only available to the Aioverse-DEV organization.
