import { Client } from "discord.js";
import { addDefaultRoles } from "./add-default-roles";
import { sendWelcomeMsg } from "./send-welcome-msg";
import { someoneCanHelpMe } from "./someone-can-help-me";

export const setEvents = (client: Client) => {
	client.on("guildMemberAdd", addDefaultRoles);

	client.on("guildMemberAdd", sendWelcomeMsg);

	client.on("messageCreate", someoneCanHelpMe);
};
