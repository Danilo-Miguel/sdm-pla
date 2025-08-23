// função declarativa
function saudacao(nome){
    return `Ola, ${nome}!`
}
console.log(saudacao('Arthur'))

// função anônima
const soma = function(a, b) {
    return a + b
}
console.log(soma(7, 7))

// função simples 

function simp(a, b){
    const result = a + b
    console.log('O valor do resultado é : ',  result)
    return result
}

simp(7, -7)  