import React, { Component } from "react";
import GlobalStyle from "./styles/global";
import { Container, Content } from "./pages/styles"
import { render } from "@testing-library/react";


function App() {

  return (
    <Container>
      <Content> Teste </Content>
      <GlobalStyle />
    </Container>

  )
}

export default App;
