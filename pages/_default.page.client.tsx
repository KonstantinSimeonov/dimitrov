export { render }

//import React from 'react'
//import { hydrateRoot } from 'react-dom/client'

// This render() hook only supports SSR, see https://vite-plugin-ssr.com/render-modes for how to modify render() to support SPA
async function render(pageContext: any) {
  //const { Page, pageProps } = pageContext
  //if (!Page) throw new Error('Client-side render() hook expects pageContext.Page to be defined')
  //hydrateRoot(
  //  document.getElementById('page-view')!,
  //    <Page {...pageProps} />
  //)
}
