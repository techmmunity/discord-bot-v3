import { SlashCommandBuilder } from "@discordjs/builders";
import { isEmptyArray } from "@techmmunity/utils";
import { CommandInteraction } from "discord.js";
import { Colors } from "../../assets/colors";
import { STAFF_ROLE_ID, MOD_ROLE_ID } from "../../config/ids";
import { Interaction } from "../../types/interactions";
import { PermissionTypeEnum } from "../../types/permission-type";
import { sendBoosterEmbed } from "./booster-embed";
import { sendNotificationsEmbed } from "./notifications-embed";

const messagesOptions = [
	["notifications", "Notifications Channel"],
	["booster", "Booster Benefits"],
];

const makeCommand = () => {
	const command = new SlashCommandBuilder()
		.setName("send-pre-defined-messages")
		.setDescription("Send pre-defined messages to specific channels")
		.setDefaultPermission(true);

	messagesOptions.forEach(([key, value]) => {
		command.addBooleanOption(option =>
			option.setName(key).setDescription(value),
		);
	});

	return command;
};

const getOptions = (interaction: CommandInteraction) =>
	messagesOptions
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
	await interaction.deferReply();

	const options = getOptions(interaction);

	if (isEmptyArray(options)) {
		await interaction.editReply({
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
		await sendNotificationsEmbed();
	}

	if (options.includes("booster")) {
		await sendBoosterEmbed();
	}

	await interaction.editReply({
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