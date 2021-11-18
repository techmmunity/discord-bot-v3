"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notificationsOptions = void 0;
const ids_1 = require("./ids");
exports.notificationsOptions = {
    techmmunity: {
        description: "Notificações oficiais da Techmmunity",
        emoji: "<:techmmunity:890749408755449856>",
        role: ids_1.TECHMMUNITY_ROLE_ID,
    },
    inkasa: {
        description: "Videos Inkasa Dev",
        emoji: ":punch:",
        role: ids_1.INKASA_ROLE_ID,
    },
    events: {
        description: "Eventos sobre a área tech",
        emoji: ":circus_tent:",
        role: ids_1.EVENT_ROLE_ID,
    },
    challenge: {
        description: "Desafios diários",
        emoji: ":trophy:",
        role: ids_1.CHALLENGE_ROLE_ID,
    },
    jobs: {
        description: "Ofertas de emprego",
        emoji: ":briefcase:",
        role: ids_1.JOB_ROLE_ID,
    },
};
