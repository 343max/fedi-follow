import { extractMastodonHandle } from "@app/lib/convertUrl";
import { z } from "zod";

const handlerSchema = z.discriminatedUnion("kind", [
	z.object({ kind: z.literal("webbrowser"), instance: z.string() }),
	z.object({
		kind: z.literal("app"),
		app: z.string(),
	}),
]);

export type HandlerSchema = z.infer<typeof handlerSchema>;

export const formSchema = z
	.object({
		url: z.string().refine((s) => extractMastodonHandle(s) !== null, {
			message: "Not a Bluesky or Threads profile URL",
		}),
	})
	.extend({ handler: handlerSchema });

export type FormSchema = z.infer<typeof formSchema>;
