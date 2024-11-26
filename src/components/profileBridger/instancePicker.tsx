import { mastodonInstances } from "app/lib/mastodonInstances";
import { useMemo, useState } from "preact/hooks";
import { Card, CardContent } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export const InstancePicker = () => {
	const [instance, setInstance] = useState("");
	const instanceList = useMemo(
		() =>
			mastodonInstances
				.filter((i) => i.startsWith(instance) && i !== instance)
				.slice(0, 10),
		[instance],
	);
	return (
		<Card>
			<CardContent className="p-4">
				<div className="flex flex-col space-y-1.5">
					<Label htmlFor="framework">Your Mastodon Instance</Label>
					<Input
						id="instance"
						list="instance-list"
						placeholder="mastodon.social"
						value={instance}
						onChange={(e) => setInstance(e.currentTarget.value)}
					/>
					<datalist id="instance-list">
						{instanceList.map((instance) => (
							<option key={instance} value={instance} />
						))}
					</datalist>
				</div>
			</CardContent>
		</Card>
	);
};
