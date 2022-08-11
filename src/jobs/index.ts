import cron from "node-cron";

import { sendTechTip } from "./tech-tips";

import { JobsRecurrence } from "../config/jobs-recurrence";

export const setJobs = () => {
	cron.schedule(JobsRecurrence.SEND_TECH_TIP, sendTechTip);
};
