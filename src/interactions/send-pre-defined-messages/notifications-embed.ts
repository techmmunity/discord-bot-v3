import { COLORS } from "../../assets/colors";
import { NOTIFICATIONS_CHANNEL_ID } from "../../config/ids";
import { getTextChannel } from "../../utils/get-channel";
import { makeNotificationsEmbed } from "../notifications";

export const sendNotificationsEmbed = async () => {
  const { fields } = makeNotificationsEmbed();

  const notificationsChannel = getTextChannel(NOTIFICATIONS_CHANNEL_ID);

  await notificationsChannel.send({
    embeds: [
      {
        title: "Escolha as notificações que você quer receber!",
        description:
          "Para receber as notificacoes, basta usar o comando `/notitifications` e passar as as opções como `True`.\n\nPara saber mais sobre como usar os comandos, assista o video abaixo:\nhttps://www.youtube.com/watch?v=4XxcpBxSCiU&t=44s\n\n**Notificações disponiveis:**",
        color: COLORS.turquoise,
        fields,
      },
    ],
  });
};
