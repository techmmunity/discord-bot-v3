import "reflect-metadata";

import { setGlobalConnection } from "@techmmunity/symbiosis";
import { Connection } from "@techmmunity/symbiosis-dynamodb";

import { DiscordClient } from "./client";
import { ChallengeEntity } from "./entities/challenge";
import { setEvents } from "./events";
import { commands, setInteractions } from "./interactions";
import { setJobs } from "./jobs";
import { registerCommands } from "./register-commands";

const bootstrap = async () => {
	try {
		const connection = await new Connection({
			entities: [ChallengeEntity],
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

		setGlobalConnection(connection);

		registerCommands({
			commands,
		});

		if (process.env.NODE_ENV !== "dev") {
			setJobs();
		}

		setEvents(DiscordClient);

		setInteractions(DiscordClient);

		DiscordClient.login(process.env.DISCORD_BOT_TOKEN);
	} catch (e) {
		console.error(e);
	}
};

bootstrap();
