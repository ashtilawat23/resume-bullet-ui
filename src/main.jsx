import * as React from 'react'
import { ChakraProvider, extendTheme, withDefaultColorScheme } from '@chakra-ui/react'
import * as ReactDOM from 'react-dom/client'
import App from './App'

const customTheme = extendTheme(
  {styles: {
    global: {
      body: {
        fontFamily: `'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif`,
        color: `#0d090d`,
        backgroundImage: 'linear-gradient(0deg, #F5F5F5 50%, #93005a 50%)'
      },
    },
  },
  }
)

const rootElement = document.getElementById('root')
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <ChakraProvider theme={customTheme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)