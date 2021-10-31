"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTechTipCommand = exports.getTechTip = void 0;
const builders_1 = require("@discordjs/builders");
const ids_1 = require("../../config/ids");
const tips_1 = require("../../jobs/tech-tips/tips");
const permission_type_1 = require("../../types/permission-type");
const getTechTip = async (interaction) => {
    const day = interaction.options.getNumber("day-of-month");
    const idx = (day || new Date().getDate()) - 1;
    const tip = (0, tips_1.getTip)(idx);
    await interaction.reply({
        embeds: [tip],
    });
};
exports.getTechTip = getTechTip;
exports.getTechTipCommand = {
    command: new builders_1.SlashCommandBuilder()
        .setName("get-tech-tip")
        .setDescription("Gets a tech tip")
        .addNumberOption(option => option
        .setName("day-of-month")
        .setDescription("Day of the month to get the tip"))
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
