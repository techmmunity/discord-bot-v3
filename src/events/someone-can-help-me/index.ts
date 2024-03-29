import type { Message } from "discord.js";

import { QCE_EMBED } from "../../interactions/qce";

import { TECHMMUNITY_GUILD_ID } from "../../config/ids";

const isSomeone = (content: string) => {
	const hasSomeone = content.includes("alguém") || content.includes("alguem");
	const hasHelp = content.includes("ajuda");
	const hasUnderstands = content.includes("manja de");

	// Alguém ajuda
	// Alguém manja de
	return hasSomeone && (hasHelp || hasUnderstands);
};

const isHow = (content: string) => {
	const hasHow = content.includes("como");
	const hasI = content.includes("eu");
	const hasSolve = content.includes("resolvo");

	// Como eu resolvo
	return hasHow && hasI && hasSolve;
};

export const someoneCanHelpMe = async (message: Message) => {
	if (message.member?.guild.id !== TECHMMUNITY_GUILD_ID) return;

	const content = message.content.toLowerCase();

	if (isSomeone(content) || isHow(content)) {
		await message.reply({
			embeds: [QCE_EMBED],
		});
	}
};
