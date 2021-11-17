"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeChallengeEmbed = void 0;
const colors_1 = require("../../assets/colors");
const images_1 = require("../../assets/images");
const makeChallengeEmbed = ({ challenge, title, }) => ({
    title,
    description: challenge.url,
    color: colors_1.COLORS.codewars,
    thumbnail: {
        url: "https://blog.codewars.com/logo.png?h=cbc5fc2fb90154f31e3eb4ed3d3d572d497fa0522469e8f186562c4365b43db2",
    },
    author: {
        name: "Techmmunity",
        url: "https://techmmunity.com.br",
        iconURL: images_1.IMAGES.techmmunityLogo,
    },
    fields: [
        {
            name: "count",
            value: String(challenge.count),
            inline: true,
        },
        {
            name: "level",
            value: String(challenge.level),
            inline: true,
        },
    ],
});
exports.makeChallengeEmbed = makeChallengeEmbed;
