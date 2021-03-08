const fs = require('fs');
const {operacion} = require('./operacion');

const multiplicar = (base, limite,v)=>{
    resultado = operacion(base,limite);
    if(v){    
        console.log(resultado);
        console.log(`----Tabla del ${base} hasta el ${limite}}-----`);
    }
    fs.writeFileSync(`./tablas/tabla-del-${base}-hasta-${limite}.txt`,resultado);
}

module.exports = {
    multiplicar
}