"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendEmbedCommand = exports.sendEmbed = void 0;
const builders_1 = require("@discordjs/builders");
const colors_1 = require("../../assets/colors");
const ids_1 = require("../../config/ids");
const permission_type_1 = require("../../enums/permission-type");
const get_command_name_1 = require("../../utils/get-command-name");
const sendEmbed = async (interaction) => {
    const channel = interaction.options.getChannel("channel");
    const title = interaction.options.getString("title");
    const description = interaction.options.getString("description");
    const thumbnail = interaction.options.getString("thumbnail");
    const color = interaction.options.getString("color");
    const crosspost = interaction.options.getBoolean("crosspost");
    const notification = interaction.options.getRole("notification");
    const message = await channel.send({
        content: notification ? `<@&${notification.id}>` : undefined,
        embeds: [
            {
                title,
                description,
                thumbnail: {
                    url: thumbnail,
                },
                color: color || colors_1.COLORS.turquoise,
            },
        ],
    });
    if (crosspost) {
        await message.crosspost();
    }
    await interaction.reply({
        embeds: [
            {
                title: "Done!",
                color: colors_1.COLORS.green,
            },
        ],
    });
};
exports.sendEmbed = sendEmbed;
exports.sendEmbedCommand = {
    command: new builders_1.SlashCommandBuilder()
        .setName((0, get_command_name_1.getCommandName)("send-embed"))
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
        .addBooleanOption(option => option.setName("crosspost").setDescription("Crosspost message"))
        .addRoleOption(option => option.setName("notification").setDescription("Role to notify"))
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
