import * as React from "react";

import { Button } from "app/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "app/components/ui/card";
import { Input } from "app/components/ui/input";
import { Label } from "app/components/ui/label";
import { AnEmjoi } from "../anEmjoi";
import { ClientPicker } from "./clientPicker";

export const ProfileBridger = () => {
	const [step, setStep] = React.useState<"profileLink" | "pickInstance">(
		"profileLink",
	);
	return (
		<Card className="w-[500px]">
			<CardHeader>
				<CardTitle>
					<AnEmjoi /> Follow on Mastodon
				</CardTitle>
				<CardDescription>
					Paste the Bluesky Profile link or the Threads profile you want to
					follow
				</CardDescription>
			</CardHeader>
			<CardContent>
				<form>
					<div className="grid w-full items-center gap-4">
						<div className="flex flex-col space-y-1.5">
							<Label htmlFor="name">Profile Link</Label>
							<Input
								id="name"
								placeholder="https://bsky.app/profile/343max.de"
							/>
						</div>
						<ClientPicker />
					</div>
				</form>
			</CardContent>
			<CardFooter className="flex justify-end">
				<Button>Visit Profile</Button>
			</CardFooter>
		</Card>
	);
};
