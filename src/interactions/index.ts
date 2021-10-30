import { Client } from "discord.js";

import { createChallenge, createChallengeCommand } from "./create-challenge";
import { getJob, getJobCommand } from "./get-job";
import { notifications, notificationsCommand } from "./notifications";
import { ping, pingCommand } from "./ping";
import { ram, ramCommand } from "./ram";
import {
	getRandomChallenge,
	getRandomChallengeCommand,
} from "./random-challenge";
import { sendEmbed, sendEmbedCommand } from "./send-embed";
import {
	sendPreDefinedMessages,
	sendPreDefinedMessagesCommand,
} from "./send-pre-defined-messages";
import { suggest, suggestCommand } from "./suggest";
import { welcomeImg, welcomeImgCommand } from "./welcome-img";

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
			case "get-random-challenge":
				return getRandomChallenge(interaction);
			case "welcome-image":
				return welcomeImg(interaction);
			case "suggest":
				return suggest(interaction);
			case "notifications":
				return notifications(interaction);
			case "send-pre-defined-messages":
				return sendPreDefinedMessages(interaction);
			case "get-job":
				return getJob(interaction);
			case "send-embed":
				return sendEmbed(interaction);
			default:
				return;
		}
	});
};

export const commands = [
	createChallengeCommand,
	pingCommand,
	ramCommand,
	getRandomChallengeCommand,
	welcomeImgCommand,
	suggestCommand,
	notificationsCommand,
	sendPreDefinedMessagesCommand,
	getJobCommand,
	sendEmbedCommand,
];
