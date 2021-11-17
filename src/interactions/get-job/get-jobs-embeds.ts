/* eslint-disable @typescript-eslint/no-magic-numbers */
import { MessageEmbedOptions } from "discord.js";
import { IMAGES } from "../../assets/images";
import { JobsOutput } from "../../utils/google-jobs";

export const getJobsEmbeds = (
	jobs: Array<JobsOutput>,
): Array<MessageEmbedOptions> =>
	jobs.map(job => ({
		title: `${job.title.slice(0, 253)}...`,
		thumbnail: {
			url: job.thumbnail,
		},
		description: job.description,
		url: job.url,
		author: {
			name: "Techmmunity",
			url: "https://techmmunity.com.br",
			iconURL: IMAGES.techmmunityLogo,
		},
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
