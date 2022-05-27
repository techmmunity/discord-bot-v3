import { SlashCommandBuilder } from "@discordjs/builders";
import { CommandInteraction } from "discord.js";
import { STAFF_ROLE_ID, MOD_ROLE_ID } from "../../config/ids";
import { Interaction } from "../../types/interactions";
import { getRandomChallengeEmbed } from "./get-random-challenge";
import { getCommandName } from "../../utils/get-command-name";
import { COLORS } from "../../assets/colors";
import { verifyOneOfRoles } from "../../utils/verify-one-of-roles";

export const getRandomChallenge = async (interaction: CommandInteraction) => {
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

	const randomChallengeEmbed = await getRandomChallengeEmbed();

	await interaction.reply({
		embeds: [randomChallengeEmbed],
	});
};

export const getRandomChallengeCommand: Interaction = {
	command: new SlashCommandBuilder()
		.setName(getCommandName("get-random-challenge"))
		.setDescription("Get a random challenge")
		.setDefaultPermission(false),
};
