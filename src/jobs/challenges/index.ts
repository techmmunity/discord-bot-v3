/* eslint-disable @typescript-eslint/no-magic-numbers */
import { Guild, TextChannel } from "discord.js";

import {
	getGlobalRepository,
	LessThanOrEqual,
	MoreThanOrEqual,
} from "@techmmunity/symbiosis";
import { Repository } from "@techmmunity/symbiosis-dynamodb";
import { ChallengeEntity } from "../../entities/challenge";
import { DiscordClient } from "../../client";
import { getTitle } from "../../utils/get-title";
import { GUILD_ID, SERVER_ID } from "../../config/ids";
import { makeChallengeEmbed } from "../../interactions/create-challenge/make-embed";

const getLevel = () => {
	const dayOfWeek = new Date().getDay();

	if (dayOfWeek === 1) {
		return MoreThanOrEqual(7);
	}

	return LessThanOrEqual(6);
};

export const sendChallenge = async () => {
	const channel = (
		DiscordClient.guilds.cache.get(GUILD_ID) as Guild
	).channels.cache.get(SERVER_ID) as TextChannel;

	const repository = getGlobalRepository(
		ChallengeEntity,
	) as Repository<ChallengeEntity>;

	const challenges = await repository.find({
		where: {
			level: getLevel(),
		},
		index: "level_index",
	});

	// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
	const challenge = challenges.sort((a, b) => a.count - b.count).shift()!;

	const challengeTitle = await getTitle(challenge.url);

	return channel.send({
		content: "<@889846828693061644>",
		embeds: [
			makeChallengeEmbed({
				title: challengeTitle,
				challenge,
			}),
		],
	});
};
