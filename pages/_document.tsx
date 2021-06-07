import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="es">
        <Head>
          <meta
            name="description"
            content="Empresa líder en desarrollo y venta de equipos para generación de ozono y de sus aplicaciones. Generadores de ozono domésticos, comerciales e industriales."
          />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
            integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
            crossOrigin=""
          />
          <link rel="shortcut icon" href="/favicon.ico" />
          <script
            src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"
            integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA=="
            crossOrigin=""
          />
          <meta property="og:type" content="website" />
          <meta
            property="og:title"
            content="Generadores de Ozono | Novel Técnica"
          />
          <meta
            property="og:description"
            content="Empresa líder en desarrollo de equipos para generación de ozono. Generadores de ozono domésticos, comerciales e industriales."
          />
          <meta
            property="og:image"
            content="https://res.cloudinary.com/dcjnbvln1/image/upload/v1614718066/novel-tecnica/og-logo_wl3bgb.png"
          />
          <meta property="og:image:width" content="800" />
          <meta property="og:image:height" content="800" />
          <meta property="og:url" content="https://www.noveltecnica.com" />
          <meta property="og:site_name" content="Novel Técnica" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
