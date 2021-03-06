import { SlashCommandBuilder } from "@discordjs/builders";
import { isEmptyArray } from "@techmmunity/utils";
import { CommandInteraction } from "discord.js";
import { COLORS } from "../../assets/colors";
import { STAFF_ROLE_ID, MOD_ROLE_ID } from "../../config/ids";
import { Interaction } from "../../types/interactions";
import { sendBoosterEmbed } from "./booster-embed";
import { sendNotificationsEmbed } from "./notifications-embed";
import { getCommandName } from "../../utils/get-command-name";
import { sendWelcomeEmbed } from "./welcome-embed";
import { sendLangsEmbed } from "./languages-embed";
import { sendAgeEmbed } from "./age-embed";
import { verifyOneOfRoles } from "../../utils/verify-one-of-roles";

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
	{
		id: "langs",
		description: "Select Langs",
		func: sendLangsEmbed,
	},
	{
		id: "age",
		description: "Select Age",
		func: sendAgeEmbed,
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
};
