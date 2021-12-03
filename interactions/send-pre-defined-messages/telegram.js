"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendTelegramEmbed = void 0;
const colors_1 = require("../../assets/colors");
const ids_1 = require("../../config/ids");
const get_channel_1 = require("../../utils/get-channel");
const sendTelegramEmbed = async () => {
    const telegramChannel = (0, get_channel_1.getTextChannel)(ids_1.TELEGRAM_CHANNEL_ID);
    await telegramChannel.send({
        embeds: [
            {
                title: ":airplane: Entre no nosso Telegram!",
                description: "https://t.me/techmmunity",
                color: colors_1.COLORS.telegram,
            },
        ],
    });
};
exports.sendTelegramEmbed = sendTelegramEmbed;
