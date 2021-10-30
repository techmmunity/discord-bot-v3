import { Client, Intents } from "discord.js";

// eslint-disable-next-line @typescript-eslint/naming-convention
export const DiscordClient = new Client({
	partials: ["MESSAGE", "REACTION", "GUILD_MEMBER"],
	intents: [
		Intents.FLAGS.GUILD_MESSAGES,
		Intents.FLAGS.GUILDS,
		Intents.FLAGS.GUILD_MEMBERS,
	],
});
