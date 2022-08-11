"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTip = void 0;
const colors_1 = require("../../assets/colors");
const images_1 = require("../../assets/images");
const ids_1 = require("../../config/ids");
const tips = [
    {
        title: "Tech Tips #3",
        description: "Suas perguntas tem mais chance de serem respondidas se você já as enviar direto com um print do seu código e do erro que está dando :wink:",
    },
    {
        title: "Tech Tips #4",
        description: `Fique atendo as vagas de empregos enviadas no canal <#${ids_1.JOBS_CHANNEL_ID}>.`,
    },
    {
        title: "Tech Tips #5",
        description: `Encontre e compartilhe os melhores cursos sobre programação no canal <#${ids_1.COURSES_CHANNEL_ID}>.`,
    },
    {
        title: "Tech Tips #9",
        description: `Dê um **boost** no server e receba vários benefícios! Saiba mais no canal <#${ids_1.BOOSTER_CHANNEL_ID}>.`,
    },
    {
        title: "Tech Tips #10",
        description: `Encontre e compartilhe os melhores livros e artigos sobre programação no canal <#${ids_1.BOOKS_CHANNEL_ID}>.`,
    },
    {
        title: "Tech Tips #11",
        description: `Ajude a comunidade usando \`!d bump\` no canal <#${ids_1.BUMP_CHANNEL_ID}> a cada 2 horas.`,
    },
    {
        title: "Tech Tips #12",
        description: `Encontre e compartilhe os melhores videos sobre programação no canal <#${ids_1.VIDEOS_CHANNEL_ID}>.`,
    },
    {
        title: "Tech Tips #13",
        description: "Evite __magic numbers__! Para pegar o primeiro item de um array, use `const [primeiroItem] = array` ao inves de `const primeiroItem = array[0]`.",
    },
    {
        title: "Tech Tips #16",
        description: `Compartilhe suas criações no canal <#${ids_1.I_DID_IT_CHANNEL_ID}>.`,
    },
    {
        title: "Tech Tips #17",
        description: `Se apresente no canal <#${ids_1.NETWORKING_CHANNEL_ID}>.`,
    },
    {
        title: "Tech Tips #20",
        description: "Não use `var`, use `const` ou `let`!\n\nSaiba mais em:\nhttps://www.alura.com.br/artigos/entenda-diferenca-entre-var-let-e-const-no-javascript",
    },
    {
        title: "Tech Tips #21",
        description: "Prefira __arrow functions__ `() => {}` a funções normais `function () {}`, para que seu código fique muito mais limpo e legivel.",
    },
    {
        title: "Tech Tips #23",
        description: `Aprenda sobre código limpo em JavaScript lendo esse artigo:${"\n"}https://github.com/ryanmcdermott/clean-code-javascript`,
    },
    {
        title: "Tech Tips #24",
        description: "Use **metodos de array** ao inves de um `for`.\n\nSaiba mais em:\nhttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#",
    },
    {
        title: "Tech Tips #25",
        description: "Lembre-se de separar corretamente suas `dependencies` das suas `devDependencies`.\n\nSaiba mais em:\nhttps://blog.techmmunity.com.br/dependencies-vs-dev-dependencies/",
    },
    {
        title: "Tech Tips #26",
        description: "Evite variaveis globais!\n\nSaiba mais em:\nhttps://www.horadecodar.com.br/2020/08/18/por-que-nao-utilizar-variavel-global-no-javascript/",
    },
    {
        title: "Tech Tips #27",
        description: "Prefira sempre trabalhar com **TypeScript**!\n\nSaiba mais em:\nhttps://blog.techmmunity.com.br/porque-usar-typescript/",
    },
    {
        title: "Tech Tips #28",
        description: "Não decore o que você pode pesquisar! Sempre busque usar referências.\n\nAprenda a pesquisar com mais eficiência:\nhttps://neilpatel.com/br/blog/pesquisa-avancada-google/",
    },
    {
        title: "Tech Tips #30",
        description: "Entenda o **PORQUÊ** e não o **COMO**, só assim você realmente consiguirá ser um dev independente.",
    },
    {
        title: "Tech Tips #31",
        description: "Foque em apenas uma linguagem!\n`Quem tudo quer nada tem.` _~Lispector, Clarice_",
    },
];
const getTip = (dayOfTheMonth) => {
    const embed = tips[dayOfTheMonth] || tips[0];
    return Object.assign(Object.assign({}, embed), { color: colors_1.COLORS.turquoise, thumbnail: {
            url: images_1.IMAGES.techmmunityLogoGif,
        } });
};
exports.getTip = getTip;
