// tsc array.ts && node array.js

const arrayNumber = [1, 2, 4, 2, 6];

//tratamento de array

for (const number of arrayNumber) {
    console.log('item do array com for:', number)
}

arrayNumber.map(function (number) {
    console.log('item do array com map:', number)
})

// quando trabalhamos com arrow funcition em um map filter ou find 
arrayNumber.map((item, index, array) => {
    // nesses espaço trabalhamos com os faleres e podemos retornar um novo valor modificado 

    // alterações feitas aki não removem nada
});

arrayNumber.map((number) => {
    console.log('item do array com map e ()=>:', number)
})

// todos trabalham do mesmo jeito pegando um array e a cada etapa entregando um valor 


// filter e find

const filter = arrayNumber.filter((number, i) => {
    console.log('filter item index:', i)
    return number == 2;
})
const find = arrayNumber.find((number, i) => {
    console.log('find item index:', i)
    return number == 2;
})
console.log('filter:', filter);
console.log('find:', find);

// ambos retornam os item q tiverem returno true

// find trabalha termina a busca no primeiro resultado
