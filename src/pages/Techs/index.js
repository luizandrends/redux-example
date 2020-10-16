import React from 'react';
import { useSelector } from 'react-redux';

import { Container, Content, List } from './styles';

function Techs() {
  const techsState = useSelector((state) => state.techs);

  const { techs } = techsState;

  return (
    <Container>
      <Content>
        <span>Informe uma tecnologia para o estado do redux</span>
        <input type="text" placeholder="Tecnologia" />
        <button type="button">ADICIONAR</button>
      </Content>

      <List>
        {techs.length <= 0 ? (
          <strong>Array vazio</strong>
        ) : (
          techs.map((tech) => <strong>{tech}</strong>)
        )}
      </List>
    </Container>
  );
}

export default Techs;
