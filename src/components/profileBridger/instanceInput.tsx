import { mastodonInstances } from "@app/lib/mastodonInstances";
import React from "react";
import { Card, CardContent } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export const InstanceInput = () => {
	const [instance, setInstance] = React.useState("");
	const instanceList = React.useMemo(
		() =>
			mastodonInstances
				.filter((i) => i.startsWith(instance) && i !== instance)
				.slice(0, 10),
		[instance],
	);
	return (
		<>
			<Input
				id="instance"
				list="instance-list"
				placeholder="mastodon.social"
				value={instance}
				onChange={(e) => setInstance(e.target.value)}
			/>
			<datalist id="instance-list">
				{instanceList.map((instance) => (
					<option key={instance} value={instance} />
				))}
			</datalist>
		</>
	);
};
