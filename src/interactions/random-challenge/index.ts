import { SlashCommandBuilder } from "@discordjs/builders";
import { CommandInteraction } from "discord.js";
import { STAFF_ROLE_ID, MOD_ROLE_ID } from "../../config/ids";
import { Interaction } from "../../types/interactions";
import { PermissionTypeEnum } from "../../enums/permission-type";
import { getRandomChallengeEmbed } from "./get-random-challenge";

export const getRandomChallenge = async (interaction: CommandInteraction) => {
  const randomChallengeEmbed = await getRandomChallengeEmbed();

  await interaction.reply({
    embeds: [randomChallengeEmbed],
  });
};

export const getRandomChallengeCommand: Interaction = {
  command: new SlashCommandBuilder()
    .setName("get-random-challenge")
    .setDescription("Get a random challenge")
    .setDefaultPermission(false),
  permissions: [
    {
      id: STAFF_ROLE_ID, // Staff
      type: PermissionTypeEnum.ROLE,
      permission: true,
    },
    {
      id: MOD_ROLE_ID, // Mod
      type: PermissionTypeEnum.ROLE,
      permission: true,
    },
  ],
};
