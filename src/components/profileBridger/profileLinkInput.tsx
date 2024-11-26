import { Input } from "@app/components/ui/input";
import type { UseFormReturn } from "react-hook-form";
import {
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "../ui/form";

export const ProfileLinkInput: React.FC<{
	form: UseFormReturn<{ url: string }>;
}> = ({ form }) => {
	return (
		<FormField
			control={form.control}
			name="url"
			render={({ field }) => (
				<FormItem>
					<FormLabel>Profile Link</FormLabel>
					<FormControl>
						<Input
							placeholder="https://bsky.app/profile/343max.de"
							{...field}
						/>
					</FormControl>
					<FormMessage />
				</FormItem>
			)}
		/>
	);
};
