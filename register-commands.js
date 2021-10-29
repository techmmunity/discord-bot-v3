"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerCommands = void 0;
const utils_1 = require("@techmmunity/utils");
const rest_1 = require("@discordjs/rest");
const ids_1 = require("./config/ids");
const registerCommands = async ({ commands, }) => {
    const rest = new rest_1.REST({ version: "9" }).setToken(process.env.DISCORD_BOT_TOKEN);
    const registeredCommands = (await rest.get(`/applications/${process.env.DISCORD_CLIENT_ID}/guilds/${ids_1.GUILD_ID}/commands`));
    const registeredCommandsNames = registeredCommands.map(command => command.name);
    const appCommandsNames = commands.map(command => command.command.name);
    const deletedCommands = registeredCommandsNames.filter(name => !appCommandsNames.includes(name));
    const newCommands = appCommandsNames.filter(name => !registeredCommandsNames.includes(name));
    const updatedCommands = appCommandsNames.filter(name => registeredCommandsNames.includes(name));
    for (const commandName of deletedCommands) {
        const command = registeredCommands.find(cmd => cmd.name === commandName);
        await rest.delete(`/applications/${process.env.DISCORD_CLIENT_ID}/guilds/${ids_1.GUILD_ID}/commands/${command === null || command === void 0 ? void 0 : command.id}`);
        await (0, utils_1.sleep)(0.2);
    }
    for (const commandName of newCommands) {
        const commandData = commands.find(cmd => cmd.command.name === commandName);
        const { permissions, command } = commandData;
        const result = (await rest.post(`/applications/${process.env.DISCORD_CLIENT_ID}/guilds/${ids_1.GUILD_ID}/commands`, { body: command }));
        if (permissions) {
            await rest.put(`/applications/${process.env.DISCORD_CLIENT_ID}/guilds/${ids_1.GUILD_ID}/commands/${result.id}/permissions`, {
                body: {
                    permissions,
                },
            });
        }
        await (0, utils_1.sleep)(0.2);
    }
    for (const commandName of updatedCommands) {
        const rCommand = registeredCommands.find(cmd => cmd.name === commandName);
        const commandData = commands.find(cmd => cmd.command.name === commandName);
        const { permissions, command } = commandData;
        const result = (await rest.patch(`/applications/${process.env.DISCORD_CLIENT_ID}/guilds/${ids_1.GUILD_ID}/commands/${rCommand.id}`, { body: command }));
        if (permissions) {
            await rest.put(`/applications/${process.env.DISCORD_CLIENT_ID}/guilds/${ids_1.GUILD_ID}/commands/${result.id}/permissions`, {
                body: {
                    permissions,
                },
            });
        }
        await (0, utils_1.sleep)(0.2);
    }
};
exports.registerCommands = registerCommands;
