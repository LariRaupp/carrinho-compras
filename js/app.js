let totalGeral;
limpar();

function adicionar() {
let produto = document.getElementById('produto').value;
let quantidade = document.getElementById('quantidade').value;


if (isNaN(quantidade) || quantidade <= 0) {
    alert("Insira uma quantidade válida.");
    document.getElementById('quantidade').value = 0
    return;
}

let nomeProduto = produto.split('-')[0];
let valorProduto = produto.split('R$')[1];
let preco = quantidade * valorProduto;
let listaCarrinho = document.getElementById('lista-produtos');

listaCarrinho.innerHTML = listaCarrinho.innerHTML + `<section class="carrinho__produtos__produto">
<span class="texto-rosa">${quantidade}x</span> ${nomeProduto}<span class="texto-rosa">R$${preco}</span>
</section>`;

totalGeral = totalGeral + preco;
let campoTotal = document.getElementById('valor-total');
campoTotal.textContent = `R$ ${totalGeral}`;
document.getElementById('quantidade').value = 0;

}  
    
function limpar() {
    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').innerHTML = 'R$ 0';

};