/* eslint-disable @typescript-eslint/no-magic-numbers */

import { SlashCommandBuilder } from "@discordjs/builders";
import { CommandInteraction } from "discord.js";
import { COLORS } from "../../assets/colors";
import { Images } from "../../assets/images";
import { MOD_ROLE_ID, STAFF_ROLE_ID } from "../../config/ids";
import { Interaction } from "../../types/interactions";
import { PermissionTypeEnum } from "../../types/permission-type";

const calcMemory = (memory: number) =>
  Math.round((memory / 1024 / 1024) * 100) / 100;

const getColor = (memoryUsage: number) => {
  if (memoryUsage < 30) return COLORS.green;

  if (memoryUsage < 50) return COLORS.yellow;

  return COLORS.red;
};

export const ram = (interaction: CommandInteraction) => {
  const memoryUsage = process.memoryUsage();

  const rss = calcMemory(memoryUsage.rss);
  const heapTotal = calcMemory(memoryUsage.heapTotal);
  const heapUsed = calcMemory(memoryUsage.heapUsed);
  const external = calcMemory(memoryUsage.external);
  const total = calcMemory(memoryUsage.heapTotal + memoryUsage.external);

  return interaction.reply({
    embeds: [
      {
        title: "I use about:",
        color: getColor(heapTotal),
        thumbnail: {
          url: Images.performance,
        },
        fields: [
          {
            name: "RSS",
            value: `${rss} MB`,
            inline: true,
          },
          {
            name: "Heap Total",
            value: `${heapTotal} MB`,
            inline: true,
          },
          {
            name: "Heap Used",
            value: `${heapUsed} MB`,
            inline: true,
          },
          {
            name: "External",
            value: `${external} MB`,
            inline: true,
          },
          {
            name: "Total",
            value: `${total} MB`,
            inline: true,
          },
        ],
      },
    ],
  });
};

export const ramCommand: Interaction = {
  command: new SlashCommandBuilder()
    .setName("ram")
    .setDescription("Checks the bot ram usage")
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
