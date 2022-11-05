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
            resolve(salario) :
            reject(`Salario ${id} no existe!!!`);

    });

}

// ASYNC transforma la funcion en una promesa
// el await solo puede tener por delante una funcion que devuleve primise
const getInfoUsuario = async (id) => {
    try {
        const empleado = await getEmpleado(id);
        return empleado;
    } catch (err) {
        return err;
    }
}

const id = 4;
getInfoUsuario(id)
    .then(msg => console.log(msg))
    .catch(err => console.log(err));


