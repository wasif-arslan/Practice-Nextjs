import NavBar from "@/App/NavBar/NavBar";
import Provider from "@/App/Provider";
import { Head } from "next/document";

export default function Document({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Head>
        <title>Panaverse Site By Wasif</title>
        <link rel="icon" href="" />
      </Head>
      <body>
        <Provider>
          <NavBar />
          {children}
        </Provider>
      </body>
    </html>
  );
}
