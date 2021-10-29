/* eslint-disable @typescript-eslint/no-magic-numbers */

import { GuildMember } from "discord.js";
import { GENERAL_CHANNEL_ID } from "../../config/ids";
import { getTextChannel } from "../../utils/get-channel";
import { makeWelcomeImg } from "./make-welcome-image";

export const sendWelcomeMsg = async (member: GuildMember) => {
	const welcomeImg = await makeWelcomeImg(member);

	const channel = getTextChannel(GENERAL_CHANNEL_ID);

	await channel.send({
		content: `<@${member.user.id}>`,
		files: [welcomeImg],
	});
};
