"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.suggestCommand = exports.suggest = void 0;
const builders_1 = require("@discordjs/builders");
const ids_1 = require("../../config/ids");
const get_channel_1 = require("../../utils/get-channel");
const get_command_name_1 = require("../../utils/get-command-name");
const get_member_img_1 = require("../../utils/get-member-img");
const suggest = async (interaction) => {
    const member = interaction.member;
    const suggestion = interaction.options.getString("suggestion");
    const imageUrl = interaction.options.getString("image_url");
    const memberAvatarUrl = (0, get_member_img_1.getMemberImgUrl)(member);
    const suggestionsChannel = (0, get_channel_1.getTextChannel)(ids_1.SUGGESTIONS_CHANNEL_ID);
    const message = await suggestionsChannel.send({
        embeds: [
            {
                title: "Nova sugestão!",
                description: suggestion,
                color: member.displayColor,
                author: {
                    name: member.displayName,
                    iconURL: memberAvatarUrl,
                },
                image: {
                    url: imageUrl,
                },
            },
        ],
    });
    await message.react("👍");
    await message.react("👎");
    await interaction.reply("Done!");
    await interaction.deleteReply();
};
exports.suggest = suggest;
exports.suggestCommand = {
    command: new builders_1.SlashCommandBuilder()
        .setName((0, get_command_name_1.getCommandName)("suggest"))
        .setDescription("Creates a new suggestion")
        .addStringOption(option => option
        .setName("suggestion")
        .setDescription("A suggestion to make the server a better place for the community!")
        .setRequired(true))
        .addStringOption(option => option
        .setName("image_url")
        .setDescription("A image to help to to explain your suggestion"))
        .setDefaultPermission(true),
};
