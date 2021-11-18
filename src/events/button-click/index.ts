import { sleep } from "@techmmunity/utils";
import {
	ButtonInteraction,
	GuildMember,
	Interaction,
	MessageEmbedOptions,
} from "discord.js";
import { COLORS } from "../../assets/colors";
import { IMAGES } from "../../assets/images";
import { PANELINHA_CHANNEL_ID, RAZAL_ID } from "../../config/ids";
import { notificationsOptions } from "../../config/notification";
import {
	getNotificationId,
	makeNotificationButtonId,
} from "../../interactions/send-pre-defined-messages/notifications-embed";
import { getTextChannel } from "../../utils/get-channel";

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

	await interaction.reply({
		content: `<@${interaction.user.id}>`,
		embeds: [embed],
	});

	// eslint-disable-next-line @typescript-eslint/no-magic-numbers
	await sleep(4);

	await interaction.deleteReply();
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

export const buttonClick = async (interaction: Interaction) => {
	if (!interaction.isButton()) return;

	if (notificationsInteractions.includes(interaction.customId)) {
		await handleNotification(interaction);

		return;
	}

	if (interaction.customId === "IM_RECRUITER") {
		await handleRecruiter(interaction);
	}
};
