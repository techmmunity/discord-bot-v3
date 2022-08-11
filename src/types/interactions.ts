import type { SlashCommandBuilder } from "@discordjs/builders";

import type { PermissionTypeEnum } from "../enums/permission-type";

export interface Interaction {
	command: SlashCommandBuilder;
	permissions?: Array<{
		id: string;
		type: PermissionTypeEnum;
		permission: boolean;
	}>;
}
