import { SlashCommandBuilder } from "@discordjs/builders";
import { CommandInteraction } from "discord.js";
import { Colors } from "../../assets/colors";
import { Interaction } from "../../types/interactions";

export const ping = (interaction: CommandInteraction) =>
	interaction.reply({
		embeds: [
			{
				title: "Pong!",
				description: `Bot Latency ${
					Date.now() - interaction.createdTimestamp
				}ms`,
				color: Colors.red,
			},
		],
	});

export const pingCommand: Interaction = {
	command: new SlashCommandBuilder()
		.setName("ping")
		.setDescription("Checks the bot latency"),
};
