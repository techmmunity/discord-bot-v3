import { Client } from "discord.js";

import { createChallenge, createChallengeCommand } from "./create-challenge";
import { getJob, getJobCommand } from "./get-job";
import { getTechTip, getTechTipCommand } from "./get-tech-tip";
import { notifications, notificationsCommand } from "./notifications";
import { ping, pingCommand } from "./ping";
import { ram, ramCommand } from "./ram";
import { clean, cleanCommand } from "./clean";
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
import { qce, qceCommand } from "./qce";
import { minecraft, minecraftCommand } from "./minecraft";
import { youtube, youtubeCommand } from "./youtube";
import { getCommandName } from "../utils/get-command-name";
import { mentorship, mentorshipCommand } from "./mentorship";

export const setInteractions = (client: Client) => {
	client.on("ready", () => {
		// eslint-disable-next-line no-console
		console.log("Bot is ready!");
	});

	client.on("interactionCreate", interaction => {
		if (!interaction.isCommand()) return;

		switch (interaction.commandName) {
			case getCommandName("create-challenge"):
				return createChallenge(interaction);
			case getCommandName("ping"):
				return ping(interaction);
			case getCommandName("ram"):
				return ram(interaction);
			case getCommandName("get-random-challenge"):
				return getRandomChallenge(interaction);
			case getCommandName("welcome-image"):
				return welcomeImg(interaction);
			case getCommandName("suggest"):
				return suggest(interaction);
			case getCommandName("notifications"):
				return notifications(interaction);
			case getCommandName("send-pre-defined-messages"):
				return sendPreDefinedMessages(interaction);
			case getCommandName("get-job"):
				return getJob(interaction);
			case getCommandName("send-embed"):
				return sendEmbed(interaction);
			case getCommandName("get-tech-tip"):
				return getTechTip(interaction);
			case getCommandName("clean"):
				return clean(interaction);
			case getCommandName("qce"):
				return qce(interaction);
			case getCommandName("minecraft"):
				return minecraft(interaction);
			case getCommandName("youtube"):
				return youtube(interaction);
			case getCommandName("mentorship"):
				return mentorship(interaction);
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
	getTechTipCommand,
	cleanCommand,
	qceCommand,
	minecraftCommand,
	youtubeCommand,
	mentorshipCommand,
];
