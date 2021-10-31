/* eslint-disable @typescript-eslint/no-magic-numbers */

import { TECH_TIP_CHANNEL_ID } from "../../config/ids";
import { getTextChannel } from "../../utils/get-channel";
import { tips } from "./tips";

export const sendTechTip = () => async () => {
	const channel = getTextChannel(TECH_TIP_CHANNEL_ID);

	const today = new Date().getDate();

	const embed = tips[today];

	if (embed) {
		await channel.send({
			embeds: [embed],
		});
	}
};
