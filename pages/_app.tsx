import { AppProps } from 'next/app';
import '../theme/globals.css'
import { ChakraProvider} from "@chakra-ui/react"
import { theme } from '../theme/theme';

function App({ Component, pageProps }: AppProps) {
  return (
      <ChakraProvider theme={theme}>
          <Component {...pageProps} />
      </ChakraProvider>
  )
}

export default App
