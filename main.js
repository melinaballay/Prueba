"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var task_1 = require("./task");
var task1 = new task_1.default('Hacer el pedido', false);
var task2 = new task_1.default('Realizar pago', false);
console.log('Tarea 1:', task1);
console.log('Tarea 2:', task2);
task1.markAsCompleted();
console.log('Tarea 1 despues de marcada como completada:', task1);
console.log('Tarea 2 sigue igual:', task2);