"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setJobs = void 0;
const node_cron_1 = __importDefault(require("node-cron"));
const jobs_recurrence_1 = require("../config/jobs-recurrence");
const challenges_1 = require("./challenges");
const job_offer_1 = require("./job-offer");
const mentorship_1 = require("./mentorship");
const minecraft_1 = require("./minecraft");
const tech_tips_1 = require("./tech-tips");
const setJobs = () => {
    node_cron_1.default.schedule(jobs_recurrence_1.JobsRecurrence.SEND_CHALLENGE, challenges_1.sendChallenge);
    node_cron_1.default.schedule(jobs_recurrence_1.JobsRecurrence.SEND_JOBS_TYPESCRIPT, (0, job_offer_1.sendJobOffer)("typescript junior"));
    node_cron_1.default.schedule(jobs_recurrence_1.JobsRecurrence.SEND_JOBS_REACT, (0, job_offer_1.sendJobOffer)("react junior"));
    node_cron_1.default.schedule(jobs_recurrence_1.JobsRecurrence.SEND_TECH_TIP, tech_tips_1.sendTechTip);
    node_cron_1.default.schedule(jobs_recurrence_1.JobsRecurrence.SEND_MINECRAFT, minecraft_1.sendMinecraft);
    (0, mentorship_1.setMentorshipJob)(node_cron_1.default);
};
exports.setJobs = setJobs;
