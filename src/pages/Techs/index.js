import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Container, Content, List } from './styles';

import { addTechOnState } from '../../store/modules/techs/actions';

function Techs() {
  const [technology, setTechnology] = useState('');

  const dispatch = useDispatch();

  const techsState = useSelector((state) => state.techs);
  const { techs } = techsState;

  const handleLoadTechState = () => {
    dispatch(addTechOnState(technology));
  };

  return (
    <Container>
      <Content>
        <span>Informe uma tecnologia para o estado do redux</span>
        <input
          type="text"
          placeholder="Tecnologia"
          onChange={(e) => setTechnology(e.target.value)}
        />
        <button
          onClick={() => {
            handleLoadTechState();
          }}
          type="button"
        >
          ADICIONAR
        </button>
      </Content>

      <List>
        {techs.length <= 0 ? (
          <strong>Array vazio</strong>
        ) : (
          techs.map((tech) => (
            <div key={tech}>
              <strong>{tech}</strong>
            </div>
          ))
        )}
      </List>
    </Container>
  );
}

export default Techs;
