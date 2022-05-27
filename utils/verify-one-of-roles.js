"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyOneOfRoles = void 0;
const verifyOneOfRoles = (interaction, roles) => {
    var _a;
    const memberRoles = ((_a = interaction.member) === null || _a === void 0 ? void 0 : _a.roles)
        .cache;
    return roles.some(r => memberRoles.has(r));
};
exports.verifyOneOfRoles = verifyOneOfRoles;
