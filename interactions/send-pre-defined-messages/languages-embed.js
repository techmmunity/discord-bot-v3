"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendLangsEmbed = exports.getLangId = exports.makeLangButtonId = void 0;
const utils_1 = require("@techmmunity/utils");
const discord_js_1 = require("discord.js");
const colors_1 = require("../../assets/colors");
const discord_limits_1 = require("../../config/discord-limits");
const ids_1 = require("../../config/ids");
const langs_1 = require("../../config/langs");
const get_channel_1 = require("../../utils/get-channel");
const makeLangButtonId = (key) => `LANG#${key}`;
exports.makeLangButtonId = makeLangButtonId;
const getLangId = (key) => key.replace("LANG#", "").toLowerCase();
exports.getLangId = getLangId;
const sendLangsEmbed = async () => {
    const profileChannel = (0, get_channel_1.getTextChannel)(process.env.NODE_ENV === "dev" ? ids_1.STAFF_BOTS_CHANNEL : ids_1.PROFILE_CHANNEL_ID);
    const components = (0, utils_1.chunk)(langs_1.langsOptions, discord_limits_1.DISCORD_BUTTONS_PER_ACTION_ROWS_LIMIT).map(actionRowButtons => {
        const actionRow = new discord_js_1.MessageActionRow();
        actionRowButtons.forEach(langOpt => {
            actionRow.addComponents(new discord_js_1.MessageButton()
                .setCustomId((0, exports.makeLangButtonId)(langOpt.id))
                .setLabel(langOpt.description)
                .setStyle("SECONDARY"));
        });
        return actionRow;
    });
    await profileChannel.send({
        embeds: [
            {
                title: "Diga as tecnologias que você tem interesse!",
                description: "Clique nos botões abaixo para selecionar as linguagens.",
                color: colors_1.COLORS.turquoise,
            },
        ],
        components,
    });
};
exports.sendLangsEmbed = sendLangsEmbed;
