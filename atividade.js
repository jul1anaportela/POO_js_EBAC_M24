function Pessoa(nome) {
    this.nome = nome;
}

function Funcionario(nome, cargo, salario, turma) {
    Pessoa.call(this, nome)
    
    this.cargo = cargo;
    this.turma = turma;
    let _salario = salario;

    this.getSalario = function() {
        return _salario;
    }

    this.setSalario = function(valor) {
        if (typeof valor === 'number') {
            _salario = valor;
        }
    }

    this.aumento = function() {
        const novoSalario = _salario * 1.1;
        _salario = novoSalario;
    }

}

function Professor(nome) {
    Funcionario.call(this, nome, "professor", 4000, "t-303")

    this.aumento = function() {
        const novoSalario = this.getSalario() * 1.15;
        this.setSalario(novoSalario);
    }

    this.ministrarAula = function() {
        console.log(this.nome + " está ministrando aula")
    }
}

function Coordenador(nome) {
    Funcionario.call(this, nome, "coordenador", 8000, ["t-303", "t-202", "t-101"])

    this.aumento = function() {
        const novoSalario = this.getSalario() * 1.20;
        this.setSalario(novoSalario)
    }

    this.coordenarTurmas = function() {
        console.log(this.nome + " está fazendo as atividades de coordenação de turmas.")
    }
}


const funcionario1 = new Funcionario("Jorge", "porteiro", 2500, null)
const funcionario2 = new Professor("Mateus")
const funcionario3 = new Coordenador("Jonas")


console.log(funcionario1.getSalario())
funcionario1.aumento
console.log(funcionario1)

console.log(funcionario2.getSalario())
funcionario2.aumento
funcionario2.ministrarAula()
console.log(funcionario2)

console.log(funcionario3.getSalario())
funcionario3.aumento
funcionario3.coordenarTurmas()
console.log(funcionario3)


