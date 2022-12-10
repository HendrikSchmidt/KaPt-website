import { writable } from 'svelte/store';

function createTitle() {
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
