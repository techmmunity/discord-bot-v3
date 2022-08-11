"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.welcomeImgCommand = exports.welcomeImg = void 0;
const builders_1 = require("@discordjs/builders");
const colors_1 = require("../../assets/colors");
const make_welcome_image_1 = require("./make-welcome-image");
const get_command_name_1 = require("../../utils/get-command-name");
const verify_one_of_roles_1 = require("../../utils/verify-one-of-roles");
const ids_1 = require("../../config/ids");
const welcomeImg = async (interaction) => {
    if (!(0, verify_one_of_roles_1.verifyOneOfRoles)(interaction, [ids_1.STAFF_ROLE_ID, ids_1.MOD_ROLE_ID])) {
        await interaction.reply({
            embeds: [
                {
                    title: "Error!",
                    description: "You don't have permission to execute this command!",
                    color: colors_1.COLORS.red,
                },
            ],
        });
        return;
    }
    const member = interaction.member;
    const welcomeImgAtt = await (0, make_welcome_image_1.makeWelcomeImg)(member);
    return interaction.reply({
        content: `<@${member.user.id}>`,
        files: [welcomeImgAtt],
    });
};
exports.welcomeImg = welcomeImg;
exports.welcomeImgCommand = {
    command: new builders_1.SlashCommandBuilder()
        .setName((0, get_command_name_1.getCommandName)("welcome-image"))
        .setDescription("Returns an example welcome image")
        .setDefaultPermission(false),
};
