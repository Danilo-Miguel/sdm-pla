let numeros = [1, 2, 3, 4, 5];
console.log("Array original", numeros);
console.log(numeros[0]);
console.log(numeros[2]);

let frutas = ["Banana", "Maçã", "Laranja", "Uva"]; 
frutas.push("Abacaxi"); //adiciona um elemento no final do array
frutas.unshift("Manga"); //adiciona um elemento no início do array
frutas.pop(); //remove o último elemento do array
frutas.shift(); //remove o primeiro elemento do array
frutas.splice(1, 1); //remove o elemento na posição 1 (Maçã)
frutas.splice(1, 0, "Morango"); //adiciona "Morango" na posição 1, sem remover nenhum elemento
frutas.splice(2, 1, "Pera"); //remove o elemento na posição 2 (Laranja) e adiciona "Pera" no lugar

frutas.forEach((fruta, index) => {
    console.log(`indice' ${index}: ${fruta}`);
});
console.log(frutas);
console.log(frutas[3]);

let misto = [42, "Texto", true, null, { chave: "Valor" }, [1, 2, 3]];
console.log(misto);
console.log("Array misto", misto.length); 
console.log(misto[misto.length - 1]);

for(let i = 0; i < frutas.length; i++) {
    console.log(`Fruta no índice ${i}: ${frutas[i]}`);
}

for(let fruta of frutas){
    console.log(fruta)
}

for(let indice in frutas){
    console.log(`índice ${indice}: ${frutas[indice]}`);
}

frutas.pop();
frutas.shift();
frutas.splice(1, 3);
console.log(frutas);

let mapa = new Map();
mapa.set("nome", "João");
mapa.set("altura", 1,75);
mapa.set("cidade", "São Paulo");

console.log(mapa.get("nome"));

console.log(mapa.has("idade"));

mapa.delete("nome");
mapa.clear();
console.log(mapa.size);

let conjunto = new Set([1, 2, 3, 4, 5, 6, 7]);
console.log(conjunto)
conjunto.add(8);
conjunto.delete(3);

conjunto.forEach(valor => console.log(valor));

let pessoa = {
    nome: "Ana",
    idade: 30,
    profissao: "programadora",
    endereco:{
        rua: "Rua A",
        numero: 100
    }
};

console.log(pessoa.nome);
console.log(pessoa["idade"]);
console.log(pessoa.endereco.rua);

delete pessoa.endereco;