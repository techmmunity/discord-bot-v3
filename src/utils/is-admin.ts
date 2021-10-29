import { Message } from "discord.js";

export const isAdmin = (message: Message) =>
	message.member?.permissions.has("ADMINISTRATOR");
