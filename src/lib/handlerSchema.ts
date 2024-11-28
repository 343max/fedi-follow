import { z } from "zod";

export const handlerSchema = z.discriminatedUnion("kind", [
	z.object({
		kind: z.literal("webbrowser"),
		instance: z
			.string()
			.refine(
				(s) =>
					s.match(
						/^((?!-))(xn--)?[a-z0-9][a-z0-9-_]{0,61}[a-z0-9]{0,1}\.(xn--)?([a-z0-9\-]{1,61}|[a-z0-9-]{1,30}\.[a-z]{2,})$/,
					),
				{
					message: "Please enter the domain of your instance",
				},
			),
	}),
	z.object({
		kind: z.literal("app"),
		app: z.string(),
	}),
]);

export type HandlerSchema = z.infer<typeof handlerSchema>;
