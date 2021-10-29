"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDateFormatted = void 0;
const moment_instance_1 = require("./moment-instance");
const getDateFormatted = (date) => {
    const mom = (0, moment_instance_1.moment)(date);
    const year = `${mom.get("year")}`.padStart(2, "0");
    const month = `${mom.get("month") + 1}`.padStart(2, "0");
    const day = `${mom.get("day")}`.padStart(2, "0");
    return `${year}-${month}-${day}`;
};
exports.getDateFormatted = getDateFormatted;
