import * as React from "react";

import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ComboboxDemo } from "../instanceCombobox";
import { Button } from "../ui/button";

export const ProfileConverter = () => {
	const [instance, setInstance] = React.useState("");
	return (
		<Card className="w-[350px]">
			<CardHeader>
				<CardTitle>Follow on Mastodon</CardTitle>
				<CardDescription>
					Paste the Bluesky Profile link or the Threads profile you want to
					follow
				</CardDescription>
			</CardHeader>
			<CardContent>
				<form>
					<div className="grid w-full items-center gap-4">
						<div className="flex flex-col space-y-1.5">
							<Label htmlFor="name">Profile</Label>
							<Input
								id="name"
								placeholder="https://bsky.app/profile/343max.de"
							/>
						</div>
						<div className="flex flex-col space-y-1.5">
							<Label htmlFor="framework">Your Mastodon Instance</Label>
							<ComboboxDemo value={instance} setValue={setInstance} />
						</div>
					</div>
				</form>
			</CardContent>
			<CardFooter className="flex justify-between">
				<Button>Visit Profile</Button>
			</CardFooter>
		</Card>
	);
};
