/* eslint-disable @typescript-eslint/no-magic-numbers */

import { TECH_TIP_CHANNEL_ID } from "../../config/ids";
import { getTextChannel } from "../../utils/get-channel";
import { getTip } from "./tips";

export const sendTechTip = () => async () => {
	const channel = getTextChannel(TECH_TIP_CHANNEL_ID);

	const today = new Date().getDate() - 1;

	const embed = getTip(today);

	const message = await channel.send({
		embeds: [embed],
	});

	await message.crosspost();
};
