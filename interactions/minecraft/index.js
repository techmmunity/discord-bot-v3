"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.minecraftCommand = exports.minecraft = void 0;
const builders_1 = require("@discordjs/builders");
const minecraft_1 = require("../../jobs/minecraft");
const get_command_name_1 = require("../../utils/get-command-name");
const minecraft = (interaction) => interaction.reply({
    embeds: [minecraft_1.MINECRAFT_EMBED],
});
exports.minecraft = minecraft;
exports.minecraftCommand = {
    command: new builders_1.SlashCommandBuilder()
        .setName((0, get_command_name_1.getCommandName)("minecraft"))
        .setDescription("Gets the minecraft embed"),
};
