/* eslint-disable no-await-in-loop */
/* eslint-disable @typescript-eslint/no-magic-numbers */

import { sleep } from "@techmmunity/utils";
import { JOBS_CHANNEL_ID, JOB_ROLE_ID } from "../../config/ids";
import { getJobsEmbeds } from "../../interactions/get-job/get-jobs-embeds";
import { getTextChannel } from "../../utils/get-channel";
import { getJobs } from "../../utils/google-jobs";

export const sendJobOffer = (query: string) => async () => {
	const channel = getTextChannel(JOBS_CHANNEL_ID);

	const jobs = await getJobs(query, 10);

	const embeds = getJobsEmbeds(jobs);

	for (const embed of embeds) {
		await channel.send({
			content: `<@&${JOB_ROLE_ID}>`,
			embeds: [embed],
		});

		await sleep(0.3);
	}
};
