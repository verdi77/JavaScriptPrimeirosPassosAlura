console.log(`Trabalhando com listas`);
//const salvador = `Salvador`;
//const saoPaulo = `saoPaulo`;
//const rioDeJaneiro = `Rio de Janeiro`;

const listaDeDestinos = new Array(
    `Salvados`,
    `São Paulo`,
    `Rio de Janeiro`,
);

listaDeDestinos.push(`Curitiba`); // Adicionando um item na lista
console.log(`Destinos possíveis:`);
//console.log(salvador, saoPaulo, riodeJaneiro)
console.log(listaDeDestinos);

listaDeDestinos.splice(1,1);
console.log(listaDeDestinos);


console.log(listaDeDestinos[1], listaDeDestinos[0]);


