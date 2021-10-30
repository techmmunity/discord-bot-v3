/* eslint-disable @typescript-eslint/no-magic-numbers */

import {
	Canvas,
	createCanvas,
	loadImage,
	NodeCanvasRenderingContext2D,
	registerFont,
} from "canvas";
import { GuildMember, MessageAttachment } from "discord.js";
import { resolve } from "path";
import { Images } from "../../assets/images";

const canvasWidth = 1015;
const canvasHeight = 362;
const userImgSize = 250;
const userImgMargin = 56;
const rightPartOfImageBeginning = userImgSize;
const rightPartOfImageWidth = canvasWidth - rightPartOfImageBeginning;

const applyText = (
	initialSize: number,
	height: number,
	canvas: Canvas,
	text: string,
	originalContext: NodeCanvasRenderingContext2D,
) => {
	const context = canvas.getContext("2d");

	// Declare a base size of the font
	let fontSize = initialSize;

	if (text.length <= 7) {
		context.font = "100px cyberpunk";
	} else {
		do {
			// Assign the font to the context and decrement it so it can be measured again
			context.font = `${(fontSize -= 10)}px cyberpunk`;
			// Compare pixel width of the text to the canvas minus the approximate avatar size
		} while (
			context.measureText(text).width >
			canvas.width - rightPartOfImageBeginning + userImgMargin
		);
	}

	const xText =
		rightPartOfImageBeginning +
		// eslint-disable-next-line prettier/prettier
		((rightPartOfImageWidth - context.measureText(text).width) / 2);

	originalContext.font = context.font;
	originalContext.fillText(text, xText, canvas.height / height);
};

export const makeWelcomeImg = async (member: GuildMember) => {
	registerFont(resolve("src/assets/fonts/Cyberpunks.ttf"), {
		family: "cyberpunk",
	});

	const canvas = createCanvas(canvasWidth, canvasHeight);
	const context = canvas.getContext("2d");
	const background = await loadImage(Images.welcomeImageBanner);
	context.drawImage(background, 0, 0, canvas.width, canvas.height);

	context.fillStyle = "#ffffff";

	applyText(50, 2.5, canvas, "SEJA BEM VINDO(A)!", context);
	applyText(80, 1.5, canvas, member.displayName, context);

	// Makes the border of the user img
	context.beginPath();
	context.arc(181, 181, 130, 0, Math.PI * 2, true);
	context.fill();

	// Makes a circle
	context.beginPath();
	context.arc(181, 181, 125, 0, Math.PI * 2, true);
	context.closePath();
	context.clip();

	const userImgUrl = member.user.avatarURL({
		format: "png",
		size: 256,
	});

	// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
	const guildImgUrl = member.guild.iconURL({
		format: "png",
		size: 256,
	})!;

	const userImg = await loadImage(userImgUrl || guildImgUrl);

	context.drawImage(
		userImg,
		userImgMargin,
		userImgMargin,
		userImgSize,
		userImgSize,
	);

	const welcomeImg = new MessageAttachment(canvas.toBuffer(), "welcome.png");

	return welcomeImg;
};
