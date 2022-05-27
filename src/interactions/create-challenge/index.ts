import { SlashCommandBuilder } from "@discordjs/builders";
import { getGlobalRepository } from "@techmmunity/symbiosis";
import { Repository } from "@techmmunity/symbiosis-dynamodb";
import { getTypeof } from "@techmmunity/utils";
import { CommandInteraction } from "discord.js";
import { COLORS } from "../../assets/colors";
import { MOD_ROLE_ID, STAFF_ROLE_ID } from "../../config/ids";
import { ChallengeEntity } from "../../entities/challenge";
import { Interaction } from "../../types/interactions";
import { getTitle } from "../../utils/get-title";
import { makeChallengeEmbed } from "./make-embed";
import { getCommandName } from "../../utils/get-command-name";
import { verifyOneOfRoles } from "../../utils/verify-one-of-roles";

export const createChallenge = async (interaction: CommandInteraction) => {
	if (!verifyOneOfRoles(interaction, [STAFF_ROLE_ID, MOD_ROLE_ID])) {
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

	const url = interaction.options.getString("url")!;

	if (!url.startsWith("https://www.codewars.com/kata/")) {
		await interaction.reply({
			embeds: [
				{
					title: "Error!",
					description: "The challenge must be from CodeWars!",
					color: COLORS.red,
				},
			],
		});

		return;
	}

	const challengeRepository = getGlobalRepository(
		ChallengeEntity,
	) as Repository<ChallengeEntity>;

	const title = await getTitle(url);

	if (getTypeof(title) !== "string") {
		await interaction.reply({
			embeds: [
				{
					title: "Error!",
					description: "Invalid challenge title!",
					color: COLORS.red,
				},
			],
		});

		return;
	}

	const challenge = await challengeRepository.findOne({
		where: {
			url,
		},
	});

	if (challenge) {
		await interaction.reply({
			embeds: [
				{
					title: "Error!",
					description: "Challenge already exists!",
					color: COLORS.red,
				},
			],
		});

		return;
	}

	const level = interaction.options.getNumber("level")!;

	const createdChallenge = await challengeRepository.save<ChallengeEntity>({
		url,
		level,
	});

	await interaction.reply({
		embeds: [
			{
				title: "Success!",
				description: "Challenge successfully created!",
				color: COLORS.green,
			},
			makeChallengeEmbed({
				title,
				challenge: createdChallenge,
			}),
		],
	});
};

export const createChallengeCommand: Interaction = {
	command: new SlashCommandBuilder()
		.setName(getCommandName("create-challenge"))
		.setDescription("Creates a new challenge")
		.addStringOption(option =>
			option
				.setName("url")
				.setDescription("CodeWars Challenge URL")
				.setRequired(true),
		)
		.addNumberOption(option =>
			option
				.setName("level")
				.setDescription("CodeWars Challenge Level")
				.setRequired(true),
		)
		.setDefaultPermission(false),
};
