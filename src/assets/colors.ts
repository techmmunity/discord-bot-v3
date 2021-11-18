import { HexColorString } from "discord.js";

const BASE_COLORS = {
	turquoise: "#2BA097",
	green: "#07ed1e",
	yellow: "#ffc800",
	red: "#e30e0e",
	blue: "#4287f5",
	twitch: "#9146FF",
	codewars: "#b33319",
	pink: "#ff73fa",
	youtube: "#FF0000",
	orange: "#e67e22",
};

export const COLORS = BASE_COLORS as Record<
	keyof typeof BASE_COLORS,
	HexColorString
>;
