import {
	TECHMMUNITY_ROLE_ID,
	EVENT_ROLE_ID,
	CHALLENGE_ROLE_ID,
	JOB_ROLE_ID,
} from "./ids";

export const notificationsOptions = {
	techmmunity: {
		description: "Notificações oficiais da Techmmunity",
		emoji: "<:techmmunity:890749408755449856>",
		role: TECHMMUNITY_ROLE_ID,
	},
	events: {
		description: "Eventos sobre a área tech",
		emoji: ":circus_tent:",
		role: EVENT_ROLE_ID,
	},
	challenge: {
		description: "Desafios diários",
		emoji: ":trophy:",
		role: CHALLENGE_ROLE_ID,
	},
	jobs: {
		description: "Ofertas de emprego",
		emoji: ":briefcase:",
		role: JOB_ROLE_ID,
	},
};
