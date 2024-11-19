import * as React from "react";

import { Button } from "@/components/ui/button";
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { apps } from "@/lib/instance";
import { mastodonInstances } from "@/lib/mastodonInstances";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";

export const ProfileConverter = () => {
	const [instance, setInstance] = React.useState("");
	const instanceList = React.useMemo(
		() =>
			mastodonInstances
				.filter((i) => i.startsWith(instance) && i !== instance)
				.slice(0, 10),
		[instance],
	);
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
				<form>
					<div className="grid w-full items-center gap-4">
						<div className="flex flex-col space-y-1.5">
							<Label htmlFor="name">Profile</Label>
							<Input
								id="name"
								placeholder="https://bsky.app/profile/343max.de"
							/>
						</div>
						<Tabs defaultValue="instance">
							<TabsList className="grid w-full grid-cols-2">
								<TabsTrigger value="instance">Web</TabsTrigger>
								<TabsTrigger value="app">App</TabsTrigger>
							</TabsList>
							<TabsContent value="instance">
								<Card>
									<CardContent className="p-4">
										<div className="flex flex-col space-y-1.5">
											<Label htmlFor="framework">Your Mastodon Instance</Label>
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
										</div>
									</CardContent>
								</Card>
							</TabsContent>
							<TabsContent value="app">
								<Card className="p-4">
									<RadioGroup>
										{apps.map((app) => (
											<div key={app.id} className="flex items-center space-x-2">
												<RadioGroupItem value={app.id} id={app.id} />
												<Label htmlFor={app.id} className="cursor-pointer">
													{app.name}
												</Label>
											</div>
										))}
									</RadioGroup>
								</Card>
							</TabsContent>
						</Tabs>
					</div>
				</form>
			</CardContent>
			<CardFooter className="flex justify-end">
				<Button>Visit Profile</Button>
			</CardFooter>
		</Card>
	);
};
