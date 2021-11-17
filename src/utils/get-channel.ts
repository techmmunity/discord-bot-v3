import { Guild, TextChannel } from "discord.js";
import { DiscordClient } from "../client";
import { TECHMMUNITY_GUILD_ID } from "../config/ids";

export const getTextChannel = (channelId: string) =>
	(
		DiscordClient.guilds.cache.get(TECHMMUNITY_GUILD_ID) as Guild
	).channels.cache.get(channelId) as TextChannel;
