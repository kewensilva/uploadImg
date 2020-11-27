import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}
body {
  font-family: Arial, sans-serif;
  font-size: 14px;
  background: #793454;
  text-rendering: optimizelegibility;
  -webkit-font-smoothing: antialiased;
}

html, body, #root {
  height: 100%;
  
}
`