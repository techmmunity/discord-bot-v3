"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buttonClick = void 0;
const utils_1 = require("@techmmunity/utils");
const colors_1 = require("../../assets/colors");
const notification_1 = require("../../config/notification");
const notifications_embed_1 = require("../../interactions/send-pre-defined-messages/notifications-embed");
const notificationsInteractions = Object.keys(notification_1.notificationsOptions).map(notifications_embed_1.makeNotificationButtonId);
const buttonClick = async (interaction) => {
    if (!interaction.isButton())
        return;
    if (notificationsInteractions.includes(interaction.customId)) {
        const notification = (0, notifications_embed_1.getNotificationId)(interaction.customId);
        const member = interaction.member;
        const roleId = notification_1.notificationsOptions[notification].role;
        const shouldAddRole = !member.roles.cache.has(roleId);
        let embed;
        if (shouldAddRole) {
            await member.roles.add(roleId);
            embed = {
                title: "Role adicionada!",
                description: `Você passará a receber notificações para **${notification}** a partir de agora 🥳`,
                color: colors_1.COLORS.green,
            };
        }
        else {
            await member.roles.remove(roleId);
            embed = {
                title: "Role removida!",
                description: `Você deixará a receber notificações para **${notification}** a partir de agora 😔`,
                color: colors_1.COLORS.red,
            };
        }
        await interaction.reply({
            content: `<@${interaction.user.id}>`,
            embeds: [embed],
        });
        await (0, utils_1.sleep)(4);
        await interaction.deleteReply();
    }
};
exports.buttonClick = buttonClick;
