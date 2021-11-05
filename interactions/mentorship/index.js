"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mentorshipCommand = exports.mentorship = void 0;
const builders_1 = require("@discordjs/builders");
const colors_1 = require("../../assets/colors");
const images_1 = require("../../assets/images");
const get_command_name_1 = require("../../utils/get-command-name");
const mentorship = (interaction) => interaction.reply({
    embeds: [
        {
            title: "Você sabia que a Techmmunity tem um programa de mentoria? :wink:",
            description: "Não perca mais tempo e dê agora uma olhada em nosso site para saber mais detalhes! :smile:",
            color: colors_1.COLORS.turquoise,
            url: "https://techmmunity.com.br",
            thumbnail: {
                url: images_1.IMAGES.techmmunityLogoGif,
            },
        },
    ],
});
exports.mentorship = mentorship;
exports.mentorshipCommand = {
    command: new builders_1.SlashCommandBuilder()
        .setName((0, get_command_name_1.getCommandName)("mentorship"))
        .setDescription("Gets the mentorship URL"),
};
