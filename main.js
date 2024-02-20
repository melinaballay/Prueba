"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var task_1 = require("./task");
var textoCifrado = 'Hola, Mundo!!';
var descifrado = new task_1.default(textoCifrado);
var resultado = descifrado.textoDecifrado();
console.log('Texto original:', textoCifrado);
console.log('Texto descifrado:', resultado);
