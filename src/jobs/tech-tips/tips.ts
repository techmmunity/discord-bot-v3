import { MessageEmbedOptions } from "discord.js";
import { Colors } from "../../assets/colors";
import {
	BOOKS_CHANNEL_ID,
	BOOSTER_CHANNEL_ID,
	BOTS_CHANNEL_ID,
	BUMP_CHANNEL_ID,
	CHALLENGE_CHANNEL_ID,
	CHALLENGE_ROLE_ID,
	COURSES_CHANNEL_ID,
	ESLINT_CONFIG_CHANNEL_ID,
	GIT_CHANNEL_ID,
	I_DID_IT_CHANNEL_ID,
	JOBS_CHANNEL_ID,
	NOTIFICATIONS_CHANNEL_ID,
	SUGGESTIONS_CHANNEL_ID,
	SYMBIOSIS_CHANNEL_ID,
	TECHMMUNITY_CHANNEL_ID,
	VIDEOS_CHANNEL_ID,
} from "../../config/ids";

const notifications = {
	description: `Para receber notificações dos seus conteúdos favoritos, vá até o <#${NOTIFICATIONS_CHANNEL_ID}> e use o comando \`/notifications\`.`,
	color: Colors.turquoise,
};

export const tips: Array<MessageEmbedOptions> = [
	{
		...notifications,
		title: "Tech Tips #1",
	},
	{
		title: "Tech Tips #2",
		description: `Dê ideias para melhorar a comunidade usando o comando \`/suggest\` no canal <#${SUGGESTIONS_CHANNEL_ID}> ou <#${BOTS_CHANNEL_ID}>.`,
		color: Colors.turquoise,
	},
	{
		title: "Tech Tips #3",
		description: `Compartilhe suas criações no canal <#${I_DID_IT_CHANNEL_ID}>.`,
		color: Colors.turquoise,
	},
	{
		title: "Tech Tips #4",
		description: `Ajude a comunidade usando \`!d bump\` no canal <#${BUMP_CHANNEL_ID}> a cada 2 horas.`,
		color: Colors.turquoise,
	},
	{
		title: "Tech Tips #5",
		description: `Fique atendo as vagas de empregos enviadas no canal <#${JOBS_CHANNEL_ID}>.${"\n\n"}Todas as **segundas** enviamos 10 vagas de **Desenvolvedor TypeScript Júnior** e todas as **quintas** enviamos 10 vagas de **Desenvolvedor React Júnior**.`,
		color: Colors.turquoise,
	},
	{
		title: "Tech Tips #6",
		description: `O melhor jeito de aprender a programar é sempre se manter praticando! Pra isso, nós da Tech postamos desafios diários de segunda a sexta no <#${CHALLENGE_CHANNEL_ID}>! Fique atento, ou pegue a role <@&${CHALLENGE_ROLE_ID}> no <#${NOTIFICATIONS_CHANNEL_ID}> para ser notificado sempre que um novo desafio for postado!`,
		color: Colors.turquoise,
	},
	{
		title: "Tech Tips #7",
		description: `Nós da Techmmunity fazemos várias ferramentas para ajudar a comunidade, dê uma olhada no <#${TECHMMUNITY_CHANNEL_ID}> e comece a economizar muito tempo agora mesmo!${"\n\n"}Hoje temos uma dica bônus: Contribuir nas libs da Tech tbm é um ótimo jeito de iniciar no mundo Open Source! :smile:`,
		color: Colors.turquoise,
	},
	{
		...notifications,
		title: "Tech Tips #8",
	},
	{
		title: "Tech Tips #9",
		description: `Dê um **boost** no server e receba vários benefícios! Saiba mais no canal <#${BOOSTER_CHANNEL_ID}>.`,
		color: Colors.turquoise,
	},
	{
		title: "Tech Tips #10",
		description: `Encontre e compartilhe os melhores livros e artigos sobre programação no canal <#${BOOKS_CHANNEL_ID}>.`,
		color: Colors.turquoise,
	},
	{
		title: "Tech Tips #11",
		description: `Encontre e compartilhe os melhores cursos sobre programação no canal <#${COURSES_CHANNEL_ID}>.`,
		color: Colors.turquoise,
	},
	{
		title: "Tech Tips #12",
		description: `Encontre e compartilhe os melhores videos sobre programação no canal <#${VIDEOS_CHANNEL_ID}>.`,
		color: Colors.turquoise,
	},
	{
		title: "Tech Tips #13",
		description: `Aprenda sobre código limpo em JavaScript lendo esse artigo:${"\n\n"}https://github.com/ryanmcdermott/clean-code-javascript`,
		color: Colors.turquoise,
	},
	{
		title: "Tech Tips #14",
		description: `ESLint é a melhor ferramenta para manter seu código limpo e organizado enquanto programa em JavaScript, e a Techmmunity tem uma lib para te ajudar a configurar seu projeto usando o ESLint! Saiba mais no canal <#${ESLINT_CONFIG_CHANNEL_ID}>.`,
		color: Colors.turquoise,
	},
	{
		...notifications,
		title: "Tech Tips #15",
	},
	{
		title: "Tech Tips #16",
		description:
			"Suas perguntas tem mais chance de serem respondidas se você já as enviar direto com um print do seu código e do erro que está dando :wink:",
		color: Colors.turquoise,
	},
	{
		title: "Tech Tips #17",
		description: `Quer entrar no mundo da programação mas se sente perdido? A Techmmunity tem uma mentoria intensiva de 2 meses para te inserir na area! Não perca essa chance e candidate-se agora mesmo para a proxima turma:${"\n\n"}https://mentorship.techmmunity.com.br/.`,
		color: Colors.turquoise,
	},
	{
		title: "Tech Tips #18",
		description: `Trabalhar com git fica muito mais fácil quando você usa os aliases da Tech! Saiba mais no canal <#${GIT_CHANNEL_ID}>.`,
		color: Colors.turquoise,
	},
	{
		title: "Tech Tips #19",
		description: `Trabalhar com bancos de dados fica muito mais fácil quando você usa o \`@techmmunity/symbiosis\`! Saiba mais no canal <#${SYMBIOSIS_CHANNEL_ID}>.`,
		color: Colors.turquoise,
	},
	{
		title: "Tech Tips #20",
		description:
			"Não use `var`, use `const` ou `let`! Saiba mais em https://www.alura.com.br/artigos/entenda-diferenca-entre-var-let-e-const-no-javascript",
	},
	{
		title: "Tech Tips #21",
		description:
			"Prefira __arrow functions__ `() => {}` a funções normais `function () {}`, para que seu código fique muito mais limpo e legivel.",
	},
	{
		...notifications,
		title: "Tech Tips #22",
	},
	{
		title: "Tech Tips #23",
		description:
			"Evite __magic numbers__! Para pegar o primeiro item de um array, use `const [primeiroItem] = array` ao inves de `const primeiroItem = array[0]`.",
	},
	{
		title: "Tech Tips #24",
		description:
			"Use **metodos de array** ao inves de um `for`. Saiba mais em:\n\nhttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#",
	},
	{
		...notifications,
		title: "Tech Tips 29",
	},
];
