
// callback es una funcion que se ejecuta cuando otra funcion le llama

setTimeout(() =>{
    console.log('Hola mundo');
}, 1000);

// Pasamos como parametro una funcion callback la cual va hacer algun codigo con la infomarmacion que le pasemos a dicha funcion callback 
const getUsuario = (id, callback) =>{
    const usuario = {
        id,
        nombre: 'Fernando'
    }

    setTimeout(() => {
        callback(usuario);
    }, 1500);
}

getUsuario(10, (usuario) =>{
    console.log(usuario);
});
