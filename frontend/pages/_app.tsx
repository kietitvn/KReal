/* _app.js */
import React, { useEffect } from "react";
// import App from "next/app";
import type { AppProps /*, AppContext */ } from "next/app";
import Head from "next/head";
// import "../public/css/";
// import "../public/react-datepicker.css";
import { SeoContext } from "../context/seoContext";

import dynamic from "next/dynamic";
// import { useQuery } from "@apollo/client";
// import { IQueryConfig } from "../interface/home";
// import { queryConfig } from "../graphql/home";
// import { CONFIG } from "../public/config";

import { ApolloProvider } from "@apollo/client";
import client from "../lib/apollo";

const Header = dynamic(() => import("../components/header"));
const Footer = dynamic(() => import("../components/footer"));
const SeoDefault = dynamic(() => import("../components/seo/seoDefault"));

interface props {
  apollo: any;
}

function MyApp({ Component, pageProps, apollo }: AppProps & props) {
  // const { loading, error, data } = useQuery(queryConfig);
  // if (process.browser && data) {
  //   window.localStorage.setItem(
  //     CONFIG.LOCAL_STORAGE_KEY.banner_gallery,
  //     data.config.banner_gallery.url
  //   );
  //   window.localStorage.setItem(
  //     CONFIG.LOCAL_STORAGE_KEY.banner_activity,
  //     data.config.banner_activity.url
  //   );
  //   window.localStorage.setItem(
  //     CONFIG.LOCAL_STORAGE_KEY.banner_contact,
  //     data.config.banner_contact.url
  //   );
  //   window.localStorage.setItem(
  //     CONFIG.LOCAL_STORAGE_KEY.banner_reservation,
  //     data.config.banner_reservation.url
  //   );
  // }
  // useEffect(() => {
  //   if (process.env.NODE_ENV === "production") {
  //     // Forbidden to select the content on the page
  //     window.onselectstart = function () {
  //       return false;
  //     };
  //     // Add a custom event for the right button, you can disable
  //     window.oncontextmenu = function () {
  //       event.preventDefault(); // Block default event behavior
  //       return false;
  //     };
  //     // Determine whether to press F12, F12 key code is 123
  //     window.onkeydown =
  //       window.onkeyup =
  //       window.onkeypress =
  //         function (event) {
  //           if (event.keyCode === 123) {
  //             event.preventDefault(); // Block default event behavior
  //             window.event.returnValue = false;
  //           }
  //         };
  //   }
  // }, []);

  return (
    <ApolloProvider client={client}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />

        <link rel="stylesheet" href="../public/css/responsive.css" />

        <link
          rel="preload"
          href="/fonts/SVN-Rohtwo/SVN-Rohtwo.otf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/VVDS_Organum/VVDS_Organum.otf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/AktifoB/AktifoB-Book.ttf"
          as="font"
          crossOrigin=""
        />
      </Head>
      <Header>
        <SeoContext>
          <SeoDefault />
          <Component {...pageProps} />
        </SeoContext>
      </Header>
      <Footer />
    </ApolloProvider>
  );
}

export default MyApp;
