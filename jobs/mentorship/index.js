"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendMentorshipAnnounce = void 0;
const utils_1 = require("@techmmunity/utils");
const client_1 = require("../../client");
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
    }
};
exports.sendMentorshipAnnounce = sendMentorshipAnnounce;
