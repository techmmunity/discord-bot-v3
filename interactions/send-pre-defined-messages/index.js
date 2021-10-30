"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendPreDefinedMessagesCommand = exports.sendPreDefinedMessages = void 0;
const builders_1 = require("@discordjs/builders");
const utils_1 = require("@techmmunity/utils");
const colors_1 = require("../../assets/colors");
const ids_1 = require("../../config/ids");
const permission_type_1 = require("../../types/permission-type");
const notifications_embed_1 = require("./notifications-embed");
const notificationsOptions = [["notifications", "Notifications Channel"]];
const makeCommand = () => {
    const command = new builders_1.SlashCommandBuilder()
        .setName("send-pre-defined-messages")
        .setDescription("Send pre-defined messages to specific channels")
        .setDefaultPermission(true);
    notificationsOptions.forEach(([key, value]) => {
        command.addBooleanOption(option => option.setName(key).setDescription(value));
    });
    return command;
};
const getOptions = (interaction) => notificationsOptions
    .map(([key]) => {
    if (interaction.options.getBoolean(key)) {
        return key;
    }
})
    .filter(Boolean);
const sendPreDefinedMessages = async (interaction) => {
    const options = getOptions(interaction);
    if ((0, utils_1.isEmptyArray)(options)) {
        await interaction.reply({
            embeds: [
                {
                    title: "Passe pelo menos um canal para que as msgs sejam enviadas!",
                    color: colors_1.Colors.red,
                },
            ],
        });
        return;
    }
    if (options.includes("notifications")) {
        return (0, notifications_embed_1.sendNotificationsEmbed)();
    }
    await interaction.reply({
        embeds: [
            {
                title: "Done!",
                color: colors_1.Colors.green,
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
