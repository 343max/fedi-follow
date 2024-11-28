import { useCallback, useEffect, useState } from "react";

export const useFragmentParams = (): Record<string, string> => {
	const [params, setParams] = useState<Record<string, string>>({});

	const parseHash = useCallback(() => {
		const hash = document.location.hash;
		const params = new URLSearchParams(hash.slice(1));
		setParams(Object.fromEntries(params.entries()));
	}, []);

	useEffect(() => {
		parseHash();
	}, [parseHash]);

	useEffect(() => {
		window.addEventListener("hashchange", parseHash);

		return () => {
			window.removeEventListener("hashchange", parseHash);
		};
	}, [parseHash]);

	return params;
};
