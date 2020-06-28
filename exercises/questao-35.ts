function mostrarAdicao(pilha : Array<number>, adiciona: Array<number>) : void {
    adiciona.forEach(valor => pilha.push(valor));
    console.log(pilha);
}

mostrarAdicao([23,434,545,7], [45,68,087,4,5423]);