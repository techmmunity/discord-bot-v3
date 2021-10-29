/* eslint-disable @typescript-eslint/no-magic-numbers */
import { Guild, TextChannel } from "discord.js";

import { getGlobalRepository, Plus } from "@techmmunity/symbiosis";
import { Repository } from "@techmmunity/symbiosis-dynamodb";
import { DiscordClient } from "../../client";
import {
	CHALLENGE_ROLE_ID,
	GUILD_ID,
	CHALLENGE_CHANNEL_ID,
} from "../../config/ids";
import { getRandomChallengeEmbed } from "../../interactions/random-challenge/get-random-challenge";
import { ChallengeEntity } from "../../entities/challenge";

export const sendChallenge = async () => {
	const channel = (
		DiscordClient.guilds.cache.get(GUILD_ID) as Guild
	).channels.cache.get(CHALLENGE_CHANNEL_ID) as TextChannel;

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
