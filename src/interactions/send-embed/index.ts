/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { SlashCommandBuilder } from "@discordjs/builders";
import { CommandInteraction, TextChannel } from "discord.js";
import { Colors } from "../../assets/colors";
import { STAFF_ROLE_ID, MOD_ROLE_ID } from "../../config/ids";
import { Interaction } from "../../types/interactions";
import { PermissionTypeEnum } from "../../types/permission-type";

export const sendEmbed = async (interaction: CommandInteraction) => {
	const channel = interaction.options.getChannel("channel")! as TextChannel;
	const title = interaction.options.getString("title")!;
	const description = interaction.options.getString("description")!;
	const thumbnail = interaction.options.getString("thumbnail");
	const color = interaction.options.getString("color");

	await channel.send({
		embeds: [
			{
				title,
				description,
				thumbnail: {
					url: thumbnail as any,
				},
				color: (color as any) || Colors.turquoise,
			},
		],
	});

	await interaction.reply({
		embeds: [
			{
				title: "Done!",
				color: Colors.green,
			},
		],
	});
};

export const sendEmbedCommand: Interaction = {
	command: new SlashCommandBuilder()
		.setName("send-embed")
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
			option
				.setName("description")
				.setDescription("Description of the embed")
				.setRequired(true),
		)
		.addStringOption(option =>
			option.setName("color").setDescription("Color of the embed"),
		)
		.addStringOption(option =>
			option.setName("thumbnail").setDescription("Thumbnail of the embed"),
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
