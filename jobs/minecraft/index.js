"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendMinecraft = exports.MINECRAFT_EMBED = void 0;
const colors_1 = require("../../assets/colors");
const ids_1 = require("../../config/ids");
const get_channel_1 = require("../../utils/get-channel");
exports.MINECRAFT_EMBED = {
    title: "<a:minecraft:765950443011965009> Bora jogar um mine? <a:minecraft:765950443011965009>",
    description: "A Tech tem parceria com um servidor de Minecraft (1.17)! Lá tem varios mini-games, um sistema de RPG, skills, survival e muito mais!\n\nConfira esse incrível servidor usando o ip:\n**minecraft.techmmunity.com.br**",
    color: colors_1.COLORS.turquoise,
    thumbnail: {
        url: "https://cdn.discordapp.com/icons/896425054244589628/a2806437e3fa89a2483e0d6a5b16b44d.png?size=512",
    },
    url: "https://discord.gg/w8bNDJMTbN",
};
const sendMinecraft = async () => {
    const channel = (0, get_channel_1.getTextChannel)(ids_1.OFFTOPIC_CHANNEL_ID);
    await channel.send({
        embeds: [exports.MINECRAFT_EMBED],
    });
};
exports.sendMinecraft = sendMinecraft;
