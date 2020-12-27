

//yargs es una mejora del argv 
const argv = require('./config/yargs').argv;
var colors = require('colors');





const { alias } = require('yargs');
//Process ya esta por defecto en node
//argv ya esta por defecnto en process






//esto esta unido con el multiplicar.js


// const { CLIENT_RENEG_LIMIT } = require("tls");
// const multiplicar = require("./multiplicar/multiplicar.js");


// const multiplicar = require('./multiplicar/multiplicar.js')
 const {crearArchivo, listarTabla} = require('./multiplicar/multiplicar.js')//usamos la destructuracion

let command = argv._[0];

switch (command) {
    case 'listar':
    listarTabla(argv.base, argv.limite);
    break;

    case 'crear':     
crearArchivo(argv.base, argv.limite)
.then(archivo => console.log(`archivo creado ${archivo}`))//me va a devolver un archivo
.catch(e => console.log(e));
  break;



    default: 
    console.log('Comando desconocido');
        break;
}




// let base = '15';



//process es muy importante guardado en clave valor
//process.argv vs process
// console.log(process);

// console.log(process.argv);


// multiplicar.crearArchivo;

// console.log(multiplicar)
// console.log(module);//para ver modulos



//EMPEZAREMOS A USAR PROCESS Y PROCESS.ARGV
// let argv2 = process.argv;



// console.log(argv);
// console.log(argv.base);
// console.log('Limite:', argv.limite);
// console.log(argv2);


// let parametro = argv[2];
// let base = parametro.split('=')[1];//partir una cadena y convertirlo en un arreglo indicando un caracter que lo va a partir
// console.log(base);









