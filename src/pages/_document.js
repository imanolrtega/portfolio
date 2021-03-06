import Document, { Head, Html, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
  render() {
    return (
      <Html lang="es-ES">
        <Head>
          <link
            rel="stylesheet"
            type="text/css"
            href="//fonts.googleapis.com/css?family=Nunito"
          />
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=G-WF1W5FQFB1`}></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || []; function gtag()
            {dataLayer.push(arguments)}
            gtag('js', new Date()); gtag('config', 'G-WF1W5FQFB1');`,
            }}
          />
          <meta
            property="og:title"
            content="Imanol Ortega | Frontend Developer"
          />
          <meta
            property="og:description"
            content="Frontend Developer Jr. Javascript y React."
          />
          <meta
            property="og:image"
            content="https://imanolortega.vercel.app/images/7.png"
          />
          <meta property="og:url" content="https://imanolortega.vercel.app/" />
          <meta name="twitter:card" content="summary_large_image"></meta>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
