"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRandomChallengeCommand = exports.getRandomChallenge = void 0;
const builders_1 = require("@discordjs/builders");
const ids_1 = require("../../config/ids");
const permission_type_1 = require("../../enums/permission-type");
const get_random_challenge_1 = require("./get-random-challenge");
const get_command_name_1 = require("../../utils/get-command-name");
const getRandomChallenge = async (interaction) => {
    const randomChallengeEmbed = await (0, get_random_challenge_1.getRandomChallengeEmbed)();
    await interaction.reply({
        embeds: [randomChallengeEmbed],
    });
};
exports.getRandomChallenge = getRandomChallenge;
exports.getRandomChallengeCommand = {
    command: new builders_1.SlashCommandBuilder()
        .setName((0, get_command_name_1.getCommandName)("get-random-challenge"))
        .setDescription("Get a random challenge")
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
