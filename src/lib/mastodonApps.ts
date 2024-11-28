import type { MastodonHandle } from "./convertUrl";

export const mastodonApps: readonly {
	id: string;
	name: string;
	getUrl: (handle: MastodonHandle) => string;
}[] = [
	{
		id: "mastodon",
		name: "Mastodon App",
		getUrl: ({ user, instance }) => `mastodon://profile/@${user}@${instance}`,
	},
	{
		id: "elk",
		name: "Elk",
		getUrl: ({ user, instance }) => `https://elk.zone/@${user}@${instance}`,
	},
	{
		id: "mona",
		name: "Mona",
		getUrl: ({ user, instance }) =>
			`mona://search?text=@${user}@${instance}&show=users`,
	},
] as const;
