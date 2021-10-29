import { moment } from "./moment-instance";

export const getDateAndTime = () => {
	const year = `${moment().get("year")}`.padStart(2, "0");
	const month = `${moment().get("month") + 1}`.padStart(2, "0");
	const day = `${moment().get("day")}`.padStart(2, "0");
	const hour = `${moment().get("hour")}`.padStart(2, "0");
	const minutes = `${moment().get("minutes")}`.padStart(2, "0");

	return `${year}-${month}-${day} ${hour}:${minutes}`;
};
