import * as React from "react";

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
import { ClientPicker } from "./clientPicker";
import { ProfileLinkInput } from "./profileLinkInput";

export const ProfileBridger = () => {
	const initialUrl = useFragmentParams().url;
	return (
		<Card className="w-[500px]">
			<CardHeader>
				<CardTitle>Follow on Mastodon</CardTitle>
				<CardDescription>
					Paste the Bluesky Profile link or the Threads profile you want to
					follow
				</CardDescription>
			</CardHeader>
			<CardContent>
				<div className="grid w-full items-center gap-4">
					<ProfileLinkInput initialUrl={initialUrl} />
					<ClientPicker />
				</div>
			</CardContent>
			<CardFooter className="flex justify-end">
				<Button>Visit Profile</Button>
			</CardFooter>
		</Card>
	);
};
