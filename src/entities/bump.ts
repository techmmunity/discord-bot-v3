import { Column, Entity, PrimaryColumn } from "@techmmunity/symbiosis";
import { Repository } from "@techmmunity/symbiosis-dynamodb";

@Entity("techmmunity-bot-bump-counter")
export class BumpEntity {
	@PrimaryColumn()
	public pk: string; // BUMP_COUNT#DISCORD_USER_ID#{discordUserId}

	@Column()
	public sk: string; // BUMP_COUNT#{count}

	@Column()
	public count: number;
}

export type BumpRepository = Repository<BumpEntity>;
