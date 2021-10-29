import { Guild, TextChannel } from "discord.js";
import { DiscordClient } from "../client";
import { GUILD_ID } from "../config/ids";

export const getTextChannel = (channelId: string) =>
	(DiscordClient.guilds.cache.get(GUILD_ID) as Guild).channels.cache.get(
		channelId,
	) as TextChannel;
