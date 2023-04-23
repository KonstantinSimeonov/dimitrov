export { render }
// See https://vite-plugin-ssr.com/data-fetching
export const passToClient = ['pageProps', 'urlPathname']

import ReactDOMServer from 'react-dom/server'
import { dangerouslySkipEscape } from 'vite-plugin-ssr/server'

async function render(pageContext: any) {
  const { Page, pageProps } = pageContext
  // This render() hook only supports SSR, see https://vite-plugin-ssr.com/render-modes for how to modify render() to support SPA
  if (!Page) throw new Error('My render() hook expects pageContext.Page to be defined')
  const pageHtml = ReactDOMServer.renderToString(
      <Page {...pageProps} />
  )

  // See https://vite-plugin-ssr.com/head
  const { documentProps } = pageContext.exports
  const desc = (documentProps && documentProps.description) || 'App using Vite + vite-plugin-ssr'

  const documentHtml = dangerouslySkipEscape(`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="${desc}" />
        <title>Tsvetan Dimitrov - Technical Lead</title>
      </head>
      <body>
        <div id="page-view">${pageHtml}</div>
      </body>
    </html>`)

  return {
    documentHtml,
  }
}
