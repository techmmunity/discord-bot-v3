import * as momentTZ from "moment-timezone";

momentTZ.tz.setDefault("America/New_York");

export const moment = momentTZ.default;
