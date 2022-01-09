"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const symbiosis_1 = require("@techmmunity/symbiosis");
const symbiosis_dynamodb_1 = require("@techmmunity/symbiosis-dynamodb");
const client_1 = require("./client");
const interactions_1 = require("./interactions");
const jobs_1 = require("./jobs");
const challenge_1 = require("./entities/challenge");
const register_commands_1 = require("./register-commands");
const events_1 = require("./events");
const bootstrap = async () => {
    try {
        const connection = await new symbiosis_dynamodb_1.Connection({
            entities: [challenge_1.ChallengeEntity],
            suffix: {
                entity: {
                    remove: "Entity",
                },
            },
            namingStrategy: {
                entity: "snake_case",
                column: "snake_case",
            },
            databaseConfig: {
                region: "us-east-1",
                credentials: {
                    accessKeyId: process.env.DYNAMODB_ACCESS_KEY_ID,
                    secretAccessKey: process.env.DYNAMODB_SECRET_ACCESS_KEY,
                },
            },
        }).load();
        await connection.connect();
        (0, symbiosis_1.setGlobalConnection)(connection);
        (0, register_commands_1.registerCommands)({
            commands: interactions_1.commands,
        });
        if (process.env.NODE_ENV !== "dev") {
            (0, jobs_1.setJobs)();
        }
        (0, events_1.setEvents)(client_1.DiscordClient);
        (0, interactions_1.setInteractions)(client_1.DiscordClient);
        client_1.DiscordClient.login(process.env.DISCORD_BOT_TOKEN);
    }
    catch (e) {
        console.error(e);
    }
};
bootstrap();
