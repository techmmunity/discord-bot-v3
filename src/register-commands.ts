/* eslint-disable no-await-in-loop */

import { REST } from "@discordjs/rest";
import { sleep } from "@techmmunity/utils";
import { Routes } from "discord-api-types/v10";

import { TECHMMUNITY_GUILD_ID } from "./config/ids";

import type { Interaction } from "./types/interactions";

interface RegisterCommandsParams {
	commands: Array<Interaction>;
}

interface Command {
	id: string;
	name: string;
	description: string;
}

export const registerCommands = async ({
	commands,
}: RegisterCommandsParams) => {
	const rest = new REST({ version: "9" }).setToken(
		process.env.DISCORD_BOT_TOKEN,
	);

	const registeredCommands = (await rest.get(
		`/applications/${process.env.DISCORD_CLIENT_ID}/guilds/${TECHMMUNITY_GUILD_ID}/commands`,
	)) as Array<Command>;

	const registeredCommandsNames = registeredCommands.map(
		command => command.name,
	);
	const appCommandsNames = commands.map(command => command.command.name);

	const deletedCommands = registeredCommandsNames.filter(
		name => !appCommandsNames.includes(name),
	);
	const newCommands = appCommandsNames.filter(
		name => !registeredCommandsNames.includes(name),
	);
	const updatedCommands = appCommandsNames.filter(name =>
		registeredCommandsNames.includes(name),
	);

	for (const commandName of deletedCommands) {
		const command = registeredCommands.find(cmd => cmd.name === commandName);

		await rest.delete(
			`/applications/${process.env.DISCORD_CLIENT_ID}/guilds/${TECHMMUNITY_GUILD_ID}/commands/${command?.id}`,
		);

		// eslint-disable-next-line @typescript-eslint/no-magic-numbers
		await sleep(0.2);
	}

	for (const commandName of newCommands) {
		const commandData = commands.find(cmd => cmd.command.name === commandName)!;

		const { command } = commandData;

		await rest.post(
			Routes.applicationGuildCommands(
				process.env.DISCORD_CLIENT_ID,
				TECHMMUNITY_GUILD_ID,
			),
			{ body: command },
		);

		// eslint-disable-next-line @typescript-eslint/no-magic-numbers
		await sleep(0.2);
	}

	for (const commandName of updatedCommands) {
		const rCommand = registeredCommands.find(cmd => cmd.name === commandName)!;
		const commandData = commands.find(cmd => cmd.command.name === commandName)!;

		const { command } = commandData;

		await rest.patch(
			`/applications/${process.env.DISCORD_CLIENT_ID}/guilds/${TECHMMUNITY_GUILD_ID}/commands/${rCommand.id}`,
			{ body: command },
		);

		// eslint-disable-next-line @typescript-eslint/no-magic-numbers
		await sleep(0.2);
	}
};
