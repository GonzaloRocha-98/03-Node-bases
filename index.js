const argv = require('yargs/yargs')(process.argv.slice(2)).argv;
const {multiplicar} = require('./multiplicador'); //como el index es el archivo principal por defecto no es necesario especificarlo

//const base = 6;
multiplicar(argv.base); // node index --base x