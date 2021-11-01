"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendNotificationsEmbed = void 0;
const colors_1 = require("../../assets/colors");
const ids_1 = require("../../config/ids");
const get_channel_1 = require("../../utils/get-channel");
const notifications_1 = require("../notifications");
const sendNotificationsEmbed = async () => {
    const { fields } = (0, notifications_1.makeNotificationsEmbed)();
    const notificationsChannel = (0, get_channel_1.getTextChannel)(ids_1.NOTIFICATIONS_CHANNEL_ID);
    await notificationsChannel.send({
        embeds: [
            {
                title: "Escolha as notificações que você quer receber!",
                description: "Para receber as notificacoes, basta usar o comando `/notitifications` e passar as as opções como `True`.\n\nPara saber mais sobre como usar os comandos, assista o video abaixo:\nhttps://www.youtube.com/watch?v=4XxcpBxSCiU&t=44s\n\n**Notificações disponiveis:**",
                color: colors_1.COLORS.turquoise,
                fields,
            },
        ],
    });
};
exports.sendNotificationsEmbed = sendNotificationsEmbed;
