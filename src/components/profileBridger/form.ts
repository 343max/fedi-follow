import { extractMastodonHandle } from "@app/lib/convertUrl";
import { handlerSchema } from "@app/lib/handlerSchema";
import { z } from "zod";

export const formSchema = z
	.object({
		url: z.string().refine((s) => extractMastodonHandle(s) !== null, {
			message: "Not a Bluesky or Threads profile URL",
		}),
	})
	.extend({ handler: handlerSchema });

export type FormSchema = z.infer<typeof formSchema>;
