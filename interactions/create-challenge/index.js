"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createChallengeCommand = exports.createChallenge = void 0;
const builders_1 = require("@discordjs/builders");
const symbiosis_1 = require("@techmmunity/symbiosis");
const utils_1 = require("@techmmunity/utils");
const colors_1 = require("../../assets/colors");
const ids_1 = require("../../config/ids");
const challenge_1 = require("../../entities/challenge");
const permission_type_1 = require("../../enums/permission-type");
const get_title_1 = require("../../utils/get-title");
const make_embed_1 = require("./make-embed");
const createChallenge = async (interaction) => {
    const url = interaction.options.getString("url");
    if (!url.startsWith("https://www.codewars.com/kata/")) {
        await interaction.reply({
            embeds: [
                {
                    title: "Error!",
                    description: "The challenge must be from CodeWars!",
                    color: colors_1.COLORS.red,
                },
            ],
        });
        return;
    }
    const challengeRepository = (0, symbiosis_1.getGlobalRepository)(challenge_1.ChallengeEntity);
    const title = await (0, get_title_1.getTitle)(url);
    if ((0, utils_1.getTypeof)(title) !== "string") {
        await interaction.reply({
            embeds: [
                {
                    title: "Error!",
                    description: "Invalid challenge title!",
                    color: colors_1.COLORS.red,
                },
            ],
        });
        return;
    }
    const challenge = await challengeRepository.findOne({
        where: {
            url,
        },
    });
    if (challenge) {
        await interaction.reply({
            embeds: [
                {
                    title: "Error!",
                    description: "Challenge already exists!",
                    color: colors_1.COLORS.red,
                },
            ],
        });
        return;
    }
    const level = interaction.options.getNumber("level");
    const createdChallenge = await challengeRepository.save({
        url,
        level,
    });
    await interaction.reply({
        embeds: [
            {
                title: "Success!",
                description: "Challenge successfully created!",
                color: colors_1.COLORS.green,
            },
            (0, make_embed_1.makeChallengeEmbed)({
                title,
                challenge: createdChallenge,
            }),
        ],
    });
};
exports.createChallenge = createChallenge;
exports.createChallengeCommand = {
    command: new builders_1.SlashCommandBuilder()
        .setName("create-challenge")
        .setDescription("Creates a new challenge")
        .addStringOption((option) => option
        .setName("url")
        .setDescription("CodeWars Challenge URL")
        .setRequired(true))
        .addNumberOption((option) => option
        .setName("level")
        .setDescription("CodeWars Challenge Level")
        .setRequired(true))
        .setDefaultPermission(false),
    permissions: [
        {
            id: ids_1.STAFF_ROLE_ID,
            type: permission_type_1.PermissionTypeEnum.ROLE,
            permission: true,
        },
        {
            id: ids_1.MOD_ROLE_ID,
            type: permission_type_1.PermissionTypeEnum.ROLE,
            permission: true,
        },
    ],
};
