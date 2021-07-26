import React from 'react';
class App3 extends React.Component {
   constructor(props) {
      super(props);
      this.state = { nome: '', idade: 28 };
      this.changeName = this.changeName.bind(this);
   }

   changeName = (event) => {
      this.setState({ nome: event.target.value })
   }
   render() {
      return (
         <div>
            Nome : <input type="text" value={this.state.nome} onChange={this.changeName} />
            <p>
               Óla {this.state.nome}
            </p>
         </div>

      );
   }
}

export default App3;
