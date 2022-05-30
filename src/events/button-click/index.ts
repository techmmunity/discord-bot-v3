/* eslint-disable sonarjs/no-duplicate-string */

import { sleep } from "@techmmunity/utils";
import { APIUser, APIGuildMember } from "discord-api-types/v10";
import {
	ButtonInteraction,
	GuildMember,
	Interaction,
	MessageActionRow,
	MessageButton,
	MessageEmbedOptions,
	MessageMentions,
} from "discord.js";
import { COLORS } from "../../assets/colors";
import { IMAGES } from "../../assets/images";
import { agesOptions } from "../../config/ages";
import {
	GENERAL_CHANNEL_ID,
	JOBS_CHANNEL_ID,
	JOB_ROLE_ID,
	RAZAL_ID,
	RECRUITER_ROLE_ID,
	STAFF_BOTS_CHANNEL,
} from "../../config/ids";
import { langsOptions } from "../../config/langs";
import { notificationsOptions } from "../../config/notification";
import { getAgeId } from "../../interactions/send-pre-defined-messages/age-embed";
import { getLangId } from "../../interactions/send-pre-defined-messages/languages-embed";
import { getNotificationId } from "../../interactions/send-pre-defined-messages/notifications-embed";
import { getTextChannel } from "../../utils/get-channel";

type User = APIUser & {
	member?: Omit<APIGuildMember, "user">;
};

const getMention = (rawMentions: any): User => {
	const mentions: Array<any> = [];

	rawMentions.forEach((e: any) => mentions.push(e));

	return mentions.filter(m => m.id !== RAZAL_ID).shift()!;
};

const handleNotification = async (interaction: ButtonInteraction) => {
	const notification = getNotificationId(interaction.customId);

	const member = interaction.member as GuildMember;

	const roleId = notificationsOptions[notification].role;

	const shouldAddRole = !member.roles.cache.has(roleId);

	let embed: MessageEmbedOptions;

	if (shouldAddRole) {
		await member.roles.add(roleId);

		embed = {
			title: "Role adicionada!",
			description: `Você passará a receber notificações para **${notification}** a partir de agora 🥳`,
			color: COLORS.green,
		};
	} else {
		await member.roles.remove(roleId);

		embed = {
			title: "Role removida!",
			description: `Você deixará a receber notificações para **${notification}** a partir de agora 😔`,
			color: COLORS.red,
		};
	}

	const message = {
		content: `<@${interaction.user.id}>`,
		embeds: [embed],
	};

	await interaction.reply(message);

	// eslint-disable-next-line @typescript-eslint/no-magic-numbers
	await sleep(4);

	await interaction.deleteReply();

	const botsChannel = getTextChannel(STAFF_BOTS_CHANNEL);

	botsChannel.send(message);
};

const handleLang = async (interaction: ButtonInteraction) => {
	const lang = getLangId(interaction.customId);

	const member = interaction.member as GuildMember;

	const langOpt = langsOptions.find(l => l.id === lang)!;
	const roleId = langOpt.role;

	const shouldAddRole = !member.roles.cache.has(roleId);

	let embed: MessageEmbedOptions;

	if (shouldAddRole) {
		await member.roles.add(roleId);

		embed = {
			title: "Role adicionada!",
			description: `Você agora tem a role **${langOpt.description}** 🥳`,
			color: COLORS.green,
		};
	} else {
		await member.roles.remove(roleId);

		embed = {
			title: "Role removida!",
			description: `Você não tem mais a role **${langOpt.description}** 😔`,
			color: COLORS.red,
		};
	}

	const message = {
		content: `<@${interaction.user.id}>`,
		embeds: [embed],
	};

	await interaction.reply(message);

	// eslint-disable-next-line @typescript-eslint/no-magic-numbers
	await sleep(4);

	await interaction.deleteReply();

	const botsChannel = getTextChannel(STAFF_BOTS_CHANNEL);

	return botsChannel.send(message);
};

const handleAge = async (interaction: ButtonInteraction) => {
	const age = getAgeId(interaction.customId);

	const member = interaction.member as GuildMember;

	const ageOpt = agesOptions.find(a => a.id === age)!;
	const roleId = ageOpt.role;

	const shouldAddRole = !member.roles.cache.has(roleId);

	let embed: MessageEmbedOptions;

	if (shouldAddRole) {
		await member.roles.add(roleId);

		embed = {
			title: "Role adicionada!",
			description: `Você agora tem a role **${ageOpt.description}** 🥳`,
			color: COLORS.green,
		};
	} else {
		await member.roles.remove(roleId);

		embed = {
			title: "Role removida!",
			description: `Você não tem mais a role **${ageOpt.description}** 😔`,
			color: COLORS.red,
		};
	}

	const message = {
		content: `<@${interaction.user.id}>`,
		embeds: [embed],
	};

	await interaction.reply(message);

	// eslint-disable-next-line @typescript-eslint/no-magic-numbers
	await sleep(4);

	await interaction.deleteReply();

	const botsChannel = getTextChannel(STAFF_BOTS_CHANNEL);

	return botsChannel.send(message);
};

const handleRecruiter = async (interaction: ButtonInteraction) => {
	const embed: MessageEmbedOptions = {
		title: "Novo(a) recrutador(a)!",
		color: COLORS.orange,
		thumbnail: {
			url: interaction.user.avatarURL() || IMAGES.techmmunityLogo,
		},
	};

	const panelinhaChannel = getTextChannel(STAFF_BOTS_CHANNEL);

	await panelinhaChannel.send({
		content: `<@${RAZAL_ID}> -> <@${interaction.user.id}>`,
		embeds: [embed],
		components: [
			new MessageActionRow().addComponents(
				new MessageButton()
					.setCustomId("GIVE_RECRUITER_PERM")
					.setLabel("Dar permissão")
					.setStyle("PRIMARY"),
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
	});

	// eslint-disable-next-line @typescript-eslint/no-magic-numbers
	await sleep(5);

	await interaction.deleteReply();
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

	await (await interaction.guild?.fetch())?.members.cache
		.get(mention.id)
		?.roles.add(RECRUITER_ROLE_ID);

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
};

export const buttonClick = (interaction: Interaction) => {
	if (!interaction.isButton()) return;

	if (interaction.customId?.startsWith("NOTIFICATION#")) {
		return handleNotification(interaction);
	}

	if (interaction.customId?.startsWith("LANG#")) {
		return handleLang(interaction);
	}

	if (interaction.customId?.startsWith("AGE#")) {
		return handleAge(interaction);
	}

	if (interaction.customId === "IM_RECRUITER") {
		return handleRecruiter(interaction);
	}

	if (interaction.customId === "GIVE_RECRUITER_PERM") {
		return handleGiveRecruiterPerm(interaction);
	}
};
