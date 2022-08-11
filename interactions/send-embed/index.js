"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendEmbedCommand = exports.sendEmbed = void 0;
const builders_1 = require("@discordjs/builders");
const colors_1 = require("../../assets/colors");
const get_command_name_1 = require("../../utils/get-command-name");
const verify_one_of_roles_1 = require("../../utils/verify-one-of-roles");
const ids_1 = require("../../config/ids");
const sendEmbed = async (interaction) => {
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
    const channel = interaction.options.get("channel").channel;
    const title = interaction.options.get("title").value;
    const description = interaction.options.get("description").value;
    const thumbnail = interaction.options.get("thumbnail").value;
    const color = interaction.options.get("color").value;
    const crosspost = interaction.options.get("crosspost").value;
    const notification = interaction.options.get("notification").role;
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
        .addStringOption(option => option.setName("description").setDescription("Description of the embed"))
        .addStringOption(option => option.setName("color").setDescription("Color of the embed"))
        .addStringOption(option => option.setName("thumbnail").setDescription("Thumbnail of the embed"))
        .addBooleanOption(option => option.setName("crosspost").setDescription("Crosspost message"))
        .addRoleOption(option => option.setName("notification").setDescription("Role to notify"))
        .setDefaultPermission(false),
};
