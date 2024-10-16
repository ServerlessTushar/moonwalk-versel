import { extendTheme } from '@chakra-ui/react'
import '@fontsource-variable/inter'
import { theme as baseTheme } from '@saas-ui/react'

import components from './components'
import { fontSizes } from './foundations/typography'

export const theme = extendTheme(
  {
    config: {
      initialColorMode: 'dark',
      useSystemColorMode: false,
    },
    styles: {
      global: (props: any) => ({
        '@font-face': [
            {
              fontFamily: 'GratelosDisplay',
              src: `url('/fonts/GratelosDisplay.ttf') format('truetype')`,
              //fontWeight: 'normal',
              fontStyle: 'normal',
            },
            {
              fontFamily: 'Fustat',
              src: `url('/fonts/Fustat/Fustat-Regular.ttf') format('truetype')`,
              fontWeight: 'normal',
              fontStyle: 'normal',
            },
            {
              fontFamily: 'Fustat',
              src: `url('/fonts/Fustat/Fustat-Bold.ttf') format('truetype')`,
              fontWeight: 'bold',
              fontStyle: 'normal',
            },
          ],
        body: {
          color: 'gray.900',
          bg: 'white',
          fontSize: 'lg',
          _dark: {
            color: 'white',
            bg: 'gray.900',
          },
        },
      }),
    },
    fonts: {
      heading: 'GratelosDisplay-Variable, sans-serif',//'Oswald, sans-serif', //'Inter Variable, Inter, sans-serif',
      body: 'Fustat-VariableFont_wght, sans-serif',
    },
    fontSizes,
    components,
  },
  baseTheme,
)

// theme/index.ts
// import { extendTheme } from '@chakra-ui/react';
// import { theme as baseTheme } from '@saas-ui/react';
// import { fontSizes } from './foundations/typography';

// // Import local fonts using @font-face
// const fonts = {
//   heading: 'GratelosDisplay, sans-serif',
//   body: 'Fustat, sans-serif',
// };

// const globalStyles = {
//   global: (props: any) => ({
//     '@font-face': [
//       {
//         fontFamily: 'GratelosDisplay',
//         src: `url('/fonts/GratelosDisplay.ttf') format('truetype')`,
//         //fontWeight: 'normal',
//         fontStyle: 'normal',
//       },
//       {
//         fontFamily: 'Fustat',
//         src: `url('/fonts/Fustat/Fustat-Regular.ttf') format('truetype')`,
//         fontWeight: 'normal',
//         fontStyle: 'normal',
//       },
//       // Add other weights if necessary
//       {
//         fontFamily: 'Fustat',
//         src: `url('/fonts/Fustat/Fustat-Bold.ttf') format('truetype')`,
//         fontWeight: 'bold',
//         fontStyle: 'normal',
//       },
//       // Add more font weights/styles as needed
//     ],
//     body: {
//       color: 'gray.900',
//       bg: 'white',
//       fontSize: 'lg',
//       _dark: {
//         color: 'white',
//         bg: 'gray.900',
//       },
//     },
//   }),
// };

// export const theme = extendTheme({
//   config: {
//     initialColorMode: 'dark',
//     useSystemColorMode: false,
//   },
//   styles: globalStyles,
//   fonts,
//   fontSizes,
//   components: baseTheme.components,
// });