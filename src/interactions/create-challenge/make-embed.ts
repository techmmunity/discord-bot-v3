import { COLORS } from "../../assets/colors";
import { ChallengeEntity } from "../../entities/challenge";

interface MakeChallengeEmbedParams {
	title: string;
	challenge: ChallengeEntity;
}

export const makeChallengeEmbed = ({
	challenge,
	title,
}: MakeChallengeEmbedParams): any => ({
	title,
	description: challenge.url,
	color: COLORS.codewars,
	thumbnail: {
		url: "https://blog.codewars.com/logo.png?h=cbc5fc2fb90154f31e3eb4ed3d3d572d497fa0522469e8f186562c4365b43db2",
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
