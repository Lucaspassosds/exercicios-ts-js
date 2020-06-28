type Codigo = 100 | 200 | 300 | 400 | 500 | 600;

class Produto {
    descricao: string;
    preco: number;

    constructor(descricao, preco){
        this.descricao = descricao;
        this.preco = preco;
    }
}

const calcularPreco = (codigo : Codigo, quantidade: number) : number => {

    const produtos = {
        100: new Produto('Cachorro Quente', 3.00),
        200: new Produto('Hamburguer Simples', 4.00),
        300: new Produto('Cheeseburguer', 5.50),
        400: new Produto('Bauru', 7.50),
        500: new Produto('Refrigerante', 3.50),
        600: new Produto('Suco', 2.80),
    }

    if(produtos[codigo]){
        return produtos[codigo].preco * quantidade;
    }

};

console.log('R$'+calcularPreco(400, 12));