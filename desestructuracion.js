const deadpool = {
    nombre: 'Wade',
    apellido: 'Wilson',
    poder: 'Regeneracion',
    edad: 50,
    getNombre: function(){
        return `${this.nombre} ${this.apellido}, poder ${this.poder}`;
    }
}

// desestructuracion en varia consantes
const {nombre, apellido, poder, edad = 2} = deadpool;

console.log(nombre, apellido, poder, edad);

// en javascript cualquier variable sin valor es undefined

// obtencion de ciertos valores de un objeto en el parametro
function imprimeHeroe({nombre, apellido, poder, edad = 2}){

    console.log('Funcion imprime ',nombre, apellido, poder, edad);

}
imprimeHeroe(deadpool);

// Desestructuracion de arreglo
const heroes = ['Deadpool', 'Supemman', 'Spiderman'];
const [, , h3] = heroes;

console.log('Heroes',  h3);