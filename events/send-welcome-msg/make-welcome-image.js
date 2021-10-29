"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeWelcomeImg = void 0;
const canvas_1 = require("canvas");
const discord_js_1 = require("discord.js");
const images_1 = require("../../assets/images");
const applyText = (canvas, text) => {
    const context = canvas.getContext("2d");
    let fontSize = 115;
    do {
        context.font = `${(fontSize -= 10)}px sans-serif`;
    } while (context.measureText(text).width > canvas.width - 300);
    return context.font;
};
const makeWelcomeImg = async (member) => {
    const canvas = (0, canvas_1.createCanvas)(1015, 362);
    const context = canvas.getContext("2d");
    const background = await (0, canvas_1.loadImage)(images_1.Images.welcomeImageBanner);
    context.drawImage(background, 0, 0, canvas.width, canvas.height);
    context.font = "bold 28px sans-serif";
    context.fillStyle = "#ffffff";
    context.fillText("SEJA BEM VINDO(A)!", canvas.width / 2.5, canvas.height / 3.0);
    const name = member.displayName;
    context.font = applyText(canvas, name);
    context.fillStyle = "#04fdfd";
    context.fillText(name, (canvas.width / 2.5) - 3, (canvas.height / 1.5) - 3);
    context.fillStyle = "#fd05fc";
    context.fillText(name, (canvas.width / 2.5) + 3, (canvas.height / 1.5) + 3);
    context.fillStyle = "#ffffff";
    context.fillText(name, canvas.width / 2.5, canvas.height / 1.5);
    context.beginPath();
    context.arc(181, 181, 130, 0, Math.PI * 2, true);
    context.fill();
    context.beginPath();
    context.arc(181, 181, 125, 0, Math.PI * 2, true);
    context.closePath();
    context.clip();
    const userImg = await (0, canvas_1.loadImage)(member.user.avatarURL({
        format: "png",
        size: 256,
    }));
    context.drawImage(userImg, 56, 56, 250, 250);
    const welcomeImg = new discord_js_1.MessageAttachment(canvas.toBuffer(), "welcome.png");
    return welcomeImg;
};
exports.makeWelcomeImg = makeWelcomeImg;
