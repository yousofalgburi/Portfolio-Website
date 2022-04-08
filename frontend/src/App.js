import '@fontsource/raleway/400.css'
import '@fontsource/open-sans/700.css'

import { ChakraProvider } from '@chakra-ui/react'
import Main from './Components/Main'
import theme from './Components/theme'

const  App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Main />
    </ChakraProvider>
  )
}

export default App
