import { component$, useStyles$ } from "@builder.io/qwik";
import {
  QwikCityProvider,
  RouterOutlet,
  ServiceWorkerRegister,
} from "@builder.io/qwik-city";
import { RouterHead } from "./components/router-head/router-head";

import globalStyles from "./global.css?inline";

export default component$(() => {
  /**
   * The root of a QwikCity site always start with the <QwikCityProvider> component,
   * immediately followed by the document's <head> and <body>.
   *
   * Dont remove the `<head>` and `<body>` elements.
   */
  useStyles$(globalStyles);

  return (
    <QwikCityProvider>
      <head>
        <meta charSet="utf-8" />
        <link rel="manifest" href="/manifest.json" />

        {/* Router Head will add meta and other tag automatically provided by Documenthead. */}
        <RouterHead />
        {/* Open Graphy Started */}
        <meta property="og:title" content="Photography Manager" />
        <meta property="og:site_name" content="Photography Manager" />
        <meta property="og:url" content="https://photographymanager.in/" />
        <meta
          property="og:description"
          content="Best Photo shop billing and management software.
Create bill, manage events, manage customer remaining payment and share photos for selection using simple link."
        />
        <meta property="og:type" content="product" />
        <meta
          property="og:image"
          content="https://photographymanager.in/images/Card.jpg"
        />
        {/* Open Graphy Ended */}
      </head>
      <body lang="en">
        <RouterOutlet />
        <ServiceWorkerRegister />
      </body>
    </QwikCityProvider>
  );
});
