import {
	ADULT_AGE_ROLE_ID,
	ALMOST_ADULT_AGE_ROLE_ID,
	OLD_AGE_ROLE_ID,
	UNDER_AGE_ROLE_ID,
	YOUNG_ADULT_AGE_ROLE_ID,
} from "./ids";

export const agesOptions = [
	{
		id: "under_age",
		description: "-18",
		role: UNDER_AGE_ROLE_ID,
	},
	{
		id: "young_adult",
		description: "18~24",
		role: YOUNG_ADULT_AGE_ROLE_ID,
	},
	{
		id: "almost_adult",
		description: "25~32",
		role: ALMOST_ADULT_AGE_ROLE_ID,
	},
	{
		id: "adult",
		description: "33~49",
		role: ADULT_AGE_ROLE_ID,
	},
	{
		id: "old",
		description: "50+",
		role: OLD_AGE_ROLE_ID,
	},
];
