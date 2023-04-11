import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import SidebarWithHeader from "@/components/navbar/Navbar";

export default function App({ Component, pageProps }: AppProps) {
  const theme = extendTheme({
    semanticTokens: {
      colors: {},
    },
  });

  return (
    <ChakraProvider theme={theme}>
      <SidebarWithHeader>
        <Component {...pageProps} />
      </SidebarWithHeader>
    </ChakraProvider>
  );
}
