"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.someoneCanHelpMe = void 0;
const qce_1 = require("../../interactions/qce");
const ids_1 = require("../../config/ids");
const isSomeone = (content) => {
    const hasSomeone = content.includes("alguém") || content.includes("alguem");
    const hasHelp = content.includes("ajuda");
    const hasUnderstands = content.includes("manja de");
    return hasSomeone && (hasHelp || hasUnderstands);
};
const isHow = (content) => {
    const hasHow = content.includes("como");
    const hasI = content.includes("eu");
    const hasSolve = content.includes("resolvo");
    return hasHow && hasI && hasSolve;
};
const someoneCanHelpMe = async (message) => {
    var _a;
    if (((_a = message.member) === null || _a === void 0 ? void 0 : _a.guild.id) !== ids_1.TECHMMUNITY_GUILD_ID)
        return;
    const content = message.content.toLowerCase();
    if (isSomeone(content) || isHow(content)) {
        await message.reply({
            embeds: [qce_1.QCE_EMBED],
        });
    }
};
exports.someoneCanHelpMe = someoneCanHelpMe;
