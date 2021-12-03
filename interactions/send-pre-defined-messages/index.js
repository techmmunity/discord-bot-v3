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
const welcome_embed_1 = require("./welcome-embed");
const telegram_1 = require("./telegram");
const messagesOptions = [
    {
        id: "notifications",
        description: "Notifications Channel",
        func: notifications_embed_1.sendNotificationsEmbed,
    },
    {
        id: "booster",
        description: "Booster Benefits",
        func: booster_embed_1.sendBoosterEmbed,
    },
    {
        id: "welcome",
        description: "Welcome Message",
        func: welcome_embed_1.sendWelcomeEmbed,
    },
    {
        id: "telegram",
        description: "Join Telegram",
        func: telegram_1.sendTelegramEmbed,
    },
];
const makeCommand = () => {
    const command = new builders_1.SlashCommandBuilder()
        .setName((0, get_command_name_1.getCommandName)("send-pre-defined-messages"))
        .setDescription("Send pre-defined messages to specific channels")
        .setDefaultPermission(false);
    messagesOptions.forEach(item => {
        command.addBooleanOption(option => option.setName(item.id).setDescription(item.description));
    });
    return command;
};
const getOptions = (interaction) => messagesOptions
    .map(item => {
    if (interaction.options.getBoolean(item.id)) {
        return item.id;
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
    for (const option of options) {
        const message = messagesOptions.find(opt => opt.id === option);
        if (message) {
            await message.func();
        }
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
