export type MastodonHandle = {
	instance: string;
	user: string;
};

export const extractMastodonHandle = (url: string): MastodonHandle | null => {
	const a = url.match(/https:\/\/bsky\.app\/profile\/([a-zA-Z0-9\\.]+)/);
	if (a) {
		return { instance: "bsky.brid.gy", user: a[1] };
	}

	const b = url.match(/https:\/\/www\.threads\.net\/@([a-zA-Z0-9\\.]+)/);
	if (b) {
		return { instance: "threads.net", user: b[1] };
	}

	return null;
};
