// Syntax themes in the site's own palette: brand-red keywords, green strings,
// brass numbers, warm-grey comments. Used by Nextra's code blocks and by the
// landing page, so code looks the same everywhere.

function theme({ name, type, bg, fg, comment, keyword, string, number, typeColor, fn, prop, punct, tag, attr }) {
  return {
    name,
    type,
    colors: { 'editor.background': bg, 'editor.foreground': fg },
    tokenColors: [
      { settings: { foreground: fg } },
      { scope: ['comment', 'punctuation.definition.comment'], settings: { foreground: comment, fontStyle: 'italic' } },
      {
        scope: [
          'keyword',
          'keyword.control',
          'keyword.operator.new',
          'keyword.operator.expression',
          'keyword.other',
          'storage',
          'storage.type',
          'storage.modifier',
          'constant.language',
          'variable.language'
        ],
        settings: { foreground: keyword }
      },
      {
        scope: ['string', 'string.quoted', 'punctuation.definition.string', 'string.template', 'string.unquoted'],
        settings: { foreground: string }
      },
      { scope: ['constant.numeric', 'constant.character', 'constant.other'], settings: { foreground: number } },
      {
        scope: [
          'entity.name.type',
          'entity.name.class',
          'entity.other.inherited-class',
          'support.class',
          'support.type',
          'entity.name.namespace',
          'storage.type.java',
          'support.other.namespace'
        ],
        settings: { foreground: typeColor }
      },
      {
        scope: ['entity.name.function', 'support.function', 'meta.function-call entity.name.function', 'meta.method-call'],
        settings: { foreground: fn }
      },
      {
        scope: [
          'variable.other.property',
          'variable.other.object.property',
          'support.variable.property',
          'meta.object-literal.key',
          'variable.parameter',
          'entity.name.variable.parameter'
        ],
        settings: { foreground: prop }
      },
      { scope: ['punctuation', 'meta.brace', 'keyword.operator'], settings: { foreground: punct } },
      { scope: ['entity.name.tag', 'punctuation.definition.tag'], settings: { foreground: tag } },
      { scope: ['entity.other.attribute-name'], settings: { foreground: attr } },
      { scope: ['variable.other.php', 'punctuation.definition.variable.php'], settings: { foreground: fg } }
    ]
  }
}

export const lightTheme = theme({
  name: 'selcom-developers-light',
  type: 'light',
  bg: '#f7f4f2',
  fg: '#1f1a19',
  comment: '#776e6b',
  keyword: '#b42a2f',
  string: '#1f6e4a',
  number: '#8c5a0b',
  typeColor: '#6a3a8a',
  fn: '#1f5c8c',
  prop: '#2e5e66',
  punct: '#6b6260',
  tag: '#b42a2f',
  attr: '#8c5a0b'
})

export const darkTheme = theme({
  name: 'selcom-developers-dark',
  type: 'dark',
  bg: '#1a1615',
  fg: '#efe9e7',
  comment: '#9a908d',
  keyword: '#f38b85',
  string: '#8ad3a8',
  number: '#e9bc6a',
  typeColor: '#cda6f0',
  fn: '#8ec1f2',
  prop: '#93cfd6',
  punct: '#b5aca9',
  tag: '#f38b85',
  attr: '#e9bc6a'
})
