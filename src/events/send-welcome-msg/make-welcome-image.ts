/* eslint-disable @typescript-eslint/no-magic-numbers */

import { createCanvas, loadImage } from "canvas";
import { GuildMember, MessageAttachment } from "discord.js";
import { Images } from "../../assets/images";

// Pass the entire Canvas object because you'll need access to its width and context
const applyText = (canvas, text) => {
	const context = canvas.getContext("2d");

	// Declare a base size of the font
	let fontSize = 115;

	do {
		// Assign the font to the context and decrement it so it can be measured again
		context.font = `${(fontSize -= 10)}px sans-serif`;
		// Compare pixel width of the text to the canvas minus the approximate avatar size
	} while (context.measureText(text).width > canvas.width - 300);

	// Return the result to use in the actual canvas
	return context.font;
};

export const makeWelcomeImg = async (member: GuildMember) => {
	const canvas = createCanvas(1015, 362);
	const context = canvas.getContext("2d");
	const background = await loadImage(Images.welcomeImageBanner);
	context.drawImage(background, 0, 0, canvas.width, canvas.height);

	// Slightly smaller text placed above the member's display name
	context.font = "bold 28px sans-serif";
	context.fillStyle = "#ffffff";
	context.fillText(
		"SEJA BEM VINDO(A)!",
		canvas.width / 2.5,
		canvas.height / 3.0,
	);

	const name = member.displayName;

	context.font = applyText(canvas, name);

	// BLUE
	context.fillStyle = "#04fdfd";
	context.fillText(
		name,
		// eslint-disable-next-line prettier/prettier
		(canvas.width / 2.5) - 3,
		// eslint-disable-next-line prettier/prettier
		(canvas.height / 1.5) - 3,
	);

	// PINK
	context.fillStyle = "#fd05fc";
	context.fillText(
		name,
		// eslint-disable-next-line prettier/prettier
		(canvas.width / 2.5) + 3,
		// eslint-disable-next-line prettier/prettier
		(canvas.height / 1.5) + 3,
	);

	// WHITE
	context.fillStyle = "#ffffff";
	context.fillText(name, canvas.width / 2.5, canvas.height / 1.5);

	context.beginPath();
	context.arc(181, 181, 130, 0, Math.PI * 2, true);
	context.fill();

	// Pick up the pen
	context.beginPath();

	// Start the arc to form a circle
	context.arc(181, 181, 125, 0, Math.PI * 2, true);

	// Put the pen down
	context.closePath();

	// Clip off the region you drew on
	context.clip();

	const userImg = await loadImage(
		// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
		member.user.avatarURL({
			format: "png",
			size: 256,
		})!,
	);

	context.drawImage(userImg, 56, 56, 250, 250);

	const welcomeImg = new MessageAttachment(canvas.toBuffer(), "welcome.png");

	return welcomeImg;
};
