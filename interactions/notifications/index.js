"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notificationsCommand = exports.notifications = exports.makeNotificationsEmbed = void 0;
const builders_1 = require("@discordjs/builders");
const utils_1 = require("@techmmunity/utils");
const colors_1 = require("../../assets/colors");
const ids_1 = require("../../config/ids");
const get_command_name_1 = require("../../utils/get-command-name");
const notificationsOptions = {
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
const makeCommand = () => {
    const command = new builders_1.SlashCommandBuilder()
        .setName((0, get_command_name_1.getCommandName)("notifications"))
        .setDescription("Add, Removes or show all notifications available")
        .setDefaultPermission(true);
    const entries = Object.entries(notificationsOptions);
    entries.forEach(([key, value]) => {
        command.addBooleanOption(option => option.setName(key).setDescription(value.description));
    });
    return command;
};
const getOptions = (interaction) => {
    const keys = Object.keys(notificationsOptions);
    return keys
        .map(key => {
        if (interaction.options.getBoolean(key)) {
            return key;
        }
    })
        .filter(Boolean);
};
const makeNotificationsEmbed = () => {
    const values = Object.entries(notificationsOptions);
    const fields = values.map(([key, val]) => ({
        name: key,
        value: `${val.emoji} ${val.description}`,
    }));
    const embed = {
        title: "Escolha quais notificações você quer receber",
        description: "E depois disso execute novamente o comando `/notifications` passando as opções que você deseja.",
        color: colors_1.COLORS.turquoise,
        fields,
    };
    return embed;
};
exports.makeNotificationsEmbed = makeNotificationsEmbed;
const notifications = async (interaction) => {
    await interaction.deferReply();
    const options = getOptions(interaction);
    if ((0, utils_1.isEmptyArray)(options)) {
        await interaction.editReply({
            embeds: [(0, exports.makeNotificationsEmbed)()],
        });
        return;
    }
    const member = interaction.member;
    const rolesToAdd = options.filter(option => !member.roles.cache.has(notificationsOptions[option].role));
    const rolesToRemove = options.filter(option => member.roles.cache.has(notificationsOptions[option].role));
    rolesToAdd.forEach(async (option) => {
        const role = notificationsOptions[option].role;
        await member.roles.add(role);
        await (0, utils_1.sleep)(0.2);
    });
    rolesToRemove.forEach(async (option) => {
        const role = notificationsOptions[option].role;
        await member.roles.remove(role);
        await (0, utils_1.sleep)(0.2);
    });
    const rolesAddedDescription = `**Roles adicionadas:** ${rolesToAdd
        .map(option => `\`${option}\``)
        .join(", ")}`;
    const rolesRemovedDescription = `**Roles removidas:** ${rolesToRemove
        .map(option => `\`${option}\``)
        .join(", ")}`;
    await interaction.editReply({
        embeds: [
            {
                title: "Sucesso!",
                description: `${rolesAddedDescription}${"\n\n"}${rolesRemovedDescription}`,
                color: colors_1.COLORS.green,
            },
        ],
    });
    await (0, utils_1.sleep)(5);
    await interaction.deleteReply();
};
exports.notifications = notifications;
exports.notificationsCommand = {
    command: makeCommand(),
};
