import cron from "node-cron";

import { JobsRecurrence } from "../config/jobs-recurrence";

import { sendChallenge } from "./challenges";
// import { sendJobOffer } from "./job-offer";
import { sendTechTip } from "./tech-tips";

export const setJobs = () => {
	cron.schedule(JobsRecurrence.SEND_CHALLENGE, sendChallenge);

	cron.schedule(JobsRecurrence.SEND_TECH_TIP, sendTechTip);
};
