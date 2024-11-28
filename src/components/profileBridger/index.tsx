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
import { type HandlerSchema, handlerSchema } from "@app/lib/handlerSchema";
import { mastodonApps } from "@app/lib/mastodonApps";
import { useLocalStorage } from "@app/lib/useLocalStorage";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChevronsRight } from "lucide-react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Form } from "../ui/form";
import { type FormSchema, formSchema } from "./form";
import { HandlerPicker } from "./handlerPicker";
import { ProfileLinkInput } from "./profileLinkInput";

export const ProfileBridger = () => {
	const initialUrl = useFragmentParams().url;
	const handlerSettings = useLocalStorage("handlerSettings", handlerSchema, {
		kind: "webbrowser",
		instance: "",
	});

	const form = useForm<FormSchema>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			url: initialUrl ?? "",
			handler: handlerSettings.value,
		},
	});

	useEffect(() => {
		if (initialUrl) {
			form.setValue("url", initialUrl);
			form.trigger("url");
		}
	}, [initialUrl, form]);

	const onSubmit = form.handleSubmit((data) => {
		handlerSettings.saveValue(data.handler);

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
				const url = app.getUrl(handle);
				console.log(url);
				window.location.href = url;
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
				<div className="flex justify-end w-full pt-3">
					<Button disabled={!form.formState.isValid}>
						Visit Profile
						<ChevronsRight />
					</Button>
				</div>
			</form>
		</Form>
	);
};
