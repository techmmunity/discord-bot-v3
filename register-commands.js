"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerCommands = void 0;
const rest_1 = require("@discordjs/rest");
const utils_1 = require("@techmmunity/utils");
const v10_1 = require("discord-api-types/v10");
const ids_1 = require("./config/ids");
const registerCommands = async ({ commands, }) => {
    const rest = new rest_1.REST({ version: "9" }).setToken(process.env.DISCORD_BOT_TOKEN);
    const registeredCommands = (await rest.get(`/applications/${process.env.DISCORD_CLIENT_ID}/guilds/${ids_1.TECHMMUNITY_GUILD_ID}/commands`));
    const registeredCommandsNames = registeredCommands.map(command => command.name);
    const appCommandsNames = commands.map(command => command.command.name);
    const deletedCommands = registeredCommandsNames.filter(name => !appCommandsNames.includes(name));
    const newCommands = appCommandsNames.filter(name => !registeredCommandsNames.includes(name));
    const updatedCommands = appCommandsNames.filter(name => registeredCommandsNames.includes(name));
    for (const commandName of deletedCommands) {
        const command = registeredCommands.find(cmd => cmd.name === commandName);
        await rest.delete(`/applications/${process.env.DISCORD_CLIENT_ID}/guilds/${ids_1.TECHMMUNITY_GUILD_ID}/commands/${command === null || command === void 0 ? void 0 : command.id}`);
        await (0, utils_1.sleep)(0.2);
    }
    for (const commandName of newCommands) {
        const commandData = commands.find(cmd => cmd.command.name === commandName);
        const { command } = commandData;
        await rest.post(v10_1.Routes.applicationGuildCommands(process.env.DISCORD_CLIENT_ID, ids_1.TECHMMUNITY_GUILD_ID), { body: command });
        await (0, utils_1.sleep)(0.2);
    }
    for (const commandName of updatedCommands) {
        const rCommand = registeredCommands.find(cmd => cmd.name === commandName);
        const commandData = commands.find(cmd => cmd.command.name === commandName);
        const { command } = commandData;
        await rest.patch(`/applications/${process.env.DISCORD_CLIENT_ID}/guilds/${ids_1.TECHMMUNITY_GUILD_ID}/commands/${rCommand.id}`, { body: command });
        await (0, utils_1.sleep)(0.2);
    }
};
exports.registerCommands = registerCommands;
