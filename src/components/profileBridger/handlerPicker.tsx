import { mastodonApps } from "@app/lib/mastodonApps";
import { useEffect, useState } from "react";
import type { UseFormReturn } from "react-hook-form";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "../ui/select";
import type { FormSchema } from "./form";
import { InstanceInput } from "./instanceInput";

export const HandlerPicker: React.FC<{
	form: UseFormReturn<FormSchema>;
}> = ({ form }) => {
	const [handler, setHandler] = useState(form.getValues().handler);

	useEffect(() => {
		form.setValue("handler", handler);
	}, [handler, form.setValue]);

	const showInstanceInput = handler.kind === "webbrowser";

	return (
		<>
			<h2>Open Profile in...</h2>
			<Select
				value={handler.kind === "webbrowser" ? "webbrowser" : handler.app}
				required={true}
				onValueChange={(app) => {
					setHandler(
						app === "webbrowser"
							? { kind: "webbrowser", instance: "" }
							: {
									kind: "app",
									app: app,
								},
					);
				}}
			>
				<SelectTrigger>
					<SelectValue placeholder="Mastodon App" />
				</SelectTrigger>
				<SelectContent>
					<SelectItem value="webbrowser">Web Browser</SelectItem>
					{mastodonApps.map((app) => (
						<SelectItem key={app.id} value={app.id}>
							{app.name}
						</SelectItem>
					))}
				</SelectContent>
			</Select>
			{showInstanceInput && (
				<InstanceInput
					initialValue=""
					setValue={(v) =>
						form.setValue("handler", { kind: "webbrowser", instance: v })
					}
				/>
			)}
		</>
	);
};
