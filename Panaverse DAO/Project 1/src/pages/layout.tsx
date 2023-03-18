import About from "@/App/About/About";
import Home from "@/App/Home/Home";
import NavBar from "@/App/NavBar/NavBar";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Panaverse Site By Wasif</title>
        <link rel="icon" href="" />
      </Head>
      <body>
        <NavBar />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
