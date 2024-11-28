import { mastodonInstances } from "@app/lib/mastodonInstances";
import { TriangleAlert } from "lucide-react";
import type React from "react";
import { useEffect, useMemo, useState } from "react";
import { CardDescription } from "../ui/card";
import { Input } from "../ui/input";

export const InstanceInput: React.FC<{
	initialValue: string;
	setValue: (value: string) => void;
}> = ({ initialValue, setValue: setExternalValue }) => {
	const [value, setValue] = useState(initialValue);

	const instanceList = useMemo(
		() =>
			mastodonInstances
				.filter((i) => i.startsWith(value) && i !== value)
				.slice(0, 10),
		[value],
	);

	useEffect(() => {
		setExternalValue(value);
	}, [value, setExternalValue]);

	return (
		<>
			<Input
				id="instance"
				list="instance-list"
				placeholder="mastodon.social"
				value={value}
				onChange={(e) => setValue(e.target.value)}
				type="url"
			/>
			<datalist id="instance-list">
				{instanceList.map((instance) => (
					<option key={instance} value={instance} />
				))}
			</datalist>
			<CardDescription className="flex items-center gap-1 -80">
				<TriangleAlert />
				Make sure you are logged in!
			</CardDescription>
		</>
	);
};
