import { useState } from "react";
import type { z } from "zod";

export const useLocalStorage = <S extends z.ZodSchema, T extends z.infer<S>>(
	key: string,
	schema: S,
	defaultValue: T,
): { value: T; saveValue: (value: T) => void } => {
	const [value, setValue] = useState<T>(() => {
		const value = localStorage.getItem(key);
		try {
			return schema.parse(JSON.parse(value ?? ""));
		} catch (e) {
			return defaultValue;
		}
	});

	const saveValue = (value: T) => {
		setValue(value);
		localStorage.setItem(key, JSON.stringify(value));
	};

	return { value, saveValue };
};
