/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable no-await-in-loop */

import { ButtonBuilder } from "@discordjs/builders";
import { sleep as sleepUtil } from "@techmmunity/utils";
import type { MessageOptions } from "discord.js";
import { ActionRowBuilder, ButtonStyle } from "discord.js";

import { COLORS } from "../../assets/colors";

import { getTextChannel } from "../../utils/get-channel";
import { getChannelUrl } from "../../utils/get-channel-url";

import {
	FORUM_CHANNEL_ID,
	GENERAL_CHANNEL_ID,
	JOBS_CHANNEL_ID,
	STAFF_BOTS_CHANNEL,
	WELCOME_CHANNEL_ID,
} from "../../config/ids";

// eslint-disable-next-line @typescript-eslint/no-magic-numbers
const sleep = () => sleepUtil(0.5);

const welcomeEmbed: MessageOptions = {
	embeds: [
		{
			title: "Seja bem vindo(a)!",
			description: `Salve jovem! Seja bem vindo(a) a Techmmunity, uma comunidade de desenvolvedores!

	Ficamos muito felizes em ter vc aqui conosco! Venha comigo, vou te dar um pequeno tour pela nossa comunidade :wink:`,
			color: COLORS.turquoise,
		},
	],
};

const serverOverviewVideoEmbed: MessageOptions = {
	content: "https://youtu.be/uArPRshh524",
};

const forumChannelEmbed: MessageOptions = {
	embeds: [
		{
			title: "Conheça nosso fórum! ❓",
			color: COLORS.purple,
		},
	],
	components: [
		//@ts-ignore
		new ActionRowBuilder().addComponents(
			new ButtonBuilder()
				.setLabel("TIRE SUAS DÚVIDAS!")
				.setStyle(ButtonStyle.Link)
				.setURL(getChannelUrl(FORUM_CHANNEL_ID)),
		),
	],
};

const generalChannelEmbed: MessageOptions = {
	embeds: [
		{
			title: "Converse com a galera! 🤯",
			color: COLORS.turquoise,
		},
	],
	components: [
		//@ts-ignore
		new ActionRowBuilder().addComponents(
			new ButtonBuilder()
				.setLabel("CONVERSAR COM O PESSOAL")
				.setStyle(ButtonStyle.Link)
				.setURL(getChannelUrl(GENERAL_CHANNEL_ID)),
		),
	],
};

const jobsChannelEmbed: MessageOptions = {
	embeds: [
		{
			title: "Consiga um emprego! 💼",
			color: COLORS.yellow,
		},
	],
	components: [
		//@ts-ignore
		new ActionRowBuilder().addComponents(
			new ButtonBuilder()
				.setLabel("VER EMPREGOS")
				.setStyle(ButtonStyle.Link)
				.setURL(getChannelUrl(JOBS_CHANNEL_ID)),
		),
	],
};

const recruiterEmbed: MessageOptions = {
	embeds: [
		{
			title: "É um(a) recrutador(a)?",
			description:
				"Clique no botão	abaixo para avisar os adiministradores e receber benefícios exclusivos! 😆",
			color: COLORS.orange,
		},
	],
	components: [
		//@ts-ignore
		new ActionRowBuilder().addComponents(
			new ButtonBuilder()
				.setCustomId("IM_RECRUITER")
				.setLabel("SOU RECRUTADOR(A)")
				.setStyle(ButtonStyle.Secondary),
		),
	],
};

export const sendWelcomeEmbed = async () => {
	const welcomeChannel = getTextChannel(
		process.env.NODE_ENV === "dev" ? STAFF_BOTS_CHANNEL : WELCOME_CHANNEL_ID,
	);

	const messages = [
		welcomeEmbed,
		serverOverviewVideoEmbed,
		forumChannelEmbed,
		generalChannelEmbed,
		jobsChannelEmbed,
		recruiterEmbed,
	];

	for (const message of messages) {
		await welcomeChannel.send(message);

		await sleep();
	}
};
