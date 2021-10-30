"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendEmbedCommand = exports.sendEmbed = void 0;
const builders_1 = require("@discordjs/builders");
const colors_1 = require("../../assets/colors");
const ids_1 = require("../../config/ids");
const permission_type_1 = require("../../types/permission-type");
const sendEmbed = async (interaction) => {
    const channel = interaction.options.getChannel("channel");
    const title = interaction.options.getString("title");
    const description = interaction.options.getString("description");
    const thumbnail = interaction.options.getString("thumbnail");
    const color = interaction.options.getString("color");
    await channel.send({
        embeds: [
            {
                title,
                description,
                thumbnail: {
                    url: thumbnail,
                },
                color: color || colors_1.Colors.turquoise,
            },
        ],
    });
    await interaction.reply({
        embeds: [
            {
                title: "Done!",
                color: colors_1.Colors.green,
            },
        ],
    });
};
exports.sendEmbed = sendEmbed;
exports.sendEmbedCommand = {
    command: new builders_1.SlashCommandBuilder()
        .setName("send-embed")
        .setDescription("Send a embed message")
        .addChannelOption(option => option
        .setName("channel")
        .setDescription("Channel where the embed will be sent")
        .setRequired(true))
        .addStringOption(option => option
        .setName("title")
        .setDescription("Title of the embed")
        .setRequired(true))
        .addStringOption(option => option
        .setName("description")
        .setDescription("Description of the embed")
        .setRequired(true))
        .addStringOption(option => option.setName("color").setDescription("Color of the embed"))
        .addStringOption(option => option.setName("thumbnail").setDescription("Thumbnail of the embed"))
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
