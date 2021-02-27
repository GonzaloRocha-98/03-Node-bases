const operacion = (base)=>{
    resultado ='';
    for (num = 0; num<=10; num++){
        resultado+= `${base} * ${num} = ${base*num}\n`
        console.log(`${base} * ${num} = ${base*num}`);
    }
    return resultado;
}
module.exports = {
    operacion
}