import { sleep } from "@techmmunity/utils";
import { GuildMember, Interaction, MessageEmbedOptions } from "discord.js";
import { COLORS } from "../../assets/colors";
import { notificationsOptions } from "../../config/notification";
import {
	getNotificationId,
	makeNotificationButtonId,
} from "../../interactions/send-pre-defined-messages/notifications-embed";

const notificationsInteractions = Object.keys(notificationsOptions).map(
	makeNotificationButtonId,
);

export const buttonClick = async (interaction: Interaction) => {
	if (!interaction.isButton()) return;

	if (notificationsInteractions.includes(interaction.customId)) {
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
	}
};
