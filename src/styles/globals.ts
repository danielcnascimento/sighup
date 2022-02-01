import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
* {
  margin: 0;
  padding:0 ;
  box-sizing: border-box;
}

:root {
  --primary: #FF3333;
  --white: #FAFAFA;
  --smooth-grey: #E8E8E8;
  --medium-grey: #D5D5D5;
  --dark-text: #222222;
  --grey-text: #767676;
  --disable: #CECECE;
  --overlay: rgba(86, 86, 86, 0.4);
}

@media(max-width: 1080px) {
  html {
    font-size: 93.75%;
  }
}

@media(max-width: 720px) {
  html {
      font-size: 87.5%;
  }
}

body {
  background: var(--primary);
  color: var(--dark-text);
}

body, input, textarea, button {
  font: 400 1rem 'Montserrat', sans-serif;
}

button {
  cursor: pointer;
}

input::placeholder {
  color: var(--grey-text)
}

a, li, ul{
  color: inherit;
  text-decoration: none;
  list-style: none;
}

p {
  color: var(--dark-text);
}
`
