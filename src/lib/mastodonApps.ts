import type { MastodonHandle } from "./convertUrl";

export const mastodonAppIdentifiers = ["mona", "icecubes", "opener"] as const;
export type MastodonAppIdentifier = (typeof mastodonAppIdentifiers)[number];

export const mastodonApps: readonly {
	id: MastodonAppIdentifier;
	name: string;
	getUrl: (handle: MastodonHandle) => string;
}[] = [
	{
		id: "mona",
		name: "Mona",
		getUrl: ({ user, instance }) =>
			`mona://search?text=@${user}@${instance}&show=users`,
	},
	{
		id: "icecubes",
		name: "IceCubes",
		getUrl: ({ user, instance }) => `icecubesapp://${instance}/@${user}`,
	},
	{
		id: "opener",
		name: "Opener",
		getUrl: ({ user, instance }) =>
			`opener://x-callback-url/show-options?url=https%3A%2F%2F${instance}%2F${user}`,
	},
] as const;
