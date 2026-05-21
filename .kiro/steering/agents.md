# Blog Conventions

## Blog Post Structure

- Each blog post lives in `blog/<slug>/` (no date prefix in folder name)
- Use `index.md` for plain markdown, `index.mdx` if using JSX/imports (e.g., GIF require())
- All assets (images, GIFs) go in the same folder as the post

## Frontmatter

```yaml
---
slug: <kebab-case-slug>
title: "<Title>"
authors: [jeevan_dc]
tags: [<tags from blog/tags.yml>]
date: YYYY-MM-DD
---
```

- Always include `date` in YYYY-MM-DD format (only the year is displayed on the site)
- Never use date prefixes in folder names
- Author is always `jeevan_dc`
- Tags must exist in `blog/tags.yml` — add new ones there if needed

## When Publishing from Internal Repo

- Source: `/Users/Jeevan.Chikkegowda/labs/entain/docs-hub` (check all branches)
- Copy the entire blog folder including assets
- Strip date prefix from folder name
- Update frontmatter to match conventions above
- Change any non-jeevan_dc authors to `jeevan_dc`
- Remove internal/company-specific references if needed
- Build (`npm run build`) before committing
- Commit and push to `main` (auto-deploys via GitHub Actions)

## OG Images for Social Sharing

- Every blog post with a banner SVG MUST have a corresponding PNG for OG meta tags
- PNG must be 1200×630, with the SVG rendered at native aspect ratio and centered on a dark (#1b1b1d) canvas
- Add `image: /img/<banner>.png` to frontmatter
- SVGs alone are NOT supported by social media crawlers

## Tone & Voice

- Never preach. Share perspectives, don't lecture. The reader is a peer, not a student.
- Avoid directive "you need to" / "you should" / "you must" phrasing — prefer neutral framing ("this helps", "one way to think about it", "the idea is")
- Conversational "you" in storytelling is fine ("You sit in a meeting...") — directive "you" that tells the reader what to do is not
- Opinionated is good. Preachy is not. The difference: opinionated says "here's what I think and why." Preachy says "here's what you should do."
- Back claims with research, named frameworks, or real-world examples — not authority of voice
- Vulnerability and honesty > confidence and certainty

## Writing Style

The voice is "thinking out loud" — someone working through an idea in real-time, not delivering a polished conclusion.

- **Reason in front of the reader.** "Hmmm... but if that's true, then why..." — show the thought process, not just the result.
- **Conversational asides build trust.** Parentheticals, self-corrections, small jokes, "bear with me" moments. These signal a person, not a content machine.
- **Honest about uncertainty.** "I don't know if this is right." / "Maybe I'm wrong about this." No false confidence. Strong positions held lightly.
- **First person, always.** "Here's what I keep seeing." "I've been in this room." Write as someone who's lived it, not observed it from a distance.
- **Structural clarity without formality.** Headers feel like natural thought transitions, not a slide deck. The writing breathes — short paragraphs, varied rhythm.
- **Frameworks as evidence, not structure.** Research and named models (Westrum, Lencioni, etc.) are woven into the narrative as supporting proof — never presented as sections to be explained or taught.
- **Leave room for disagreement.** Present ideas as "this is how I make sense of it" not "this is the truth." The reader is smart enough to decide for themselves.
- **No filler, no fluff.** Every sentence earns its place. If it doesn't add insight, humor, or momentum — cut it.
