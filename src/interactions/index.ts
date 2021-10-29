import { Client } from "discord.js";

import { createChallenge, createChallengeCommand } from "./create-challenge";
import { ping, pingCommand } from "./ping";
import { ram, ramCommand } from "./ram";

export const setInteractions = (client: Client) => {
	client.on("ready", () => {
		// eslint-disable-next-line no-console
		console.log("Bot is ready!");
	});

	client.on("interactionCreate", interaction => {
		if (!interaction.isCommand()) return;

		switch (interaction.commandName) {
			case "create-challenge":
				return createChallenge(interaction);
			case "ping":
				return ping(interaction);
			case "ram":
				return ram(interaction);
			default:
				return;
		}
	});
};

export const commands = [createChallengeCommand, pingCommand, ramCommand];
