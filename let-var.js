
// var es global, let es local si declaramos un let anidado con el mismo nombre, esta solo pertenece a dicha estructura anidada

var name = 'Pancho'
if( true){
    var name = 'Juan'
}
console.log(name); // Imprime  Juan: 2

// let
let apellido = 'Sanchez'
if( true){
    let apellido = 'Cardenas'
}
console.log(apellido); // Imprime  Sanchez: 1

// No se deberia  usar var ya que incluso se puede usar antes de declarar
