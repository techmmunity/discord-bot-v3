"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setEvents = void 0;
const add_default_roles_1 = require("./add-default-roles");
const send_welcome_msg_1 = require("./send-welcome-msg");
const setEvents = (client) => {
    client.on("guildMemberAdd", add_default_roles_1.addDefaultRoles);
    client.on("guildMemberAdd", send_welcome_msg_1.sendWelcomeMsg);
};
exports.setEvents = setEvents;
