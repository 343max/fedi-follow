import * as React from "react";

import { Button } from "@app/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@app/components/ui/card";
import { useFragmentParams } from "@app/hooks/useFragmentParams";
import { extractMastodonHandle } from "@app/lib/convertUrl";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form } from "../ui/form";
import { ClientPicker } from "./clientPicker";
import { ProfileLinkInput } from "./profileLinkInput";

const FormSchema = z.object({
	url: z.string().refine((s) => extractMastodonHandle(s) !== null, {
		message: "Not a Bluesky or Threads profile URL",
	}),
});

export const ProfileBridger = () => {
	const initialUrl = useFragmentParams().url;

	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: { url: initialUrl ?? "" },
	});

	useEffect(() => {
		if (initialUrl) {
			form.setValue("url", initialUrl);
		}
	}, [initialUrl, form.setValue]);

	const onSubmit = form.handleSubmit((data) => {
		console.log(data);
	});

	return (
		<Form {...form}>
			<form onSubmit={onSubmit}>
				<Card className="w-[500px]">
					<CardHeader>
						<CardTitle>Follow on Mastodon</CardTitle>
						<CardDescription>
							Paste the Bluesky Profile link or the Threads profile you want to
							follow
						</CardDescription>
					</CardHeader>
					<CardContent>
						<div className="grid w-full items-center gap-4">
							<ProfileLinkInput form={form} />
							<ClientPicker />
						</div>
					</CardContent>
					<CardFooter className="flex justify-end">
						<Button>Visit Profile</Button>
					</CardFooter>
				</Card>
			</form>
		</Form>
	);
};
