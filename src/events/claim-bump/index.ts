import { getGlobalRepository, Plus } from "@techmmunity/symbiosis";
import { Repository } from "@techmmunity/symbiosis-dynamodb";
import { Message } from "discord.js";
import {
	TECHMMUNITY_GUILD_ID,
	DISBOARD_BOT_ID,
	BUMP_CHANNEL_ID,
	PANELINHA_CHANNEL_ID,
} from "../../config/ids";
import { BumpEntity } from "../../entities/bump";
import { getTextChannel } from "../../utils/get-channel";

export const claimBump = async (message: Message) => {
	try {
		if (message.member?.guild.id !== TECHMMUNITY_GUILD_ID) return;
		if (message.channel.id !== BUMP_CHANNEL_ID) return;
		if (message.member?.user.id !== DISBOARD_BOT_ID) return;
		if (!message.interaction?.user.id) return;

		const [disboardResponse] = message.embeds;

		if (!disboardResponse?.description?.includes("Bump done!")) return;

		const bumpRepository = getGlobalRepository(
			BumpEntity,
		) as Repository<BumpEntity>;

		const discordUserId = message.interaction.user.id;

		await bumpRepository.save({
			pk: `BUMP_COUNT#DISCORD_USER_ID#${discordUserId}`,
			sk: "BUMP_COUNT",
			// eslint-disable-next-line @typescript-eslint/no-magic-numbers
			count: Plus(1),
		});
	} catch (err: any) {
		const panelinhaChannel = getTextChannel(PANELINHA_CHANNEL_ID);

		console.error(err);

		await panelinhaChannel.send({
			content: `Fail to increment bump: ${err.message}`,
		});
	}
};
