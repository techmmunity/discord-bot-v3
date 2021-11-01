"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cleanCommand = exports.clean = void 0;
const builders_1 = require("@discordjs/builders");
const utils_1 = require("@techmmunity/utils");
const colors_1 = require("../../assets/colors");
const ids_1 = require("../../config/ids");
const permission_type_1 = require("../../types/permission-type");
const clean = async (interaction) => {
    await interaction.deferReply();
    const channel = interaction.options.getChannel("channel");
    const qtd = interaction.options.getNumber("qtd");
    const messages = await channel.messages.fetch({
        limit: (0, utils_1.isBetween)(qtd, 0, 100) ? qtd : 100,
    });
    const messagesToDelete = messages.filter((message) => !message.pinned);
    await channel.bulkDelete(messagesToDelete);
    await interaction.editReply({
        embeds: [
            {
                title: "Done!",
                color: colors_1.COLORS.green,
            },
        ],
    });
};
exports.clean = clean;
exports.cleanCommand = {
    command: new builders_1.SlashCommandBuilder()
        .setName("clean")
        .setDescription("Checks the bot latency")
        .addChannelOption((option) => option
        .setName("channel")
        .setDescription("Channel to clean the messages")
        .setRequired(true))
        .addNumberOption((option) => option
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
