import React, { useState } from 'react';

export default function App1f() {

   const [pessoa, setPessoa] = useState({ nome: 'Lucas', idade: '25' });

   const onClick = () => { setPessoa({ nome: 'Luis' }); console.log(pessoa) };

   return (<h1 onClick={onClick}>{pessoa.nome}</h1>)
}