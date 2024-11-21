import { Input } from "app/components/ui/input";
import { Label } from "app/components/ui/label";

export const ProfileLinkInput = () => {
	return (
		<div className="flex flex-col space-y-1.5">
			<Label htmlFor="name">Profile Link</Label>
			<Input id="name" placeholder="https://bsky.app/profile/343max.de" />
		</div>
	);
};
