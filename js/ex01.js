

var x = parseInt( Math.random() *100)
var tentativas = 0
do{

var valor= parseInt(prompt("Digite um número entre 1 e 100. Você tem 10 tentativas. Até agora foram feitas " + tentativas + " tentativas."))


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
tentativas++

} while(x != valor && tentativas < 10)








