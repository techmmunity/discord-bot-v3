"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buttonClick = void 0;
const utils_1 = require("@techmmunity/utils");
const discord_js_1 = require("discord.js");
const colors_1 = require("../../assets/colors");
const images_1 = require("../../assets/images");
const ids_1 = require("../../config/ids");
const notification_1 = require("../../config/notification");
const notifications_embed_1 = require("../../interactions/send-pre-defined-messages/notifications-embed");
const get_channel_1 = require("../../utils/get-channel");
const getMention = (rawMentions) => {
    const mentions = [];
    rawMentions.forEach((e) => mentions.push(e));
    return mentions.pop();
};
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
    const message = {
        content: `<@${interaction.user.id}>`,
        embeds: [embed],
    };
    await interaction.reply(message);
    await (0, utils_1.sleep)(4);
    await interaction.deleteReply();
    const botsChannel = (0, get_channel_1.getTextChannel)(ids_1.STAFF_BOTS_CHANNEL);
    botsChannel.send(message);
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
        components: [
            new discord_js_1.MessageActionRow().addComponents(new discord_js_1.MessageButton()
                .setCustomId("GIVE_RECRUITER_PERM")
                .setLabel("Dar permissão")
                .setStyle("PRIMARY")),
        ],
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
const handleGiveRecruiterPerm = async (interaction) => {
    var _a, _b, _c;
    if (interaction.user.id !== ids_1.RAZAL_ID) {
        return interaction.reply("Só o razal pode.");
    }
    const generalChannel = (0, get_channel_1.getTextChannel)(ids_1.GENERAL_CHANNEL_ID);
    const mention = getMention(interaction.message.mentions.users);
    await ((_c = (_b = (await ((_a = interaction.guild) === null || _a === void 0 ? void 0 : _a.fetch()))) === null || _b === void 0 ? void 0 : _b.members.cache.get(mention.id)) === null || _c === void 0 ? void 0 : _c.roles.add(ids_1.RECRUITER_ROLE_ID));
    await generalChannel.send({
        content: `<@${mention === null || mention === void 0 ? void 0 : mention.id}>`,
        embeds: [
            {
                title: `Parabéns ${mention === null || mention === void 0 ? void 0 : mention.username}, agora você é um(a) recrutador(a)!`,
                description: `Sinta-se livre para postar vagas no <#${ids_1.JOBS_CHANNEL_ID}>, marcando a role <@&${ids_1.JOB_ROLE_ID}> para notificar quem está procurando um emprego :wink:`,
                color: colors_1.COLORS.orange,
                thumbnail: {
                    url: "https://media.tenor.com/images/ba9418de27ce10de6f7f7109bc2f84c2/tenor.gif",
                },
            },
        ],
    });
};
const buttonClick = (interaction) => {
    if (!interaction.isButton())
        return;
    if (notificationsInteractions.includes(interaction.customId)) {
        return handleNotification(interaction);
    }
    if (interaction.customId === "IM_RECRUITER") {
        return handleRecruiter(interaction);
    }
    if (interaction.customId === "GIVE_RECRUITER_PERM") {
        return handleGiveRecruiterPerm(interaction);
    }
};
exports.buttonClick = buttonClick;
