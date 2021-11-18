/* eslint-disable no-await-in-loop */
/* eslint-disable @typescript-eslint/no-magic-numbers */

import { sleep } from "@techmmunity/utils";
import { TextChannel } from "discord.js";
import { DiscordClient } from "../../client";
import {
	BLUE_PHOENIX_GUILD_ID,
	BLUE_PHOENIX_JOBS_CHANNEL_ID,
	CODEFY_COMMUNITY_GUILD_ID,
	CODEFY_COMMUNITY_JOBS_CHANNEL_ID,
	CODERS_COMMUNITY_GUILD_ID,
	CODERS_COMMUNITY_JOBS_CHANNEL_ID,
	CODERS_COMMUNITY_JOBS_ROLE_ID,
	JOBS_CHANNEL_ID,
	JOB_ROLE_ID,
	TECHMMUNITY_GUILD_ID,
} from "../../config/ids";
import { getJobsEmbeds } from "../../interactions/get-job/get-jobs-embeds";
import { getJobs } from "../../utils/google-jobs";

const servers = [
	{
		id: TECHMMUNITY_GUILD_ID,
		channelId: JOBS_CHANNEL_ID,
		role: JOB_ROLE_ID,
	},
	{
		id: CODERS_COMMUNITY_GUILD_ID,
		channelId: CODERS_COMMUNITY_JOBS_CHANNEL_ID,
		role: CODERS_COMMUNITY_JOBS_ROLE_ID,
		crosspost: true,
	},
	{
		id: CODEFY_COMMUNITY_GUILD_ID,
		channelId: CODEFY_COMMUNITY_JOBS_CHANNEL_ID,
	},
	{
		id: BLUE_PHOENIX_GUILD_ID,
		channelId: BLUE_PHOENIX_JOBS_CHANNEL_ID,
	},
];

export const sendJobOffer = (query: string) => async () => {
	const jobs = await getJobs(query, 10);

	const embeds = getJobsEmbeds(jobs);

	for (const server of servers) {
		// eslint-disable-next-line no-await-in-loop
		const guild = await DiscordClient.guilds.fetch(server.id);

		// eslint-disable-next-line no-await-in-loop
		const channel = (await guild?.channels.fetch(
			server.channelId,
		)) as TextChannel;

		for (const embed of embeds) {
			const message = await channel.send({
				content: server.role ? `<@&${server.role}>` : undefined,
				embeds: [embed],
			});

			if (server.crosspost) {
				await message.crosspost();
			}

			await sleep(0.5);
		}
	}
};
