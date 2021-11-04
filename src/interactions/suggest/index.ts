import { SlashCommandBuilder } from "@discordjs/builders";
import { CommandInteraction, GuildMember } from "discord.js";
import { SUGGESTIONS_CHANNEL_ID } from "../../config/ids";
import { Interaction } from "../../types/interactions";
import { getTextChannel } from "../../utils/get-channel";
import { getCommandName } from "../../utils/get-command-name";
import { getMemberImgUrl } from "../../utils/get-member-img";

export const suggest = async (interaction: CommandInteraction) => {
	const member = interaction.member as GuildMember;

	const suggestion = interaction.options.getString("suggestion") as string;
	const imageUrl = interaction.options.getString("image_url");

	const memberAvatarUrl = getMemberImgUrl(member);

	const suggestionsChannel = getTextChannel(SUGGESTIONS_CHANNEL_ID);

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
					url: imageUrl as string,
				},
			},
		],
	});

	await message.react("👍");
	await message.react("👎");

	await interaction.reply("Done!");
	await interaction.deleteReply();
};

export const suggestCommand: Interaction = {
	command: new SlashCommandBuilder()
		.setName(getCommandName("suggest"))
		.setDescription("Creates a new suggestion")
		.addStringOption((option) =>
			option
				.setName("suggestion")
				.setDescription(
					"A suggestion to make the server a better place for the community!"
				)
				.setRequired(true)
		)
		.addStringOption((option) =>
			option
				.setName("image_url")
				.setDescription("A image to help to to explain your suggestion")
		)
		.setDefaultPermission(true),
};
