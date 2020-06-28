function valorNotas(valor : number) : void {
    const notas = {
      100: 0,
      50: 0,
      10: 0,
      5: 0,
      1: 0,
    };
    
    //cria um array com todos os tipos de nota em ordem crescente
    const notasKeys = Object.keys(notas).map(valor => Number(valor));
    
    //deixa o array decrescente(de 100 a 1)
    notasKeys.reverse();
    
    //itera pelo array
     notasKeys.forEach(nota =>{
      if(valor >= nota){
        notas[nota] = notas[nota] + Math.floor(valor/nota);
        valor = valor % nota;
      }
    });
    
     const notasEntries = Object.entries(notas);
     for(const [nota, qtd] of notasEntries){
        if(qtd != 0){
            console.log(qtd + ' nota(s) de R$'+ nota);
          }
     }
    
  
  }
  
  valorNotas(101);