/* eslint-disable @typescript-eslint/ban-ts-comment */
import type { Client } from "discord.js";

import { clean, cleanCommand } from "./clean";
import { getTechTip, getTechTipCommand } from "./get-tech-tip";
import { ping, pingCommand } from "./ping";
import { qce, qceCommand } from "./qce";
import { ram, ramCommand } from "./ram";
import { sendEmbed, sendEmbedCommand } from "./send-embed";
import {
	sendPreDefinedMessages,
	sendPreDefinedMessagesCommand,
} from "./send-pre-defined-messages";
import { welcomeImg, welcomeImgCommand } from "./welcome-img";

import { getCommandName } from "../utils/get-command-name";

export const setInteractions = (client: Client) => {
	client.on("ready", () => {
		// eslint-disable-next-line no-console
		console.log("Bot is ready!");
	});

	//@ts-ignore
	client.on("interactionCreate", interaction => {
		if (!interaction.isCommand()) return;

		switch (interaction.commandName) {
			case getCommandName("ping"):
				return ping(interaction);
			case getCommandName("ram"):
				return ram(interaction);
			case getCommandName("welcome-image"):
				return welcomeImg(interaction);
			case getCommandName("send-pre-defined-messages"):
				return sendPreDefinedMessages(interaction);
			case getCommandName("send-embed"):
				return sendEmbed(interaction);
			case getCommandName("get-tech-tip"):
				return getTechTip(interaction);
			case getCommandName("clean"):
				return clean(interaction);
			case getCommandName("qce"):
				return qce(interaction);
			default:
				return;
		}
	});
};

export const commands = [
	pingCommand,
	ramCommand,
	welcomeImgCommand,
	sendPreDefinedMessagesCommand,
	sendEmbedCommand,
	getTechTipCommand,
	cleanCommand,
	qceCommand,
];
