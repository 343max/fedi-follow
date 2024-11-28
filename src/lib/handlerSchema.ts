import { z } from "zod";

export const handlerSchema = z.discriminatedUnion("kind", [
	z.object({ kind: z.literal("webbrowser"), instance: z.string() }),
	z.object({
		kind: z.literal("app"),
		app: z.string(),
	}),
]);

export type HandlerSchema = z.infer<typeof handlerSchema>;
