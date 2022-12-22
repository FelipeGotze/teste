import { extendTheme } from '@chakra-ui/react';


const fonts = {
    heading: 'Signika',
    body: 'Signika'
}

const styles = {
    global: {
        "::-webkit-scrollbar": {
            width: "5px",
            height: "5px"
        },
        "::-webkit-scrollbar-track": {
            background: "white"
        },
        "::-webkit-scrollbar-thumb": {
            background: "teal.600"
        },
        "::-webkit-scrollbar-thumb:hover": {
            background: "teal.700"
        },
    },
}

const theme = extendTheme({
    fonts,
    styles
});

export { theme };