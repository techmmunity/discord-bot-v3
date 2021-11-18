"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cleanCommand = exports.clean = void 0;
const builders_1 = require("@discordjs/builders");
const utils_1 = require("@techmmunity/utils");
const ids_1 = require("../../config/ids");
const permission_type_1 = require("../../enums/permission-type");
const get_command_name_1 = require("../../utils/get-command-name");
const clean = async (interaction) => {
    await interaction.deferReply();
    const channel = interaction.options.getChannel("channel");
    const qtd = interaction.options.getNumber("qtd");
    const messages = await channel.messages.fetch({
        limit: (0, utils_1.isBetween)(qtd, 1, 100) ? qtd : 100,
    });
    const messagesToDelete = messages.filter(message => !message.pinned);
    await channel.bulkDelete(messagesToDelete);
};
exports.clean = clean;
exports.cleanCommand = {
    command: new builders_1.SlashCommandBuilder()
        .setName((0, get_command_name_1.getCommandName)("clean"))
        .setDescription("Checks the bot latency")
        .addChannelOption(option => option
        .setName("channel")
        .setDescription("Channel to clean the messages")
        .setRequired(true))
        .addNumberOption(option => option
        .setName("qtd")
        .setDescription("Qtd of messages (Max: 100)")
        .setRequired(true))
        .setDefaultPermission(false),
    permissions: [
        {
            id: ids_1.RAZAL_ID,
            type: permission_type_1.PermissionTypeEnum.USER,
            permission: true,
        },
    ],
};
