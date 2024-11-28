export const appIdentifiers = ["mona", "icecubes"] as const;
type AppIdentifier = (typeof appIdentifiers)[number];

export const apps: readonly { id: AppIdentifier; name: string }[] = [
	{ id: "mona", name: "Mona" },
	{ id: "icecubes", name: "IceCubes" },
] as const;
