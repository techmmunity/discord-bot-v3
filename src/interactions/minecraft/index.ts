import { SlashCommandBuilder } from "@discordjs/builders";
import { CommandInteraction } from "discord.js";
import { MINECRAFT_EMBED } from "../../jobs/minecraft";
import { Interaction } from "../../types/interactions";
import { getCommandName } from "../../utils/get-command-name";

export const minecraft = (interaction: CommandInteraction) =>
	interaction.reply({
		embeds: [MINECRAFT_EMBED],
	});

export const minecraftCommand: Interaction = {
	command: new SlashCommandBuilder()
		.setName(getCommandName("minecraft"))
		.setDescription("Gets the minecraft embed"),
};
