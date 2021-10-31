"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendTechTip = void 0;
const ids_1 = require("../../config/ids");
const get_channel_1 = require("../../utils/get-channel");
const tips_1 = require("./tips");
const sendTechTip = () => async () => {
    const channel = (0, get_channel_1.getTextChannel)(ids_1.TECH_TIP_CHANNEL_ID);
    const today = new Date().getDate();
    const embed = tips_1.tips[today];
    if (embed) {
        await channel.send({
            embeds: [embed],
        });
    }
};
exports.sendTechTip = sendTechTip;
