import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 100px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  span {
    font-size: 22px;
    color: #fff;
    font-weight: bold;
  }

  input {
    padding: 10px;
    margin-top: 15px;
    border: 0;
    border-radius: 4px;
    background: rgba(0, 0, 0, 0.5);

    &::placeholder {
      color: #ddd;
    }
  }

  button {
    margin-top: 15px;
    padding: 5px;
    border: 0;
    border-radius: 4px;
    color: #000;
    background: #fff;
  }
`;
