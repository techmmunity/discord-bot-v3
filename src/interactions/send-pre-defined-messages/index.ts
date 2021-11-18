import { SlashCommandBuilder } from "@discordjs/builders";
import { isEmptyArray } from "@techmmunity/utils";
import { CommandInteraction } from "discord.js";
import { COLORS } from "../../assets/colors";
import { STAFF_ROLE_ID, MOD_ROLE_ID } from "../../config/ids";
import { Interaction } from "../../types/interactions";
import { PermissionTypeEnum } from "../../enums/permission-type";
import { sendBoosterEmbed } from "./booster-embed";
import { sendNotificationsEmbed } from "./notifications-embed";
import { getCommandName } from "../../utils/get-command-name";
import { sendWelcomeEmbed } from "./welcome-embed";

const messagesOptions = [
	{
		id: "notifications",
		description: "Notifications Channel",
		func: sendNotificationsEmbed,
	},
	{
		id: "booster",
		description: "Booster Benefits",
		func: sendBoosterEmbed,
	},
	{
		id: "welcome",
		description: "Welcome Message",
		func: sendWelcomeEmbed,
	},
];

const makeCommand = () => {
	const command = new SlashCommandBuilder()
		.setName(getCommandName("send-pre-defined-messages"))
		.setDescription("Send pre-defined messages to specific channels")
		.setDefaultPermission(false);

	messagesOptions.forEach(item => {
		command.addBooleanOption(option =>
			option.setName(item.id).setDescription(item.description),
		);
	});

	return command;
};

const getOptions = (interaction: CommandInteraction) =>
	messagesOptions
		// eslint-disable-next-line array-callback-return
		.map(item => {
			if (interaction.options.getBoolean(item.id)) {
				return item.id;
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
					color: COLORS.red,
				},
			],
		});

		return;
	}

	for (const option of options) {
		const message = messagesOptions.find(opt => opt.id === option);

		if (message) {
			// eslint-disable-next-line no-await-in-loop
			await message.func();
		}
	}

	await interaction.editReply({
		embeds: [
			{
				title: "Done!",
				color: COLORS.green,
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
