import React, { Component } from "react";
import GlobalStyle from "./styles/global";
import { Container, Content } from "./pages/styles"

import Upload from "./componnents/uploads";

function App() {

  return (
    <Container>
      <Content>
        <Upload />
      </Content>
      <GlobalStyle />
    </Container>

  )
}

export default App;
