"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMemberImgUrl = void 0;
const getMemberImgUrl = (member) => {
    const userImgUrl = member.user.avatarURL({
        format: "png",
        size: 256,
    });
    if (userImgUrl)
        return userImgUrl;
    const guildImgUrl = member.guild.iconURL({
        format: "png",
        size: 256,
    });
    return guildImgUrl;
};
exports.getMemberImgUrl = getMemberImgUrl;
