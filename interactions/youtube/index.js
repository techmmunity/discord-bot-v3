"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.youtubeCommand = exports.youtube = void 0;
const builders_1 = require("@discordjs/builders");
const colors_1 = require("../../assets/colors");
const get_command_name_1 = require("../../utils/get-command-name");
const youtube = (interaction) => interaction.reply({
    embeds: [
        {
            title: "Dê uma olhada no nosso canal do youtube! :smile:",
            color: colors_1.COLORS.youtube,
            url: "https://www.youtube.com/channel/UCl322bbCTdwW-eOEO4J0Zxw",
        },
    ],
});
exports.youtube = youtube;
exports.youtubeCommand = {
    command: new builders_1.SlashCommandBuilder()
        .setName((0, get_command_name_1.getCommandName)("youtube"))
        .setDescription("Gets the youtube URL"),
};
