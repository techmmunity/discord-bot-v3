"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendNotificationsEmbed = exports.getNotificationId = exports.makeNotificationButtonId = void 0;
const utils_1 = require("@techmmunity/utils");
const discord_js_1 = require("discord.js");
const colors_1 = require("../../assets/colors");
const discord_limits_1 = require("../../config/discord-limits");
const ids_1 = require("../../config/ids");
const notification_1 = require("../../config/notification");
const get_channel_1 = require("../../utils/get-channel");
const makeNotificationsEmbed = () => {
    const values = Object.entries(notification_1.notificationsOptions);
    const fields = values.map(([key, val]) => ({
        name: key.toUpperCase(),
        value: `${val.emoji} ${val.description}`,
    }));
    const embed = {
        title: "Escolha quais notificações você quer receber",
        description: "E depois disso execute novamente o comando `/notifications` passando as opções que você deseja.",
        color: colors_1.COLORS.turquoise,
        fields,
    };
    return embed;
};
const makeNotificationButtonId = (key) => `NOTIFICATION#${key}`;
exports.makeNotificationButtonId = makeNotificationButtonId;
const getNotificationId = (key) => key.replace("NOTIFICATION#", "").toLowerCase();
exports.getNotificationId = getNotificationId;
const sendNotificationsEmbed = async () => {
    const { fields } = makeNotificationsEmbed();
    const notificationsChannel = (0, get_channel_1.getTextChannel)(process.env.NODE_ENV === "dev"
        ? ids_1.STAFF_BOTS_CHANNEL
        : ids_1.NOTIFICATIONS_CHANNEL_ID);
    const components = (0, utils_1.chunk)(Object.keys(notification_1.notificationsOptions), discord_limits_1.DISCORD_BUTTONS_PER_ACTION_ROWS_LIMIT).map(actionRowButtons => {
        const actionRow = new discord_js_1.MessageActionRow();
        actionRowButtons.forEach(key => {
            actionRow.addComponents(new discord_js_1.MessageButton()
                .setCustomId((0, exports.makeNotificationButtonId)(key))
                .setLabel(key.toUpperCase())
                .setStyle(key === "techmmunity" ? "PRIMARY" : "SECONDARY"));
        });
        return actionRow;
    });
    await notificationsChannel.send({
        embeds: [
            {
                title: "Escolha as notificações que você quer receber!",
                description: "Clique nos botões abaixo para receber notificações.",
                color: colors_1.COLORS.turquoise,
                fields,
            },
        ],
        components,
    });
};
exports.sendNotificationsEmbed = sendNotificationsEmbed;
