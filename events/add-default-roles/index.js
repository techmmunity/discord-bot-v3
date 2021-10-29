"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addDefaultRoles = void 0;
const ids_1 = require("../../config/ids");
const addDefaultRoles = async (member) => {
    await member.roles.add(ids_1.STARTER_ROLE_ID);
};
exports.addDefaultRoles = addDefaultRoles;
