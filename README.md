# konstantinwandel.github.io

This repository contains the static academic homepage of Konstantin Wandel:

<https://konstantinwandel.github.io>

The site is a small, dependency-free GitHub Pages project. It uses plain HTML
and CSS, with no JavaScript framework, package manager, build step, or generated
site pipeline.

## Site Structure

- `index.html` contains the page content and semantic document structure.
- `style.css` contains the academic monospace layout and responsive styling.
- `script.js` contains the manual light/dark theme toggle.
- `reset.css` normalizes browser defaults for consistent rendering.
- `assets/` is reserved for future static files.
- `robots.txt` allows all crawlers and points to the sitemap.
- `sitemap.xml` lists the single page with its last modification date.

## Content Scope

The homepage presents a sparse academic profile, research interests, the
dissertation programme, current projects and tools, CV entries, and contact
information. Publication statuses, profile links, awards, supervisors, grades,
and similar biographical details should only be added when confirmed. A CV PDF
is deliberately not linked while no file exists; the CV table carries the same
information.

## Search Visibility

In place on the page: a canonical link, an author and robots meta tag, a
descriptive title, Open Graph and Twitter card tags, and a schema.org `Person`
block as JSON-LD. The JSON-LD repeats only what the page itself states, so the
two never disagree. `robots.txt` and `sitemap.xml` exist and block nothing.

Two steps need a person and are worth doing once:

1. **Google Search Console.** Add `https://konstantinwandel.github.io/` as a
   property, verify with the HTML meta tag method, then submit the sitemap and
   request indexing of the single URL. Verification is the only way to tell
   Google the site exists; nothing on the page can substitute for it.
2. **Links from pages Google already crawls.** A site nobody links to is
   crawled late or not at all. The university profile (PEVZ), the Zenodo
   records of the three tools, and the READMEs of the tool repositories are all
   natural places to link the homepage.

## Design Attribution

The visual design is adapted from [The Monospace Web][monospace-web] by
Oskar Wickström, an MIT-licensed minimalist monospace HTML/CSS design.

Original source:
<https://github.com/owickstrom/the-monospace-web>

Attribution is also preserved in the site footer and stylesheet comments.

[monospace-web]: https://github.com/owickstrom/the-monospace-web
