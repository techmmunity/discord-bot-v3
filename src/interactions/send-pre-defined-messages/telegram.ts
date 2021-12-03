import { COLORS } from "../../assets/colors";
import { TELEGRAM_CHANNEL_ID } from "../../config/ids";
import { getTextChannel } from "../../utils/get-channel";

export const sendTelegramEmbed = async () => {
	const telegramChannel = getTextChannel(TELEGRAM_CHANNEL_ID);

	await telegramChannel.send({
		embeds: [
			{
				title: ":airplane: Entre no nosso Telegram!",
				description: "https://t.me/techmmunity",
				color: COLORS.telegram,
			},
		],
	});
};
