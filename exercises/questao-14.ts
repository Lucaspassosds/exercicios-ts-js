function frutas(fruta: string){

    switch(fruta){
        case 'maca':
            console.log('Não vendemos esta fruta aqui');
            break;
        case 'kiwi':
            console.log('Estamos com Escassez');
            break;
        case 'melancia':
            console.log('3 reais o quilo');
            break;
        default:
            console.error('Não sei o que e isso');
    }

}

frutas('maca');
frutas('melancia');
frutas('cenoura');