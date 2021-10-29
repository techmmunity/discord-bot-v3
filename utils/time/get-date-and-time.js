"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDateAndTime = void 0;
const moment_instance_1 = require("./moment-instance");
const getDateAndTime = () => {
    const year = `${(0, moment_instance_1.moment)().get("year")}`.padStart(2, "0");
    const month = `${(0, moment_instance_1.moment)().get("month") + 1}`.padStart(2, "0");
    const day = `${(0, moment_instance_1.moment)().get("day")}`.padStart(2, "0");
    const hour = `${(0, moment_instance_1.moment)().get("hour")}`.padStart(2, "0");
    const minutes = `${(0, moment_instance_1.moment)().get("minutes")}`.padStart(2, "0");
    return `${year}-${month}-${day} ${hour}:${minutes}`;
};
exports.getDateAndTime = getDateAndTime;
