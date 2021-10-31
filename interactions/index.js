"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.commands = exports.setInteractions = void 0;
const create_challenge_1 = require("./create-challenge");
const get_job_1 = require("./get-job");
const get_tech_tip_1 = require("./get-tech-tip");
const notifications_1 = require("./notifications");
const ping_1 = require("./ping");
const ram_1 = require("./ram");
const random_challenge_1 = require("./random-challenge");
const send_embed_1 = require("./send-embed");
const send_pre_defined_messages_1 = require("./send-pre-defined-messages");
const suggest_1 = require("./suggest");
const welcome_img_1 = require("./welcome-img");
const setInteractions = (client) => {
    client.on("ready", () => {
        console.log("Bot is ready!");
    });
    client.on("interactionCreate", interaction => {
        if (!interaction.isCommand())
            return;
        switch (interaction.commandName) {
            case "create-challenge":
                return (0, create_challenge_1.createChallenge)(interaction);
            case "ping":
                return (0, ping_1.ping)(interaction);
            case "ram":
                return (0, ram_1.ram)(interaction);
            case "get-random-challenge":
                return (0, random_challenge_1.getRandomChallenge)(interaction);
            case "welcome-image":
                return (0, welcome_img_1.welcomeImg)(interaction);
            case "suggest":
                return (0, suggest_1.suggest)(interaction);
            case "notifications":
                return (0, notifications_1.notifications)(interaction);
            case "send-pre-defined-messages":
                return (0, send_pre_defined_messages_1.sendPreDefinedMessages)(interaction);
            case "get-job":
                return (0, get_job_1.getJob)(interaction);
            case "send-embed":
                return (0, send_embed_1.sendEmbed)(interaction);
            case "get-tech-tip":
                return (0, get_tech_tip_1.getTechTip)(interaction);
            default:
                return;
        }
    });
};
exports.setInteractions = setInteractions;
exports.commands = [
    create_challenge_1.createChallengeCommand,
    ping_1.pingCommand,
    ram_1.ramCommand,
    random_challenge_1.getRandomChallengeCommand,
    welcome_img_1.welcomeImgCommand,
    suggest_1.suggestCommand,
    notifications_1.notificationsCommand,
    send_pre_defined_messages_1.sendPreDefinedMessagesCommand,
    get_job_1.getJobCommand,
    send_embed_1.sendEmbedCommand,
    get_tech_tip_1.getTechTipCommand,
];
