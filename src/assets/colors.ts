import { hexToDecimal } from "../utils/hex-to-decimal";

const BASE_COLORS = {
	turquoise: hexToDecimal("#2BA097"),
	green: hexToDecimal("#07ed1e"),
	yellow: hexToDecimal("#ffc800"),
	red: hexToDecimal("#e30e0e"),
	blue: hexToDecimal("#4287f5"),
	twitch: hexToDecimal("#9146FF"),
	codewars: hexToDecimal("#b33319"),
	pink: hexToDecimal("#ff73fa"),
	youtube: hexToDecimal("#FF0000"),
	telegram: hexToDecimal("#26A5E4"),
	orange: hexToDecimal("#e67e22"),
	purple: hexToDecimal("#a20ec2"),
};

export const COLORS = BASE_COLORS as Record<keyof typeof BASE_COLORS, number>;
