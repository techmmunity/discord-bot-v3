"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.qceCommand = exports.qce = exports.QCE_EMBED = void 0;
const builders_1 = require("@discordjs/builders");
const colors_1 = require("../../assets/colors");
const get_command_name_1 = require("../../utils/get-command-name");
exports.QCE_EMBED = {
    title: "Hey, parece que você fez uma pergunta incompleta :tired_face:",
    description: [
        "Aqui está o nosso tutorialzinho sobre dicas para fazer perguntas:",
        '- **Faça perguntas diretas**, não perca tempo perguntando se "alguém esta dispponivel", se "alguem pode te ajudar", envie direto a **sua pergunta**, descrevendo **com detalhes** o que você quer fazer, com um **print do seu código** e um **print do erro** (caso exista)',
        '- **Envie suas perguntas nos canais corretos**, ali na esquerda <<<< temos um tópico "❓ TOPICS", onde se encontram canais de diversas linguagens e assuntos. Sempre poste suas perguntas naqueles canais.',
        '- **Não peça respostas prontas**, "estou com esse problema aqui, como eu resolvo?". Os membros de nossa comunidade preferem te ajudar a **entender o seu problema**, para que você consiga resolvê-lo sozinho no futuro :wink:',
        '- **Evite fazer perguntas muito amplas**, como "Como eu faço um site?", prefira perguntas menores sobre problemas específicos, como "O que eu começo a aprender para poder fazer um site?".',
        "- **Não envie DMs para os membros**, a maior parte da galera não gosta de receber DMs e não vai te responder, pergunte diretamente nos canais.",
        "Pra reforçar: **NÃO ENVIE DMS PARA OS MEMBROS**, ninguém gosta de ser incomodado nas DMs, ok? :wink:",
        "Agora que você já conhece nossas dicas, está pronto para fazer suas perguntas! Boa sorte e fique a vontade para postar quantas perguntas quiser, ficaremos felizes em ajudar! :smile:",
    ].join("\n\n"),
    color: colors_1.COLORS.turquoise,
};
const qce = (interaction) => {
    const user = interaction.options.getUser("user");
    interaction.reply({
        content: user ? `<@${user.id}>` : undefined,
        embeds: [exports.QCE_EMBED],
    });
};
exports.qce = qce;
exports.qceCommand = {
    command: new builders_1.SlashCommandBuilder()
        .setName((0, get_command_name_1.getCommandName)("qce"))
        .setDescription("Question + Code + Error")
        .addUserOption(option => option.setName("user").setDescription("User to mention"))
        .setDefaultPermission(true),
};
