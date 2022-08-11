import GetTitleAtUrl from "get-title-at-url";

import { promisify } from "util";

const getTitleAtUrl = promisify(GetTitleAtUrl);

export const getTitle = (url: string): Promise<string> =>
	getTitleAtUrl(url).catch(result => result);
