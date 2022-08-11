/* eslint-disable @typescript-eslint/no-magic-numbers */

import { getTip } from "./tips";

import { getTextChannel } from "../../utils/get-channel";

import { GENERAL_CHANNEL_ID } from "../../config/ids";

export const sendTechTip = () => {
	const channel = getTextChannel(GENERAL_CHANNEL_ID);

	const today = new Date().getDate() - 1;

	const embed = getTip(today);

	return channel.send({
		embeds: [embed],
	});
};
