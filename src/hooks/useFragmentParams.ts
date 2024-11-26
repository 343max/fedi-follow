import { useEffect, useState } from "react";

export const useFragmentParams = (): Record<string, string> => {
	const [params, setParams] = useState<Record<string, string>>({});
	const hash = document.location.hash;
	useEffect(() => {
		const params = new URLSearchParams(hash.slice(1));
		setParams(Object.fromEntries(params.entries()));
	}, [hash]);

	return params;
};
