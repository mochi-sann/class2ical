import { theme } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";

import type { AppProps } from "next/app";
import Layout from "src/components/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
