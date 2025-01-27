import { useEffect, useState } from 'react';

const localCache = {};

export const useFetch = (url) => {
	const [state, setState] = useState({
		data: null,
		isLoading: true,
		hasError: false,
		error: null,
	});

	const setLoadingState = () => {
		setState({
			data: null,
			isLoading: true,
			hasError: false,
			error: null,
		});
	};

	const fetchData = async (url) => {
		if (localCache[url]) {
			setState({
				data: localCache[url],
				isLoading: false,
				hasError: false,
				error: null,
			});
			return;
		};

		setLoadingState();
		const resp = await fetch(url);

		await new Promise((resolve) => setTimeout(resolve, 500));

		if (!resp.ok) {
			setState({
				data: null,
				isLoading: false,
				hasError: true,
				error: {
					status: resp.status,
					statusText: !resp.statusText ? 'Error' : resp.statusText,
				},
			});
		}

		const data = await resp.json();
		setState({
			data,
			isLoading: false,
			hasError: false,
			error: null,
		});

		localCache[url] = data;
	};

	useEffect(() => {
		fetchData(url);
	}, [url]);

	return {
		data: state.data,
		isLoading: state.isLoading,
		hasError: state.hasError,
	};
};
