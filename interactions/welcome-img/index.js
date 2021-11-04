"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.welcomeImgCommand = exports.welcomeImg = void 0;
const builders_1 = require("@discordjs/builders");
const ids_1 = require("../../config/ids");
const make_welcome_image_1 = require("./make-welcome-image");
const permission_type_1 = require("../../enums/permission-type");
const get_command_name_1 = require("../../utils/get-command-name");
const welcomeImg = async (interaction) => {
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
    permissions: [
        {
            id: ids_1.STAFF_ROLE_ID,
            type: permission_type_1.PermissionTypeEnum.ROLE,
            permission: true,
        },
        {
            id: ids_1.MOD_ROLE_ID,
            type: permission_type_1.PermissionTypeEnum.ROLE,
            permission: true,
        },
    ],
};
