/* eslint-disable @typescript-eslint/no-magic-numbers */

import { GuildMember } from "discord.js";
import { GENERAL_CHANNEL_ID, TECHMMUNITY_GUILD_ID } from "../../config/ids";
import { getTextChannel } from "../../utils/get-channel";
import { makeWelcomeImg } from "../../interactions/welcome-img/make-welcome-image";
import { QCE_EMBED } from "../../interactions/qce";

export const sendWelcomeMsg = async (member: GuildMember) => {
	if (member.guild.id !== TECHMMUNITY_GUILD_ID) return;

	const welcomeImg = await makeWelcomeImg(member);

	const generalChannel = getTextChannel(GENERAL_CHANNEL_ID);

	await generalChannel.send({
		content: `<@${member.user.id}>`,
		files: [welcomeImg],
		embeds: [
			{
				...QCE_EMBED,
				title: "Aqui está nosso tutorial sobre como fazer perguntas:",
			},
		],
	});
};
