// Coleta os números
var n1 = Number(prompt("Digite o primeiro número (n1):"));
var n2 = Number(prompt("Digite o segundo número (n2):"));

// Coleta a operação desejada
var oq = String(prompt('O que você quer fazer com esses números?\nSoma: "+"; \nSubtração: "-"; \nDivisão inteira: "/"; \nMultiplicação: "*"; \nResto da divisão: "%"; \nPotenciação: "**".'));

// Variável para armazenar o resultado
var resultado;
var operacaoNome;

// Estrutura de controle para realizar a operação correta
if (oq === "+") {
    resultado = n1 + n2;
    operacaoNome = "Soma";
} else if (oq === "-") {
    resultado = n1 - n2;
    operacaoNome = "Subtração";
} else if (oq === "*") {
    resultado = n1 * n2;
    operacaoNome = "Multiplicação";
} else if (oq === "/") {
    // Verifica se n2 é diferente de zero para evitar divisão por zero
    if (n2 !== 0) {
        resultado = n1 / n2;
        operacaoNome = "Divisão";
    } else {
        resultado = "Indefinida (Divisão por zero)";
        operacaoNome = "Divisão";
    }
} else if (oq === "%") {
    resultado = n1 % n2;
    operacaoNome = "Resto da Divisão";
} else if (oq === "**") {
    resultado = n1 ** n2;
    operacaoNome = "Potenciação";
} else {
    // Caso o usuário digite um símbolo inválido
    resultado = "Operação inválida!";
    operacaoNome = "";
}

// Exibe o resultado da operação
if (operacaoNome && resultado !== "Operação inválida!") {
    alert(`A ${operacaoNome} dos números ${n1} e ${n2} é: ${resultado}`);
} else if (resultado === "Operação inválida!") {
    alert(resultado);
} else {
     alert(`O resultado da ${operacaoNome} de ${n1} por ${n2} é: ${resultado}`);
}