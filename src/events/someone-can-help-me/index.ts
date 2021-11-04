import { Message } from "discord.js";
import { QCE_EMBED } from "../../interactions/qce";

export const someoneCanHelpMe = async (message: Message) => {
	const content = message.content.toLowerCase();

	const hasSomeone = content.includes("alguém") || content.includes("alguem");
	const hasHelp = content.includes("ajuda");

	if (hasSomeone && hasHelp) {
		await message.reply({
			embeds: [QCE_EMBED],
		});
	}
};
