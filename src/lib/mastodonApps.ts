import type { MastodonHandle } from "./convertUrl";

export const mastodonApps: readonly {
	id: string;
	name: string;
	getUrl: (handle: MastodonHandle) => string;
}[] = [
	{
		id: "mastodon",
		name: "Mastodon App",
		getUrl: ({ user, instance }) =>
			navigator.userAgent.toLowerCase().match(/android/) === null
				? `mastodon://profile/@${user}@${instance}` // iOS
				: `https://mastodon.online/@${user}@${instance}`, // Android
	},
	{
		id: "elk",
		name: "Elk",
		getUrl: ({ user, instance }) => `https://elk.zone/@${user}@${instance}`,
	},
	{
		id: "ivory",
		name: "Ivory",
		getUrl: ({ user, instance }) => `ivory:///user_profile/${user}@${instance}`,
	},
	{
		id: "mona",
		name: "Mona",
		getUrl: ({ user, instance }) =>
			`mona://search?text=@${user}@${instance}&show=users`,
	},
] as const;
