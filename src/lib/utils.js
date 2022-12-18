import { writable } from 'svelte/store';

const apiBase = 'https://kapt-cms-production.up.railway.app/api';

const createTitle = () => {
	const { subscribe, set } = writable('');

	return {
		subscribe,
		set: (value) => {
			set(`${value} • KaPt`);
		},
		clear: () => {
			set('KaPt');
		},
	};
}

export const title = createTitle();

export async function loadDataFromApi(fetch, apiPath) {
	const response = await fetch(`${apiBase}${apiPath}`);
	const responseData = await response.json();
	return responseData.data.attributes ?? responseData.data;
};

export const markdownOptions = {
	breaks: true,
};
