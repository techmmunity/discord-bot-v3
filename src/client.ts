import { Client, Intents } from "discord.js";
import { ActivityTypesEnum } from "./enums/activity-type";

// eslint-disable-next-line @typescript-eslint/naming-convention
export const DiscordClient = new Client({
  presence: {
    status: "online",
    activities: [
      {
        name: "techmmunity.com.br",
        type: ActivityTypesEnum.PLAYING as any,
      },
    ],
  },
  partials: ["MESSAGE", "REACTION", "GUILD_MEMBER"],
  intents: [
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MEMBERS,
  ],
});
