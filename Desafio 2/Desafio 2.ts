// Como podemos melhorar o esse código usando TS? 

/*Código Original

/*let pessoa1 = {};
pessoa1.nome = "maria";
pessoa1.idade = 29;
pessoa1.profissao = "atriz"

let pessoa2 = {}
pessoa2.nome = "roberto";
pessoa2.idade = 19;
pessoa2.profissao = "Padeiro";

let pessoa3 = {
    nome: "laura",
    idade: "32",
    profissao: "Atriz"
};

let pessoa4 = {
    nome = "carlos",
    idade = 19,
    profissao = "padeiro"
}
*/ 

//Soluçao

interface IPessoa{
    nome:string;
    idade:number;
    profissao: 'Padeiro'|'Atriz';
}

let pessoa1 = {} as IPessoa;
pessoa1.nome = "maria";
pessoa1.idade = 29;
pessoa1.profissao = "Atriz"

let pessoa2 = {} as IPessoa;
pessoa2.nome = "roberto";
pessoa2.idade = 19;
pessoa2.profissao = "Padeiro";

let pessoa3: IPessoa = {
    nome: "laura",
    idade: 32,
    profissao: "Atriz"
};

let pessoa4: IPessoa = {
    nome : "carlos",
    idade : 19,
    profissao : "Padeiro"
}