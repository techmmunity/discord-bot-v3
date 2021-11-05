"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ramCommand = exports.ram = void 0;
const builders_1 = require("@discordjs/builders");
const colors_1 = require("../../assets/colors");
const images_1 = require("../../assets/images");
const ids_1 = require("../../config/ids");
const permission_type_1 = require("../../enums/permission-type");
const get_command_name_1 = require("../../utils/get-command-name");
const calcMemory = (memory) => Math.round((memory / 1024 / 1024) * 100) / 100;
const getColor = (memoryUsage) => {
    if (memoryUsage < 30)
        return colors_1.COLORS.green;
    if (memoryUsage < 50)
        return colors_1.COLORS.yellow;
    return colors_1.COLORS.red;
};
const ram = (interaction) => {
    const memoryUsage = process.memoryUsage();
    const rss = calcMemory(memoryUsage.rss);
    const heapTotal = calcMemory(memoryUsage.heapTotal);
    const heapUsed = calcMemory(memoryUsage.heapUsed);
    const external = calcMemory(memoryUsage.external);
    const total = calcMemory(memoryUsage.heapTotal + memoryUsage.external);
    return interaction.reply({
        embeds: [
            {
                title: "I use about:",
                color: getColor(heapTotal),
                thumbnail: {
                    url: images_1.IMAGES.performance,
                },
                fields: [
                    {
                        name: "RSS",
                        value: `${rss} MB`,
                        inline: true,
                    },
                    {
                        name: "Heap Total",
                        value: `${heapTotal} MB`,
                        inline: true,
                    },
                    {
                        name: "Heap Used",
                        value: `${heapUsed} MB`,
                        inline: true,
                    },
                    {
                        name: "External",
                        value: `${external} MB`,
                        inline: true,
                    },
                    {
                        name: "Total",
                        value: `${total} MB`,
                        inline: true,
                    },
                ],
            },
        ],
    });
};
exports.ram = ram;
exports.ramCommand = {
    command: new builders_1.SlashCommandBuilder()
        .setName((0, get_command_name_1.getCommandName)("ram"))
        .setDescription("Checks the bot ram usage")
        .setDefaultPermission(false),
    permissions: [
        {
            id: ids_1.STAFF_ROLE_ID,
            type: permission_type_1.PermissionTypeEnum.ROLE,
            permission: true,
        },
        {
            id: ids_1.MOD_ROLE_ID,
            type: permission_type_1.PermissionTypeEnum.ROLE,
            permission: true,
        },
    ],
};