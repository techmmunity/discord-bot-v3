import { MessageEmbedOptions } from "discord.js";

export interface Class {
	lastAnnounceDay: Date;
	servers: Array<{
		id: string;
		channelId: string;
		schedule: string;
	}>;
	content?: string;
	embeds?: Array<MessageEmbedOptions>;
}
