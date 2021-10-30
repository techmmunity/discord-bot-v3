import { SlashCommandBuilder } from "@discordjs/builders";
import { CommandInteraction } from "discord.js";
import { RAZAL_ID } from "../../config/ids";
import { Interaction } from "../../types/interactions";
import { PermissionTypeEnum } from "../../types/permission-type";
import { getJobs } from "../../utils/google-jobs";
import { getJobsEmbeds } from "./get-jobs-embeds";

export const getJob = async (interaction: CommandInteraction) => {
	interaction.deferReply();

	const query = interaction.options.getString("query")!;
	const max = interaction.options.getNumber("qtd")!;

	const jobs = await getJobs(query, max);

	await interaction.editReply({
		embeds: getJobsEmbeds(jobs),
	});
};

export const getJobCommand: Interaction = {
	command: new SlashCommandBuilder()
		.setName("get-job")
		.setDescription("Get a job")
		.addStringOption(option =>
			option
				.setName("query")
				.setDescription("Query to search for jobs")
				.setRequired(true),
		)
		.addNumberOption(option =>
			option
				.setName("qtd")
				.setDescription("Qtd of jobs to return")
				.setRequired(true),
		)
		.setDefaultPermission(false),
	permissions: [
		{
			id: RAZAL_ID,
			type: PermissionTypeEnum.USER,
			permission: true,
		},
	],
};
