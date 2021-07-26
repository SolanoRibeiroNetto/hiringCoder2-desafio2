import React from 'react';
class App4 extends React.Component {
   constructor(props) {
      super(props);
      this.state = { nome: undefined, idade: 28, txtNome: '' };
      this.changetxtName = this.changetxtName.bind(this);
   }

   changetxtName = (event) => {
      this.setState({ txtNome: event.target.value })
   }

   persistName = () => {
      this.setState({ nome: this.state.txtNome })
   }
   render() {

      const renderForm = () => {
         return (
            <div>
               Nome : <input type="text" value={this.state.nome} onChange={this.changetxtName} />
               <button onClick={this.persistName} >Salvar</button>
            </div>
         );
      }

      const renderTxt = () => {
         return (
            <div>
               <p>
                  Óla {this.state.nome}
               </p>
            </div>

         );
      }


      return !this.state.nome ? renderForm() : renderTxt();

   }
}

export default App4;
