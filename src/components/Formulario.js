import React from 'react';

class Formulario extends React.Component {
   constructor(props) {
      super(props);
      this.state = { nome: '', linguagem: 'JavaScript', tipo: 'programador', dedico: true, bio: '' }

      this.handleSubmit = (event) => {
         event.preventDefault();

         console.log(this.state);
      }

      this.changeName = (event) => {
         this.setState({ nome: event.target.value });
      }

      this.changeSelect = (event) => {
         this.setState({ linguagem: event.target.value });
      }

      this.changeRadio = (event) => {
         this.setState({ tipo: event.target.value });
      }

      this.changeChecbox = (event) => {
         this.setState({ dedico: event.target.checked });
      }

      this.changeBio = (event) => {
         this.setState({ bio: event.target.value });
      }
   }

   render() {
      return (
         <div>
            <form action="" onSubmit={this.handleSubmit}>
               <label htmlFor="nome">
                  Nome : <input type="text" value={this.state.nome} onChange={this.changeName} />
               </label>
               <br />
               <label>
                  Linguagem Favorita
                  <select value={this.state.linguagem} onChange={this.changeSelect}>
                     <option>JavaScript</option>
                     <option>Python</option>
                     <option>C++</option>
                  </select>
               </label>
               <br />
               <label>
                  Sou:
                  <input type="radio" checked={this.state.tipo == 'programador'} onChange={this.changeRadio} value="programador" />Programador
                  <input type="radio" checked={this.state.tipo == 'estudante'} onChange={this.changeRadio} value="estudante" />Estudante
               </label>
               <br />
               <label>
                  <input type="checkbox" checked={this.state.dedico} onChange={this.changeChecbox} />Dedico 8/h semanais aos estudos
               </label>
               <br />
               <label>
                  Bio :
                  <textarea cols="50" value={this.state.bio} onChange={this.changeBio}></textarea>
               </label>
               <br />
               <input type="submit" value="Salvar" />
            </form>
         </div>
      );
   }
}

export default Formulario;
