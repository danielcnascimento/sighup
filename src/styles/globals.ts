import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
* {
  margin: 0;
  padding:0 ;
  box-sizing: border-box;
}

:root {
  --white: #ffffff;
}

@media(max-width: 720px) {
  html {
      font-size: 87.5%;
  }
}

body {
  background: var(--background);
  color: var(--text);
}

body, input, textarea, button {
  font: 400 1rem 'Montserrat', sans-serif;
}

button {
  cursor: pointer;
}

a {
  color: inherit;
  text-decoration: none;
}
`
