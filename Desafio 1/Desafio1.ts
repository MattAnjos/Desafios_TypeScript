// Como podemos rodar isso em um arquivo .ts sem causar erros? 

interface IEmployee{
    code:number;
    name:string;
}

let employee= {} as IEmployee;
employee.code = 10;
employee.name = "John";

//or

let employee2:IEmployee={
    code:10,
    name:'Jhon'
}

//or

let employee3 : {code:number,name:string} = {
    code:10,
    name:'Jhon'
};
