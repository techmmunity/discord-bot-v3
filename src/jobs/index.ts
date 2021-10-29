import cron from "node-cron";

import { JobsRecurrence } from "../config/jobs-recurrence";

import { sendChallenge } from "./challenges";

export const setJobs = () => {
	cron.schedule(JobsRecurrence.SEND_CHALLENGE, sendChallenge);
};
