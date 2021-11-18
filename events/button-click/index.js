"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buttonClick = void 0;
const utils_1 = require("@techmmunity/utils");
const colors_1 = require("../../assets/colors");
const images_1 = require("../../assets/images");
const ids_1 = require("../../config/ids");
const notification_1 = require("../../config/notification");
const notifications_embed_1 = require("../../interactions/send-pre-defined-messages/notifications-embed");
const get_channel_1 = require("../../utils/get-channel");
const notificationsInteractions = Object.keys(notification_1.notificationsOptions).map(notifications_embed_1.makeNotificationButtonId);
const handleNotification = async (interaction) => {
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
};
const handleRecruiter = async (interaction) => {
    const embed = {
        title: "Novo(a) recrutador(a)!",
        color: colors_1.COLORS.orange,
        thumbnail: {
            url: interaction.user.avatarURL() || images_1.IMAGES.techmmunityLogo,
        },
    };
    const panelinhaChannel = (0, get_channel_1.getTextChannel)(ids_1.PANELINHA_CHANNEL_ID);
    await panelinhaChannel.send({
        content: `<@${ids_1.RAZAL_ID}> -> <@${interaction.user.id}>`,
        embeds: [embed],
    });
    await interaction.reply({
        embeds: [
            {
                title: "Pronto!",
                description: "Os administradores foram avisados e te darão os privilégios assim que possível 😉",
                color: colors_1.COLORS.green,
            },
        ],
    });
    await (0, utils_1.sleep)(5);
    await interaction.deleteReply();
};
const buttonClick = async (interaction) => {
    if (!interaction.isButton())
        return;
    if (notificationsInteractions.includes(interaction.customId)) {
        await handleNotification(interaction);
        return;
    }
    if (interaction.customId === "IM_RECRUITER") {
        await handleRecruiter(interaction);
    }
};
exports.buttonClick = buttonClick;
