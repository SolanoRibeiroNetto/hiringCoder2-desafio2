function salvarForm(id) {
   switch (id) {
      case 'produto':

         let descricao = document.getElementById("descricao").value;
         let marca = document.getElementById("nome_produto").value;
         let fornecedor = document.getElementById("fornecedor").value;
         let preco_atacado = document.getElementById("preco_atacado").value;
         let preco_varejo = document.getElementById("preco_varejo").value;

         let dados_produto = {
            descricao,
            nome_produto,
            fornecedor,
            preco_atacado,
            preco_varejo,
         }

         let produtoJson = JSON.stringify(dados_produto);
         localStorage.setItem("produtos", produtoJson);

         break;

      case 'cliente':

         let nome = document.getElementById("nome").value;
         let cpf = document.getElementById("cpf").value;
         let data_nascimento = document.getElementById("data_nascimento").value;
         let telefone = document.getElementById("telefone").value;
         let email = document.getElementById("email").value;
         let cep = document.getElementById("cep").value;
         let endereco = document.getElementById("endereco").value;
         let numero = document.getElementById("numero").value;
         let complemento = document.getElementById("complemento").value;
         let bairro = document.getElementById("bairro").value;
         let cidade = document.getElementById("cidade").value;
         let estado = document.getElementById("estado").value;

         let dados_cliente = {
            nome,
            cpf,
            data_nascimento,
            telefone,
            email,
            cep,
            endereco,
            numero,
            complemento,
            bairro,
            cidade,
            estado,
         }

         let clientesJson = JSON.stringify(dados_cliente);
         localStorage.setItem("clientes", clientesJson);

         break;
   }
}
