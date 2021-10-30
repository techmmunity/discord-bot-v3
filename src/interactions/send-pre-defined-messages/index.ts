import { SlashCommandBuilder } from "@discordjs/builders";
import { isEmptyArray } from "@techmmunity/utils";
import { CommandInteraction } from "discord.js";
import { Colors } from "../../assets/colors";
import { STAFF_ROLE_ID, MOD_ROLE_ID } from "../../config/ids";
import { Interaction } from "../../types/interactions";
import { PermissionTypeEnum } from "../../types/permission-type";
import { sendNotificationsEmbed } from "./notifications-embed";

const notificationsOptions = [["notifications", "Notifications Channel"]];

const makeCommand = () => {
	const command = new SlashCommandBuilder()
		.setName("send-pre-defined-messages")
		.setDescription("Send pre-defined messages to specific channels")
		.setDefaultPermission(true);

	notificationsOptions.forEach(([key, value]) => {
		command.addBooleanOption(option =>
			option.setName(key).setDescription(value),
		);
	});

	return command;
};

const getOptions = (interaction: CommandInteraction) =>
	notificationsOptions
		// eslint-disable-next-line array-callback-return
		.map(([key]) => {
			if (interaction.options.getBoolean(key)) {
				return key;
			}
		})
		.filter(Boolean) as Array<string>;

export const sendPreDefinedMessages = async (
	interaction: CommandInteraction,
) => {
	const options = getOptions(interaction);

	if (isEmptyArray(options)) {
		await interaction.reply({
			embeds: [
				{
					title: "Passe pelo menos um canal para que as msgs sejam enviadas!",
					color: Colors.red,
				},
			],
		});

		return;
	}

	if (options.includes("notifications")) {
		return sendNotificationsEmbed();
	}

	await interaction.reply({
		embeds: [
			{
				title: "Done!",
				color: Colors.green,
			},
		],
	});
};

export const sendPreDefinedMessagesCommand: Interaction = {
	command: makeCommand(),
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
