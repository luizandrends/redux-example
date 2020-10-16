import React from 'react';

import { Container, Content } from './styles';

function Techs() {
  return (
    <Container>
      <Content>
        <span>Informe uma tecnologia para o estado do redux</span>
        <input type="text" placeholder="Tecnologia" />
        <button type="button">ADICIONAR</button>
      </Content>
    </Container>
  );
}

export default Techs;
