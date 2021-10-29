import { GuildMember } from "discord.js";
import { STARTER_ROLE_ID } from "../../config/ids";

export const addDefaultRoles = async (member: GuildMember) => {
	await member.roles.add(STARTER_ROLE_ID);
};
