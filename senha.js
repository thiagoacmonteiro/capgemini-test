// Achei o enunciado da questão um pouco confuso, pois cita as verificações de tipo de caracteres, mas o exemplo de
// resolução do exercício não considera essas informações, por isso executei a função de duas maneiras. A primeira
// 'verificaSenhaSimples' age exatamente como o exemplo mostra, recebendo a string e retornando apenas o número de
// caracteres faltantes. A segunda 'verificaSenhaCompleta' considera todas as informações do enunciado e tem retornos
// mais explicativos. Basta comentar uma e descomentar a outra para verificar os diferentes resultados.

function verificaSenhaSimples(senha) {
  console.log(6 - senha.length)
}

verificaSenhaSimples('Ya3');

// Execute 'node senha' no terminal para ver o resultado da função acima


// Descomente o código abaixo, da linha 20 até a 34, comente o código acima, da linha 7 até a linha 11, salve o arquivo
// e execute 'node senha' no terminal para ver o resultado mais completo.
// O código abaixo verifica números, letras minúsculas, maiúsculas e caracteres especiais.

// function verificaSenhaCompleta(senha) {
//   const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()-+])[0-9a-zA-Z$*&@#]/

//   if (regex.test(senha)) {
//     if (senha.length > 5) {
//       return 'Senha forte';
//     } else {
//       return `Insira pelo menos mais ${6 - senha.length} caracteres`;
//     } 
//   }

//   return 'Sua senha deve conter pelo menos 1 letra minúscula, 1 maiúscula, 1 caracter especial e 1 número';
// }

// console.log(verificaSenhaCompleta('Ya3'));