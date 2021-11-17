/* eslint-disable @typescript-eslint/naming-convention */

export const JobsRecurrence = {
	// Monday to Friday, 8AM
	SEND_CHALLENGE: "0 11 * * 1,2,3,4,5",
	// Every Monday, 8AM
	SEND_JOBS_TYPESCRIPT: "0 11 * * 1",
	// Every Thursday, 8AM
	SEND_JOBS_REACT: "0 11 * * 4",
	// Every day, noon
	SEND_TECH_TIP: "0 15 * * *",
	// Every Wednesday, noon
	SEND_MINECRAFT: "0 15 * * 3",
	// Every Monday, Wednesday and Friday, at 8AM
	SEND_MENTORSHIP_ANNOUNCE: "0 15 * * 1,3,5",
};
