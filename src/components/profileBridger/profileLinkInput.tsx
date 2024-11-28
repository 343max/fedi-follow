import { Input } from "@app/components/ui/input";
import { Clipboard } from "lucide-react";
import type { UseFormReturn } from "react-hook-form";
import { Button } from "../ui/button";
import {
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "../ui/form";
import type { FormSchema } from "./form";

export const ProfileLinkInput: React.FC<{
	form: UseFormReturn<FormSchema>;
}> = ({ form }) => {
	return (
		<FormField
			control={form.control}
			name="url"
			render={({ field }) => (
				<FormItem>
					<FormLabel>Profile Link</FormLabel>
					<div className="flex flex-row items-center gap-1">
						<FormControl>
							<Input
								placeholder="https://bsky.app/profile/343max.de"
								{...field}
							/>
						</FormControl>
						<Button
							variant="outline"
							size="sm"
							type="button"
							onClick={async () => {
								const clipboard = await navigator.clipboard.readText();
								field.onChange(clipboard);
							}}
						>
							<Clipboard />
						</Button>
					</div>
					<FormMessage />
				</FormItem>
			)}
		/>
	);
};
