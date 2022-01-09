"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendWelcomeEmbed = void 0;
const utils_1 = require("@techmmunity/utils");
const discord_js_1 = require("discord.js");
const colors_1 = require("../../assets/colors");
const ids_1 = require("../../config/ids");
const get_channel_1 = require("../../utils/get-channel");
const get_channel_url_1 = require("../../utils/get-channel-url");
const sleep = () => (0, utils_1.sleep)(0.5);
const welcomeEmbed = {
    embeds: [
        {
            title: "Seja bem vindo(a)!",
            description: `Salve jovem! Seja bem vindo(a) a Techmmunity, uma comunidade de desenvolvedores TypeScript!

	Ficamos muito felizes em ter vc aqui conosco! Venha comigo, vou te dar um pequeno tour pela nossa comunidade :wink:



	**=== 📢 COMMUNITY ===**

	<#${ids_1.JOBS_CHANNEL_ID}> - Vagas de emprego

	<#${ids_1.EVENTS_CHANNEL_ID}> - Eventos do server

	<#${ids_1.I_DID_IT_CHANNEL_ID}> - Compartilhe suas criações

	<#${ids_1.SUGGESTIONS_CHANNEL_ID}> - Vote nas sugestões para melhorarmos a comunidade

	<#${ids_1.BUMP_CHANNEL_ID}> - Ajude a divulgar o servidor



	**=== 📚 CONTENTS ===**

	Encontre e compartilhe conteúdos interessantes aqui



	**=== ❓ TOPICS ===**

	**❓ Canais para fazer perguntas ❓**`,
            color: colors_1.COLORS.turquoise,
        },
    ],
};
const introduceYourselfEmbed = {
    embeds: [
        {
            title: "Apresente-se aqui! 😄",
            color: colors_1.COLORS.blue,
        },
    ],
    components: [
        new discord_js_1.MessageActionRow().addComponents(new discord_js_1.MessageButton()
            .setLabel("QUERO ME APRESENTAR")
            .setStyle("LINK")
            .setURL((0, get_channel_url_1.getChannelUrl)(ids_1.NETWORKING_CHANNEL_ID))),
    ],
};
const generalChannelEmbed = {
    embeds: [
        {
            title: "Converse com a galera! 🤯",
        },
    ],
    components: [
        new discord_js_1.MessageActionRow().addComponents(new discord_js_1.MessageButton()
            .setLabel("CONVERSAR COM O PESSOAL")
            .setStyle("LINK")
            .setURL((0, get_channel_url_1.getChannelUrl)(ids_1.GENERAL_CHANNEL_ID))),
    ],
};
const notificationsEmbed = {
    embeds: [
        {
            title: "Receba notificações",
        },
    ],
    components: [
        new discord_js_1.MessageActionRow().addComponents(new discord_js_1.MessageButton()
            .setLabel("RECEBER NOTIFICAÇÕES")
            .setStyle("LINK")
            .setURL((0, get_channel_url_1.getChannelUrl)(ids_1.NOTIFICATIONS_CHANNEL_ID))),
    ],
};
const captisEmbed = {
    embeds: [
        {
            title: "Estude para as vagas da Captis!",
            description: "Já sonhou em trabalhar em uma rede social para gamers **canadense** sem saber inglês fluênte? Saiba que você pode! A Captis sempre tem novas vagas abertas para diversas áreas, e adoram contratar Júniors e treina-los em casa! Para se preparar para trabalhar na Captis, sempre são postados conteúdos aqui, e para ser notificado quando novos conteúdos forem postados, basta clicar nos botões abaixo:",
            color: colors_1.COLORS.captis,
            thumbnail: {
                url: "https://cdn.discordapp.com/attachments/903650212596293642/929832754361798686/CAPTIS_LOGO_UPDATED.png",
            },
        },
    ],
    components: [
        new discord_js_1.MessageActionRow()
            .addComponents(new discord_js_1.MessageButton()
            .setCustomId("CAPTIS#backend")
            .setLabel("BACKEND")
            .setStyle("SECONDARY"))
            .addComponents(new discord_js_1.MessageButton()
            .setCustomId("CAPTIS#discord_bot")
            .setLabel("DISCORD BOT")
            .setStyle("SECONDARY")),
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
        new discord_js_1.MessageActionRow().addComponents(new discord_js_1.MessageButton()
            .setCustomId("IM_RECRUITER")
            .setLabel("SOU RECRUTADOR(A)")
            .setStyle("SECONDARY")),
    ],
};
const warnEmbed = {
    embeds: [
        {
            title: "Suba o chat para ver todas as mensagens, elas são importantes :wink:",
        },
    ],
};
const sendWelcomeEmbed = async () => {
    const welcomeChannel = (0, get_channel_1.getTextChannel)(process.env.NODE_ENV === "dev" ? ids_1.STAFF_BOTS_CHANNEL : ids_1.WELCOME_CHANNEL_ID);
    const messages = [
        welcomeEmbed,
        introduceYourselfEmbed,
        generalChannelEmbed,
        notificationsEmbed,
        captisEmbed,
        recruiterEmbed,
        warnEmbed,
    ];
    for (const message of messages) {
        await welcomeChannel.send(message);
        await sleep();
    }
};
exports.sendWelcomeEmbed = sendWelcomeEmbed;
