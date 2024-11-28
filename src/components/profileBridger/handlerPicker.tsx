import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { AppPicker } from "./appPicker";
import { InstancePicker } from "./instancePicker";

export const HandlerPicker = () => {
	return (
		<>
			<h2>Open Profile in...</h2>
			<Tabs defaultValue="instance">
				<TabsList className="grid w-full grid-cols-2">
					<TabsTrigger value="instance">Web Browser</TabsTrigger>
					<TabsTrigger value="app">App</TabsTrigger>
				</TabsList>
				<TabsContent value="instance">
					<InstancePicker />
				</TabsContent>
				<TabsContent value="app">
					<AppPicker />
				</TabsContent>
			</Tabs>
		</>
	);
};
