export const delay = (seconds = 5): Promise<void> =>
	new Promise((resolve) => setTimeout(resolve, seconds * 1000));
