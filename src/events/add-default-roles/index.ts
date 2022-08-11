import type { GuildMember } from "discord.js";

import { TECHMMUNITY_GUILD_ID, STARTER_ROLE_ID } from "../../config/ids";

export const addDefaultRoles = async (member: GuildMember) => {
	if (member.guild.id !== TECHMMUNITY_GUILD_ID) return;

	await member.roles.add(STARTER_ROLE_ID);
};
