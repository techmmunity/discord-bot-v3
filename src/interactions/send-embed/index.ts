/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { SlashCommandBuilder } from "@discordjs/builders";
import { CommandInteraction, TextChannel } from "discord.js";
import { COLORS } from "../../assets/colors";
import { STAFF_ROLE_ID, MOD_ROLE_ID } from "../../config/ids";
import { Interaction } from "../../types/interactions";
import { getCommandName } from "../../utils/get-command-name";
import { verifyOneOfRoles } from "../../utils/verify-one-of-roles";

export const sendEmbed = async (interaction: CommandInteraction) => {
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

	const channel = interaction.options.getChannel("channel")! as TextChannel;
	const title = interaction.options.getString("title")!;
	const description = interaction.options.getString("description")!;
	const thumbnail = interaction.options.getString("thumbnail");
	const color = interaction.options.getString("color");
	const crosspost = interaction.options.getBoolean("crosspost");
	const notification = interaction.options.getRole("notification");

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
