"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeWelcomeImg = void 0;
const canvas_1 = require("canvas");
const discord_js_1 = require("discord.js");
const path_1 = require("path");
const images_1 = require("../../assets/images");
const get_member_img_1 = require("../../utils/get-member-img");
const canvasWidth = 1015;
const canvasHeight = 362;
const userImgSize = 250;
const userImgMargin = 56;
const rightPartOfImageBeginning = userImgSize;
const rightPartOfImageWidth = canvasWidth - rightPartOfImageBeginning;
const applyText = (initialSize, height, canvas, text, originalContext) => {
    const context = canvas.getContext("2d");
    let fontSize = initialSize;
    if (text.length <= 7) {
        context.font = "100px cyberpunk";
    }
    else {
        do {
            context.font = `${(fontSize -= 10)}px cyberpunk`;
        } while (context.measureText(text).width >
            canvas.width - rightPartOfImageBeginning + userImgMargin);
    }
    const xText = rightPartOfImageBeginning +
        ((rightPartOfImageWidth - context.measureText(text).width) / 2);
    originalContext.font = context.font;
    originalContext.fillText(text, xText, canvas.height / height);
};
const makeWelcomeImg = async (member) => {
    (0, canvas_1.registerFont)((0, path_1.resolve)(__dirname, "../../assets/fonts/Cyberpunks.ttf"), {
        family: "cyberpunk",
    });
    const canvas = (0, canvas_1.createCanvas)(canvasWidth, canvasHeight);
    const context = canvas.getContext("2d");
    const background = await (0, canvas_1.loadImage)(images_1.Images.welcomeImageBanner);
    context.drawImage(background, 0, 0, canvas.width, canvas.height);
    context.fillStyle = "#ffffff";
    applyText(50, 2.5, canvas, "SEJA BEM VINDO(A)!", context);
    applyText(80, 1.5, canvas, member.displayName, context);
    context.beginPath();
    context.arc(181, 181, 130, 0, Math.PI * 2, true);
    context.fill();
    context.beginPath();
    context.arc(181, 181, 125, 0, Math.PI * 2, true);
    context.closePath();
    context.clip();
    const userImgUrl = (0, get_member_img_1.getMemberImgUrl)(member);
    const userImg = await (0, canvas_1.loadImage)(userImgUrl);
    context.drawImage(userImg, userImgMargin, userImgMargin, userImgSize, userImgSize);
    const welcomeImg = new discord_js_1.MessageAttachment(canvas.toBuffer(), "welcome.png");
    return welcomeImg;
};
exports.makeWelcomeImg = makeWelcomeImg;
