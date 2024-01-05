import Task from './task';
let task1 = new Task('Hacer el pedido', false);
let task2 = new Task('Realizar pago', false);

console.log('Tarea 1:', task1);
console.log('Tarea 2:', task2);

task1.markAsCompleted();

console.log('Tarea 1 despues de marcada como completada:', task1);
console.log('Tarea 2 sigue igual:', task2);