import cron from "node-cron";

import { JobsRecurrence } from "../config/jobs-recurrence";

import { sendChallenge } from "./challenges";
import { sendJobOffer } from "./job-offer";
import { sendMinecraft } from "./minecraft";
import { sendTechTip } from "./tech-tips";

export const setJobs = () => {
	cron.schedule(JobsRecurrence.SEND_CHALLENGE, sendChallenge);

	cron.schedule(
		JobsRecurrence.SEND_JOBS_TYPESCRIPT,
		sendJobOffer("typescript junior"),
	);
	cron.schedule(JobsRecurrence.SEND_JOBS_REACT, sendJobOffer("react junior"));

	cron.schedule(JobsRecurrence.SEND_TECH_TIP, sendTechTip);

	cron.schedule(JobsRecurrence.SEND_MINECRAFT, sendMinecraft);
};
