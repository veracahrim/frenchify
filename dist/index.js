"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.frenchify = void 0;
function frenchify(str) {
    var frenchifiedString = str.replace('e', 'é');
    frenchifiedString = frenchifiedString.replace('c', 'ç');
    frenchifiedString = frenchifiedString.replace('a', 'à');
    frenchifiedString = frenchifiedString.replace('o', 'ô');
    return frenchifiedString;
}
exports.frenchify = frenchify;
