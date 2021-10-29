/* eslint-disable @typescript-eslint/no-magic-numbers */
import { getGlobalRepository } from "@techmmunity/symbiosis";
import { Repository } from "@techmmunity/symbiosis-dynamodb";
import { ChallengeEntity } from "../../entities/challenge";
import { getTitle } from "../../utils/get-title";
import { makeChallengeEmbed } from "../create-challenge/make-embed";

const getLevel = () => {
	const dayOfWeek = new Date().getDay();

	switch (dayOfWeek) {
		case 1: // Monday
			return 7;
		case 2: // Tuesday
		case 3: // Wednesday
			return 6;
		default:
			// Thursday, Friday
			return 5;
	}
};

export const getRandomChallengeEmbed = async () => {
	const repository = getGlobalRepository(
		ChallengeEntity,
	) as Repository<ChallengeEntity>;

	const challenges = await repository.find({
		where: {
			level: getLevel(),
		},
		index: "level_url_index",
	});

	// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
	const challenge = challenges.sort((a, b) => a.count - b.count).shift()!;

	const challengeTitle = await getTitle(challenge.url);

	return makeChallengeEmbed({
		title: challengeTitle,
		challenge,
	});
};
