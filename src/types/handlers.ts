import { GuildMember, Message, PartialGuildMember } from "discord.js";

type IHandler<T> = (param: T) => Promise<void>;

export type IMessageHandlder = IHandler<Message>;

export type IMemberHandlder = IHandler<GuildMember>;

export type IPartialMemberHandlder = IHandler<PartialGuildMember>;
