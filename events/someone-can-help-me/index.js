"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.someoneCanHelpMe = void 0;
const qce_1 = require("../../interactions/qce");
const someoneCanHelpMe = async (message) => {
    const content = message.content.toLowerCase();
    const hasSomeone = content.includes("alguém") || content.includes("alguem");
    const hasHelp = content.includes("ajuda");
    if (hasSomeone && hasHelp) {
        await message.reply({
            embeds: [qce_1.QCE_EMBED],
        });
    }
};
exports.someoneCanHelpMe = someoneCanHelpMe;
