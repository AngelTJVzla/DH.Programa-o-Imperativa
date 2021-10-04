function validarSenha(senha = 1234) {
  if (senha == 1234) {
    console.log("ACESSO PERMITIDO");
  } else {
    console.log("ACESSO NEGADO");
  }
}

validarSenha();





let senha = 1234;
let validarNovaSenha = senha === 1234 ? "Senha válida" : "Senha inválida";
console.log(validarNovaSenha);





function indiqueOMaior(a, b) {
  if (a > b) {
    console.log(a + " maior que " + b);
  } else if (a < b) {
    console.log(a + " menor que " + b);
  } else {
    console.log(a + " e " + b + " são iguais");
  }
}

indiqueOMaior(14, 5);





function qualEOMes(numero) {
  switch (numero) {
    case 1 || 01:
      console.log("Janeiro");
      break;
    case 2 || 02:
      console.log("Fevereiro");
      break;
    case 3 || 03:
      console.log("Março");
      break;
    case 4 || 04:
      console.log("Abril");
      break;
    case 5 || 05:
      console.log("Maio");
      break;
    case 6 || 06:
      console.log("Junho");
      break;
    case 7 || 07:
      console.log("Julho");
      break;
    case 8 || 08:
      console.log("Agosto");
      break;
    case 9 || 09:
      console.log("Setembro");
      break;
    case 10:
      console.log("Outubro");
      break;
    case 11:
      console.log("Novembro");
      break;
    case 12:
      console.log("Dezembro");
      break;
    default:
      console.log("Não é um mês válido");
  }
}
qualEOMes(7);





function microondas(comida, tempo) {
  switch (comida) {
    case "Pipoca":
      if (tempo >= 30) {
        console.log("Kabumm");
      } else if (tempo >= 20) {
        console.log("Comida queimou");
      } else if (tempo < 10) {
        console.log("Tempo insuficiente");
      } else {
        console.log("Prato pronto, bom apetite!");
      }
      break;

    case "Macarrão":
      if (tempo >= 24) {
        console.log("Kabumm");
      } else if (tempo >= 16) {
        console.log("Comida queimou");
      } else if (tempo < 8) {
        console.log("Tempo insuficiente");
      } else {
        console.log("Prato pronto, bom apetite!");
      }
      break;

    case "Carne":
      if (tempo >= 45) {
        console.log("Kabumm");
      } else if (tempo >= 30) {
        console.log("Comida queimou");
      } else if (tempo < 15) {
        console.log("Tempo insuficiente");
      } else {
        console.log("Prato pronto, bom apetite!");
      }
      break;

    case "Feijão":
      if (tempo >= 36) {
        console.log("Kabumm");
      } else if (tempo >= 24) {
        console.log("Comida queimou");
      } else if (tempo < 12) {
        console.log("Tempo insuficiente");
      } else {
        console.log("Prato pronto, bom apetite!");
      }
      break;

    case "Brigadeiro":
      if (tempo >= 24) {
        console.log("Kabumm");
      } else if (tempo >= 16) {
        console.log("Comida queimou");
      } else if (tempo < 8) {
        console.log("Tempo insuficiente");
      } else {
        console.log("Prato pronto, bom apetite!");
      }
      break;

    default:
      console.log("prato inexistente");
  }
}
microondas("Brigadeiro", 20);
