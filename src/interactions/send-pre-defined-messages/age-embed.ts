import { chunk } from "@techmmunity/utils";
import { MessageActionRow, MessageButton } from "discord.js";
import { COLORS } from "../../assets/colors";
import { agesOptions } from "../../config/ages";
import { DISCORD_BUTTONS_PER_ACTION_ROWS_LIMIT } from "../../config/discord-limits";
import { PROFILE_CHANNEL_ID, STAFF_BOTS_CHANNEL } from "../../config/ids";
import { getTextChannel } from "../../utils/get-channel";

export const makeAgeButtonId = (key: string) => `AGE#${key}`;

export const getAgeId = (key: string) => key.replace("AGE#", "").toLowerCase();

export const sendAgeEmbed = async () => {
	const profileChannel = getTextChannel(
		process.env.NODE_ENV === "dev" ? STAFF_BOTS_CHANNEL : PROFILE_CHANNEL_ID,
	);

	const components = chunk(
		agesOptions,
		DISCORD_BUTTONS_PER_ACTION_ROWS_LIMIT,
	).map(actionRowButtons => {
		const actionRow = new MessageActionRow();

		actionRowButtons.forEach(langOpt => {
			actionRow.addComponents(
				new MessageButton()
					.setCustomId(makeAgeButtonId(langOpt.id))
					.setLabel(langOpt.description)
					.setStyle("SECONDARY"),
			);
		});

		return actionRow;
	});

	await profileChannel.send({
		embeds: [
			{
				title: "Diga sua idade!",
				description: "Clique nos botões abaixo para selecionar sua idade.",
				color: COLORS.turquoise,
			},
		],
		components,
	});
};
