import { MessageEmbedOptions } from "discord.js";
import { JobsOutput } from "../../utils/google-jobs";

export const getJobsEmbeds = (
	jobs: Array<JobsOutput>,
): Array<MessageEmbedOptions> =>
	jobs.map(job => ({
		title: job.title,
		thumbnail: {
			url: job.thumbnail,
		},
		description: job.description,
		url: job.url,
		fields: [
			{
				name: "Empresa",
				value: job.companyName,
			},
			{
				name: "Local",
				value: job.location,
			},
			{
				name: "Salário",
				value: job.salary,
			},
		],
	}));
