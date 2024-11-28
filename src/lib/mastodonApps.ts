export const mastodonAppIdentifiers = ["mona", "icecubes"] as const;
export type MastodonAppIdentifier = (typeof mastodonAppIdentifiers)[number];

export const mastodonApps: readonly {
	id: MastodonAppIdentifier;
	name: string;
}[] = [
	{ id: "mona", name: "Mona" },
	{ id: "icecubes", name: "IceCubes" },
] as const;
