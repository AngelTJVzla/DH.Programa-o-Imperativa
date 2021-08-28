// // 1 - Escreva uma função utilizando uma estrutura básica de IF/ELSE que verifique uma senha. A senha válida é o número 1234. Devem ser impressas as seguintes mensagens:
// // 	- ACESSO PERMITIDO caso a senha seja válida.
// // 	- ACESSO NEGADO caso a senha seja inválida.
// // 1ra Função

const pass = '1234';

if (pass === '1234') {

    console.log(`ACESSO PERMITIDO`);

} else {

 
    console.log(`ACESSO NEGADO`);
}
// // 2 - Escreva uma função utilizando a estrutura IF/ELSE-IF/ELSE que receba dois inteiros e diga qual deles é o maior, qual deles é menor OU se são iguais.

// ** 2da função


var n1 = 8;
var n2 = 8;

function comparaNumeros(n1, n2) {

    if(n1 > n2) {

        console.log(`O número 1 é maior`);

    } else if(n1 < n2) {

        console.log(`O número 2 é maior`);

    } else {

        console.log('Os números são iguais');

    }
}
comparaNumeros(n1, n2);


// 3 - Escreva um programa utilizando a estrutura de switch que imprima o mês de acordo com o número fornecido.
// 	- Exemplo: quando envio o número 9, o retorno será: 'SETEMBRO'

// ** Programa switch

let numeroMes = 1;

function dizOMes(n) {

    switch (n) {

        case 1:
            console.log('Janeiro');
            break
        case 2:
            console.log('Fevereiro');
            break
        case 3:
            console.log('Março');
            break
        case 4:
            console.log('Abril');
            break
        case 5:
            console.log('Maio');
            break
        case 6:
            console.log('Junho');
            break
        case 7:
            console.log('Julho');
            break
        case 8:
            console.log('Agosto');
            break
        case 9:
            console.log('Setembro');
            break
        case 10:
            console.log('Outubro');
            break
        case 11:
            console.log('Novembro');
            break
        case 12:
            console.log('Dezembro');
            break
        default:
            console.log('Mês inválido');
            
    }

}

dizOMes(numeroMes);

// 4 - Reescreva função do exercício 1, utilizando o operador ternário.

// ** Operador Terciario

console.log(pass === '1234' ? 'ACESSO PERMITIDO' : 'ACESSO NEGADO');
