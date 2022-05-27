"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRandomChallengeCommand = exports.getRandomChallenge = void 0;
const builders_1 = require("@discordjs/builders");
const ids_1 = require("../../config/ids");
const get_random_challenge_1 = require("./get-random-challenge");
const get_command_name_1 = require("../../utils/get-command-name");
const colors_1 = require("../../assets/colors");
const verify_one_of_roles_1 = require("../../utils/verify-one-of-roles");
const getRandomChallenge = async (interaction) => {
    if (!(0, verify_one_of_roles_1.verifyOneOfRoles)(interaction, [ids_1.STAFF_ROLE_ID, ids_1.MOD_ROLE_ID])) {
        await interaction.reply({
            embeds: [
                {
                    title: "Error!",
                    description: "You don't have permission to execute this command!",
                    color: colors_1.COLORS.red,
                },
            ],
        });
        return;
    }
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
};
