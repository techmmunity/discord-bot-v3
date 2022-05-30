import { Client } from "discord.js";
import { addDefaultRoles } from "./add-default-roles";
import { buttonClick } from "./button-click";
import { claimBump } from "./claim-bump";
import { sendWelcomeMsg } from "./send-welcome-msg";
import { someoneCanHelpMe } from "./someone-can-help-me";

export const setEvents = (client: Client) => {
	client.on("guildMemberAdd", addDefaultRoles);

	client.on("guildMemberAdd", sendWelcomeMsg);

	client.on("messageCreate", claimBump);
	client.on("messageCreate", someoneCanHelpMe);

	client.on("interactionCreate", buttonClick as any);
};
