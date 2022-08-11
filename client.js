"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscordClient = void 0;
const discord_js_1 = require("discord.js");
exports.DiscordClient = new discord_js_1.Client({
    presence: {
        status: "online",
        activities: [
            {
                name: "Faça perguntas no ❓┊forum",
                type: 0,
            },
        ],
    },
    partials: [discord_js_1.Partials.Message, discord_js_1.Partials.GuildMember],
    intents: [
        discord_js_1.GatewayIntentBits.GuildMessages,
        discord_js_1.GatewayIntentBits.Guilds,
        discord_js_1.GatewayIntentBits.GuildMembers,
    ],
});
