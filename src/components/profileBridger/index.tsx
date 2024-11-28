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
import { mastodonAppIdentifiers } from "@app/lib/mastodonApps";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Form } from "../ui/form";
import { type FormModel, FormSchema } from "./form";
import { HandlerPicker } from "./handlerPicker";
import { ProfileLinkInput } from "./profileLinkInput";

export const ProfileBridger = () => {
	const initialUrl = useFragmentParams().url;

	const form = useForm<FormModel>({
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
							<HandlerPicker />
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
