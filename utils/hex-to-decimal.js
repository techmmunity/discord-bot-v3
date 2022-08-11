"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hexToDecimal = void 0;
const hexToDecimal = (hex) => parseInt(hex.replace("#", ""), 16);
exports.hexToDecimal = hexToDecimal;
