"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendBoosterEmbed = void 0;
const colors_1 = require("../../assets/colors");
const ids_1 = require("../../config/ids");
const get_channel_1 = require("../../utils/get-channel");
const sendBoosterEmbed = async () => {
    const boosterChannel = (0, get_channel_1.getTextChannel)(ids_1.BOOSTER_CHANNEL_ID);
    await boosterChannel.send({
        embeds: [
            {
                title: ":rocket: Seja booster!",
                description: `Ao ser um <@&${ids_1.TECH_BOOSTER_ROLE_ID}>, além de nos ajudar, você recebe diversos benefícios! Confira aqui quais são:

**1** - Liberado o uso de **emojis** de outros servidores

**2** - Liberado o uso de **stickers** de outros servidores

**3** - Liberado o uso de TTS

**4** - Liberado a troca do seu nickname

**5** - Voz prioritária nas calls

**6** - Você pode ver as métricas do servidor (para os nerds de plantão :nerd:)

**7** - Envio **automático** da mensagem que você quiser, 1 vez na semana, no dia e na hora que você escolher, podendo marcar até 1 role de notificação

**8** - Fazer com que os vídeos do seu canal sejam **automaticamente enviados** assim que forem postados no <#${ids_1.VIDEOS_CHANNEL_ID}>, e a criação de uma role especial para notificar a galera!

O que está esperando? Vem ser um <@&${ids_1.TECH_BOOSTER_ROLE_ID}>! :star_struck:`,
                color: colors_1.COLORS.pink,
            },
        ],
    });
};
exports.sendBoosterEmbed = sendBoosterEmbed;
