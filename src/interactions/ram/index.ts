/* eslint-disable @typescript-eslint/no-magic-numbers */

import { SlashCommandBuilder } from "@discordjs/builders";
import type { CommandInteraction } from "discord.js";

import { COLORS } from "../../assets/colors";
import { IMAGES } from "../../assets/images";

import { getCommandName } from "../../utils/get-command-name";
import { verifyOneOfRoles } from "../../utils/verify-one-of-roles";

import { MOD_ROLE_ID, STAFF_ROLE_ID } from "../../config/ids";

import type { Interaction } from "../../types/interactions";

const calcMemory = (memory: number) =>
	Math.round((memory / 1024 / 1024) * 100) / 100;

const getColor = (memoryUsage: number) => {
	if (memoryUsage < 30) return COLORS.green;

	if (memoryUsage < 50) return COLORS.yellow;

	return COLORS.red;
};

export const ram = async (interaction: CommandInteraction) => {
	if (!verifyOneOfRoles(interaction as any, [STAFF_ROLE_ID, MOD_ROLE_ID])) {
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

	const memoryUsage = process.memoryUsage();

	const rss = calcMemory(memoryUsage.rss);
	const heapTotal = calcMemory(memoryUsage.heapTotal);
	const heapUsed = calcMemory(memoryUsage.heapUsed);
	const external = calcMemory(memoryUsage.external);
	const total = calcMemory(memoryUsage.heapTotal + memoryUsage.external);

	return interaction.reply({
		embeds: [
			{
				title: "I use about:",
				color: getColor(heapTotal),
				thumbnail: {
					url: IMAGES.performance,
				},
				fields: [
					{
						name: "RSS",
						value: `${rss} MB`,
						inline: true,
					},
					{
						name: "Heap Total",
						value: `${heapTotal} MB`,
						inline: true,
					},
					{
						name: "Heap Used",
						value: `${heapUsed} MB`,
						inline: true,
					},
					{
						name: "External",
						value: `${external} MB`,
						inline: true,
					},
					{
						name: "Total",
						value: `${total} MB`,
						inline: true,
					},
				],
			},
		],
	});
};

export const ramCommand: Interaction = {
	command: new SlashCommandBuilder()
		.setName(getCommandName("ram"))
		.setDescription("Checks the bot ram usage")
		.setDefaultPermission(false),
};
