/* 
O que será abordado nesse desafio:

- Variáveis;
- Operações matemáticas;
- Operadores comparativos;
- Condicional.

Nesse desafio, você irá solicitar ao usuário que ele insira **dois números** e, a partir daí, calcular:

- [ ]  A soma dos dois números;
- [ ]  A subtração dos dois números;
- [ ]  A multiplicação dos dois números;
- [ ]  A divisão dos dois números;
- [ ]  O resto da divisão dos dois números;

Fácil até aqui, né? Bora se desafiar? 

- [ ]  Verifique se a soma dos dois números é par ~~(ou ímpar)~~;
- [ ]  Verifique se os dois números inseridos são iguais ~~(ou diferentes)~~.  */




let primeiroNumero = Number(prompt("Digite o primeiro número: "));
let segundoNumero = Number(prompt("Digite o segundo número: "));

let soma = primeiroNumero + segundoNumero;
let subtracao = primeiroNumero - segundoNumero;
let multiplicacao = primeiroNumero * segundoNumero;
let divisao = primeiroNumero / segundoNumero;
let restoDivisao = primeiroNumero % segundoNumero

alert(`A soma dos dois números é: ${soma}`);
alert(`A subtração dos dois números é: ${subtracao}`);
alert(`A multiplicação dos dois números é: ${multiplicacao}`);
alert(`A divisão dos dois números é: ${divisao}`);
alert(`O resto da divisão é: ${restoDivisao}`);

if(restoDivisao === 0){
    alert(`A soma dos dois números é par: ${soma}`)
}else{
    alert(`A soma dos dois números é impar: ${soma}`)
}

if(primeiroNumero === segundoNumero){
    alert(`Os dois números inseridos são iguais!`)
}else{
    alert(`Os dois números inseridos são diferentes!`)
}