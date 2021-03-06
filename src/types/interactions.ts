import { SlashCommandBuilder } from "@discordjs/builders";
import { PermissionTypeEnum } from "../enums/permission-type";

export interface Interaction {
	command: SlashCommandBuilder;
	permissions?: Array<{
		id: string;
		type: PermissionTypeEnum;
		permission: boolean;
	}>;
}
