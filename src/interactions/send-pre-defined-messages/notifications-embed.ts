import { chunk } from "@techmmunity/utils";
import {
	MessageActionRow,
	MessageButton,
	MessageEmbedOptions,
} from "discord.js";
import { COLORS } from "../../assets/colors";
import { DISCORD_BUTTONS_PER_ACTION_ROWS_LIMIT } from "../../config/discord-limits";
import { NOTIFICATIONS_CHANNEL_ID, STAFF_BOTS_CHANNEL } from "../../config/ids";
import { notificationsOptions } from "../../config/notification";
import { getTextChannel } from "../../utils/get-channel";

const makeNotificationsEmbed = () => {
	const values = Object.entries(notificationsOptions);

	const fields = values.map(([key, val]) => ({
		name: key.toUpperCase(),
		value: `${val.emoji} ${val.description}`,
	}));

	const embed: MessageEmbedOptions = {
		title: "Escolha quais notificações você quer receber",
		description:
			"E depois disso execute novamente o comando `/notifications` passando as opções que você deseja.",
		color: COLORS.turquoise,
		fields,
	};

	return embed;
};

export const makeNotificationButtonId = (key: string) => `NOTIFICATION#${key}`;

export const getNotificationId = (key: string) =>
	key.replace("NOTIFICATION#", "").toLowerCase();

export const sendNotificationsEmbed = async () => {
	const { fields } = makeNotificationsEmbed();

	const notificationsChannel = getTextChannel(
		process.env.NODE_ENV === "dev"
			? STAFF_BOTS_CHANNEL
			: NOTIFICATIONS_CHANNEL_ID,
	);

	const components = chunk(
		Object.keys(notificationsOptions),
		DISCORD_BUTTONS_PER_ACTION_ROWS_LIMIT,
	).map(actionRowButtons => {
		const actionRow = new MessageActionRow();

		actionRowButtons.forEach(key => {
			actionRow.addComponents(
				new MessageButton()
					.setCustomId(makeNotificationButtonId(key))
					.setLabel(key.toUpperCase())
					.setStyle(key === "techmmunity" ? "PRIMARY" : "SECONDARY"),
			);
		});

		return actionRow;
	});

	await notificationsChannel.send({
		embeds: [
			{
				title: "Escolha as notificações que você quer receber!",
				description: "Clique nos botões abaixo para receber notificações.",
				color: COLORS.turquoise,
				fields,
			},
		],
		components,
	});
};
