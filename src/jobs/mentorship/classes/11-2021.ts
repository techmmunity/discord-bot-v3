import { COLORS } from "../../../assets/colors";
import {
	BLUE_PHOENIX_CHANNEL_ID,
	BLUE_PHOENIX_GUILD_ID,
	BR_DEVELOPERS_CHANNEL_ID,
	BR_DEVELOPERS_GUILD_ID,
	CODEFY_COMMUNITY_CHANNEL_ID,
	CODEFY_COMMUNITY_GUILD_ID,
	CODERS_COMMUNITY_CHANNEL_ID,
	CODERS_COMMUNITY_GUILD_ID,
	CODERS_COMMUNITY_ROLE_ID,
	COMPUTACAO_CHANNEL_ID,
	COMPUTACAO_GUILD_ID,
	COURSES_CHANNEL_ID,
	LUCI_CHANNEL_ID,
	LUCI_GUILD_ID,
	SPECIAL_CHANNEL_TO_FOLLOW,
	TECHMMUNITY_GUILD_ID,
} from "../../../config/ids";
import { Class } from "../types";

// Every Monday, Wednesday and Friday, at 8AM
const THREE_DAYS = "0 11 * * 1,3,5";

// Every Monday and Thursday, at 8AM
const TWO_DAYS = "0 11 * * 1,4";

export const classNovember2021: Class = {
	// eslint-disable-next-line @typescript-eslint/no-magic-numbers
	lastAnnounceDay: new Date(2021, 10, 26),
	servers: [
		{
			id: TECHMMUNITY_GUILD_ID,
			channelId: COURSES_CHANNEL_ID,
			schedule: THREE_DAYS,
		},
		{
			id: TECHMMUNITY_GUILD_ID,
			channelId: SPECIAL_CHANNEL_TO_FOLLOW,
			schedule: THREE_DAYS,
		},
		{
			id: BR_DEVELOPERS_GUILD_ID,
			channelId: BR_DEVELOPERS_CHANNEL_ID,
			schedule: THREE_DAYS,
		},
		{
			id: CODERS_COMMUNITY_GUILD_ID,
			channelId: CODERS_COMMUNITY_CHANNEL_ID,
			role: CODERS_COMMUNITY_ROLE_ID,
			schedule: TWO_DAYS,
		},
		{
			id: CODEFY_COMMUNITY_GUILD_ID,
			channelId: CODEFY_COMMUNITY_CHANNEL_ID,
			schedule: THREE_DAYS,
		},
		{
			id: BLUE_PHOENIX_GUILD_ID,
			channelId: BLUE_PHOENIX_CHANNEL_ID,
			schedule: THREE_DAYS,
		},
		{
			id: COMPUTACAO_GUILD_ID,
			channelId: COMPUTACAO_CHANNEL_ID,
			schedule: TWO_DAYS,
		},
		{
			id: LUCI_GUILD_ID,
			channelId: LUCI_CHANNEL_ID,
			schedule: THREE_DAYS,
		},
	],
	embeds: [
		{
			title: "Tenha um mentor!",
			description: [
				"Você não precisa sofrer por anos para se tornar um desenvolvedor!",
				"Na mentoria da Techmmunity, você tem aulas **ao vivo**, em uma **turma de no máximo 10 alunos**.",
				"Aqui você vai receber uma **atenção especial** e um **acompanhamento no seu aprendizado**.",
				"Em **dois meses** você vai se tornar um verdadeiro desenvolvedor júnior, independente, e muito provavelmente já terá seu primeiro emprego, assim como a maioria de nossos alunos!",
				"Converse com nossos ex-alunos, com nossos alunos da turma atual, ou comigo mesmo (razal#0042) seu futuro mentor e tire todas as suas dúvidas 😄",
				"As inscrições para a mentoria só estão abertas **até o dia 26**, e temos apenas **10 vagas**, então corra para não perder a sua!",
				"Saiba mais sobre nossa mentoria no vídeo:\nhttps://youtu.be/oQ1Qz_gZbRU",
				"Ou direto no nosso site:\nhttps://techmmunity.com.br",
			].join("\n\n"),
			image: {
				url: "https://i3.ytimg.com/vi/oQ1Qz_gZbRU/maxresdefault.jpg",
			},
			url: "https://youtu.be/oQ1Qz_gZbRU",
			color: COLORS.turquoise,
		},
	],
};
