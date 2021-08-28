// - Precisamos desenvolver um menu para um microondas super veloz, onde teremos 5 opções de comida com seus respectivos tempos pré-definidos. 

//       1 - Pipoca – 10 segundos (padrão);
//       2 - Macarrão – 8 segundos (padrão);
//       3 - Carne – 15 segundos (padrão);
//       4 - Feijão – 12 segundos (padrão);
//       5 - Brigadeiro – 8 segundos (padrão); 

// - O usuário poderá alterar o tempo padrão, aumentando ou diminuindo de acordo com sua vontade. Se o tempo informado for maior que 2x o necessário, exibir mensagem que a comida queimou.
// - Se o tempo for menor que o padrão, exibir a mensagem: "tempo insuficiente"; 
// - Opções não listadas no menu, devem exibir uma mensagem de erro: "Prato inexistente";
// - Se o tempo for 3x maior que o necessário para o prato, o microondas deve exibir a mensagem: “kabumm”;
// - No final de cada tarefa, o microondas deverá exibir a mensagem: "Prato pronto, bom apetite!!!"

// ** - CRIANDO UMA LISTA (ARRAY) DE PRATOS QUE FICARÁ ARMAZENADA NA VARIÁVEL "cardapio"
var cardapio = ['pipoca', 'macarrão', 'carne', 'feijão', 'brigadeiro'];

// ** - CRIANDO A FUNÇÃO PARA PREPARAR A COMIDA
// ** - A FUNÇÃO RECEBE 2 PARÂMETROS: comida E tempoDePreparo. ESTES PARÂMETROS SÃO PASSADOS DIRETAMENTE NA FUNÇÃO
function preparoComida(comida, tempoDePreparo) {

    // ** - CRIANDO UMA VARIÁVEL PARA O TEMPO DE PRAPARO PADRÃO DE CADA PRATO. ELA COMEÇA SEM VALOR
    let tempoDePreparoPadrao;

    // ** - VERIFICANDO SE O VALOR DE comida EXISTE DENTRO DA LISTA DE ITENS DO cardapio ATRAVÉD DO MÉTODO includes()
    // ** - O MÉTODO include() VAI VERIFICAR TODOS OS ITENS DE CARDAPIO E CASO comida QUE FOI PASSADA COMO PARÂMETRO PARA includes() (includes = INCLUI) 
    if(cardapio.includes(comida)) {

            // ** - CRIANDO UM BLOCO DE CÓDIGO SWITCH QUE FUNCIONARÁ DA SEGUINTE MANEIRA:
    // **   1 - PRIMEIRO IRÁ VERIFICAR QUAL O VALOR DE comida
    // **   2 - CASO O VALOR DE comida SEJA IGUAL A UM DOS PRATOS DEFINIDOS ANTERIORMENTE, SERÁ ATRIBUIDO UM  VALOR PARA A VARIAVEL tempoDePreparoPadrao, ANTERIORMENTE VAZIA
    switch (comida) {
        case "pipoca": // ** se o valor de comida for 'pipoca', por exemplo, o valor de tempoDePreparoPadrao será 10
            tempoDePreparoPadrao = 10
            break;
        case "macarrão":
            tempoDePreparoPadrao = 8
            break;
        case "carne":
            tempoDePreparoPadrao = 15
            break;
        case "feijão":
            tempoDePreparoPadrao = 12
            break;
        case "brigadeiro":
            tempoDePreparoPadrao = 8
            break;
    }

    // ** - VERIFICANDO E COMPARANDO OS TEMPOS DE PREPARO
    if(tempoDePreparo > tempoDePreparoPadrao * 2 && tempoDePreparo < tempoDePreparoPadrao * 3) {

        console.log('A comida queimou');

    } else if(tempoDePreparo > tempoDePreparoPadrao * 3) {

        console.log('KABOOOM! 🔥');

    } else if(tempoDePreparo < tempoDePreparoPadrao) {

        console.log('Tempo insuficiente');

    } else {

        console.log('Bom apetite');

    }

    } else {

       // ** caso o valor de 'comida' não corresponda a nenhum dos valores de do 'cardapio', a mensagem de 'Prato inexistente' será exibida
        console.log("Prato inexistente")

    }

}

preparoComida('carne', 15);