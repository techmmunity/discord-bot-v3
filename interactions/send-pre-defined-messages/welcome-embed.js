"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendWelcomeEmbed = void 0;
const builders_1 = require("@discordjs/builders");
const utils_1 = require("@techmmunity/utils");
const discord_js_1 = require("discord.js");
const colors_1 = require("../../assets/colors");
const get_channel_1 = require("../../utils/get-channel");
const get_channel_url_1 = require("../../utils/get-channel-url");
const ids_1 = require("../../config/ids");
const sleep = () => (0, utils_1.sleep)(0.5);
const welcomeEmbed = {
    embeds: [
        {
            title: "Seja bem vindo(a)!",
            description: `Salve jovem! Seja bem vindo(a) a Techmmunity, uma comunidade de desenvolvedores!

	Ficamos muito felizes em ter vc aqui conosco! Venha comigo, vou te dar um pequeno tour pela nossa comunidade :wink:`,
            color: colors_1.COLORS.turquoise,
        },
    ],
};
const forumChannelEmbed = {
    embeds: [
        {
            title: "Conheça nosso fórum! ❓",
            color: colors_1.COLORS.purple,
        },
    ],
    components: [
        new discord_js_1.ActionRowBuilder().addComponents(new builders_1.ButtonBuilder()
            .setLabel("TIRE SUAS DÚVIDAS!")
            .setStyle(discord_js_1.ButtonStyle.Link)
            .setURL((0, get_channel_url_1.getChannelUrl)(ids_1.FORUM_CHANNEL_ID))),
    ],
};
const generalChannelEmbed = {
    embeds: [
        {
            title: "Converse com a galera! 🤯",
            color: colors_1.COLORS.turquoise,
        },
    ],
    components: [
        new discord_js_1.ActionRowBuilder().addComponents(new builders_1.ButtonBuilder()
            .setLabel("CONVERSAR COM O PESSOAL")
            .setStyle(discord_js_1.ButtonStyle.Link)
            .setURL((0, get_channel_url_1.getChannelUrl)(ids_1.GENERAL_CHANNEL_ID))),
    ],
};
const jobsChannelEmbed = {
    embeds: [
        {
            title: "Consiga um emprego! 💼",
            color: colors_1.COLORS.yellow,
        },
    ],
    components: [
        new discord_js_1.ActionRowBuilder().addComponents(new builders_1.ButtonBuilder()
            .setLabel("VER EMPREGOS")
            .setStyle(discord_js_1.ButtonStyle.Link)
            .setURL((0, get_channel_url_1.getChannelUrl)(ids_1.JOBS_CHANNEL_ID))),
    ],
};
const recruiterEmbed = {
    embeds: [
        {
            title: "É um(a) recrutador(a)?",
            description: "Clique no botão	abaixo para avisar os adiministradores e receber benefícios exclusivos! 😆",
            color: colors_1.COLORS.orange,
        },
    ],
    components: [
        new discord_js_1.ActionRowBuilder().addComponents(new builders_1.ButtonBuilder()
            .setCustomId("IM_RECRUITER")
            .setLabel("SOU RECRUTADOR(A)")
            .setStyle(discord_js_1.ButtonStyle.Secondary)),
    ],
};
const sendWelcomeEmbed = async () => {
    const welcomeChannel = (0, get_channel_1.getTextChannel)(process.env.NODE_ENV === "dev" ? ids_1.STAFF_BOTS_CHANNEL : ids_1.WELCOME_CHANNEL_ID);
    const messages = [
        welcomeEmbed,
        forumChannelEmbed,
        generalChannelEmbed,
        jobsChannelEmbed,
        recruiterEmbed,
    ];
    for (const message of messages) {
        await welcomeChannel.send(message);
        await sleep();
    }
};
exports.sendWelcomeEmbed = sendWelcomeEmbed;
