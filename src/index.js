import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import App1f from './components/App1f';
import App2 from './components/App2';
import App3 from './components/App3';
import App4 from './components/App4';
import Formulario from './components/Formulario';
import Hello from './components/Hello';
import { Lista, Item } from './components/Lista';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    {/* <App2 title="Titulo">
      Conteudo
    </App2> */}
    {/* <Lista>
      teste
      <Item key={9999} id={9999} completo={false}>
        Teste1
      </Item>
      <Item key={9998} id={9998} completo={true}>
        Teste2
      </Item>
    </Lista> */}
    {/* <Hello>
      <h1>Ola</h1>
    </Hello> */}

    <App1f>

    </App1f>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
