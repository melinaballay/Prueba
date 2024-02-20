import Task from './task';
let textoCifrado= 'Hola, Mundo!!';
let descifrado = new Task(textoCifrado);
let resultado = descifrado.textoDecifrado();

console.log('Texto original:', textoCifrado);
console.log('Texto descifrado:', resultado);