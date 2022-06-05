"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.agesOptions = void 0;
const ids_1 = require("./ids");
exports.agesOptions = [
    {
        id: "under_age",
        description: "-18",
        role: ids_1.UNDER_AGE_ROLE_ID,
    },
    {
        id: "young_adult",
        description: "18~24",
        role: ids_1.YOUNG_ADULT_AGE_ROLE_ID,
    },
    {
        id: "almost_adult",
        description: "25~32",
        role: ids_1.ALMOST_ADULT_AGE_ROLE_ID,
    },
    {
        id: "adult",
        description: "33~49",
        role: ids_1.ADULT_AGE_ROLE_ID,
    },
    {
        id: "old",
        description: "50+",
        role: ids_1.OLD_AGE_ROLE_ID,
    },
];
