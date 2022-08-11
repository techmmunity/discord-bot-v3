"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.COLORS = void 0;
const hex_to_decimal_1 = require("../utils/hex-to-decimal");
const BASE_COLORS = {
    turquoise: (0, hex_to_decimal_1.hexToDecimal)("#2BA097"),
    green: (0, hex_to_decimal_1.hexToDecimal)("#07ed1e"),
    yellow: (0, hex_to_decimal_1.hexToDecimal)("#ffc800"),
    red: (0, hex_to_decimal_1.hexToDecimal)("#e30e0e"),
    blue: (0, hex_to_decimal_1.hexToDecimal)("#4287f5"),
    twitch: (0, hex_to_decimal_1.hexToDecimal)("#9146FF"),
    codewars: (0, hex_to_decimal_1.hexToDecimal)("#b33319"),
    pink: (0, hex_to_decimal_1.hexToDecimal)("#ff73fa"),
    youtube: (0, hex_to_decimal_1.hexToDecimal)("#FF0000"),
    telegram: (0, hex_to_decimal_1.hexToDecimal)("#26A5E4"),
    orange: (0, hex_to_decimal_1.hexToDecimal)("#e67e22"),
    purple: (0, hex_to_decimal_1.hexToDecimal)("#a20ec2"),
};
exports.COLORS = BASE_COLORS;
