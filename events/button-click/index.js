"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buttonClick = void 0;
const utils_1 = require("@techmmunity/utils");
const discord_js_1 = require("discord.js");
const colors_1 = require("../../assets/colors");
const images_1 = require("../../assets/images");
const get_channel_1 = require("../../utils/get-channel");
const ids_1 = require("../../config/ids");
const getMention = (rawMentions) => {
    const mentions = [];
    rawMentions.forEach((e) => mentions.push(e));
    return mentions.filter(m => m.id !== ids_1.RAZAL_ID).shift();
};
const handleRecruiter = async (interaction) => {
    const panelinhaChannel = (0, get_channel_1.getTextChannel)(ids_1.STAFF_BOTS_CHANNEL);
    await panelinhaChannel.send({
        content: `<@${ids_1.RAZAL_ID}> -> <@${interaction.user.id}>`,
        embeds: [
            new discord_js_1.EmbedBuilder()
                .setTitle("Novo(a) recrutador(a)!")
                .setColor(colors_1.COLORS.orange)
                .setThumbnail(interaction.user.avatarURL() || images_1.IMAGES.techmmunityLogo),
        ],
        components: [
            new discord_js_1.ActionRowBuilder().addComponents(new discord_js_1.ButtonBuilder()
                .setLabel("Dar permissão")
                .setStyle(discord_js_1.ButtonStyle.Primary)
                .setCustomId("GIVE_RECRUITER_PERM")),
        ],
    });
    await interaction.reply({
        embeds: [
            {
                title: "Pronto!",
                description: "Os administradores foram avisados e te darão os privilégios assim que possível 😉",
                color: colors_1.COLORS.green,
            },
        ],
    });
    await (0, utils_1.sleep)(5);
    await interaction.deleteReply();
};
const handleGiveRecruiterPerm = async (interaction) => {
    var _a, _b;
    if (interaction.user.id !== ids_1.RAZAL_ID) {
        return interaction.user.send("Tira o abacaxi do cu, corno!.\nTira o abacaxi do cu, corno!.\nTira o abacaxi do cu, corno!.\nTira o abacaxi do cu, corno!.\nTira o abacaxi do cu, corno!.\nTira o abacaxi do cu, corno!.\nTira o abacaxi do cu, corno!.\nTira o abacaxi do cu, corno!.\nTira o abacaxi do cu, corno!.\nTira o abacaxi do cu, corno!.\nTira o abacaxi do cu, corno!.\nTira o abacaxi do cu, corno!.\nTira o abacaxi do cu, corno!.\nTira o abacaxi do cu, corno!.\nTira o abacaxi do cu, corno!.\nTira o abacaxi do cu, corno!.\nTira o abacaxi do cu, corno!.\nTira o abacaxi do cu, corno!.\nTira o abacaxi do cu, corno!.\nTira o abacaxi do cu, corno!.\nTira o abacaxi do cu, corno!.\nTira o abacaxi do cu, corno!.\nTira o abacaxi do cu, corno!.");
    }
    const generalChannel = (0, get_channel_1.getTextChannel)(ids_1.GENERAL_CHANNEL_ID);
    const mention = getMention(interaction.message.mentions.users);
    const member = (_b = (await ((_a = interaction.guild) === null || _a === void 0 ? void 0 : _a.fetch()))) === null || _b === void 0 ? void 0 : _b.members.cache.get(mention.id);
    await (member === null || member === void 0 ? void 0 : member.roles.remove(ids_1.STARTER_ROLE_ID));
    await (member === null || member === void 0 ? void 0 : member.roles.add(ids_1.RECRUITER_ROLE_ID));
    await generalChannel.send({
        content: `<@${mention === null || mention === void 0 ? void 0 : mention.id}>`,
        embeds: [
            {
                title: `Parabéns ${mention === null || mention === void 0 ? void 0 : mention.username}, agora você é um(a) recrutador(a)!`,
                description: `Sinta-se livre para postar vagas no <#${ids_1.JOBS_CHANNEL_ID}>, marcando a role <@&${ids_1.JOB_ROLE_ID}> para notificar quem está procurando um emprego :wink:`,
                color: colors_1.COLORS.orange,
                thumbnail: {
                    url: "https://media.tenor.com/images/ba9418de27ce10de6f7f7109bc2f84c2/tenor.gif",
                },
            },
        ],
    });
    await interaction.deferReply();
};
const buttonClick = (interaction) => {
    if (!interaction.isButton())
        return;
    if (interaction.customId === "IM_RECRUITER") {
        return handleRecruiter(interaction);
    }
    if (interaction.customId === "GIVE_RECRUITER_PERM") {
        return handleGiveRecruiterPerm(interaction);
    }
};
exports.buttonClick = buttonClick;
