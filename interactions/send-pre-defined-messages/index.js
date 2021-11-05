"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendPreDefinedMessagesCommand = exports.sendPreDefinedMessages = void 0;
const builders_1 = require("@discordjs/builders");
const utils_1 = require("@techmmunity/utils");
const colors_1 = require("../../assets/colors");
const ids_1 = require("../../config/ids");
const permission_type_1 = require("../../enums/permission-type");
const booster_embed_1 = require("./booster-embed");
const notifications_embed_1 = require("./notifications-embed");
const get_command_name_1 = require("../../utils/get-command-name");
const messagesOptions = [
    ["notifications", "Notifications Channel"],
    ["booster", "Booster Benefits"],
];
const makeCommand = () => {
    const command = new builders_1.SlashCommandBuilder()
        .setName((0, get_command_name_1.getCommandName)("send-pre-defined-messages"))
        .setDescription("Send pre-defined messages to specific channels")
        .setDefaultPermission(true);
    messagesOptions.forEach(([key, value]) => {
        command.addBooleanOption(option => option.setName(key).setDescription(value));
    });
    return command;
};
const getOptions = (interaction) => messagesOptions
    .map(([key]) => {
    if (interaction.options.getBoolean(key)) {
        return key;
    }
})
    .filter(Boolean);
const sendPreDefinedMessages = async (interaction) => {
    await interaction.deferReply();
    const options = getOptions(interaction);
    if ((0, utils_1.isEmptyArray)(options)) {
        await interaction.editReply({
            embeds: [
                {
                    title: "Passe pelo menos um canal para que as msgs sejam enviadas!",
                    color: colors_1.COLORS.red,
                },
            ],
        });
        return;
    }
    if (options.includes("notifications")) {
        await (0, notifications_embed_1.sendNotificationsEmbed)();
    }
    if (options.includes("booster")) {
        await (0, booster_embed_1.sendBoosterEmbed)();
    }
    await interaction.editReply({
        embeds: [
            {
                title: "Done!",
                color: colors_1.COLORS.green,
            },
        ],
    });
};
exports.sendPreDefinedMessages = sendPreDefinedMessages;
exports.sendPreDefinedMessagesCommand = {
    command: makeCommand(),
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
