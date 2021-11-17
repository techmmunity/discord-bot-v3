import { MessageEmbedOptions } from "discord.js";
import { COLORS } from "../../assets/colors";
import { IMAGES } from "../../assets/images";
import { ChallengeEntity } from "../../entities/challenge";

interface MakeChallengeEmbedParams {
	title: string;
	challenge: ChallengeEntity;
}

export const makeChallengeEmbed = ({
	challenge,
	title,
}: MakeChallengeEmbedParams): MessageEmbedOptions => ({
	title,
	description: challenge.url,
	color: COLORS.codewars,
	thumbnail: {
		url: "https://blog.codewars.com/logo.png?h=cbc5fc2fb90154f31e3eb4ed3d3d572d497fa0522469e8f186562c4365b43db2",
	},
	author: {
		name: "Techmmunity",
		url: "https://techmmunity.com.br",
		iconURL: IMAGES.techmmunityLogo,
	},
	fields: [
		{
			name: "count",
			value: String(challenge.count),
			inline: true,
		},
		{
			name: "level",
			value: String(challenge.level),
			inline: true,
		},
	],
});
