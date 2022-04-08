import { ChakraProvider, theme } from '@chakra-ui/react'
import Main from './Components/Main'

const  App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Main />
    </ChakraProvider>
  )
}

export default App
