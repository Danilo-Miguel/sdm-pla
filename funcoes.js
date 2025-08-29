exibirInfos("Ana");
const exibirInfos = (nome) => "Olá" + nome;
// const exibirInfos = (nome) => "Dan";



const exibirAltura = (altura) => 1.5;

// console.log(exibirAltura("1,92"));

// const exibirCurso = (nome) => "O curso de " + nome + " tem duração de  8 Semestres";
const exibirCurso = (nome) => "O"

//const Curso = (nome, duração) => "O curso de " + nome + " tem duração de  " + duração + " Semestres";

// console.log(exibirCurso("Ciência da Computação", 8));

function executarFuncoes(exibir, alturaEmCm, Curso) {
    // console.log(exibir("Ana", 25));
    // console.log(alturaEmCm("1,92"));
    // console.log(Curso("Ciência da computação", 8));

    console.log(exibir)
    console.log(alturaEmCm)
    console.log(Curso)
}

    executarFuncoes(exibirInfos(), exibirAltura(), exibirCurso());




    function cumprimeitar(nome= "Felipe") {
        return "Olá " + nome;
    }

    (function(){
        console.log("Função auto invocada");
    })();

    function processar(valor,callback){
        const resultado = callback(valor)
        console.log(resultado);
    }

    async function processarAsync(valor,callback){
        const resultado = await callback(valor)
        console.log(resultado);
    }

/*arrow function
/ const multiplicar = (a, b) => a * b;

function multiplicarDeclarativa(a, b) {
    return a * b;
}

console.log(multiplicar(5, 10));
console.log(multiplicar(2, 8));
console.log(multiplicar(7, 3));

/*console.log(saudacao("Felipe"));

// Função anônima
const saudacaoAnonima = function(nome) {
    return a + b;
};

function simples(){
    let a = 5;
    let b = 10;
    let c = a + b;
    console.log("O  valor de c é: " + c);
}

function somar(a, b) {
    return a + b;
}

console.log(somar(5, 10));*/