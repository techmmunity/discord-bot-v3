"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendPreDefinedMessagesCommand = exports.sendPreDefinedMessages = void 0;
const builders_1 = require("@discordjs/builders");
const utils_1 = require("@techmmunity/utils");
const colors_1 = require("../../assets/colors");
const ids_1 = require("../../config/ids");
const booster_embed_1 = require("./booster-embed");
const notifications_embed_1 = require("./notifications-embed");
const get_command_name_1 = require("../../utils/get-command-name");
const welcome_embed_1 = require("./welcome-embed");
const languages_embed_1 = require("./languages-embed");
const age_embed_1 = require("./age-embed");
const verify_one_of_roles_1 = require("../../utils/verify-one-of-roles");
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
        id: "langs",
        description: "Select Langs",
        func: languages_embed_1.sendLangsEmbed,
    },
    {
        id: "age",
        description: "Select Age",
        func: age_embed_1.sendAgeEmbed,
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
};
