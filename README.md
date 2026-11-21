# Selcom Developers site

Source for <https://selcom-developers.github.io/>, the documentation site for the community clients of the Selcom API gateway.

Not affiliated with Selcom Paytech Ltd.

The site is built with [Nextra](https://nextra.site/) (docs theme) on Next.js, exported as static files, and deployed to GitHub Pages by GitHub Actions. Search uses Pagefind and works in the static export.

## Run it locally

You need Node.js 20.9 or later (CI uses Node 24).

```bash
npm ci
npm run dev      # development server at http://localhost:3000
npm run build    # static export to out/, then builds the search index
npm run serve    # serve out/ to check the export
```

Search only works after `npm run build`, because the index is built from the exported pages.

## Where things are

| Path | What it is |
|---|---|
| `content/` | The pages, as MDX. Folders and `_meta.js` files set the sidebar and navigation |
| `content/spec/` | Ported from [selcom-spec](https://github.com/selcom-developers/selcom-spec) at tag `v0.1.0` |
| `content/clients/` | One page per client |
| `app/` | Next.js layout and page routing |
| `.github/workflows/pages.yml` | Build on every pull request, deploy on push to `main` |

## Writing pages

- Use plain, clear English and short sentences.
- Do not invent API details for the clients. Describe only what is published.
- Use made-up data only: phones like `255700000001`, IDs like `ORD-1001`, keys like `test-key-0001`.
- The `content/spec/` pages are the spec at tag `v0.1.0`, presented on the site without per-page links to the source files. The spec overview and the footer link the spec repository. When the spec changes, update the pages and the version together.
- In MDX, escape `{` and `<` in normal text, or put them in code.

## Deployment

Pushes to `main` deploy through the workflow. Pull requests build only. The repository's Pages source must be set to "GitHub Actions" (Settings, Pages).

## Contributing

See [Contributing](https://selcom-developers.github.io/community/contributing) on the site. Pull requests are welcome.

## License

[Apache License 2.0](LICENSE).
