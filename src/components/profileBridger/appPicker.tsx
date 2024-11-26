import { apps } from "@app/lib/instance";
import { Card } from "../ui/card";
import { Label } from "../ui/label";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";

export const AppPicker = () => {
	return (
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
	);
};
