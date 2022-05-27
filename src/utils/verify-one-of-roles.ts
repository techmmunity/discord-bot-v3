import { GuildMemberRoleManager, Interaction } from "discord.js";

export const verifyOneOfRoles = (
	interaction: Interaction,
	roles: Array<string>,
) => {
	const memberRoles = (interaction.member?.roles as GuildMemberRoleManager)
		.cache;

	return roles.some(r => memberRoles.has(r));
};
