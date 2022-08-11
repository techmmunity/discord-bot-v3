import { SlashCommandBuilder } from "@discordjs/builders";
import type { CommandInteraction } from "discord.js";

import { COLORS } from "../../assets/colors";

import { getCommandName } from "../../utils/get-command-name";

import type { Interaction } from "../../types/interactions";

export const ping = (interaction: CommandInteraction) =>
	interaction.reply({
		embeds: [
			{
				title: "Pong!",
				description: `Bot Latency ${
					Date.now() - interaction.createdTimestamp
				}ms`,
				color: COLORS.red,
			},
		],
	});

export const pingCommand: Interaction = {
	command: new SlashCommandBuilder()
		.setName(getCommandName("ping"))
		.setDescription("Checks the bot latency"),
};
