import type { Message } from "discord.js";

export type IFlags = Record<string, boolean | string>;

export interface ICommandUsage {
	args?: Array<string>;
	optionalArgs?: Array<string>;
	flags?: Array<string>;
}

export interface ICommandAction {
	message: Message;
	args: Array<string>;
	flags: IFlags;
}

export interface ICommand {
	name: string;
	description: string;
	onlyADM?: boolean;
	usage?: ICommandUsage;
	action: (params: ICommandAction) => Promise<any> | any;
}
