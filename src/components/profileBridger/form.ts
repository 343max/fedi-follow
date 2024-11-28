import { extractMastodonHandle } from "@app/lib/convertUrl";
import { mastodonAppIdentifiers } from "@app/lib/mastodonApps";
import { z } from "zod";

const HandlerSchema = z.discriminatedUnion("handler", [
	z.object({ handler: z.literal("instance"), instance: z.string() }),
	z.object({
		handler: z.literal("app"),
		app: z.enum(mastodonAppIdentifiers),
	}),
]);

export const FormSchema = z
	.object({
		url: z.string().refine((s) => extractMastodonHandle(s) !== null, {
			message: "Not a Bluesky or Threads profile URL",
		}),
	})
	.extend({ handler: HandlerSchema });

export type FormModel = z.infer<typeof FormSchema>;
