"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.commands = exports.setInteractions = void 0;
const clean_1 = require("./clean");
const get_tech_tip_1 = require("./get-tech-tip");
const ping_1 = require("./ping");
const qce_1 = require("./qce");
const ram_1 = require("./ram");
const send_embed_1 = require("./send-embed");
const send_pre_defined_messages_1 = require("./send-pre-defined-messages");
const welcome_img_1 = require("./welcome-img");
const get_command_name_1 = require("../utils/get-command-name");
const setInteractions = (client) => {
    client.on("ready", () => {
        console.log("Bot is ready!");
    });
    client.on("interactionCreate", interaction => {
        if (!interaction.isCommand())
            return;
        switch (interaction.commandName) {
            case (0, get_command_name_1.getCommandName)("ping"):
                return (0, ping_1.ping)(interaction);
            case (0, get_command_name_1.getCommandName)("ram"):
                return (0, ram_1.ram)(interaction);
            case (0, get_command_name_1.getCommandName)("welcome-image"):
                return (0, welcome_img_1.welcomeImg)(interaction);
            case (0, get_command_name_1.getCommandName)("send-pre-defined-messages"):
                return (0, send_pre_defined_messages_1.sendPreDefinedMessages)(interaction);
            case (0, get_command_name_1.getCommandName)("send-embed"):
                return (0, send_embed_1.sendEmbed)(interaction);
            case (0, get_command_name_1.getCommandName)("get-tech-tip"):
                return (0, get_tech_tip_1.getTechTip)(interaction);
            case (0, get_command_name_1.getCommandName)("clean"):
                return (0, clean_1.clean)(interaction);
            case (0, get_command_name_1.getCommandName)("qce"):
                return (0, qce_1.qce)(interaction);
            default:
                return;
        }
    });
};
exports.setInteractions = setInteractions;
exports.commands = [
    ping_1.pingCommand,
    ram_1.ramCommand,
    welcome_img_1.welcomeImgCommand,
    send_pre_defined_messages_1.sendPreDefinedMessagesCommand,
    send_embed_1.sendEmbedCommand,
    get_tech_tip_1.getTechTipCommand,
    clean_1.cleanCommand,
    qce_1.qceCommand,
];
