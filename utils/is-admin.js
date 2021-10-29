"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAdmin = void 0;
const isAdmin = (message) => { var _a; return (_a = message.member) === null || _a === void 0 ? void 0 : _a.permissions.has("ADMINISTRATOR"); };
exports.isAdmin = isAdmin;
