export type MastodonHandle = {
	host: string;
	handle: string;
};

export const extractMastodonHandle = (url: string): MastodonHandle | null => {
	const a = url.match(/https:\/\/bsky\.app\/profile\/([a-zA-Z0-9\\.]+)/);
	if (a) {
		return { host: "bsky.brid.gy", handle: a[1] };
	}

	const b = url.match(/https:\/\/www\.threads\.net\/@([a-zA-Z0-9\\.]+)/);
	if (b) {
		return { host: "threads.net", handle: b[1] };
	}

	return null;
};
