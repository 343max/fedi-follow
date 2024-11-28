import { ProfileBridger } from "@app/components/profileBridger";
import GithubIcon from "./assets/github.svg";
import ShortcutsIcon from "./assets/icons8-shortcuts-2.svg";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "./components/ui/card";

function App() {
	return (
		<div className="dark:bg-zinc-900 bg-zinc-100 p-3 h-[100vh] flex justify-center items-center">
			<Card className="max-w-[500px]">
				<CardHeader>
					<CardTitle>Follow on Mastodon</CardTitle>
					<CardDescription>
						Paste the Bluesky Profile link or the Threads profile you want to
						follow
					</CardDescription>
				</CardHeader>
				<CardContent>
					<ProfileBridger />
				</CardContent>
				<CardFooter className="flex-col gap-3">
					<div className="flex w-full justify-start">
						<a
							href="https://www.icloud.com/shortcuts/3aefc3ab30ce48679a54846748be8c01"
							className=" fill-zinc-800 dark:fill-zinc-100 flex items-center"
						>
							<ShortcutsIcon /> Apple Shortcuts share sheet action
						</a>
					</div>
					<div className="flex w-full justify-end">
						<a
							href="https://github.com/343max/fedi-follow/"
							className="w-6 fill-zinc-800 dark:fill-zinc-100"
						>
							<GithubIcon />
						</a>
					</div>
				</CardFooter>
			</Card>
		</div>
	);
}

export default App;
