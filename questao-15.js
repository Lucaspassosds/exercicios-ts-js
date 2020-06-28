function revendaCarros(carro) {
    switch (carro) {
        case 'hatch':
            console.log('vendido!');
            break;
        case 'sedan':
        case 'motocicleta':
        case 'caminhonete':
            console.log('tem ctz que nao quer outro modelo?');
            break;
        default:
            console.log('nao vendemos isso aqui');
    }
}
revendaCarros('sedan');
revendaCarros('hatch');
revendaCarros('motoneta');
