import { createGlobalStyle } from "styled-components"
import 'sanitize.css'

interface Props {
    themeName: string;
}

export const GlobalStyle = createGlobalStyle`
body {
    padding: 0;
    margin: 0;
}

h1 {
    margin: 0;
}

* {
    color: ${(props) => props.themeName === "light" ?
        "black" :
        "white"
    };
}
`;