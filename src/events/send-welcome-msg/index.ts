/* eslint-disable @typescript-eslint/no-magic-numbers */

import type { GuildMember } from "discord.js";

import { makeWelcomeImg } from "../../interactions/welcome-img/make-welcome-image";

import { getTextChannel } from "../../utils/get-channel";

import { GENERAL_CHANNEL_ID, TECHMMUNITY_GUILD_ID } from "../../config/ids";

export const sendWelcomeMsg = async (member: GuildMember) => {
	if (member.guild.id !== TECHMMUNITY_GUILD_ID) return;

	const welcomeImg = await makeWelcomeImg(member);

	const generalChannel = getTextChannel(GENERAL_CHANNEL_ID);

	await generalChannel.send({
		content: `<@${member.user.id}>`,
		files: [welcomeImg],
	});
};
