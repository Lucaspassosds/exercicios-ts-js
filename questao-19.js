var Produto = /** @class */ (function () {
    function Produto(descricao, preco) {
        this.descricao = descricao;
        this.preco = preco;
    }
    return Produto;
}());
var calcularPreco = function (codigo, quantidade) {
    var produtos = {
        100: new Produto('Cachorro Quente', 3.00),
        200: new Produto('Hamburguer Simples', 4.00),
        300: new Produto('Cheeseburguer', 5.50),
        400: new Produto('Bauru', 7.50),
        500: new Produto('Refrigerante', 3.50),
        600: new Produto('Suco', 2.80)
    };
    if (produtos[codigo]) {
        return produtos[codigo].preco * quantidade;
    }
};
console.log('R$' + calcularPreco(400, 12));
