"use strict";
// O código abaixo tem alguns erros e não funciona como deveria. Você pode identificar quais são e corrigi-los em um arquivo TS?
let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo');
let soma = document.getElementById('soma');
let campoSaldo = document.getElementById('campo-saldo');
campoSaldo.innerHTML = '0';
function somarAoSaldo(soma, saldo) {
    if (!isNaN(soma)) {
        saldo += soma;
        campoSaldo.innerHTML = String(saldo);
        limparsoma();
    }
    else {
        alert("Digite um numero");
        limparsoma();
    }
}
function limparsoma() {
    soma.value = '';
}
function limparSaldo() {
    campoSaldo.innerHTML = '0';
}
botaoAtualizar.addEventListener('click', function () {
    somarAoSaldo(Number(soma.value), Number(campoSaldo.innerHTML));
});
botaoLimpar.addEventListener('click', function () {
    limparSaldo();
});
/**
    <h4>Valor a ser adicionado: <input id="soma"> </h4>
    <button id="atualizar-saldo">Atualizar saldo</button>
    <button id="limpar-saldo">Limpar seu saldo</button>
    <h1>"Seu saldo é: " <span id="campo-saldo"></span></h1>
 */ 