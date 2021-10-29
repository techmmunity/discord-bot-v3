/* eslint-disable @typescript-eslint/no-magic-numbers */

import { getGlobalRepository, Plus } from "@techmmunity/symbiosis";
import { Repository } from "@techmmunity/symbiosis-dynamodb";

import { CHALLENGE_ROLE_ID, CHALLENGE_CHANNEL_ID } from "../../config/ids";
import { getRandomChallengeEmbed } from "../../interactions/random-challenge/get-random-challenge";
import { ChallengeEntity } from "../../entities/challenge";
import { getTextChannel } from "../../utils/get-channel";

export const sendChallenge = async () => {
	const channel = getTextChannel(CHALLENGE_CHANNEL_ID);

	const challengeEmbed = await getRandomChallengeEmbed();

	await channel.send({
		content: `<@${CHALLENGE_ROLE_ID}>`,
		embeds: [challengeEmbed],
	});

	const challengeRepository = getGlobalRepository(
		ChallengeEntity,
	) as Repository<ChallengeEntity>;

	await challengeRepository.save({
		url: challengeEmbed.description,
		count: Plus(1),
	});
};
