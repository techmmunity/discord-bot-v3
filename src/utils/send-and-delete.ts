import { Message, MessageOptions } from "discord.js";

import { TimeUtil } from "utils/time";

export const sendAndDelete = (
	message: Message,
	messageToSend: MessageOptions,
	// eslint-disable-next-line @typescript-eslint/no-magic-numbers
	secondsToWait = 5,
) =>
	message.channel.send(messageToSend).then(async inviteBlockedMessage => {
		await TimeUtil.delay(secondsToWait);

		inviteBlockedMessage.delete();
	});
