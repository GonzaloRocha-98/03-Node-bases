const fs = require('fs');
const {operacion} = require('./operacion');

const multiplicar = (base)=>{
    console.log(`----Tabla del ${base}-----`);
    resultado = operacion(base);
    fs.writeFileSync(`./tablas/tabla-del-${base}`,resultado);
}

module.exports = {
    multiplicar
}