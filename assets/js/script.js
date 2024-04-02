// Função para cadastrar um novo produto e exibir a lista de produtos
function cadastrarProduto() {
    // Obter os valores do novo produto do formulário
    var nome = document.getElementById("Nome do Produto").value;
    var valor = document.getElementById("Valor do Produto").value;

    // Criar uma nova linha na tabela de listagem de produtos
    var table = document.getElementById("tabelaProdutos").getElementsByTagName("tbody")[0];
    var newRow = table.insertRow();

    // Inserir células na nova linha
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);

    // Preencher as células com os valores do novo produto
    cell1.innerHTML = nome;
    cell2.innerHTML = "R$ " + parseFloat(valor).toFixed(2); // Formatando o valor como moeda

    // Exibir a tabela de listagem de produtos
    var productList = document.querySelector(".produto-lista");
    productList.style.display = "block";
}

// Selecionar o formulário de cadastro
var formCadastro = document.querySelector("form");

// Adicionar um ouvinte de evento para o envio do formulário
formCadastro.addEventListener("submit", function(event) {
    // Impedir o envio padrão do formulário
    event.preventDefault();
    // Chamar a função de cadastrar produto
    cadastrarProduto();
});
