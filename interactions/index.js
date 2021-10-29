"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.commands = exports.setInteractions = void 0;
const create_challenge_1 = require("./create-challenge");
const ping_1 = require("./ping");
const ram_1 = require("./ram");
const random_challenge_1 = require("./random-challenge");
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
];
