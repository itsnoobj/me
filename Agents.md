# Agents

## blog-publisher

Publishes blog posts to [noobj.me](https://noobj.me) from the internal docs repo.

### What it does

1. Copies blog post + assets from internal repo to `blog/<slug>/`
2. Updates frontmatter (author, date, tags)
3. Generates OG images for social sharing (SVG → centered 1200×630 PNG)
4. Builds, commits, and pushes to `main` (auto-deploys via GitHub Actions)

### OG Image Generation

Every blog post with a banner SVG gets a PNG generated for `og:image` / `twitter:image` meta tags. The SVG is rendered at native aspect ratio and centered on a 1200×630 dark canvas (`#1b1b1d`). This ensures thumbnails render correctly on Twitter/X, LinkedIn, WhatsApp, and Slack.

### Usage

```
@blog-publisher publish <path-or-slug>
```

### Config

- Agent definition: `.kiro/agents/blog-publisher.md`
- Conventions: `.kiro/steering/agents.md`
