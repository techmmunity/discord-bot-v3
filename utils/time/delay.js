"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.delay = void 0;
const delay = (seconds = 5) => new Promise((resolve) => setTimeout(resolve, seconds * 1000));
exports.delay = delay;
