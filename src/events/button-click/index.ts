import { sleep } from "@techmmunity/utils";
import { APIUser, APIGuildMember } from "discord-api-types";
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
import {
	GENERAL_CHANNEL_ID,
	JOBS_CHANNEL_ID,
	JOB_ROLE_ID,
	PANELINHA_CHANNEL_ID,
	PROFESSOR_ROLE_ID,
	RAZAL_ID,
	RECRUITER_ROLE_ID,
	STAFF_BOTS_CHANNEL,
} from "../../config/ids";
import { notificationsOptions } from "../../config/notification";
import {
	getNotificationId,
	makeNotificationButtonId,
} from "../../interactions/send-pre-defined-messages/notifications-embed";
import { getTextChannel } from "../../utils/get-channel";

type User = APIUser & {
	member?: Omit<APIGuildMember, "user">;
};

const getMention = (rawMentions: any): User => {
	const mentions: Array<any> = [];

	rawMentions.forEach((e: any) => mentions.push(e));

	return mentions.shift()!;
};

const notificationsInteractions = Object.keys(notificationsOptions).map(
	makeNotificationButtonId,
);

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

const handleRecruiter = async (interaction: ButtonInteraction) => {
	const embed: MessageEmbedOptions = {
		title: "Novo(a) recrutador(a)!",
		color: COLORS.orange,
		thumbnail: {
			url: interaction.user.avatarURL() || IMAGES.techmmunityLogo,
		},
	};

	const panelinhaChannel = getTextChannel(PANELINHA_CHANNEL_ID);

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
		return interaction.reply("Só o razal pode.");
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

const handleProfessor = async (interaction: ButtonInteraction) => {
	const embed: MessageEmbedOptions = {
		title: "Novo(a) professor(a)!",
		color: COLORS.purple,
		thumbnail: {
			url: interaction.user.avatarURL() || IMAGES.techmmunityLogo,
		},
	};

	const panelinhaChannel = getTextChannel(PANELINHA_CHANNEL_ID);

	await panelinhaChannel.send({
		content: `<@${RAZAL_ID}> -> <@${interaction.user.id}>`,
		embeds: [embed],
		components: [
			new MessageActionRow().addComponents(
				new MessageButton()
					.setCustomId("GIVE_PROFESSOR_PERM")
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

const handleGiveProfessorPerm = async (interaction: ButtonInteraction) => {
	if (interaction.user.id !== RAZAL_ID) {
		return interaction.reply("Só o razal pode.");
	}

	const generalChannel = getTextChannel(GENERAL_CHANNEL_ID);

	const mention = getMention(
		(interaction.message.mentions as MessageMentions).users,
	);

	await (await interaction.guild?.fetch())?.members.cache
		.get(mention.id)
		?.roles.add(PROFESSOR_ROLE_ID);

	await generalChannel.send({
		content: `<@${mention?.id}>`,
		embeds: [
			{
				title: `Parabéns ${mention?.username}, agora você pode dar aulas!`,
				description:
					"Sinta-se livre para criar eventos e usar o `Tech Class` o quanto quiser :wink",
				color: COLORS.orange,
				thumbnail: {
					url: "https://media1.tenor.com/images/3e16351fae83925ef8cc0f21a7f194f7/tenor.gif?itemid=4811486",
				},
			},
		],
	});
};

export const buttonClick = (interaction: Interaction) => {
	if (!interaction.isButton()) return;

	if (notificationsInteractions.includes(interaction.customId)) {
		return handleNotification(interaction);
	}

	if (interaction.customId === "IM_RECRUITER") {
		return handleRecruiter(interaction);
	}

	if (interaction.customId === "GIVE_RECRUITER_PERM") {
		return handleGiveRecruiterPerm(interaction);
	}

	if (interaction.customId === "IM_PROFESSOR") {
		return handleProfessor(interaction);
	}

	if (interaction.customId === "GIVE_PROFESSOR_PERM") {
		return handleGiveProfessorPerm(interaction);
	}
};
