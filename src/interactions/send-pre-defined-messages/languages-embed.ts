import { chunk } from "@techmmunity/utils";
import { MessageActionRow, MessageButton } from "discord.js";
import { COLORS } from "../../assets/colors";
import { DISCORD_BUTTONS_PER_ACTION_ROWS_LIMIT } from "../../config/discord-limits";
import { PROFILE_CHANNEL_ID, STAFF_BOTS_CHANNEL } from "../../config/ids";
import { langsOptions } from "../../config/langs";
import { getTextChannel } from "../../utils/get-channel";

export const makeLangButtonId = (key: string) => `LANG#${key}`;

export const getLangId = (key: string) =>
	key.replace("LANG#", "").toLowerCase();

export const sendLangsEmbed = async () => {
	const profileChannel = getTextChannel(
		process.env.NODE_ENV === "dev" ? STAFF_BOTS_CHANNEL : PROFILE_CHANNEL_ID,
	);

	const components = chunk(
		langsOptions,
		DISCORD_BUTTONS_PER_ACTION_ROWS_LIMIT,
	).map(actionRowButtons => {
		const actionRow = new MessageActionRow();

		actionRowButtons.forEach(langOpt => {
			actionRow.addComponents(
				new MessageButton()
					.setCustomId(makeLangButtonId(langOpt.id))
					.setLabel(langOpt.description)
					.setStyle("SECONDARY"),
			);
		});

		return actionRow;
	});

	await profileChannel.send({
		embeds: [
			{
				title: "Diga as tecnologias que você tem interesse!",
				description: "Clique nos botões abaixo para selecionar as linguagens.",
				color: COLORS.turquoise,
			},
		],
		components,
	});
};
