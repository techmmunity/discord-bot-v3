import { SlashCommandBuilder } from "@discordjs/builders";
import type { CommandInteraction } from "discord.js";

import { COLORS } from "../../assets/colors";
import { getTip } from "../../jobs/tech-tips/tips";

import { getCommandName } from "../../utils/get-command-name";
import { verifyOneOfRoles } from "../../utils/verify-one-of-roles";

import { STAFF_ROLE_ID, MOD_ROLE_ID } from "../../config/ids";

import type { Interaction } from "../../types/interactions";

export const getTechTip = async (interaction: CommandInteraction) => {
	if (!verifyOneOfRoles(interaction as any, [STAFF_ROLE_ID, MOD_ROLE_ID])) {
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

	const day = interaction.options.get("day-of-month")?.value as number;

	// eslint-disable-next-line @typescript-eslint/no-magic-numbers
	const idx = (day || new Date().getDate()) - 1;

	const tip = getTip(idx);

	await interaction.reply({
		embeds: [tip],
	});
};

export const getTechTipCommand: Interaction = {
	command: new SlashCommandBuilder()
		.setName(getCommandName("get-tech-tip"))
		.setDescription("Gets a tech tip")
		.addNumberOption(option =>
			option
				.setName("day-of-month")
				.setDescription("Day of the month to get the tip"),
		)
		.setDefaultPermission(false),
};
