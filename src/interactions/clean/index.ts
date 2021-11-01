import { SlashCommandBuilder } from "@discordjs/builders";
import { isBetween } from "@techmmunity/utils";
import { CommandInteraction, TextChannel } from "discord.js";
import { COLORS } from "../../assets/colors";
import { RAZAL_ID } from "../../config/ids";
import { Interaction } from "../../types/interactions";
import { PermissionTypeEnum } from "../../types/permission-type";

export const clean = async (interaction: CommandInteraction) => {
  await interaction.deferReply();

  const channel = interaction.options.getChannel("channel")! as TextChannel;
  const qtd = interaction.options.getNumber("qtd")!;

  const messages = await channel.messages.fetch({
    // eslint-disable-next-line @typescript-eslint/no-magic-numbers
    limit: isBetween(qtd, 0, 100) ? qtd : 100,
  });

  const messagesToDelete = messages.filter((message) => !message.pinned);

  await channel.bulkDelete(messagesToDelete);

  await interaction.editReply({
    embeds: [
      {
        title: "Done!",
        color: COLORS.green,
      },
    ],
  });
};

export const cleanCommand: Interaction = {
  command: new SlashCommandBuilder()
    .setName("clean")
    .setDescription("Checks the bot latency")
    .addChannelOption((option) =>
      option
        .setName("channel")
        .setDescription("Channel to clean the messages")
        .setRequired(true)
    )
    .addNumberOption((option) =>
      option
        .setName("qtd")
        .setDescription("Qtd of messages (Max: 100)")
        .setRequired(true)
    )
    .setDefaultPermission(false),
  permissions: [
    {
      id: RAZAL_ID,
      type: PermissionTypeEnum.USER,
      permission: true,
    },
  ],
};
