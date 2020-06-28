function arredondarComoDinheiro(valor) {
    console.log('R$' + valor.toFixed(2).toString().replace('.', ','));
}
arredondarComoDinheiro(0.300000004);
