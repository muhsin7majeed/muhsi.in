import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider, Container, extendTheme } from "@chakra-ui/react";
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
        <Container maxW={"7xl"}>
          <Component {...pageProps} />
        </Container>
      </SidebarWithHeader>
    </ChakraProvider>
  );
}
