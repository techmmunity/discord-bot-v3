"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTextChannel = void 0;
const client_1 = require("../client");
const ids_1 = require("../config/ids");
const getTextChannel = (channelId) => client_1.DiscordClient.guilds.cache.get(ids_1.GUILD_ID).channels.cache.get(channelId);
exports.getTextChannel = getTextChannel;
