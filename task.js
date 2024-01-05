"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Task = /** @class */ (function () {
    function Task(description, completed) {
        this.description = description;
        this.completed = completed;
    }
    Task.prototype.markAsCompleted = function () {
        this.completed = true;
    };
    return Task;
}());
exports.default = Task;
