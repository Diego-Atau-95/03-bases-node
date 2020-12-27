const opts = {
    base: { demand: true,
        alias: 'b' //los alias son con 1 guion
       
       },//esto es obligatorio
    
       limite: {
           
           alias: 'l',
           default : 10
          
          }

}



//yargs es una mejora del argv 
const argv = require('yargs').command('listar','Imprimir en consola la tabla de multiplicar',opts)
.command('crear','Genera un archivo de multiplicar',opts)
.help()
.argv;

module.exports = {
    argv
}