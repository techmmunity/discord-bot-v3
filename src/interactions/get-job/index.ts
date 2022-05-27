import { SlashCommandBuilder } from "@discordjs/builders";
import { CommandInteraction } from "discord.js";
import { STAFF_ROLE_ID } from "../../config/ids";
import { Interaction } from "../../types/interactions";
import { getJobs } from "../../utils/google-jobs";
import { getJobsEmbeds } from "./get-jobs-embeds";
import { getCommandName } from "../../utils/get-command-name";
import { verifyOneOfRoles } from "../../utils/verify-one-of-roles";
import { COLORS } from "../../assets/colors";

export const getJob = async (interaction: CommandInteraction) => {
	if (!verifyOneOfRoles(interaction, [STAFF_ROLE_ID])) {
		await interaction.reply({
			embeds: [
				{
					title: "Error!",
					description: "You don't have permission to execute this command!",
					color: COLORS.red,
				},
			],
		});

		return;
	}

	/**
	 * --------------------------------------------------------------------
	 */

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
		.setName(getCommandName("get-job"))
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
};
