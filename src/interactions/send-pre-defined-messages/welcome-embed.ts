/* eslint-disable no-await-in-loop */
import { sleep as sleepUtil } from "@techmmunity/utils";
import { MessageActionRow, MessageButton, MessageOptions } from "discord.js";
import { COLORS } from "../../assets/colors";
import {
	BUMP_CHANNEL_ID,
	EVENTS_CHANNEL_ID,
	GENERAL_CHANNEL_ID,
	I_DID_IT_CHANNEL_ID,
	JOBS_CHANNEL_ID,
	NETWORKING_CHANNEL_ID,
	NOTIFICATIONS_CHANNEL_ID,
	STAFF_BOTS_CHANNEL,
	SUGGESTIONS_CHANNEL_ID,
	WELCOME_CHANNEL_ID,
} from "../../config/ids";
import { getTextChannel } from "../../utils/get-channel";
import { getChannelUrl } from "../../utils/get-channel-url";

// eslint-disable-next-line @typescript-eslint/no-magic-numbers
const sleep = () => sleepUtil(0.5);

const welcomeEmbed: MessageOptions = {
	embeds: [
		{
			title: "Seja bem vindo(a)!",
			description: `Salve jovem! Seja bem vindo(a) a Techmmunity, uma comunidade de desenvolvedores TypeScript!

	Ficamos muito felizes em ter vc aqui conosco! Venha comigo, vou te dar um pequeno tour pela nossa comunidade :wink:



	**=== 📢 COMMUNITY ===**

	<#${JOBS_CHANNEL_ID}> - Vagas de emprego

	<#${EVENTS_CHANNEL_ID}> - Eventos do server

	<#${I_DID_IT_CHANNEL_ID}> - Compartilhe suas criações

	<#${SUGGESTIONS_CHANNEL_ID}> - Vote nas sugestões para melhorarmos a comunidade

	<#${BUMP_CHANNEL_ID}> - Ajude a divulgar o servidor



	**=== 📚 CONTENTS ===**

	Encontre e compartilhe conteúdos interessantes aqui



	**=== ❓ TOPICS ===**

	**❓ Canais para fazer perguntas ❓**`,
			color: COLORS.turquoise,
		},
	],
};

const introduceYourselfEmbed: MessageOptions = {
	embeds: [
		{
			title: "Apresente-se aqui! 😄",
			color: COLORS.blue,
		},
	],
	components: [
		new MessageActionRow().addComponents(
			new MessageButton()
				.setLabel("QUERO ME APRESENTAR")
				.setStyle("LINK")
				.setURL(getChannelUrl(NETWORKING_CHANNEL_ID)),
		),
	],
};

const generalChannelEmbed: MessageOptions = {
	embeds: [
		{
			title: "Converse com a galera! 🤯",
		},
	],
	components: [
		new MessageActionRow().addComponents(
			new MessageButton()
				.setLabel("CONVERSAR COM O PESSOAL")
				.setStyle("LINK")
				.setURL(getChannelUrl(GENERAL_CHANNEL_ID)),
		),
	],
};

const notificationsEmbed: MessageOptions = {
	embeds: [
		{
			title: "Receba notificações",
		},
	],
	components: [
		new MessageActionRow().addComponents(
			new MessageButton()
				.setLabel("RECEBER NOTIFICAÇÕES")
				.setStyle("LINK")
				.setURL(getChannelUrl(NOTIFICATIONS_CHANNEL_ID)),
		),
	],
};

const captisEmbed: MessageOptions = {
	embeds: [
		{
			title: "Estude para as vagas da Captis!",
			description:
				"Já sonhou em trabalhar em uma rede social para gamers **canadense** sem saber inglês fluênte? Saiba que você pode! A Captis sempre tem novas vagas abertas para diversas áreas, e adoram contratar Júniors e treina-los em casa! Para se preparar para trabalhar na Captis, sempre são postados conteúdos aqui, e para ser notificado quando novos conteúdos forem postados, basta clicar nos botões abaixo:",
			color: COLORS.captis,
			thumbnail: {
				url: "https://cdn.discordapp.com/attachments/903650212596293642/929832754361798686/CAPTIS_LOGO_UPDATED.png",
			},
		},
	],
	components: [
		new MessageActionRow()
			.addComponents(
				new MessageButton()
					.setCustomId("CAPTIS#backend")
					.setLabel("BACKEND")
					.setStyle("SECONDARY"),
			)
			.addComponents(
				new MessageButton()
					.setCustomId("CAPTIS#discord_bot")
					.setLabel("DISCORD BOT")
					.setStyle("SECONDARY"),
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
		new MessageActionRow().addComponents(
			new MessageButton()
				.setCustomId("IM_RECRUITER")
				.setLabel("SOU RECRUTADOR(A)")
				.setStyle("SECONDARY"),
		),
	],
};

const warnEmbed: MessageOptions = {
	embeds: [
		{
			title:
				"Suba o chat para ver todas as mensagens, elas são importantes :wink:",
		},
	],
};

export const sendWelcomeEmbed = async () => {
	const welcomeChannel = getTextChannel(
		process.env.NODE_ENV === "dev" ? STAFF_BOTS_CHANNEL : WELCOME_CHANNEL_ID,
	);

	const messages = [
		welcomeEmbed,
		introduceYourselfEmbed,
		generalChannelEmbed,
		notificationsEmbed,
		captisEmbed,
		recruiterEmbed,
		warnEmbed,
	];

	for (const message of messages) {
		await welcomeChannel.send(message);

		await sleep();
	}
};
