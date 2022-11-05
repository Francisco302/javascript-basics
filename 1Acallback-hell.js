const empleados = [
    {
        id: 1,
        nombre: 'Juan'
    },
    {
        id: 2,
        nombre: 'Daniel'
    },
    {
        id: 3,
        nombre: 'Maria'
    },
]

const getEmpleadoById = ( id , callback) =>{
    const empleado = empleados.find( e => e.id === id )

    if(empleado){
        callback(null, empleado);        
    }else{
        callback(`Empleado ${id} no existe`);
    }
};
// Construimos como segun argumento la funcion que se va a enviar, err va a permitir saber si dio un errorla ejecuccion
getEmpleadoById(1, (err, empleado) => {
    if(err){
        console.log('ERROR!');
    }else{
        console.log('Empleado existe');
        console.log(empleado);
    }
})