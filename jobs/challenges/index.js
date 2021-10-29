"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendChallenge = void 0;
const symbiosis_1 = require("@techmmunity/symbiosis");
const client_1 = require("../../client");
const ids_1 = require("../../config/ids");
const get_random_challenge_1 = require("../../interactions/random-challenge/get-random-challenge");
const challenge_1 = require("../../entities/challenge");
const sendChallenge = async () => {
    const channel = client_1.DiscordClient.guilds.cache.get(ids_1.GUILD_ID).channels.cache.get(ids_1.CHALLENGE_CHANNEL_ID);
    const challengeEmbed = await (0, get_random_challenge_1.getRandomChallengeEmbed)();
    await channel.send({
        content: `<@${ids_1.CHALLENGE_ROLE_ID}>`,
        embeds: [challengeEmbed],
    });
    const challengeRepository = (0, symbiosis_1.getGlobalRepository)(challenge_1.ChallengeEntity);
    await challengeRepository.save({
        url: challengeEmbed.description,
        count: (0, symbiosis_1.Plus)(1),
    });
};
exports.sendChallenge = sendChallenge;
