"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendAgeEmbed = exports.getAgeId = exports.makeAgeButtonId = void 0;
const utils_1 = require("@techmmunity/utils");
const discord_js_1 = require("discord.js");
const colors_1 = require("../../assets/colors");
const ages_1 = require("../../config/ages");
const discord_limits_1 = require("../../config/discord-limits");
const ids_1 = require("../../config/ids");
const get_channel_1 = require("../../utils/get-channel");
const makeAgeButtonId = (key) => `AGE#${key}`;
exports.makeAgeButtonId = makeAgeButtonId;
const getAgeId = (key) => key.replace("AGE#", "").toLowerCase();
exports.getAgeId = getAgeId;
const sendAgeEmbed = async () => {
    const profileChannel = (0, get_channel_1.getTextChannel)(process.env.NODE_ENV === "dev" ? ids_1.STAFF_BOTS_CHANNEL : ids_1.PROFILE_CHANNEL_ID);
    const components = (0, utils_1.chunk)(ages_1.agesOptions, discord_limits_1.DISCORD_BUTTONS_PER_ACTION_ROWS_LIMIT).map(actionRowButtons => {
        const actionRow = new discord_js_1.MessageActionRow();
        actionRowButtons.forEach(langOpt => {
            actionRow.addComponents(new discord_js_1.MessageButton()
                .setCustomId((0, exports.makeAgeButtonId)(langOpt.id))
                .setLabel(langOpt.description)
                .setStyle("SECONDARY"));
        });
        return actionRow;
    });
    await profileChannel.send({
        embeds: [
            {
                title: "Diga sua idade!",
                description: "Clique nos botões abaixo para selecionar sua idade.",
                color: colors_1.COLORS.turquoise,
            },
        ],
        components,
    });
};
exports.sendAgeEmbed = sendAgeEmbed;
