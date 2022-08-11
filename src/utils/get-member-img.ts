import type { GuildMember } from "discord.js";

export const getMemberImgUrl = (member: GuildMember) => {
	const userImgUrl = member.user.avatarURL({
		extension: "png",
		size: 256,
	});

	if (userImgUrl) return userImgUrl;

	const guildImgUrl = member.guild.iconURL({
		extension: "png",
		size: 256,
	});

	return guildImgUrl as string;
};
