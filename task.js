"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let TextoACifrar = /** @class */ (function () {
    function TextoACifrar(text) {
        this.text = text;
    }
    TextoACifrar.prototype.textoDecifrado = function () {
       
        // Este ejemplo simplemente invierte los caracteres
        return this.text.split('').reverse().join('');
    };
    return TextoACifrar;
}());
exports.default = TextoACifrar;
