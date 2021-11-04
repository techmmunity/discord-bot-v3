"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCommandName = void 0;
const getCommandName = (name) => {
    if (process.env.NODE_ENV === "dev") {
        return `dev-${name}`;
    }
    return name;
};
exports.getCommandName = getCommandName;
