import { SlashCommandBuilder } from "@discordjs/builders";
import { isBetween } from "@techmmunity/utils";
import { CommandInteraction, TextChannel } from "discord.js";
import { STAFF_ROLE_ID } from "../../config/ids";
import { Interaction } from "../../types/interactions";
import { getCommandName } from "../../utils/get-command-name";
import { COLORS } from "../../assets/colors";
import { verifyOneOfRoles } from "../../utils/verify-one-of-roles";

export const clean = async (interaction: CommandInteraction) => {
	if (!verifyOneOfRoles(interaction, [STAFF_ROLE_ID])) {
		await interaction.reply({
			embeds: [
				{
					title: "Error!",
					description: "You don't have permission to execute this command!",
					color: COLORS.red,
				},
			],
		});

		return;
	}

	/**
	 * --------------------------------------------------------------------
	 */

	await interaction.deferReply();

	const channel = interaction.options.getChannel("channel")! as TextChannel;
	const qtd = interaction.options.getNumber("qtd")!;

	const messages = await channel.messages.fetch({
		// eslint-disable-next-line @typescript-eslint/no-magic-numbers
		limit: isBetween(qtd, 1, 100) ? qtd : 100,
	});

	const messagesToDelete = messages.filter(message => !message.pinned);

	try {
		await channel.bulkDelete(messagesToDelete);
	} catch (err: any) {
		console.error(err);
	}
};

export const cleanCommand: Interaction = {
	command: new SlashCommandBuilder()
		.setName(getCommandName("clean"))
		.setDescription("Checks the bot latency")
		.addChannelOption(option =>
			option
				.setName("channel")
				.setDescription("Channel to clean the messages")
				.setRequired(true),
		)
		.addNumberOption(option =>
			option
				.setName("qtd")
				.setDescription("Qtd of messages (Max: 100)")
				.setRequired(true),
		)
		.setDefaultPermission(false),
};
