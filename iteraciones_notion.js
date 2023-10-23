/*
EJERCICIO 1: (NOTION)
Haz un bucle y muestra por consola todos aquellos valores del array que incluyan la palabra "Camiseta". Usa la función .***includes*** de javascript.
*/

let products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta'];

for (let i = 0; i < products.length; i++) {
    if (products[i].includes("Camiseta")) {
        console.log('Ejercicio 1', products[i]);
    }
}

/*
EJERCICIO 2: (NOTION)
Comprueba en cada uno de los usuarios que tenga al menos dos trimestres aprobados y añade la propiedad isApproved a true o false en consecuencia. Una vez lo tengas compruébalo con un console.log.
*/


let alumns = [
    { name: 'Pepe Viruela', T1: false, T2: false, T3: true },
    { name: 'Lucia Aranda', T1: true, T2: false, T3: true },
    { name: 'Juan Miranda', T1: false, T2: true, T3: true },
    { name: 'Alfredo Blanco', T1: false, T2: false, T3: false },
    { name: 'Raquel Benito', T1: true, T2: true, T3: true }
];


for (let alumn of alumns) {
    let TrimestresAprobados = [alumn.T1, alumn.T2, alumn.T3] ;
        alumn.isApproved = TrimestresAprobados >= 2;
}
console.log('Ejercicio 2', alumns);


/* EJERCICIO 3: (NOTION)
Usa un bucle forof para recorrer todos los destinos del array. Imprime en un ***console.log*** sus valores. */

let placesToTravel = ['Japon', 'Venecia', 'Murcia', 'Santander', 'Filipinas', 'Madagascar'];

for (let place of placesToTravel) {
    console.log('Ejercicio 3', place);
}

/*
EJERCICIO 4: (NOTION)
Usa un **for...in** para imprimir por consola los datos del alienígena.. Puedes usar este objeto:
*/
let alien = {
    name: 'Wormuck',
    race: 'Cucusumusu',
    planet: 'Eden',
    weight: '259kg'
}

for (let k in alien) {
    console.log('Ejercicio 4', alien[k]);
}


/*
EJERCICIO 6: (NOTION)
Usa un bucle **for...** para recorrer todos los juguetes y elimina los que incluyan la palabra gato. Recuerda que puedes usar la función ***.includes()*** para comprobarlo.Puedes usar este array:
*/
let toys = [
    { id: 5, name: 'Buzz MyYear' },
    { id: 11, name: 'Action Woman' },
    { id: 23, name: 'Barbie Man' },
    { id: 40, name: 'El gato con Guantes' },
    { id: 40, name: 'El gato felix' }
];

for (let i = 0 ; i < toys.length; i++) {
    if (toys[i].name.includes('gato')) {
        toys.splice(i, 1); 
        i--;
    }
}
console.log('Ejercicio 6', toys);

/*
EJERCICIO 7: (NOTION)
Usa un bucle **for...of** para recorrer todos los juguetes y añade los que tengan más de 15 ventas (sellCount) al array popularToys. Imprimelo por consola.. Puedes usar este array:
*/
/* const popularToys = [];
const toys2 = [
	{id: 5, name: 'Buzz MyYear', sellCount: 10},
	{id: 11, name: 'Action Woman', sellCount: 24},
	{id: 23, name: 'Barbie Man', sellCount: 15},
	{id: 40, name: 'El gato con Guantes', sellCount: 8},
	{id: 40, name: 'El gato felix', sellCount: 35}
] */


