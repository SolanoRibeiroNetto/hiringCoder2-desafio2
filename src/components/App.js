import React from 'react';
class App extends React.Component {
  render() {
    return (
      <div>
        <p>
          Meu Primeiro paragrafo
        </p>
        <p>
          Meu segundo paragrafo
        </p>
        <p>
          {new Date().toLocaleDateString('pt-BR')}
        </p>
      </div>

    );
  }
}

export default App;
