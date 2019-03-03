import Head from 'next/head';

const Meta = () => (
  <Head>
    <meta charset="utf-8" />
    <title>Turing fullstack challenge</title>

    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <meta property="og:image:height" content="411" />
    <meta property="og:image:width" content="785" />
    <meta
      property="og:description"
      content="Turing fullstack challenge 100% Gasy"
    />
    <meta property="og:title" content="Turing fullstack" />
    <meta property="og:url" content="http://turing-fullstack.herokuapp.com" />
    <meta
      property="og:image"
      content="http://turing-fullstack.herokuapp.com/static/og-image.jpg"
    />

    <link
      rel="mask-icon"
      href="/static/safari-pinned-tab.svg"
      color="#5bbad5"
    />
    <link
      rel="apple-touch-icon"
      sizes="180x180"
      href="/static/apple-touch-icon.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href="/static/favicon-32x32.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="16x16"
      href="/static/favicon-16x16.png"
    />
    <link rel="icon" type="image/x-icon" href="/static/favicon.ico" />
    <meta name="theme-color" content="#04a9b3" />

    <link rel="stylesheet" href="/static/nprogress.css" />
  </Head>
);

export default Meta;
