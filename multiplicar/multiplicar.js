
//requires
// const { rejects } = require('assert');
const { rejects } = require('assert');
const fs = require('fs'); //hay un require propio de node
var colors = require('colors');

// const { resolve } = require('path');
// const fs = require('express');//importar libreria que no vienen con node
// const fs = require('../fs'); //otros archivos de njuestros proyectos



let listarTabla = (base,limite = 10) => {

console.log('***************************'.green);
console.log(`tabla del ${base}`.green);
console.log('***************************'.green);



    for (let i = 0; i <=limite; i++) {
        
        console.log(`${base} * ${i} = ${base * i}`); 

        }   

}








//ejercisio de promesas
let crearArchivo = (base, limite = 10) => {
    //si se resolvio, reject =la razon por la que se rechazo
    return new Promise((resolve,reject) =>{

     if (!Number(base)) {
         reject(`El valor introducido ${base} no es un numero`)
         return;
     } 


        let data = '';
        for (let i = 0; i <=limite; i++) {
        //   console.log(`${base}*${i} = ${base*i}`); 
            data +=  `${base}*${i} = ${base*i}\n`//se guarde dentro de data       
        }   
        //la tabla de multiplicar la guardaremos en un archivo de texto
        
        
        //este llama a lo que trajde  de node  fs es la funcion
        //hola mundo es el contenido que quiero grabar y el tercero es un callback
        fs.writeFile(`tablas/tabla -${base}-al-${limite}.txt`,data, (err) => {//ubicacion,lo que esta dentro detu aubicacion ,y error
            if (err) 
            reject(err);
            else 
            resolve( `tablas -${base}-al-${limite}.txt`)
            // console.log(`el archivo tabla -${base}.txt ha sido creado`);
        });

    })
}


module.exports = {
    crearArchivo : crearArchivo,
    listarTabla :  listarTabla
}




//La promesas son un objeto que pueden estar disponibles ahora o  nunca(son asincronas)