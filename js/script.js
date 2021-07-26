const form = document.getElementById('form');

form.addEventListener('submit', (event) => {
   event.preventDefault();
   let nome = document.getElementById('nome').value;
   let email = document.getElementById('nome').value;
   let data = {
      nome,
      email,
   }
   let convertData = JSON.stringify(data);

   localStorage.setItem('lead', convertData);

   if (nome != "" && email != "") {
      document.getElementById('content').innerHTML = '<p>Email Cadastrado.</p>'

   }
})