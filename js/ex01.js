

var x = parseInt( Math.random() *100)

do{

var valor= parseInt(prompt("Digite um número entre 1 e 100"))


if(x == valor){
    alert("Parabéns, Você Acertou!")
}

else if(valor > x && valor <= 100 && valor>=1){
    alert("Muito Alto!")
}

else if(valor < x && valor <= 100 && valor>=1){
    alert("Muito Baixo!") 
}

else{
    alert("Número inválido!")
}


} while(x != valor)








