import { SlashCommandBuilder } from "@discordjs/builders";
import { CommandInteraction } from "discord.js";
import { STAFF_ROLE_ID, MOD_ROLE_ID } from "../../config/ids";
import { getTip } from "../../jobs/tech-tips/tips";
import { Interaction } from "../../types/interactions";
import { PermissionTypeEnum } from "../../types/permission-type";

export const getTechTip = async (interaction: CommandInteraction) => {
	const day = interaction.options.getNumber("day-of-month");

	// eslint-disable-next-line @typescript-eslint/no-magic-numbers
	const idx = (day || new Date().getDate()) - 1;

	const tip = getTip(idx);

	await interaction.reply({
		embeds: [tip],
	});
};

export const getTechTipCommand: Interaction = {
	command: new SlashCommandBuilder()
		.setName("get-tech-tip")
		.setDescription("Gets a tech tip")
		.addNumberOption(option =>
			option
				.setName("day-of-month")
				.setDescription("Day of the month to get the tip"),
		)
		.setDefaultPermission(false),
	permissions: [
		{
			id: STAFF_ROLE_ID,
			type: PermissionTypeEnum.ROLE,
			permission: true,
		},
		{
			id: MOD_ROLE_ID,
			type: PermissionTypeEnum.ROLE,
			permission: true,
		},
	],
};
