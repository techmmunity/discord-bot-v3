"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getJobCommand = exports.getJob = void 0;
const builders_1 = require("@discordjs/builders");
const ids_1 = require("../../config/ids");
const google_jobs_1 = require("../../utils/google-jobs");
const get_jobs_embeds_1 = require("./get-jobs-embeds");
const get_command_name_1 = require("../../utils/get-command-name");
const verify_one_of_roles_1 = require("../../utils/verify-one-of-roles");
const colors_1 = require("../../assets/colors");
const getJob = async (interaction) => {
    if (!(0, verify_one_of_roles_1.verifyOneOfRoles)(interaction, [ids_1.STAFF_ROLE_ID])) {
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
    interaction.deferReply();
    const query = interaction.options.getString("query");
    const max = interaction.options.getNumber("qtd");
    const jobs = await (0, google_jobs_1.getJobs)(query, max);
    await interaction.editReply({
        embeds: (0, get_jobs_embeds_1.getJobsEmbeds)(jobs),
    });
};
exports.getJob = getJob;
exports.getJobCommand = {
    command: new builders_1.SlashCommandBuilder()
        .setName((0, get_command_name_1.getCommandName)("get-job"))
        .setDescription("Get a job")
        .addStringOption(option => option
        .setName("query")
        .setDescription("Query to search for jobs")
        .setRequired(true))
        .addNumberOption(option => option
        .setName("qtd")
        .setDescription("Qtd of jobs to return")
        .setRequired(true))
        .setDefaultPermission(false),
};
