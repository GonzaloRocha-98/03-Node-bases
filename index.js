const argv = require('yargs')
            .option('b', {
                alias:'base',
                type: 'number',
                demandOption: true,
                describe: 'Es la base para la tabla de multiplicar'
            })
            .option('l', {
                alias:'limite',
                type: 'number',
                demandOption: true,
                default: 10,
                describe: 'Es el numero limite por el cual se va a multiplicar'
            })
            .option('v', {
                alias:'visualizar',
                type: 'boolean',
                demandOption: false,
                default: false,
                describe: 'Mostrar la tabla en consola'
            })
            .check((argv, option) =>{
                if(isNaN(argv.b)){
                    throw new Error('La base tiene que ser un número')
                }
                if(isNaN(argv.l)){
                    throw new Error('El limite tiene que ser un número');
                }
                return true
            })
            .argv;
const {multiplicar} = require('./multiplicador'); //como el index es el archivo principal por defecto no es necesario especificarlo

//const base = 6;
//multiplicar(argv.base);  node index --base x
multiplicar(argv.b,argv.l,argv.v); 