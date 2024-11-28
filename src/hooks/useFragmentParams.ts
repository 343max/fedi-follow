import { useEffect, useState } from "react";

export const useFragmentParams = (): Record<string, string> => {
	const [params, setParams] = useState<Record<string, string>>({});
	useEffect(() => {
		const listener = () => {
			const hash = document.location.hash;
			const params = new URLSearchParams(hash.slice(1));
			setParams(Object.fromEntries(params.entries()));
		};

		window.addEventListener("hashchange", listener);

		return () => {
			window.removeEventListener("hashchange", listener);
		};
	}, []);

	return params;
};
