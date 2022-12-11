import { writable } from 'svelte/store';
import { variables } from './variables';

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
	const response = await fetch(`${variables.apiBase}${apiPath}`);
	const responseData = await response.json();
	return responseData.data.attributes ?? responseData.data;
}
