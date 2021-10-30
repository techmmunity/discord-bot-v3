"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendJobOffer = void 0;
const ids_1 = require("../../config/ids");
const get_jobs_embeds_1 = require("../../interactions/get-job/get-jobs-embeds");
const get_channel_1 = require("../../utils/get-channel");
const google_jobs_1 = require("../../utils/google-jobs");
const sendJobOffer = (query) => async () => {
    const channel = (0, get_channel_1.getTextChannel)(ids_1.JOBS_CHANNEL_ID);
    const jobs = await (0, google_jobs_1.getJobs)(query, 10);
    const embeds = (0, get_jobs_embeds_1.getJobsEmbeds)(jobs);
    await channel.send({
        content: `<@&${ids_1.JOB_ROLE_ID}>`,
        embeds,
    });
};
exports.sendJobOffer = sendJobOffer;
