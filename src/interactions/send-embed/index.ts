/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { SlashCommandBuilder } from "@discordjs/builders";
import type { CommandInteraction, Role, TextChannel } from "discord.js";

import { COLORS } from "../../assets/colors";

import { getCommandName } from "../../utils/get-command-name";
import { verifyOneOfRoles } from "../../utils/verify-one-of-roles";

import { STAFF_ROLE_ID, MOD_ROLE_ID } from "../../config/ids";

import type { Interaction } from "../../types/interactions";

export const sendEmbed = async (interaction: CommandInteraction) => {
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

	const channel = interaction.options.get("channel")!.channel as TextChannel;
	const title = interaction.options.get("title")!.value as string;
	const description = interaction.options.get("description")!.value as string;
	const thumbnail = interaction.options.get("thumbnail")!.value as string;
	const color = interaction.options.get("color")!.value as string;
	const crosspost = interaction.options.get("crosspost")!.value as boolean;
	const notification = interaction.options.get("notification")!.role as Role;

	const message = await channel.send({
		content: notification ? `<@&${notification.id}>` : undefined,
		embeds: [
			{
				title,
				description,
				thumbnail: {
					url: thumbnail as any,
				},
				color: (color as any) || COLORS.turquoise,
			},
		],
	});

	if (crosspost) {
		await message.crosspost();
	}

	await interaction.reply({
		embeds: [
			{
				title: "Done!",
				color: COLORS.green,
			},
		],
	});
};

export const sendEmbedCommand: Interaction = {
	command: new SlashCommandBuilder()
		.setName(getCommandName("send-embed"))
		.setDescription("Send a embed message")
		.addChannelOption(option =>
			option
				.setName("channel")
				.setDescription("Channel where the embed will be sent")
				.setRequired(true),
		)
		.addStringOption(option =>
			option
				.setName("title")
				.setDescription("Title of the embed")
				.setRequired(true),
		)
		.addStringOption(option =>
			option.setName("description").setDescription("Description of the embed"),
		)
		.addStringOption(option =>
			option.setName("color").setDescription("Color of the embed"),
		)
		.addStringOption(option =>
			option.setName("thumbnail").setDescription("Thumbnail of the embed"),
		)
		.addBooleanOption(option =>
			option.setName("crosspost").setDescription("Crosspost message"),
		)
		.addRoleOption(option =>
			option.setName("notification").setDescription("Role to notify"),
		)
		.setDefaultPermission(false),
};
