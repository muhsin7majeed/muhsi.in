import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraBaseProvider, Container, extendTheme } from "@chakra-ui/react";
import SidebarWithHeader from "@/components/navbar/Navbar";
import Navbar from "@/components/navbar/Navbar";

export const COLORS = {
  primary: "#1A1A1A",
  secondary: "#212121",
  text: "#F2F2F2",
  "accent.one": "#FF6FFF",
  "accent.two": "#00FFFF",
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
