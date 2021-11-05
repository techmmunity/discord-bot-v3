"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pingCommand = exports.ping = void 0;
const builders_1 = require("@discordjs/builders");
const colors_1 = require("../../assets/colors");
const get_command_name_1 = require("../../utils/get-command-name");
const ping = (interaction) => interaction.reply({
    embeds: [
        {
            title: "Pong!",
            description: `Bot Latency ${Date.now() - interaction.createdTimestamp}ms`,
            color: colors_1.COLORS.red,
        },
    ],
});
exports.ping = ping;
exports.pingCommand = {
    command: new builders_1.SlashCommandBuilder()
        .setName((0, get_command_name_1.getCommandName)("ping"))
        .setDescription("Checks the bot latency"),
};