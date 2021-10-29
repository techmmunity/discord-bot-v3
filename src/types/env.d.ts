/* eslint-disable @typescript-eslint/naming-convention */

declare global {
	namespace NodeJS {
		interface ProcessEnv {
			NODE_ENV: "dev" | "homolog" | "production" | "test";
			DISCORD_BOT_TOKEN: string;
			DISCORD_CLIENT_ID: string;
			DISCORD_CLIENT_SECRET: string;
			DYNAMODB_ACCESS_KEY_ID: string;
			DYNAMODB_SECRET_ACCESS_KEY: string;
		}
	}
}

// If this file has no import/export statements (i.e. is a script)
// Convert it into a module by adding an empty export statement.
// eslint-disable-next-line prettier/prettier
export { };
