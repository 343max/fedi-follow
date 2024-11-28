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
import { mastodonApps } from "@app/lib/mastodonApps";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Form } from "../ui/form";
import { type FormSchema, formSchema } from "./form";
import { HandlerPicker } from "./handlerPicker";
import { ProfileLinkInput } from "./profileLinkInput";

export const ProfileBridger = () => {
	const initialUrl = useFragmentParams().url;

	const form = useForm<FormSchema>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			url: initialUrl ?? "",
			handler: { kind: "webbrowser", instance: "" },
		},
	});

	useEffect(() => {
		if (initialUrl) {
			form.setValue("url", initialUrl);
		}
	}, [initialUrl, form.setValue]);

	const onSubmit = form.handleSubmit((data) => {
		const handle = extractMastodonHandle(data.url);
		if (!handle) {
			throw new Error("How did we get here?");
		}

		const handler = data.handler;
		if (handler.kind === "webbrowser") {
			window.location.href = `https://${handler.instance}/@${handle.user}@${handle.instance}`;
		} else {
			const app = mastodonApps.find((app) => app.id === handler.app);
			if (app) {
				window.location.href = app.getUrl(handle);
			} else {
				form.setValue("handler", {
					kind: "webbrowser",
					instance: "",
				});
			}
		}
	});

	return (
		<Form {...form}>
			<form onSubmit={onSubmit}>
				<div className="grid w-full items-center gap-4">
					<ProfileLinkInput form={form} />
					<HandlerPicker form={form} />
				</div>
				<Button>Visit Profile</Button>
			</form>
		</Form>
	);
};
