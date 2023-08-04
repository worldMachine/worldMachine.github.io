import Head from "next/head";

// import "bootstrap/dist/css/bootstrap.min.css";
// import Script from "next/script";
// import { NextScript } from "next/document";
// import "bootstrap/dist/js/bootstrap.bundle.min";

// import "bootstrap";
// import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap/dist/js/bootstrap.js";
// import $ from "jquery";
// import Popper from "popper.js";

const SEO = () => (
  <Head>
    <title>K. Brady Davis</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
      crossorigin="anonymous"
    />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />
    <link rel="icon" type="image/png" href="resources/brady-head.png" />
    <link
      href="https://fonts.googleapis.com/css?family=Space+Mono|VT323&display=swap"
      rel="stylesheet"
    />

    {/* <link rel="stylesheet" href="/css/main.css" /> */}
    <script
      type="text/javascript"
      src="https://code.jquery.com/jquery-3.4.1.js"
      integrity="sha256-WpOohJOqMqqyKL9FccASB9O0KwACQJpFTUBLTYOVvVU="
      crossOrigin="anonymous"
      async
    ></script>
    <script
      type="text/javascript"
      src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
      integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
      crossOrigin="anonymous"
      async
    ></script>
    <script
      type="text/javascript"
      src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
      integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
      crossOrigin="anonymous"
      async
    ></script>
    {/* <NextScript /> */}
    <script
      type="text/javascript"
      src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"
      async
    ></script>

    {/* <script type="text/javascript" src="/static/main.js"></script>
    <script type="text/javascript" src="/static/scroll.js"></script> */}
  </Head>
);

export default SEO;
