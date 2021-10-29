"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendWelcomeMsg = void 0;
const ids_1 = require("../../config/ids");
const get_channel_1 = require("../../utils/get-channel");
const make_welcome_image_1 = require("./make-welcome-image");
const sendWelcomeMsg = async (member) => {
    const welcomeImg = await (0, make_welcome_image_1.makeWelcomeImg)(member);
    const channel = (0, get_channel_1.getTextChannel)(ids_1.GENERAL_CHANNEL_ID);
    await channel.send({
        content: `<@${member.user.id}>`,
        files: [welcomeImg],
    });
};
exports.sendWelcomeMsg = sendWelcomeMsg;