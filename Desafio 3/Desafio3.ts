// O código abaixo tem alguns erros e não funciona como deveria. Você pode identificar quais são e corrigi-los em um arquivo TS?

let botaoAtualizar = document.getElementById('atualizar-saldo') as HTMLElement;
let botaoLimpar = document.getElementById('limpar-saldo') as HTMLElement;
let soma = document.getElementById('soma') as HTMLInputElement;
let campoSaldo = document.getElementById('campo-saldo') as HTMLElement;

campoSaldo.innerHTML = '0';

function somarAoSaldo(soma:number,saldo:number):void {
    if(!isNaN(soma)){
        saldo += soma;
        campoSaldo.innerHTML=String(saldo);
        limparsoma();
    }
    else{
        alert("Digite um numero");
        limparsoma();
    }
    

}

function limparsoma():void{
    soma.value='';
}

function limparSaldo():void {
    campoSaldo.innerHTML = '0';
}

botaoAtualizar.addEventListener('click', function ():void {
    somarAoSaldo(Number(soma.value), Number(campoSaldo.innerHTML));
});

botaoLimpar.addEventListener('click', function ():void {
    limparSaldo();
});

/**
    <h4>Valor a ser adicionado: <input id="soma"> </h4>
    <button id="atualizar-saldo">Atualizar saldo</button>
    <button id="limpar-saldo">Limpar seu saldo</button>
    <h1>"Seu saldo é: " <span id="campo-saldo"></span></h1>
 */