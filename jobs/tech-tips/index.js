"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendTechTip = void 0;
const tips_1 = require("./tips");
const get_channel_1 = require("../../utils/get-channel");
const ids_1 = require("../../config/ids");
const sendTechTip = () => {
    const channel = (0, get_channel_1.getTextChannel)(ids_1.GENERAL_CHANNEL_ID);
    const today = new Date().getDate() - 1;
    const embed = (0, tips_1.getTip)(today);
    return channel.send({
        embeds: [embed],
    });
};
exports.sendTechTip = sendTechTip;
