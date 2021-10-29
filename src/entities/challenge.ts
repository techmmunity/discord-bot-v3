import { Column, Entity, Index, PrimaryColumn } from "@techmmunity/symbiosis";

@Entity()
export class ChallengeEntity {
	@Index("level_url_index")
	@PrimaryColumn()
	public url: string;

	@Column({
		defaultValue: 0,
	})
	public count: number;

	@Index("level_url_index")
	@Column()
	public level: number;
}
