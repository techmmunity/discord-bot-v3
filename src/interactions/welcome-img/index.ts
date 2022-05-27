/* eslint-disable @typescript-eslint/no-magic-numbers */

import { SlashCommandBuilder } from "@discordjs/builders";
import { CommandInteraction, GuildMember } from "discord.js";
import { MOD_ROLE_ID, STAFF_ROLE_ID } from "../../config/ids";
import { makeWelcomeImg } from "./make-welcome-image";
import { Interaction } from "../../types/interactions";
import { getCommandName } from "../../utils/get-command-name";
import { COLORS } from "../../assets/colors";
import { verifyOneOfRoles } from "../../utils/verify-one-of-roles";

export const welcomeImg = async (interaction: CommandInteraction) => {
	if (!verifyOneOfRoles(interaction, [STAFF_ROLE_ID, MOD_ROLE_ID])) {
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

	const member = interaction.member as GuildMember;

	const welcomeImgAtt = await makeWelcomeImg(member);

	return interaction.reply({
		content: `<@${member.user.id}>`,
		files: [welcomeImgAtt],
	});
};

export const welcomeImgCommand: Interaction = {
	command: new SlashCommandBuilder()
		.setName(getCommandName("welcome-image"))
		.setDescription("Returns an example welcome image")
		.setDefaultPermission(false),
};
