"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.commands = exports.setInteractions = void 0;
const create_challenge_1 = require("./create-challenge");
const get_job_1 = require("./get-job");
const get_tech_tip_1 = require("./get-tech-tip");
const ping_1 = require("./ping");
const ram_1 = require("./ram");
const clean_1 = require("./clean");
const random_challenge_1 = require("./random-challenge");
const send_embed_1 = require("./send-embed");
const send_pre_defined_messages_1 = require("./send-pre-defined-messages");
const suggest_1 = require("./suggest");
const welcome_img_1 = require("./welcome-img");
const qce_1 = require("./qce");
const youtube_1 = require("./youtube");
const get_command_name_1 = require("../utils/get-command-name");
const mentorship_1 = require("./mentorship");
const setInteractions = (client) => {
    client.on("ready", () => {
        console.log("Bot is ready!");
    });
    client.on("interactionCreate", interaction => {
        if (!interaction.isCommand())
            return;
        switch (interaction.commandName) {
            case (0, get_command_name_1.getCommandName)("create-challenge"):
                return (0, create_challenge_1.createChallenge)(interaction);
            case (0, get_command_name_1.getCommandName)("ping"):
                return (0, ping_1.ping)(interaction);
            case (0, get_command_name_1.getCommandName)("ram"):
                return (0, ram_1.ram)(interaction);
            case (0, get_command_name_1.getCommandName)("get-random-challenge"):
                return (0, random_challenge_1.getRandomChallenge)(interaction);
            case (0, get_command_name_1.getCommandName)("welcome-image"):
                return (0, welcome_img_1.welcomeImg)(interaction);
            case (0, get_command_name_1.getCommandName)("suggest"):
                return (0, suggest_1.suggest)(interaction);
            case (0, get_command_name_1.getCommandName)("send-pre-defined-messages"):
                return (0, send_pre_defined_messages_1.sendPreDefinedMessages)(interaction);
            case (0, get_command_name_1.getCommandName)("get-job"):
                return (0, get_job_1.getJob)(interaction);
            case (0, get_command_name_1.getCommandName)("send-embed"):
                return (0, send_embed_1.sendEmbed)(interaction);
            case (0, get_command_name_1.getCommandName)("get-tech-tip"):
                return (0, get_tech_tip_1.getTechTip)(interaction);
            case (0, get_command_name_1.getCommandName)("clean"):
                return (0, clean_1.clean)(interaction);
            case (0, get_command_name_1.getCommandName)("qce"):
                return (0, qce_1.qce)(interaction);
            case (0, get_command_name_1.getCommandName)("youtube"):
                return (0, youtube_1.youtube)(interaction);
            case (0, get_command_name_1.getCommandName)("mentorship"):
                return (0, mentorship_1.mentorship)(interaction);
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
    send_pre_defined_messages_1.sendPreDefinedMessagesCommand,
    get_job_1.getJobCommand,
    send_embed_1.sendEmbedCommand,
    get_tech_tip_1.getTechTipCommand,
    clean_1.cleanCommand,
    qce_1.qceCommand,
    youtube_1.youtubeCommand,
    mentorship_1.mentorshipCommand,
];
