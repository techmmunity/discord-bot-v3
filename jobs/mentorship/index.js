"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setMentorshipJob = void 0;
const utils_1 = require("@techmmunity/utils");
const colors_1 = require("../../assets/colors");
const client_1 = require("../../client");
const ids_1 = require("../../config/ids");
const classes_1 = require("./classes");
const sendMentorshipAnnounce = async () => {
    const currentClass = classes_1.classes.pop();
    for (const server of currentClass.servers) {
        const guild = await client_1.DiscordClient.guilds.fetch(server.id);
        const channel = (await (guild === null || guild === void 0 ? void 0 : guild.channels.fetch(server.channelId)));
        if (channel) {
            await channel.send({
                content: currentClass.content,
                embeds: currentClass.embeds,
            });
            await (0, utils_1.sleep)(0.5);
        }
        else {
            const techmmunityGuild = await client_1.DiscordClient.guilds.fetch(ids_1.TECHMMUNITY_GUILD_ID);
            const techmmunityChannel = (await (techmmunityGuild === null || techmmunityGuild === void 0 ? void 0 : techmmunityGuild.channels.fetch(ids_1.STAFF_BOTS_CHANNEL)));
            await techmmunityChannel.send({
                embeds: [
                    {
                        title: "Fail to send menthorship announce!",
                        description: `Server: ${guild ? guild.name : server.id}`,
                        color: colors_1.COLORS.red,
                    },
                ],
            });
        }
    }
};
const setMentorshipJob = (cron) => {
    const currentClass = classes_1.classes.pop();
    for (const server of currentClass.servers) {
        cron.schedule(server.schedule, sendMentorshipAnnounce);
    }
};
exports.setMentorshipJob = setMentorshipJob;
