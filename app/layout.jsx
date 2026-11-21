import localFont from 'next/font/local'
import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
import './globals.css'
import { SiteLogo } from '@/components/brand/seal'
import { SiteFooter } from '@/components/site/site-footer'

// Atkinson Hyperlegible Next and Mono: designed so that 0/O and 1/l/I never
// look alike, which matters on a site full of keys, digests and IDs.
// Bundled from npm at build time; no font is fetched from a third party.
const bodyFont = localFont({
  src: [
    {
      path: '../node_modules/@fontsource-variable/atkinson-hyperlegible-next/files/atkinson-hyperlegible-next-latin-wght-normal.woff2',
      weight: '200 800',
      style: 'normal'
    },
    {
      path: '../node_modules/@fontsource-variable/atkinson-hyperlegible-next/files/atkinson-hyperlegible-next-latin-wght-italic.woff2',
      weight: '200 800',
      style: 'italic'
    }
  ],
  variable: '--font-body',
  display: 'swap'
})

const codeFont = localFont({
  src: [
    {
      path: '../node_modules/@fontsource-variable/atkinson-hyperlegible-mono/files/atkinson-hyperlegible-mono-latin-wght-normal.woff2',
      weight: '200 800',
      style: 'normal'
    }
  ],
  variable: '--font-code',
  display: 'swap'
})

export const metadata = {
  title: {
    default: 'Selcom Developers',
    template: '%s | Selcom Developers'
  },
  description:
    'Open-source community clients for the Selcom payment API in Java, Node.js, PHP and Laravel. Not affiliated with Selcom Paytech Ltd.'
}

const navbar = (
  <Navbar logo={<SiteLogo />} logoLink="/" projectLink="https://github.com/selcom-developers" />
)

const footer = (
  <Footer>
    <SiteFooter />
  </Footer>
)

export default async function RootLayout({ children }) {
  return (
    <html
      lang="en"
      dir="ltr"
      suppressHydrationWarning
      className={`${bodyFont.variable} ${codeFont.variable}`}
    >
      <Head
        color={{
          hue: { light: 358, dark: 3 },
          saturation: { light: 67, dark: 82 },
          lightness: { light: 43, dark: 72 }
        }}
        backgroundColor={{ light: '#fbfaf9', dark: '#141111' }}
      />
      <body>
        <Layout
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/selcom-developers/selcom-developers.github.io/tree/main"
          editLink="Edit this page on GitHub"
          copyPageButton={false}
          footer={footer}
          sidebar={{ defaultMenuCollapseLevel: 1 }}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
