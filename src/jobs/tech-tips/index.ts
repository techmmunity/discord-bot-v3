/* eslint-disable @typescript-eslint/no-magic-numbers */

import { GENERAL_CHANNEL_ID } from "../../config/ids";
import { getTextChannel } from "../../utils/get-channel";
import { getTip } from "./tips";

export const sendTechTip = () => {
	const channel = getTextChannel(GENERAL_CHANNEL_ID);

	const today = new Date().getDate() - 1;

	const embed = getTip(today);

	return channel.send({
		embeds: [embed],
	});
};
