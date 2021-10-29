"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendChallenge = void 0;
const symbiosis_1 = require("@techmmunity/symbiosis");
const challenge_1 = require("../../entities/challenge");
const client_1 = require("../../client");
const get_title_1 = require("../../utils/get-title");
const ids_1 = require("../../config/ids");
const make_embed_1 = require("../../interactions/create-challenge/make-embed");
const getLevel = () => {
    const dayOfWeek = new Date().getDay();
    if (dayOfWeek === 1) {
        return (0, symbiosis_1.MoreThanOrEqual)(7);
    }
    return (0, symbiosis_1.LessThanOrEqual)(6);
};
const sendChallenge = async () => {
    const channel = client_1.DiscordClient.guilds.cache.get(ids_1.GUILD_ID).channels.cache.get(ids_1.SERVER_ID);
    const repository = (0, symbiosis_1.getGlobalRepository)(challenge_1.ChallengeEntity);
    const challenges = await repository.find({
        where: {
            level: getLevel(),
        },
        index: "level_index",
    });
    const challenge = challenges.sort((a, b) => a.count - b.count).shift();
    const challengeTitle = await (0, get_title_1.getTitle)(challenge.url);
    return channel.send({
        content: "<@889846828693061644>",
        embeds: [
            (0, make_embed_1.makeChallengeEmbed)({
                title: challengeTitle,
                challenge,
            }),
        ],
    });
};
exports.sendChallenge = sendChallenge;
