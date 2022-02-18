import "../styles/globals.css";
import type { AppProps } from "next/app";
import { BreedProvider } from "../src/breedContext";
// import { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";

function MyApp({ Component, pageProps }: AppProps) {
  // useEffect(() => {
  //   AOS.init({
  //     duration: 1200,
  //     easing: "linear",
  //     once: false,
  //     offset: 70,
  //     delay: 10,
  //   });
  // }, []);

  return (
    <BreedProvider>
      <Component {...pageProps} />
    </BreedProvider>
  );
}

export default MyApp;
