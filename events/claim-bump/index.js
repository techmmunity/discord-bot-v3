"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.claimBump = void 0;
const symbiosis_1 = require("@techmmunity/symbiosis");
const ids_1 = require("../../config/ids");
const bump_1 = require("../../entities/bump");
const get_channel_1 = require("../../utils/get-channel");
const claimBump = async (message) => {
    var _a, _b, _c, _d;
    try {
        if (((_a = message.member) === null || _a === void 0 ? void 0 : _a.guild.id) !== ids_1.TECHMMUNITY_GUILD_ID)
            return;
        if (message.channel.id !== ids_1.BUMP_CHANNEL_ID)
            return;
        if (((_b = message.member) === null || _b === void 0 ? void 0 : _b.user.id) !== ids_1.DISBOARD_BOT_ID)
            return;
        if (!((_c = message.interaction) === null || _c === void 0 ? void 0 : _c.user.id))
            return;
        const [disboardResponse] = message.embeds;
        if (!((_d = disboardResponse === null || disboardResponse === void 0 ? void 0 : disboardResponse.description) === null || _d === void 0 ? void 0 : _d.includes("Bump done!")))
            return;
        const bumpRepository = (0, symbiosis_1.getGlobalRepository)(bump_1.BumpEntity);
        const discordUserId = message.interaction.user.id;
        await bumpRepository.save({
            pk: `BUMP_COUNT#DISCORD_USER_ID#${discordUserId}`,
            sk: "BUMP_COUNT",
            count: (0, symbiosis_1.Plus)(1),
        });
    }
    catch (err) {
        const panelinhaChannel = (0, get_channel_1.getTextChannel)(ids_1.PANELINHA_CHANNEL_ID);
        console.error(err);
        await panelinhaChannel.send({
            content: `Fail to increment bump: ${err.message}`,
        });
    }
};
exports.claimBump = claimBump;
