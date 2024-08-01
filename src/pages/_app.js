import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Script from "next/script";
import Cursor from "../components/cursor";
import ScrollToTop from "../components/scrollToTop";
import LoadingScreen from "../components/Loading-Screen";
import "../styles/main.scss";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  // Determine the page title based on the current route
  const getPageTitle = () => {
    switch (router.pathname) {
      case "/":
        return "Home";
      case "/download":
        return "Downloads";
      case "/privacy-policy":
        return "Privacy Policy";
      default:
        return "EuclidOS";
    }
  };

  return (
    <>
      <Head>
        <title>{getPageTitle()} | EuclidOS</title>
        <link rel="icon" href="/img/favicon.png" />
      </Head>
      <Cursor />
      <LoadingScreen />
      <Component {...pageProps} />
      <ScrollToTop />
      <Script id="wow" src="/js/wow.min.js"></Script>
      <Script
        strategy="beforeInteractive"
        id="splitting"
        src="/js/splitting.min.js"
      ></Script>
      <Script id="simpleParallax" src="/js/simpleParallax.min.js"></Script>
      <Script
        id="isotope"
        strategy="beforeInteractive"
        src="/js/isotope.pkgd.min.js"
      ></Script>
      <Script id="wowInit" strategy="lazyOnload">{`new WOW().init();`}</Script>
    </>
  );
}

export default MyApp;