import {
	type MastodonAppIdentifier,
	mastodonApps,
} from "@app/lib/mastodonApps";
import { useState } from "react";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "../ui/select";
import { InstanceInput } from "./instanceInput";

type HandlerInput =
	| { kind: "webbrowser"; instance: string }
	| { kind: "app"; app: MastodonAppIdentifier };

export const HandlerPicker = () => {
	const [handler, setHandler] = useState<HandlerInput>({
		kind: "webbrowser",
		instance: "",
	});

	const showInstanceInput = handler.kind === "webbrowser";

	return (
		<>
			<h2>Open Profile in...</h2>
			<Select
				value={handler.kind === "webbrowser" ? "webbrowser" : handler.app}
				required={true}
				onValueChange={(app) => {
					if (app === "webbrowser") {
						setHandler({ kind: "webbrowser", instance: "" });
					} else {
						setHandler({ kind: "app", app: app as MastodonAppIdentifier });
					}
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
			{showInstanceInput && <InstanceInput />}
		</>
	);
};
