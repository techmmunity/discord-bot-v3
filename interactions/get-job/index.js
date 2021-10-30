"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getJobCommand = exports.getJob = void 0;
const builders_1 = require("@discordjs/builders");
const ids_1 = require("../../config/ids");
const permission_type_1 = require("../../types/permission-type");
const google_jobs_1 = require("../../utils/google-jobs");
const get_jobs_embeds_1 = require("./get-jobs-embeds");
const getJob = async (interaction) => {
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
        .setName("get-job")
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
    permissions: [
        {
            id: ids_1.RAZAL_ID,
            type: permission_type_1.PermissionTypeEnum.USER,
            permission: true,
        },
    ],
};
