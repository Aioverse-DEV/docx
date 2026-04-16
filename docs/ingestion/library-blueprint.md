# Ingestion Library Blueprint

## Goal

Create one domainwide documentation library that can ingest from any source and any format.

## Supported source channels

- Laptop files/folders
- Phone captures/uploads
- Web links
- PDFs
- Office docs (.doc/.docx)
- Markdown (.md)

## Canonical ingestion flow

1. Collect source asset into `library/inbox/`.
2. Add metadata (domain, owner, source, format, timestamp, tags).
3. Convert source to canonical markdown where possible.
4. Store normalized docs under `/docs`, `/wiki`, or `/blog` based on purpose.
5. Link source artifact and normalized output from `/library` index.
6. Run review/approval and publish.

## Metadata contract

Each ingested document should capture:

- `domain`
- `title`
- `source_type` (laptop | phone | link | pdf | docs | md)
- `source_location`
- `owner`
- `last_verified_at`
- `sensitivity`
- `status` (draft | approved | archived)

## Initial domain priorities

1. Cloudflare origin server and related records/configs
2. DNS records
3. Server configurations
4. GitHub organization/repository/security configs
5. Enterprise structure and ownership map
6. Branding and document templates
7. Reusable snippets
8. AI agent conversation summaries and decisions
