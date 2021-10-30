import { SlashCommandBuilder } from "@discordjs/builders";
import { isEmptyArray, sleep } from "@techmmunity/utils";
import {
	CommandInteraction,
	GuildMember,
	MessageEmbedOptions,
} from "discord.js";
import { Colors } from "../../assets/colors";
import {
	CHALLENGE_ROLE_ID,
	EVENT_ROLE_ID,
	INKASA_ROLE_ID,
	JOB_ROLE_ID,
	TECHMMUNITY_ROLE_ID,
} from "../../config/ids";
import { Interaction } from "../../types/interactions";

const notificationsOptions = {
	techmmunity: {
		description: "Notificações oficiais da Techmmunity",
		emoji: "<:techmmunity:890749408755449856>",
		role: TECHMMUNITY_ROLE_ID,
	},
	inkasa: {
		description: "Videos Inkasa Dev",
		emoji: ":punch:",
		role: INKASA_ROLE_ID,
	},
	events: {
		description: "Eventos sobre a área tech",
		emoji: ":circus_tent:",
		role: EVENT_ROLE_ID,
	},
	challenge: {
		description: "Desafios diários",
		emoji: ":trophy:",
		role: CHALLENGE_ROLE_ID,
	},
	jobs: {
		description: "Ofertas de emprego",
		emoji: ":briefcase:",
		role: JOB_ROLE_ID,
	},
};

const makeCommand = () => {
	const command = new SlashCommandBuilder()
		.setName("notifications")
		.setDescription("Add, Removes or show all notifications available")
		.setDefaultPermission(true);

	const entries = Object.entries(notificationsOptions);

	entries.forEach(([key, value]) => {
		command.addBooleanOption(option =>
			option.setName(key).setDescription(value.description),
		);
	});

	return command;
};

const getOptions = (interaction: CommandInteraction) => {
	const keys = Object.keys(notificationsOptions);

	return (
		keys
			// eslint-disable-next-line array-callback-return
			.map(key => {
				if (interaction.options.getBoolean(key)) {
					return key;
				}
			})
			.filter(Boolean) as Array<keyof typeof notificationsOptions>
	);
};

const makeNotificationsEmbed = () => {
	const values = Object.entries(notificationsOptions);

	const fields = values.map(([key, val]) => ({
		name: key,
		value: `${val.emoji} ${val.description}`,
	}));

	const embed: MessageEmbedOptions = {
		title: "Escolha quais notificações você quer receber",
		description:
			"E depois disso execute novamente o comando `/notifications` passando as opções que você deseja.",
		color: Colors.turquoise,
		fields,
	};

	return embed;
};

export const notifications = async (interaction: CommandInteraction) => {
	await interaction.deferReply();

	const options = getOptions(interaction);

	if (isEmptyArray(options)) {
		await interaction.editReply({
			embeds: [makeNotificationsEmbed()],
		});

		return;
	}

	const member = interaction.member as GuildMember;

	const rolesToAdd = options.filter(
		option => !member.roles.cache.has(notificationsOptions[option].role),
	);
	const rolesToRemove = options.filter(option =>
		member.roles.cache.has(notificationsOptions[option].role),
	);

	rolesToAdd.forEach(async option => {
		const role = notificationsOptions[option].role;

		await member.roles.add(role);

		// eslint-disable-next-line @typescript-eslint/no-magic-numbers
		await sleep(0.2);
	});

	rolesToRemove.forEach(async option => {
		const role = notificationsOptions[option].role;

		await member.roles.remove(role);

		// eslint-disable-next-line @typescript-eslint/no-magic-numbers
		await sleep(0.2);
	});

	const rolesAddedDescription = `**Roles adicionadas:** ${rolesToAdd
		.map(option => `\`${option}\``)
		.join(", ")}`;
	const rolesRemovedDescription = `**Roles removidas:** ${rolesToRemove
		.map(option => `\`${option}\``)
		.join(", ")}`;

	await interaction.editReply({
		embeds: [
			{
				title: "Sucesso!",
				description: `${rolesAddedDescription}${"\n\n"}${rolesRemovedDescription}`,
				color: Colors.green,
			},
		],
	});

	// eslint-disable-next-line @typescript-eslint/no-magic-numbers
	await sleep(5);

	await interaction.deleteReply();
};

export const notificationsCommand: Interaction = {
	command: makeCommand(),
};
