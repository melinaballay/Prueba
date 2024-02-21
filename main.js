"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let task_1 = require("./task");
let textoCifrado = 'Hola, Mundo!!';
let descifrado = new task_1.default(textoCifrado);
let resultado = descifrado.textoDecifrado();
console.log('Texto original:', textoCifrado);
console.log('Texto descifrado:', resultado);
