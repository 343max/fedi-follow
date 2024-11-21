import React from "react";
import "./App.css";
import { ProfileBridger } from "app/components/profileBridger";
import { Emoji } from "./emoji";

function App() {
	return (
		<div className="App dark:bg-zinc-900 bg-zinc-100">
			<Emoji />
			<ProfileBridger />
		</div>
	);
}

export default App;
