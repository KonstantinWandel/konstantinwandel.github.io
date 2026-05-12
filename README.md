# Konstantin Wandel Academic Homepage

This repository contains a minimal static academic homepage for Konstantin Wandel.
It is intended for deployment through GitHub Pages at:

<https://konstantinwandel.github.io>

The site uses plain HTML and CSS. There is no React, Next.js, Tailwind, package
manager, or build step.

## Preview Locally

Open `index.html` directly in a browser.

You can also serve the folder locally:

```sh
python3 -m http.server 8000
```

Then visit <http://localhost:8000>.

## Deploy With GitHub Pages

1. Create a GitHub repository named `konstantinwandel.github.io`.
2. Put these files in the repository root.
3. Commit and push to the default branch.
4. In GitHub, open **Settings > Pages** and confirm that Pages is publishing
   from the repository root on the default branch.
5. The site should be available at <https://konstantinwandel.github.io>.

## CV PDF

The CV link in `index.html` points to `cv.pdf`.

Place the current CV PDF in the repository root with this exact filename:

```txt
cv.pdf
```

Until that file is added, the CV link will be a placeholder.

## Editing Content

- Edit text, project descriptions, publication entries, and contact links in
  `index.html`.
- Edit typography, spacing, table behavior, and responsive layout in `style.css`.
- Keep `reset.css` small and stable unless browser-default behavior needs to
  change.
- Put future images, documents, or other static files in `assets/`.

Do not add publication links, university profile links, grades, supervisors,
grants, awards, or publication statuses unless they are confirmed.

## Attribution And License Notes

The visual design is adapted from [The Monospace Web][monospace-web] by
Oskar Wickström, which is licensed under the MIT License.

Original source:
<https://github.com/owickstrom/the-monospace-web>

The footer and stylesheet comments preserve attribution. If the design is
substantially reused elsewhere, keep attribution to The Monospace Web and its
MIT license.

[monospace-web]: https://github.com/owickstrom/the-monospace-web
