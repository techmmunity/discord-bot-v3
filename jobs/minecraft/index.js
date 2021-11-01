"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendMinecraft = void 0;
const colors_1 = require("../../assets/colors");
const ids_1 = require("../../config/ids");
const get_channel_1 = require("../../utils/get-channel");
const sendMinecraft = async () => {
    const channel = (0, get_channel_1.getTextChannel)(ids_1.OFFTOPIC_CHANNEL_ID);
    await channel.send({
        embeds: [
            {
                title: ":joystick: Bora jogar um mine? :joystick:",
                description: "A Tech tem parceria com um servidor de Minecraft (1.17)! Lá tem varios mini-games, um sistema de RPG, skills, survival e muito mais!\n\nConfira esse incrível servidor usando o ip:\nminecraft.techmmunity.com.br",
                color: colors_1.COLORS.turquoise,
                thumbnail: {
                    url: "https://cdn.discordapp.com/icons/896425054244589628/a2806437e3fa89a2483e0d6a5b16b44d.png?size=512",
                },
            },
        ],
    });
};
exports.sendMinecraft = sendMinecraft;
