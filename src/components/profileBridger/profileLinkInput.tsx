import { Input } from "@app/components/ui/input";
import { Label } from "@app/components/ui/label";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";

export const ProfileLinkInput: React.FC<{ initialUrl: string | undefined }> = ({
	initialUrl,
}) => {
	const [url, setUrl] = useState("");

	useEffect(() => {
		if (initialUrl !== undefined) setUrl(initialUrl);
	}, [initialUrl]);

	return (
		<div className="flex flex-col space-y-1.5 gap-2">
			<Label htmlFor="name">Profile Link</Label>
			<Input
				id="name"
				value={url}
				onChange={(e) => setUrl(e.target.value)}
				placeholder="https://bsky.app/profile/343max.de"
			/>
			<div className="flex justify-end">
				<Button>Check URL</Button>
			</div>
		</div>
	);
};
