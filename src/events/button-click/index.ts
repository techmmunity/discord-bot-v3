/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable sonarjs/no-duplicate-string */

import type { APIUser, APIGuildMember } from "discord-api-types/v10";
import type {
	ButtonInteraction,
	Interaction,
	MessageMentions,
} from "discord.js";
import {
	ActionRowBuilder,
	ButtonBuilder,
	ButtonStyle,
	EmbedBuilder,
} from "discord.js";

import { COLORS } from "../../assets/colors";
import { IMAGES } from "../../assets/images";

import { getTextChannel } from "../../utils/get-channel";

import {
	GENERAL_CHANNEL_ID,
	JOBS_CHANNEL_ID,
	JOB_ROLE_ID,
	RAZAL_ID,
	RECRUITER_ROLE_ID,
	STAFF_BOTS_CHANNEL,
	STARTER_ROLE_ID,
} from "../../config/ids";

type User = APIUser & {
	member?: Omit<APIGuildMember, "user">;
};

const getMention = (rawMentions: any): User => {
	const mentions: Array<any> = [];

	rawMentions.forEach((e: any) => mentions.push(e));

	return mentions.filter(m => m.id !== RAZAL_ID).shift()!;
};

const handleRecruiter = async (interaction: ButtonInteraction) => {
	const panelinhaChannel = getTextChannel(STAFF_BOTS_CHANNEL);

	await panelinhaChannel.send({
		content: `<@${RAZAL_ID}> -> <@${interaction.user.id}>`,
		embeds: [
			new EmbedBuilder()
				.setTitle("Novo(a) recrutador(a)!")
				.setColor(COLORS.orange)
				.setThumbnail(interaction.user.avatarURL() || IMAGES.techmmunityLogo),
		],
		components: [
			//@ts-ignore
			new ActionRowBuilder().addComponents(
				new ButtonBuilder()
					.setLabel("Dar permissão")
					.setStyle(ButtonStyle.Primary)
					.setCustomId("GIVE_RECRUITER_PERM"),
			),
		],
	});

	await interaction.reply({
		embeds: [
			{
				title: "Pronto!",
				description:
					"Os administradores foram avisados e te darão os privilégios assim que possível 😉",
				color: COLORS.green,
			},
		],
		ephemeral: true,
	});
};

const handleGiveRecruiterPerm = async (interaction: ButtonInteraction) => {
	if (interaction.user.id !== RAZAL_ID) {
		return interaction.user.send(
			"Tira o abacaxi do cu, corno!.\nTira o abacaxi do cu, corno!.\nTira o abacaxi do cu, corno!.\nTira o abacaxi do cu, corno!.\nTira o abacaxi do cu, corno!.\nTira o abacaxi do cu, corno!.\nTira o abacaxi do cu, corno!.\nTira o abacaxi do cu, corno!.\nTira o abacaxi do cu, corno!.\nTira o abacaxi do cu, corno!.\nTira o abacaxi do cu, corno!.\nTira o abacaxi do cu, corno!.\nTira o abacaxi do cu, corno!.\nTira o abacaxi do cu, corno!.\nTira o abacaxi do cu, corno!.\nTira o abacaxi do cu, corno!.\nTira o abacaxi do cu, corno!.\nTira o abacaxi do cu, corno!.\nTira o abacaxi do cu, corno!.\nTira o abacaxi do cu, corno!.\nTira o abacaxi do cu, corno!.\nTira o abacaxi do cu, corno!.\nTira o abacaxi do cu, corno!.",
		);
	}

	const generalChannel = getTextChannel(GENERAL_CHANNEL_ID);

	const mention = getMention(
		(interaction.message.mentions as MessageMentions).users,
	);

	const member = (await interaction.guild?.fetch())?.members.cache.get(
		mention.id,
	);

	await member?.roles.remove(STARTER_ROLE_ID);
	await member?.roles.add(RECRUITER_ROLE_ID);

	await generalChannel.send({
		content: `<@${mention?.id}>`,
		embeds: [
			{
				title: `Parabéns ${mention?.username}, agora você é um(a) recrutador(a)!`,
				description: `Sinta-se livre para postar vagas no <#${JOBS_CHANNEL_ID}>, marcando a role <@&${JOB_ROLE_ID}> para notificar quem está procurando um emprego :wink:`,
				color: COLORS.orange,
				thumbnail: {
					url: "https://media.tenor.com/images/ba9418de27ce10de6f7f7109bc2f84c2/tenor.gif",
				},
			},
		],
	});

	await interaction.deferReply();
};

export const buttonClick = (interaction: Interaction) => {
	if (!interaction.isButton()) return;

	if (interaction.customId === "IM_RECRUITER") {
		return handleRecruiter(interaction);
	}

	if (interaction.customId === "GIVE_RECRUITER_PERM") {
		return handleGiveRecruiterPerm(interaction);
	}
};
