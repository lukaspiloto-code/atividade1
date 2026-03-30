//let n1 = 56;
//let n2 = 98;
//const soma = n1 + n2;
//const sub = n1 - n2;
//let mensagem =
 // 'O resultado da soma é {soma}, e o resultado da subtração é {sub}'
 //   .replace('{soma}', soma)
//    .replace('{sub}', sub);
//let msg2 =
 // soma >= 100 ? 'Sua soma é maior que 100' : 'Sua soma é menor que 100';
//let msg =
//  sub >= 100
 //   ? 'Sua subtração é maior que 100'
 //   : 'Sua subtração é menor que 100';
//console.log(mensagem);
//console.log(msg2);
//console.log(msg);


// LISTA DE EXERCÍCIOS: OPERADORES EM JAVASCRIPT
// =============================================

console.log("=== OPERADORES ARITMÉTICOS ===\n");

// 1. Soma
let num1 = 35;
let num2 = 15;
let soma = num1 + num2;
console.log(`Soma de ${num1} + ${num2} = ${soma}`);

// 2. Subtração
let resultadoSubtracao = 50 - 25;
console.log(`Subtração de 50 - 25 = ${resultadoSubtracao}`);

// 3. Multiplicação
let produto = 12 * 8;
console.log(`Multiplicação: 12 * 8 = ${produto}`);

// 4. Divisão
let quociente = 100 / 4;
console.log(`Divisão de 100 / 4 = ${quociente}`);


console.log("\n=== OPERADORES DE COMPARAÇÃO ===\n");

// 5. Igualdade (==)
console.log(`10 == 10 ? ${10 == 10}`);

// 6. Diferença (!=) com strings
let nome1 = "Maria";
let nome2 = "João";
console.log(`"${nome1}" != "${nome2}" ? ${nome1 != nome2}`);

// 7. Menor que (<)
console.log(`5 < 10 ? ${5 < 10}`);

// 8. Maior que (>)
let preco = 65;
console.log(`Preço (${preco}) > 50 ? ${preco > 50}`);

// 9. Menor ou Igual (<=)
let valor = 18;
console.log(`Valor (${valor}) <= 20 ? ${valor <= 20}`);

// 10. Maior ou Igual (>=)
let idade = 22;
console.log(`Idade (${idade}) >= 18 ? ${idade >= 18}`);


console.log("\n=== OPERADOR TERNÁRIO ===\n");

// 11. Atribuição Condicional
let nota = 8.5;
let resultado = nota >= 7 ? "Aprovado" : "Reprovado";
console.log(`Nota: ${nota} → Situação: ${resultado}`);

// 12. Verificação de Maioridade
let status = idade >= 18 ? "adulto" : "menor";
console.log(`Idade: ${idade} anos → Status: ${status}`);


console.log("\n=== TEMPLATE LITERALS ===\n");

// 13. Placeholder
let nome = "Ana";
console.log(`Olá, ${nome}!`);

// 14. Legibilidade com template literals
let produtoItem = "Fone de Ouvido";
let precoItem = 129.90;
let quantidade = 3;

let fraseCompra = `Você comprou ${quantidade} unidade(s) de ${produtoItem} por R$ ${precoItem} cada.`;
console.log(fraseCompra);


console.log("\n=== MENSAGEM PERSONALIZADA COMPLETA ===\n");

// 15. Mensagem Personalizada Completa
let nomePessoa = "Lucas";
let idadePessoa = 17;

let classificacao = idadePessoa >= 18 ? "adulto" : "menor de idade";

let mensagemFinal = `Olá, ${nomePessoa}! 
Você tem ${idadePessoa} anos e é considerado(a) ${classificacao}.
Tenha um excelente dia!`;

console.log(mensagemFinal);