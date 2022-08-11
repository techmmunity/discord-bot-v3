import { Client, GatewayIntentBits, Partials } from "discord.js";

import { ActivityTypesEnum } from "./enums/activity-type";

// eslint-disable-next-line @typescript-eslint/naming-convention
export const DiscordClient = new Client({
	presence: {
		status: "online",
		activities: [
			{
				name: "Faça perguntas no ❓┊forum",
				type: ActivityTypesEnum.PLAYING as any,
			},
		],
	},
	partials: [Partials.Message, Partials.GuildMember],
	intents: [
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMembers,
	],
});
