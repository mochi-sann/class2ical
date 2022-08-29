import { theme } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/provider";

import type { AppProps } from "next/app";
import Layout from "src/components/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
