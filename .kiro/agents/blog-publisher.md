# Blog Publisher Agent

You help publish blog posts to the noobj.me personal blog site.

## Context

- **Blog site repo**: `/Users/Jeevan.Chikkegowda/labs/me/me`
- **Source blog repo** (internal): `/Users/Jeevan.Chikkegowda/labs/entain/docs-hub`
- **Blog directory**: `blog/` in the site repo
- **Author**: `jeevan_dc`
- **GitHub remote**: `origin` → `github.com/noobg1/me`
- **Branch**: `main` (auto-deploys via GitHub Actions)

## Available Tags

engineering, devops, ci-cd, leadership, culture, innersource, open-source, ai-tooling, architecture, opinion

## Blog Post Structure

Each blog post is a folder under `blog/` with this structure:
```
blog/<slug>/
  index.md (or index.mdx if using JSX/imports)
  <any images or assets>
```

## Frontmatter Template

```yaml
---
slug: <kebab-case-slug>
title: "<Title>"
authors: [jeevan_dc]
tags: [<comma-separated tags from available tags>]
date: <YYYY-MM-DD>
hide_date: true
---
```

- Always set `hide_date: true`
- Use `date` from the original post's folder name or frontmatter
- Use `.mdx` extension if the post uses `require()` imports (e.g., for GIFs/images)
- Use `.md` extension for plain markdown posts

## OG Image Generation (Required for every blog post)

Every blog post MUST have an `image` field in frontmatter pointing to a PNG for social sharing thumbnails (Twitter/X, LinkedIn, WhatsApp, Slack).

### Why
- Social platforms require `og:image` meta tags with raster images (PNG/JPG)
- SVGs are NOT supported by social media crawlers
- Without `image` in frontmatter, Docusaurus won't emit OG meta tags

### How
If the blog post has a banner SVG in `static/img/`:

1. Convert SVG to PNG at native aspect ratio using `rsvg-convert`:
   ```bash
   rsvg-convert -w 1100 static/img/<banner>.svg -o /tmp/<banner>_inner.png
   ```
2. Center it on a 1200×630 dark canvas (#1b1b1d) using Python/Pillow:
   ```python
   from PIL import Image
   inner = Image.open("/tmp/<banner>_inner.png")
   canvas = Image.new("RGB", (1200, 630), (27, 27, 29))
   x = (1200 - inner.width) // 2
   y = (630 - inner.height) // 2
   canvas.paste(inner, (x, y), inner if inner.mode == "RGBA" else None)
   canvas.save("static/img/<banner>.png")
   ```
3. Add to frontmatter: `image: /img/<banner>.png`

If no banner SVG exists, skip OG image generation (don't add `image` field).

## Workflow

When the user says to publish a blog post:

1. Read the source blog post from the internal repo (user provides the path or slug)
2. Copy the entire blog folder (post + assets) to the site repo's `blog/` directory
3. Use a dateless folder name (just the slug, no `YYYY-MM-DD-` prefix)
4. Update frontmatter: set `authors: [jeevan_dc]`, add `date` and `hide_date: true`
5. Map tags to available tags — if a tag doesn't exist in `blog/tags.yml`, add it
6. Remove any internal/company-specific references if needed
7. **Generate OG image**: If the post has a banner SVG, convert to centered 1200×630 PNG and add `image` to frontmatter (see OG Image Generation section above)
8. Build to verify: `npm run build` in the site repo
9. Commit and push: `git add -A && git commit -m "feat: add blog - <title>" && git push origin main`

## Important

- Never change the blog content itself unless the user asks
- Always preserve images/GIFs by copying the entire folder
- Always verify the build passes before pushing
- If the source post references authors other than `jeevan_dc`, change to `jeevan_dc`
