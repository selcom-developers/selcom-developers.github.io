import { generateStaticParamsFor, importPage } from 'nextra/pages'
import { useMDXComponents as getMDXComponents } from '../../mdx-components'

export const generateStaticParams = generateStaticParamsFor('mdxPath')

export async function generateMetadata(props) {
  const params = await props.params
  const { metadata } = await importPage(params.mdxPath)
  return metadata
}

const Wrapper = getMDXComponents().wrapper

export default async function Page(props) {
  const params = await props.params
  const { default: MDXContent, toc, metadata, sourceCode } = await importPage(
    params.mdxPath
  )
  // The spec pages present the spec itself. Changes to the rules start in the
  // spec repository, so these pages carry no "Edit this page" link.
  const isSpecPage = params.mdxPath?.[0] === 'spec'
  const pageMetadata = isSpecPage ? { ...metadata, filePath: undefined } : metadata
  return (
    <Wrapper toc={toc} metadata={pageMetadata} sourceCode={sourceCode}>
      <MDXContent {...props} params={params} />
    </Wrapper>
  )
}
