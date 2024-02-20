"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TextoACifrar = /** @class */ (function () {
    function TextoACifrar(text) {
        this.text = text;
    }
    TextoACifrar.prototype.textoDecifrado = function () {
        // Lógica de descifrado aquí
        // Este ejemplo simplemente invierte los caracteres
        return this.text.split('').reverse().join('');
    };
    return TextoACifrar;
}());
exports.default = TextoACifrar;
