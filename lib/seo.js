// Shared metadata for link previews and search engines.
export const SITE_URL = 'https://selcom-developers.github.io'
export const SITE_NAME = 'Selcom Developers'
export const SITE_DESCRIPTION =
  'Open-source community clients for the Selcom payment API in Java, Node.js, Python, PHP and Laravel. Not affiliated with Selcom Paytech Ltd.'

export const OG_IMAGE = {
  url: '/og.png',
  width: 1200,
  height: 630,
  alt: 'Selcom Developers: community clients for the Selcom payment API'
}

// Open Graph and canonical metadata for one page. Next.js replaces a parent's
// openGraph object rather than merging it, so every page sets the full object.
export function pageMetadata({ route, title, description }) {
  const isHome = route === '/'
  return {
    alternates: { canonical: route },
    openGraph: {
      type: 'website',
      siteName: SITE_NAME,
      locale: 'en',
      url: route,
      title: isHome || !title ? SITE_NAME : `${title} | ${SITE_NAME}`,
      description: description || SITE_DESCRIPTION,
      images: [OG_IMAGE]
    }
  }
}
