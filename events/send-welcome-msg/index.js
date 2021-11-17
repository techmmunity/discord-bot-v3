"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendWelcomeMsg = void 0;
const ids_1 = require("../../config/ids");
const get_channel_1 = require("../../utils/get-channel");
const make_welcome_image_1 = require("../../interactions/welcome-img/make-welcome-image");
const sendWelcomeMsg = async (member) => {
    if (member.guild.id !== ids_1.GUILD_ID)
        return;
    const welcomeImg = await (0, make_welcome_image_1.makeWelcomeImg)(member);
    const generalChannel = (0, get_channel_1.getTextChannel)(ids_1.GENERAL_CHANNEL_ID);
    await generalChannel.send({
        content: `<@${member.user.id}>`,
        files: [welcomeImg],
    });
};
exports.sendWelcomeMsg = sendWelcomeMsg;
