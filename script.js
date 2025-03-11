class Pessoa {
    #salario
    constructor(nome, profissao, salario){

        this.nome = nome;
        this.profissao = profissao;
        this.#salario = this.salario;
    }
    apresenta () {
        return `Olá sou ${this.nome} e trabalho como ${this.profissao} no hospital.`;
    }
}

class Dona extends Pessoa{
    comandar() { 
            return`Meu nome é ${this.nome} e comando e ${this.profissao} o hospital Princeton-Plainsboro.`;
    }
}

class Chefe extends Pessoa{
    chefiar() { 
        return `Doutor ${this.nome} chefia o setor de ${this.profissao} no hospital Princeton-Plainsboro.`;
    }
}

class Funcionario extends Pessoa{
    apresentar () { 
        return `O(a) funcionário(a) ${this.nome} trabalha como ${this.profissao} junto ao Doutor House no hospital Princeton-Plainsboro.`;
    }
}



const cuddy = new Dona("Lisa Cuddy", "administro", 36.060);


const house = new Chefe("Gregory House", "infectologia", 36.916);
const wilson = new Chefe("James Wilson", "oncologia", 33.055);


const foreman = new Funcionario("Eric Foreman", "neurologista", 25.083);
const cameron = new Funcionario("Allison Cameron", "imunologista", 19.580);
const chase = new Funcionario("Robert Chase", "cirurgião", 30.166);
const thirteen = new Funcionario("Remy Hadley", "internista", 10.916);
const taub = new Funcionario("Chris Taub", "cirurgião plástico", 18.582);
const kutner = new Funcionario("Lawrence Kutner", "especialista em Medicina Esportiva", 15.600);


cuddy.comandar();

house.chefiar();
wilson.chefiar();

foreman.apresentar();
cameron.apresentar();
chase.apresentar();
thirteen.apresentar();
taub.apresentar();
kutner.apresentar();


function exibir(mensagem) {
    const output = document.getElementById("output");
    const p = document.createElement("p");
    p.textContent = mensagem;
    output.appendChild(p);
}


exibir(cuddy.comandar());

exibir(house.chefiar());
exibir(wilson.chefiar());

exibir(foreman.apresentar());
exibir(cameron.apresentar());
exibir(chase.apresentar());
exibir(thirteen.apresentar());
exibir(taub.apresentar());
exibir(kutner.apresentar());