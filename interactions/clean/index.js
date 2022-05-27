"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cleanCommand = exports.clean = void 0;
const builders_1 = require("@discordjs/builders");
const utils_1 = require("@techmmunity/utils");
const ids_1 = require("../../config/ids");
const get_command_name_1 = require("../../utils/get-command-name");
const colors_1 = require("../../assets/colors");
const verify_one_of_roles_1 = require("../../utils/verify-one-of-roles");
const clean = async (interaction) => {
    if (!(0, verify_one_of_roles_1.verifyOneOfRoles)(interaction, [ids_1.STAFF_ROLE_ID])) {
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
    const channel = interaction.options.getChannel("channel");
    const qtd = interaction.options.getNumber("qtd");
    const messages = await channel.messages.fetch({
        limit: (0, utils_1.isBetween)(qtd, 1, 100) ? qtd : 100,
    });
    const messagesToDelete = messages.filter(message => !message.pinned);
    try {
        await channel.bulkDelete(messagesToDelete);
    }
    catch (err) {
        console.error(err);
    }
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
};
