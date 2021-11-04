"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.someoneCanHelpMe = void 0;
const qce_1 = require("../../interactions/qce");
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
    const content = message.content.toLowerCase();
    if (isSomeone(content) || isHow(content)) {
        await message.reply({
            embeds: [qce_1.QCE_EMBED],
        });
    }
};
exports.someoneCanHelpMe = someoneCanHelpMe;
