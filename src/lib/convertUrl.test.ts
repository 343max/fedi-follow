import { describe, expect, test } from "bun:test";
import { extractMastodonHandle } from "./convertUrl";

describe("extractMastodonHandle", () => {
	test("bluesky profile url", () => {
		const handle = extractMastodonHandle("https://bsky.app/profile/343max.de");
		expect(handle).toEqual({ host: "bsky.brid.gy", handle: "343max.de" });
	});

	test("threads profile url", () => {
		const handle = extractMastodonHandle("https://www.threads.net/@anildash");
		expect(handle).toEqual({ host: "threads.net", handle: "anildash" });
	});

	test("random url", () => {
		const handle = extractMastodonHandle(
			"https://www.theverge.com/24295933/bluesky-social-network-custom-how-to",
		);
		expect(handle).toBeNull();
	});
});
