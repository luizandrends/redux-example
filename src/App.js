import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './styles/GlobalStyle';
import Routes from './routes';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <GlobalStyle />
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
