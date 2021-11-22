"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTip = void 0;
const colors_1 = require("../../assets/colors");
const images_1 = require("../../assets/images");
const ids_1 = require("../../config/ids");
const notifications = {
    description: `Para receber notificações dos seus conteúdos favoritos, vá até o <#${ids_1.NOTIFICATIONS_CHANNEL_ID}> e use o comando \`/notifications\`.`,
};
const tips = [
    Object.assign(Object.assign({}, notifications), { title: "Tech Tips #1" }),
    {
        title: "Tech Tips #2",
        description: `Dê ideias para melhorar a comunidade usando o comando \`/suggest\` no canal <#${ids_1.SUGGESTIONS_CHANNEL_ID}> ou <#${ids_1.BOTS_CHANNEL_ID}>.`,
    },
    {
        title: "Tech Tips #3",
        description: "Suas perguntas tem mais chance de serem respondidas se você já as enviar direto com um print do seu código e do erro que está dando :wink:",
    },
    {
        title: "Tech Tips #4",
        description: `Fique atendo as vagas de empregos enviadas no canal <#${ids_1.JOBS_CHANNEL_ID}>.${"\n\n"}Todas as **segundas** enviamos 10 vagas de **Desenvolvedor TypeScript Júnior** e todas as **quintas** enviamos 10 vagas de **Desenvolvedor React Júnior**.`,
    },
    {
        title: "Tech Tips #5",
        description: `Encontre e compartilhe os melhores cursos sobre programação no canal <#${ids_1.COURSES_CHANNEL_ID}>.`,
    },
    {
        title: "Tech Tips #6",
        description: `O melhor jeito de aprender a programar é sempre se manter praticando! Pra isso, nós da Tech postamos desafios diários de segunda a sexta no <#${ids_1.CHALLENGE_CHANNEL_ID}>! Fique atento, ou pegue a role <@&${ids_1.CHALLENGE_ROLE_ID}> no <#${ids_1.NOTIFICATIONS_CHANNEL_ID}> para ser notificado sempre que um novo desafio for postado!`,
    },
    {
        title: "Tech Tips #7",
        description: `Nós da Techmmunity fazemos várias ferramentas para ajudar a comunidade, dê uma olhada no <#${ids_1.TECHMMUNITY_CHANNEL_ID}> e comece a economizar muito tempo agora mesmo!${"\n\n"}Hoje temos uma dica bônus: Contribuir nas libs da Tech tbm é um ótimo jeito de iniciar no mundo Open Source! :smile:`,
    },
    Object.assign(Object.assign({}, notifications), { title: "Tech Tips #8" }),
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
        title: "Tech Tips #14",
        description: `ESLint é a melhor ferramenta para manter seu código limpo e organizado enquanto programa em JavaScript, e a Techmmunity tem uma lib para te ajudar a configurar seu projeto usando o ESLint! Saiba mais no canal <#${ids_1.ESLINT_CONFIG_CHANNEL_ID}>.`,
    },
    Object.assign(Object.assign({}, notifications), { title: "Tech Tips #15" }),
    {
        title: "Tech Tips #16",
        description: `Compartilhe suas criações no canal <#${ids_1.I_DID_IT_CHANNEL_ID}>.`,
    },
    {
        title: "Tech Tips #17",
        description: `Quer entrar no mundo da programação mas se sente perdido? A Techmmunity tem uma mentoria intensiva de 2 meses para te inserir na area!${"\n\n"}Não perca essa chance e candidate-se agora mesmo para a proxima turma:${"\n"}https://techmmunity.com.br/.`,
    },
    {
        title: "Tech Tips #18",
        description: `Trabalhar com git fica muito mais fácil quando você usa os aliases da Tech! Saiba mais no canal <#${ids_1.GIT_CHANNEL_ID}>.`,
    },
    {
        title: "Tech Tips #19",
        description: `Trabalhar com bancos de dados fica muito mais fácil quando você usa o \`@techmmunity/symbiosis\`! Saiba mais no canal <#${ids_1.SYMBIOSIS_CHANNEL_ID}>.`,
    },
    {
        title: "Tech Tips #20",
        description: "Não use `var`, use `const` ou `let`!\n\nSaiba mais em:\nhttps://www.alura.com.br/artigos/entenda-diferenca-entre-var-let-e-const-no-javascript",
    },
    {
        title: "Tech Tips #21",
        description: "Prefira __arrow functions__ `() => {}` a funções normais `function () {}`, para que seu código fique muito mais limpo e legivel.",
    },
    Object.assign(Object.assign({}, notifications), { title: "Tech Tips #22" }),
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
        description: "Lembre-se de separar corretamente suas `dependencies` das suas `devDependencies`.\n\nSaiba mais em:\nhttps://pt.stackoverflow.com/questions/163785/qual-a-diferen%C3%A7a-entre-dependencies-e-devdependencies",
    },
    {
        title: "Tech Tips #26",
        description: "Evite variaveis globais!\n\nSaiba mais em:\nhttps://www.horadecodar.com.br/2020/08/18/por-que-nao-utilizar-variavel-global-no-javascript/",
    },
    {
        title: "Tech Tips #27",
        description: "Prefira sempre trabalhar com **TypeScript**!\n\nSaiba mais em:\nhttps://blog.rocketseat.com.br/typescript-vantagens-mitos-conceitos/",
    },
    {
        title: "Tech Tips #28",
        description: "Não decore o que você pode pesquisar! Sempre busque usar referências.\n\nAprenda a pesquisar com mais eficiência:\nhttps://neilpatel.com/br/blog/pesquisa-avancada-google/",
    },
    Object.assign(Object.assign({}, notifications), { title: "Tech Tips 29" }),
    {
        title: "Tech Tips #30",
        description: "Entenda o **PORQUÊ** e não o **COMO**, só assim você realmente consiguirá ser um dev independente.",
    },
    {
        title: "Tech Tips #31",
        description: "Foque em apenas uma linguagem! Quem tudo quer nada tem.",
    },
];
const getTip = (dayOfTheMonth) => {
    const embed = tips[dayOfTheMonth] || tips[0];
    return Object.assign(Object.assign({}, embed), { color: colors_1.COLORS.turquoise, thumbnail: {
            url: images_1.IMAGES.techmmunityLogoGif,
        } });
};
exports.getTip = getTip;