import { Client, Intents } from "discord.js";

// eslint-disable-next-line @typescript-eslint/naming-convention
export const DiscordClient = new Client({
	partials: ["MESSAGE", "REACTION"],
	intents: [Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILDS],
});
