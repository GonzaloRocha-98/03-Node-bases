const operacion = (base,limite)=>{
    resultado ='';
    for (num = 0; num<=limite; num++){
        resultado+= `${base} * ${num} = ${base*num}\n`
    }

    return resultado;
}
module.exports = {
    operacion
}