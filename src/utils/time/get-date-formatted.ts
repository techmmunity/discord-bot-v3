import { moment } from "./moment-instance";

export const getDateFormatted = (date: Date) => {
	const mom = moment(date);

	const year = `${mom.get("year")}`.padStart(2, "0");
	const month = `${mom.get("month") + 1}`.padStart(2, "0");
	const day = `${mom.get("day")}`.padStart(2, "0");

	return `${year}-${month}-${day}`;
};
