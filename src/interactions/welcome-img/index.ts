/* eslint-disable @typescript-eslint/no-magic-numbers */

import { SlashCommandBuilder } from "@discordjs/builders";
import { CommandInteraction, GuildMember } from "discord.js";
import { MOD_ROLE_ID, STAFF_ROLE_ID } from "../../config/ids";
import { makeWelcomeImg } from "./make-welcome-image";
import { Interaction } from "../../types/interactions";
import { PermissionTypeEnum } from "../../enums/permission-type";
import { getCommandName } from "../../utils/get-command-name";

export const welcomeImg = async (interaction: CommandInteraction) => {
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
	permissions: [
		{
			id: STAFF_ROLE_ID, // Staff
			type: PermissionTypeEnum.ROLE,
			permission: true,
		},
		{
			id: MOD_ROLE_ID, // Mod
			type: PermissionTypeEnum.ROLE,
			permission: true,
		},
	],
};
