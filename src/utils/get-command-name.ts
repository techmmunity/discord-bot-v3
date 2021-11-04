export const getCommandName = (name: string) => {
	if (process.env.NODE_ENV === "dev") {
		return `dev-${name}`;
	}

	return name;
};
