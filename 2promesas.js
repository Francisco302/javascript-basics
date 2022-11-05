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


const salarios = [
    {
        id: 1,
        salario: '50'
    },
    {
        id: 2,
        salario: '800'
    }
]

const getEmpleado = (id) => {
    const promes = new Promise((resolve, reject) => {
        const empleado = empleados.find(e => e.id === id)

        if (empleado) {
            resolve(empleado);
        } else {
            reject(`Empleado ${id} no existe!!!`);
        }
    });

    return promes;
}


const getSalario = (id) => {
    return new Promise((resolve, reject) => {
        const salario = salarios.find(e => e.id === id);

            (salario) ?
            resolve(salario):
            reject(`Salario ${id} no existe!!!`);

    });

}

const id = 1;

// getEmpleado(id)
//     .then(empleado => console.log(empleado))
//     .catch(err => console.log(err));


// getSalario(id)
//     .then(salario => console.log(salario))
//     .catch(err => console.log(err)); 

getEmpleado(id)
    .then(empleado => getSalario(id))
    .then(salario => console.log(salario));