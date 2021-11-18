/* eslint-disable no-await-in-loop */
/* eslint-disable @typescript-eslint/no-magic-numbers */

import { sleep } from "@techmmunity/utils";
import { TextChannel } from "discord.js";
import { COLORS } from "../../assets/colors";
import { DiscordClient } from "../../client";
import {
	RAZAL_ID,
	STAFF_BOTS_CHANNEL,
	TECHMMUNITY_GUILD_ID,
} from "../../config/ids";
import { classes } from "./classes";

const sendMentorshipAnnounce = async () => {
	const currentClass = classes.pop()!;

	for (const server of currentClass.servers) {
		// eslint-disable-next-line no-await-in-loop
		const guild = await DiscordClient.guilds.fetch(server.id);

		// eslint-disable-next-line no-await-in-loop
		const channel = (await guild?.channels.fetch(
			server.channelId,
		)) as TextChannel;

		if (channel) {
			await channel.send({
				content: currentClass.content,
				embeds: currentClass.embeds,
			});

			await sleep(0.5);
		} else {
			const techmmunityGuild = await DiscordClient.guilds.fetch(
				TECHMMUNITY_GUILD_ID,
			);

			const techmmunityChannel = (await techmmunityGuild?.channels.fetch(
				STAFF_BOTS_CHANNEL,
			)) as TextChannel;

			await techmmunityChannel.send({
				content: `<@${RAZAL_ID}>`,
				embeds: [
					{
						title: "Fail to send menthorship announce!",
						description: `Server: ${guild ? guild.name : server.id}`,
						color: COLORS.red,
					},
				],
			});
		}
	}
};

export const setMentorshipJob = (cron: any) => {
	const currentClass = classes.pop()!;

	for (const server of currentClass.servers) {
		cron.schedule(server.schedule, sendMentorshipAnnounce);
	}
};
