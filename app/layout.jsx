import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'

export const metadata = {
  title: {
    default: 'Selcom Developers',
    template: '%s | Selcom Developers'
  },
  description:
    'Community clients and shared notes for the Selcom API gateway. Not affiliated with Selcom Paytech Ltd.'
}

const navbar = (
  <Navbar
    logo={<b>Selcom Developers</b>}
    projectLink="https://github.com/selcom-developers"
  />
)

const footer = (
  <Footer>
    Apache-2.0. Community project, not affiliated with Selcom Paytech Ltd.
  </Footer>
)

export default async function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <body>
        <Layout
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/selcom-developers/selcom-developers.github.io/tree/main/content"
          footer={footer}
          sidebar={{ defaultMenuCollapseLevel: 1 }}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
