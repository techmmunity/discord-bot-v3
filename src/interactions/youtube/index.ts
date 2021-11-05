import { SlashCommandBuilder } from "@discordjs/builders";
import { CommandInteraction } from "discord.js";
import { COLORS } from "../../assets/colors";
import { Interaction } from "../../types/interactions";
import { getCommandName } from "../../utils/get-command-name";

export const youtube = (interaction: CommandInteraction) =>
	interaction.reply({
		embeds: [
			{
				title: "Dê uma olhada no nosso canal do youtube! :smile:",
				color: COLORS.youtube,
				url: "https://www.youtube.com/channel/UCl322bbCTdwW-eOEO4J0Zxw",
			},
		],
	});

export const youtubeCommand: Interaction = {
	command: new SlashCommandBuilder()
		.setName(getCommandName("youtube"))
		.setDescription("Gets the youtube URL"),
};
