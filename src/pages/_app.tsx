import "@/styles/globals.css";
import "@/styles/hero.scss";
import type { AppProps } from "next/app";
import { ChakraBaseProvider, Container, extendTheme } from "@chakra-ui/react";
import SidebarWithHeader from "@/components/navbar/Navbar";
import Navbar from "@/components/navbar/Navbar";

export const COLORS = {
  primary: "#FF6FFF",
  secondary: "#EBEBEB",
};

export default function App({ Component, pageProps }: AppProps) {
  const theme = extendTheme({
    semanticTokens: {
      colors: COLORS,
    },
  });

  return (
    <ChakraBaseProvider theme={theme} resetCSS>
      <Component {...pageProps} />
    </ChakraBaseProvider>
  );
}
