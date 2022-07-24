import axios from 'axios';
import { useEffect, useState } from 'react';

const useFetch = <T>(url: string) => {
	const [responses, setResponses] = useState<T[] | null>();
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [isError, setIsError] = useState<boolean>(false);

	useEffect(() => {
		setIsLoading(true);
		axios
			.get(`${url}`)
			.then((resp) => {
				setIsLoading(false);
				setIsError(false);
				setResponses(resp.data);
			})
			.catch((err) => {
				setIsLoading(false);
				setIsError(true);
				setResponses(null);
			});
		return () => {};
	}, [url]);

	return [responses, isLoading, isError] as const;
};

export default useFetch;