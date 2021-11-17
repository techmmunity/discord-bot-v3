"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.classNovember2021 = void 0;
const colors_1 = require("../../../assets/colors");
const ids_1 = require("../../../config/ids");
exports.classNovember2021 = {
    lastAnnounceDay: new Date(2021, 10, 26),
    servers: [
        {
            id: ids_1.TECHMMUNITY_GUILD_ID,
            channelId: ids_1.COURSES_CHANNEL_ID,
            schedule: "0 11 * * 1,3,5",
        },
        {
            id: ids_1.BR_DEVELOPERS_GUILD_ID,
            channelId: ids_1.BR_DEVELOPERS_CHANNEL_ID,
            schedule: "0 11 * * 1,3,5",
        },
        {
            id: ids_1.CODERS_COMMUNITY_GUILD_ID,
            channelId: ids_1.CODERS_COMMUNITY_CHANNEL_ID,
            schedule: "0 11 * * 1,4",
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
            color: colors_1.COLORS.turquoise,
        },
    ],
};
