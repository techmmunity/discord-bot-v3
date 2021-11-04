/* eslint-disable @typescript-eslint/no-magic-numbers */

import { COLORS } from "../../assets/colors";
import { OFFTOPIC_CHANNEL_ID } from "../../config/ids";
import { getTextChannel } from "../../utils/get-channel";

export const sendMinecraft = async () => {
  const channel = getTextChannel(OFFTOPIC_CHANNEL_ID);

  await channel.send({
    embeds: [
      {
        title: ":joystick: Bora jogar um mine? :joystick:",
        description:
          "A Tech tem parceria com um servidor de Minecraft (1.17)! Lá tem varios mini-games, um sistema de RPG, skills, survival e muito mais!\n\nConfira esse incrível servidor usando o ip:\n**minecraft.techmmunity.com.br**",
        color: COLORS.turquoise,
        thumbnail: {
          url: "https://cdn.discordapp.com/icons/896425054244589628/a2806437e3fa89a2483e0d6a5b16b44d.png?size=512",
        },
        url: "",
      },
    ],
  });
};
