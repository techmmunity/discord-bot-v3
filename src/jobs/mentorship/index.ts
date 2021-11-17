/* eslint-disable @typescript-eslint/no-magic-numbers */

import { sleep } from "@techmmunity/utils";
import { TextChannel } from "discord.js";
import { DiscordClient } from "../../client";
import { classes } from "./classes";

export const sendMentorshipAnnounce = async () => {
	const currentClass = classes.pop()!;

	for (const server of currentClass.servers) {
		// eslint-disable-next-line no-await-in-loop
		const guild = await DiscordClient.guilds.fetch(server.id);

		// eslint-disable-next-line no-await-in-loop
		const channel = (await guild?.channels.fetch(
			server.channelId,
		)) as TextChannel;

		if (channel) {
			// eslint-disable-next-line no-await-in-loop
			await channel.send({
				content: currentClass.content,
				embeds: currentClass.embeds,
			});

			// eslint-disable-next-line no-await-in-loop
			await sleep(0.5);
		}
	}
};
