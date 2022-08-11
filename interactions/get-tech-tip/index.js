"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTechTipCommand = exports.getTechTip = void 0;
const builders_1 = require("@discordjs/builders");
const colors_1 = require("../../assets/colors");
const tips_1 = require("../../jobs/tech-tips/tips");
const get_command_name_1 = require("../../utils/get-command-name");
const verify_one_of_roles_1 = require("../../utils/verify-one-of-roles");
const ids_1 = require("../../config/ids");
const getTechTip = async (interaction) => {
    var _a;
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
    const day = (_a = interaction.options.get("day-of-month")) === null || _a === void 0 ? void 0 : _a.value;
    const idx = (day || new Date().getDate()) - 1;
    const tip = (0, tips_1.getTip)(idx);
    await interaction.reply({
        embeds: [tip],
    });
};
exports.getTechTip = getTechTip;
exports.getTechTipCommand = {
    command: new builders_1.SlashCommandBuilder()
        .setName((0, get_command_name_1.getCommandName)("get-tech-tip"))
        .setDescription("Gets a tech tip")
        .addNumberOption(option => option
        .setName("day-of-month")
        .setDescription("Day of the month to get the tip"))
        .setDefaultPermission(false),
};
