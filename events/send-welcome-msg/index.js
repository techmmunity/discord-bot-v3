"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendWelcomeMsg = void 0;
const ids_1 = require("../../config/ids");
const get_channel_1 = require("../../utils/get-channel");
const make_welcome_image_1 = require("../../interactions/welcome-img/make-welcome-image");
const qce_1 = require("../../interactions/qce");
const sendWelcomeMsg = async (member) => {
    if (member.guild.id !== ids_1.TECHMMUNITY_GUILD_ID)
        return;
    const welcomeImg = await (0, make_welcome_image_1.makeWelcomeImg)(member);
    const generalChannel = (0, get_channel_1.getTextChannel)(ids_1.GENERAL_CHANNEL_ID);
    await generalChannel.send({
        content: `<@${member.user.id}>`,
        files: [welcomeImg],
        embeds: [
            Object.assign(Object.assign({}, qce_1.QCE_EMBED), { title: "Aqui está nosso tutorial sobre como fazer perguntas:" }),
        ],
    });
};
exports.sendWelcomeMsg = sendWelcomeMsg;
