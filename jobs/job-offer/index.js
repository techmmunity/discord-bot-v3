"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendJobOffer = void 0;
const utils_1 = require("@techmmunity/utils");
const client_1 = require("../../client");
const ids_1 = require("../../config/ids");
const get_jobs_embeds_1 = require("../../interactions/get-job/get-jobs-embeds");
const google_jobs_1 = require("../../utils/google-jobs");
const servers = [
    {
        id: ids_1.TECHMMUNITY_GUILD_ID,
        channelId: ids_1.JOBS_CHANNEL_ID,
        role: ids_1.JOB_ROLE_ID,
    },
    {
        id: ids_1.CODERS_COMMUNITY_GUILD_ID,
        channelId: ids_1.CODERS_COMMUNITY_JOBS_CHANNEL_ID,
        role: ids_1.CODERS_COMMUNITY_JOBS_ROLE_ID,
        crosspost: true,
        onlyMentionOnFirstMessage: true,
    },
    {
        id: ids_1.CODEFY_COMMUNITY_GUILD_ID,
        channelId: ids_1.CODEFY_COMMUNITY_JOBS_CHANNEL_ID,
    },
    {
        id: ids_1.BLUE_PHOENIX_GUILD_ID,
        channelId: ids_1.BLUE_PHOENIX_JOBS_CHANNEL_ID,
    },
];
const sendJobOffer = (query) => async () => {
    const jobs = await (0, google_jobs_1.getJobs)(query, 10);
    const embeds = (0, get_jobs_embeds_1.getJobsEmbeds)(jobs);
    for (const server of servers) {
        const guild = await client_1.DiscordClient.guilds.fetch(server.id);
        const channel = (await (guild === null || guild === void 0 ? void 0 : guild.channels.fetch(server.channelId)));
        for (const idx in embeds) {
            const embed = embeds[idx];
            const content = server.role &&
                ((server.onlyMentionOnFirstMessage && idx === "0") ||
                    !server.onlyMentionOnFirstMessage)
                ? `<@${server.role}>`
                : undefined;
            const message = await channel.send({
                content,
                embeds: [embed],
            });
            if (server.crosspost) {
                await message.crosspost();
            }
            await (0, utils_1.sleep)(0.5);
        }
    }
};
exports.sendJobOffer = sendJobOffer;
