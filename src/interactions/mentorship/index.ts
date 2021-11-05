import { SlashCommandBuilder } from "@discordjs/builders";
import { CommandInteraction } from "discord.js";
import { COLORS } from "../../assets/colors";
import { IMAGES } from "../../assets/images";
import { Interaction } from "../../types/interactions";
import { getCommandName } from "../../utils/get-command-name";

export const mentorship = (interaction: CommandInteraction) =>
	interaction.reply({
		embeds: [
			{
				title:
					"Você sabia que a Techmmunity tem um programa de mentoria? :wink:",
				description:
					"Não perca mais tempo e dê agora uma olhada em nosso site para saber mais detalhes! :smile:",
				color: COLORS.turquoise,
				url: "https://techmmunity.com.br",
				thumbnail: {
					url: IMAGES.techmmunityLogoGif,
				},
			},
		],
	});

export const mentorshipCommand: Interaction = {
	command: new SlashCommandBuilder()
		.setName(getCommandName("mentorship"))
		.setDescription("Gets the mentorship URL"),
};
