"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscordClient = void 0;
const discord_js_1 = require("discord.js");
exports.DiscordClient = new discord_js_1.Client({
    partials: ["MESSAGE", "REACTION"],
    intents: [discord_js_1.Intents.FLAGS.GUILD_MESSAGES, discord_js_1.Intents.FLAGS.GUILDS],
});
