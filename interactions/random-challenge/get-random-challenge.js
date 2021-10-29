"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRandomChallengeEmbed = void 0;
const symbiosis_1 = require("@techmmunity/symbiosis");
const challenge_1 = require("../../entities/challenge");
const get_title_1 = require("../../utils/get-title");
const make_embed_1 = require("../create-challenge/make-embed");
const getLevel = () => {
    const dayOfWeek = new Date().getDay();
    switch (dayOfWeek) {
        case 1:
            return 7;
        case 2:
        case 3:
            return 6;
        default:
            return 5;
    }
};
const getRandomChallengeEmbed = async () => {
    const repository = (0, symbiosis_1.getGlobalRepository)(challenge_1.ChallengeEntity);
    const challenges = await repository.find({
        where: {
            level: getLevel(),
        },
        index: "level_url_index",
    });
    const challenge = challenges.sort((a, b) => a.count - b.count).shift();
    const challengeTitle = await (0, get_title_1.getTitle)(challenge.url);
    return (0, make_embed_1.makeChallengeEmbed)({
        title: challengeTitle,
        challenge,
    });
};
exports.getRandomChallengeEmbed = getRandomChallengeEmbed;
