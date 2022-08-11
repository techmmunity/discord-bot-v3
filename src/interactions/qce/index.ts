import { SlashCommandBuilder } from "@discordjs/builders";
import type { CommandInteraction } from "discord.js";

import { COLORS } from "../../assets/colors";

import { getCommandName } from "../../utils/get-command-name";

import type { Interaction } from "../../types/interactions";

export const QCE_EMBED = {
	title: "Hey, parece que você fez uma pergunta incompleta :tired_face:",
	description: [
		"Aqui está o nosso tutorialzinho sobre dicas para fazer perguntas:",
		"- **Envie suas perguntas no ❓┊forum**, seguindo o exemplo fixado no canal.",
		'- **Faça perguntas diretas**, não perca tempo perguntando se "alguém esta dispponivel", se "alguem pode te ajudar", envie direto a **sua pergunta**, descrevendo **com detalhes** o que você quer fazer, com um **print do seu código** e um **print do erro** (caso exista)',
		'- **Não peça respostas prontas**, "estou com esse problema aqui, como eu resolvo?". Os membros de nossa comunidade preferem te ajudar a **entender o seu problema**, para que você consiga resolvê-lo sozinho no futuro :wink:',
		'- **Evite fazer perguntas muito amplas**, como "Como eu faço um site?", prefira perguntas menores sobre problemas específicos, como "O que eu começo a aprender para poder fazer um site?".',
		"- **Não envie DMs para os membros**, a maior parte da galera não gosta de receber DMs e não vai te responder, pergunte diretamente nos canais.",
		"Pra reforçar: **NÃO ENVIE DMS PARA OS MEMBROS**, ninguém gosta de ser incomodado nas DMs, ok? :wink:",
		"Agora que você já conhece nossas dicas, está pronto para fazer suas perguntas! Boa sorte e fique a vontade para postar quantas perguntas quiser, ficaremos felizes em ajudar! :smile:",
	].join("\n\n"),
	color: COLORS.turquoise,
};

export const qce = (interaction: CommandInteraction) => {
	const user = interaction.options.getUser("user");

	interaction.reply({
		content: user ? `<@${user.id}>` : undefined,
		embeds: [QCE_EMBED],
	});
};

export const qceCommand: Interaction = {
	command: new SlashCommandBuilder()
		.setName(getCommandName("qce"))
		.setDescription("Question + Code + Error")
		.addUserOption(option =>
			option.setName("user").setDescription("User to mention"),
		)
		.setDefaultPermission(true),
};
