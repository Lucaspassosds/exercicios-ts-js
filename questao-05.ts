function arredondarComoDinheiro(valor : number){
    console.log('R$'+valor.toFixed(2).toString().replace('.', ','));
}

arredondarComoDinheiro(0.300000004);