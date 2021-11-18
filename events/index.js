"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setEvents = void 0;
const add_default_roles_1 = require("./add-default-roles");
const button_click_1 = require("./button-click");
const send_welcome_msg_1 = require("./send-welcome-msg");
const someone_can_help_me_1 = require("./someone-can-help-me");
const setEvents = (client) => {
    client.on("guildMemberAdd", add_default_roles_1.addDefaultRoles);
    client.on("guildMemberAdd", send_welcome_msg_1.sendWelcomeMsg);
    client.on("messageCreate", someone_can_help_me_1.someoneCanHelpMe);
    client.on("interactionCreate", button_click_1.buttonClick);
};
exports.setEvents = setEvents;
