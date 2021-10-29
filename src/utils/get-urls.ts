export const getUrls = (str: string) => {
	const regex =
		/(?:(?:https?|ftp|file):\/\/|www\.|ftp\.)(?:\([-A-Z0-9+&@#/%=~_|$?!:,.]*\)|[-A-Z0-9+&@#/%=~_|$?!:,.])*(?:\([-A-Z0-9+&@#/%=~_|$?!:,.]*\)|[A-Z0-9+&@#/%=~_|$])/gim;

	// eslint-disable-next-line @typescript-eslint/no-magic-numbers
	return [...str.matchAll(regex)].map(url => url[0]);
};
