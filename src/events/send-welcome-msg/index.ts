/* eslint-disable @typescript-eslint/no-magic-numbers */

import { GuildMember } from "discord.js";
import { GENERAL_CHANNEL_ID } from "../../config/ids";
import { getTextChannel } from "../../utils/get-channel";
import { makeWelcomeImg } from "../../interactions/welcome-img/make-welcome-image";

export const sendWelcomeMsg = async (member: GuildMember) => {
	const welcomeImg = await makeWelcomeImg(member);

	const generalChannel = getTextChannel(GENERAL_CHANNEL_ID);

	await generalChannel.send({
		content: `<@${member.user.id}>`,
		files: [welcomeImg],
	});
};
