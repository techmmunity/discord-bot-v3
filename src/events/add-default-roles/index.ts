import { GuildMember } from "discord.js";
import { GUILD_ID, STARTER_ROLE_ID } from "../../config/ids";

export const addDefaultRoles = async (member: GuildMember) => {
	if (member.guild.id !== GUILD_ID) return;

	await member.roles.add(STARTER_ROLE_ID);
};
